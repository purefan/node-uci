import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['child_process', 'path', 'os', 'events', 'tty', 'util'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      nodeResolve(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
      commonjs({
        include: 'node_modules/**',
      }),
    ],
  },
]
