/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/kawojue/image/upload/v1685891779/Signal%20Copier/**',
            },
        ],
    },
}

module.exports = nextConfig
