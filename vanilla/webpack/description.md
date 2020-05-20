# Description

## Webpack configurations and plugins

1. Webpack is a build tool for asset bundling and dependency management.
1. Webpack can be configured by a config file.
1. Plugins modify and extend the webpack build process.
1. Loaders instruct webpack how to handle different file types.
1. The clean-webpack-plugin can be used to remove old build artifacts from the dist directory.
1. The html-webpack-plugin helps manage the HTML file, including injecting JavaScript into the file via script tags.
1. webpack-dev-server creates a dev server to make local development easier.
1. It's helpful to have separate webpack configs for development and production. You can share and merge config files using the webpack-merge plugin.
1. We can handle styling our app by including loaders like css-loader, style-loader, sass-loader, less-loader, and the mini-css-extract-plugin (which functions as both a plugin and a loader).
1. We can include new JavaScript syntax and features by using Babel and babel-loader.
1. We can include content hashes in our file names to help with cache busting and managing new versions of our released code.
1. We can minify our CSS with the optimize-css-assets-webpack-plugin.
1. We can minify our JavaScript with the terser-webpack-plugin.
1. file-loader used for loading assets. Added asset rules for images and html