import { build, emptyDir } from "https://deno.land/x/dnt@0.26.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
    webSocket: true,
  },
  packageManager: "pnpm",
  package: {
    name: "vrchat-osc-manager",
    version: Deno.args[0],
    description: "vrchat-osc-manager module for node.js",
    license: "MIT",
    author: {
      name: "Gizmo",
      url: "https://github.com/GizmoOAO",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/project-vrcat/vrchat-osc-manager-module.git",
    },
    bugs: {
      url: "https://github.com/project-vrcat/vrchat-osc-manager-module/issues",
    },
  },
});
