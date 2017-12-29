module.exports = {
  // also rollups `sourcemap` option is replaced by gulp-sourcemaps plugin
  output: {
    format: 'umd',
    moduleName: 'lib.vue',
    file: "dist/out.umd.js",
    treeshake: true,
    globals: {
      'vue': 'Vue'
    }
  }
}