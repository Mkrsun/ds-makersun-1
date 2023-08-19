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
  output: {
    dir: 'lib',
    format: 'es', // o 'es' si prefieres ES modules
  },
  plugins: [
    peerDepsExternal(),
    resolve(), // Ayuda a Rollup a encontrar módulos externos
    reactSvg(),
    json(), // Permite importar archivos JSON
    image(), // Permite importar archivos png, jpg, etc
    postcss({
      extensions: ['.css', '.scss'], // Añade otras extensiones si es necesario
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
      targets: [
        {
          src: 'src/atomic/**/*.png',
          dest: 'lib',
          rename: (name, extension, fullPath) => {
            // Removemos el prefijo "src/" y retornamos la ruta relativa
            return fullPath.replace(/^src\//, '');
          },
        },
        {
          src: 'src/atomic/**/*.scss',
          dest: 'lib',
          rename: (name, extension, fullPath) => {
            // Removemos el prefijo "src/" y retornamos la ruta relativa
            return fullPath.replace(/^src\//, '');
          },
        },
      ],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    livereload(),
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
