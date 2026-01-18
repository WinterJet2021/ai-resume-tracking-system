import type { Route } from "./+types/meta.json";

export function loader(_: Route.LoaderArgs) {
  return Response.json({
    name: "AI Resume Tracking System",
    description: "Smart feedback for your dream job!",
  });
}
