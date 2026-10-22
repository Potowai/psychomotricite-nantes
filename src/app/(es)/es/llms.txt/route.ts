import { buildLlms } from "@/lib/llms";

export function GET() {
  return new Response(buildLlms("es"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
