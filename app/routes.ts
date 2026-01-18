import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("meta.json", "routes/meta.json.ts"),
  route("auth", "routes/auth.tsx"),
] satisfies RouteConfig;
