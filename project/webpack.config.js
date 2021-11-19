const path = require( 'path' );

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};