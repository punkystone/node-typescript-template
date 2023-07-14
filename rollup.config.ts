import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "./index.ts",
  output: {
    file: "build/index.js",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    nodeResolve({
      preferBuiltins: true,
    }),
    swc(
      defineRollupSwcOption({
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: false,
            decorators: false,
            dynamicImport: true,
          },
          minify: {
            compress: true,
            mangle: true,
            format: {
              comments: false,
            },
          },
        },
        minify: true,
      }),
    ),
  ],
};
