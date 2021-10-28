const config = {
  publicPath: "./",
  configureWebpack: { 
    output: {
      libraryExport: 'default'
    }
  }
}

if (process.env.NODE_ENV === "production") {
   publicPath: process.env.NODE_ENV === 'production' 
   ? '/suconme/'
   : '/'
  config.configureWebpack.externals = {
    sortablejs: {
      commonjs: "sortablejs",
      commonjs2: "sortablejs",
      amd: "sortablejs",
      root: "Sortable"
    }
  };
};

module.exports = config;

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
    
// }