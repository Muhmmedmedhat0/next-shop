/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'components'),
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
    loader: "custom",
  },
};



module.exports = nextConfig;
