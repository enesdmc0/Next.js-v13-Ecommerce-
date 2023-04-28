/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns:  [
      {protocol: "https", hostname: "static.nike.com"},
      {protocol: "https", hostname: "aknbarcin.b-cdn.net"},
      {protocol: "https", hostname: "fakestoreapi.com"},
    ]
  }
}

module.exports = nextConfig
