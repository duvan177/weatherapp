/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.weatherapi.com'] },
  headers: async () => {  
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: '*',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
