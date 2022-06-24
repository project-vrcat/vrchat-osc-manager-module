import * as esbuild from "https://deno.land/x/esbuild@v0.14.36/mod.js";

const p = Deno.run({
  cmd: ["deno", "bundle", "mod.ts"],
  stdout: "piped",
});

const code = new TextDecoder().decode(await p.output());
const result = await esbuild.transform(code, { loader: "js", minify: true });
Deno.writeFileSync("dist/mod.bundle.js", new TextEncoder().encode(result.code));
esbuild.stop();
