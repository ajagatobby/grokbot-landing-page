// The launch trailer is ~50 MiB, over the 25 MiB static-asset limit, so it lives in
// R2 and is streamed from here; every other path is served from the asset bundle.

interface Env {
  MEDIA: R2Bucket
  ASSETS: Fetcher
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === "/media/launch-trailer.mp4") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method not allowed", { status: 405 })
      }

      const object = await env.MEDIA.get("media/launch-trailer.mp4", {
        range: request.headers,
        onlyIf: request.headers,
      })
      if (!object) return new Response("Not found", { status: 404 })

      const headers = new Headers()
      object.writeHttpMetadata(headers)
      headers.set("etag", object.httpEtag)
      headers.set("accept-ranges", "bytes")
      headers.set("cache-control", "public, max-age=31536000, immutable")
      if (object.range && "offset" in object.range) {
        const offset = object.range.offset ?? 0
        const length = object.range.length ?? object.size - offset
        headers.set("content-range", `bytes ${offset}-${offset + length - 1}/${object.size}`)
      }

      const body = "body" in object ? object.body : null
      const status = body ? (request.headers.has("range") ? 206 : 200) : 304
      return new Response(request.method === "HEAD" ? null : body, { status, headers })
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
