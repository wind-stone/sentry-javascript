import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'esm',
    format: 'esm',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ declaration: false, declarationMap: false, inlineSources: false, sourceMap: false }),
  ],
};
