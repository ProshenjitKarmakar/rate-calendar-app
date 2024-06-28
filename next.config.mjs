/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/public-view",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/slf-media/**",
      },
    ],
  },
};

export default nextConfig;
