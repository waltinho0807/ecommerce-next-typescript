/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "images.unsplash.com"},
            {hostname: "media.istockphoto.com"},
            {hostname: "lh3.googleusercontent.com"}
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
