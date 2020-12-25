import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    plugins: [
      nodeResolve(),
      commonjs({
        exclude: '/node_modules/'
      }),
      typescript({
        declaration: true,
        outDir: 'esm',
        declarationDir: 'esm'
      })
    ],
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    preserveModules: false,
    output: {
      dir: 'esm',
      format: 'esm'
    }
  },
  {
    plugins: [
      nodeResolve(),
      commonjs({
        exclude: '/node_modules/'
      }),
      typescript({
        declaration: true,
        outDir: 'lib',
        declarationDir: 'lib'
      })
    ],
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: {
      exports: 'named',
      dir: 'lib',
      format: 'cjs'
    }
  }
]
