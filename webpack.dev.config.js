// Dependencias
const path = require('path');

module.exports = {
  // Configuramos el entry point del proyecto
  entry: {
    "home": path.resolve(__dirname, 'index.js')
  },
  
  // Configuramos la salida del proyecto
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  
  // Especificamos el puerto del servidor web
  devServer: {
    port: 9000,
  },
  
  // eval-source-map nos ayuda a debuggear en el navegador vía source maps
  devtool: 'eval-source-map',
  module: {
    rules: [

      // Transpilamos Javascript con el loader de babel y algunos de sus presets
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      // Procesamos estilos CSS con el style loader y css loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}
