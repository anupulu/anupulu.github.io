const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true
  } : {
    // Development settings
    images: { unoptimized: false }
  }),
  // Add content directory to webpack watch paths
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['!**/content/**']
    }
    return config
  },
  // Ensure pages are properly handled
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
}

module.exports = withContentlayer(nextConfig)