const path = require('path')

module.exports = {
    egg: true,
    framework: 'react',
    // devtool: 'source-map',
    entry: {
        'bootstrap': 'app/web/page/bootstrap/index.jsx',
        'layout': 'app/web/framework/layout/layout.jsx'
    },
    alias: {
        asset: 'app/web/asset',
        component: 'app/web/component',
        framework: 'app/web/framework',
        store: 'app/web/store'
    },
    dll: ['react', 'react-dom'],
    loaders: {},
    plugins: {
        uglifyJs: {
            'enable': true,
            'env': ['prod'],
            'args': {
                'uglifyOptions': {
                    'mangle': { reserved: ['ECPair'] }
                }
            }
        }
    },
    resolve: {
        alias: {
            app: path.resolve('./app'),
            web: path.resolve('./app/web'),
            controller: path.resolve('./app/controller'),
            service: path.resolve('./app/service'),
            middleware: path.resolve('./app/middleware'),
            libs: path.resolve('./app/libs'),
            page: path.resolve('./app/web/page'),
            store: path.resolve('./app/web/store'),
            component: path.resolve('./app/web/component'),
            asset: path.resolve('./app/web/asset'),
            styles: path.resolve('./app/web/asset/styles')
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    done() {
        console.log('---webpack compile finish---')
    }
}
