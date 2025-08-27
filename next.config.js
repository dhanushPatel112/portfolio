/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
};
