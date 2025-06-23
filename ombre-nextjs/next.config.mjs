/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: false, // ⛔ Turn off minification
};


export default nextConfig
