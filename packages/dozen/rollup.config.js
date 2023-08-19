import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import livereload from 'rollup-plugin-livereload';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import reactSvg from 'rollup-plugin-react-svg';
import terser from '@rollup/plugin-terser';
import analyzer from 'rollup-plugin-analyzer';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import copy from 'rollup-plugin-copy';

const rollupConfig = {
  input: 'src/index.ts', // tu punto de entrada
  output: [
    {
      file: 'lib/index.cjs.js', // salida para CommonJS
      format: 'cjs',
    },
    {
      file: 'lib/index.esm.js', // salida para ES Modules
      format: 'es',
    },
    {
      file: 'lib/index.umd.js', // salida para UMD (Universal Module Definition)
      format: 'umd',
      name: 'dozen', // nombre global para UMD (reemplaza con el nombre de tu librería)
    },
    {
      file: 'lib/index.iife.js', // salida para IIFE (Immediately Invoked Function Expression)
      format: 'iife',
      name: 'dozen', // nombre global para IIFE (reemplaza con el nombre de tu librería)
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), // Ayuda a Rollup a encontrar módulos externos
    reactSvg(),
    json(), // Permite importar archivos JSON
    image(), // Permite importar archivos png, jpg, etc
    postcss({
      extensions: ['.scss'], // Añade otras extensiones si es necesario
      extract: true,
      minimize: true, // Minimiza el CSS si es para producción
      sourceMap: true, // Si deseas mapas de fuente
      use: [
        [
          'sass',
          {
            includePaths: ['./node_modules', './src/*'],
          },
        ],
      ],
      plugins: [postcssPresetEnv(), autoprefixer(), cssnano()], // Puedes agregar plugins de PostCSS aquí si los necesitas
    }),
    copy({
      targets: [{ src: 'src/atomic/**/*', dest: 'lib/atomic' }],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    commonjs({
      include: 'node_modules/**',
    }), // Convierte módulos CommonJS a ES6
    livereload(),
    terser(), // Minifica tu código para producción
    analyzer(), // Muestra un análisis de tu bundle
  ],
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react-is',
    'react-redux',
  ],
};

export default rollupConfig;
