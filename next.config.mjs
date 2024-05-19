/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r-xx.bstatic.com",
        port: "",
        pathname: "/data/airlines_logo/**",
      },
    ],
  },
};

export default nextConfig;
