
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['mdbcdn.b-cdn.net','lh3.googleusercontent.com', 'ecommerce-systems.s3.amazonaws.com', 'swiperjs.com', 'tecdn.b-cdn.net'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    },
  }
  
  export default nextConfig;