// Dependencias
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  /**
   * Almacenamos el array de plugins en una variable
   * Con ExtractTextPlugin de los CSS Modules vamos a generar un solo archivo CSS
   */
  const plugins = [
    new ExtractTextPlugin("css/[name].css")
  ]

  /**
   * En caso de estar en modo producción añadimos CleanWebpackPlugin al array de plugins
   * Con CleanWebpackPlugin al ejecutar webpack vamos a vaciar dist y crearlo nuevamente 
   */ 
  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    // Configuramos el entry point del proyecto
    entry: {
      "home": path.resolve(__dirname, 'index.js')
    },

    // Configuramos la salida del proyecto en la carpeta dist para distribución
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },

    // Especificamos el puerto del servidor web
    devServer: {
      port: 9000,
    },
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

        // Procesamos estilos CSS y los comprimimos
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
      ]
    },
    
    // Corremos la variable plugins que contiene nuestro array
    plugins
  }
}
