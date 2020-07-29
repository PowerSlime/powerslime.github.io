require("dotenv").config();

const nextConfig = {
    assetPrefix: process.env.BASE_PATH,
    basePath: process.env.BASE_PATH,
    target: "serverless",
    poweredByHeader: false,
    generateEtags: false,
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitWarning: true,
                },
            });
        }

        return config;
    },
    env: {
        BASE_PATH: process.env.BASE_PATH,
    },
};

module.exports = nextConfig;
