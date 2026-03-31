import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // allowedDevOrigins: [
    //     '192.168.1.*',      // Cho phép mọi IP 192.168.1.x
    //     '192.168.*.*',      // Cho phép mọi IP 192.168.x.x
    //     '10.*.*.*',         // Cho phép mạng 10.x.x.x
    //     '172.*.*.*',        // Cho phép mạng 172.x.x.x
    //     'localhost',
    //     '127.0.0.1',
    //     '*.local',
    // ],
    output: 'export',  // Export static HTML
    distDir: 'out',     // Output to out folder

    // Bỏ qua lỗi image optimization khi export
    images: {
        unoptimized: true,
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
};

export default nextConfig;