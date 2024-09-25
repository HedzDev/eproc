/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pull-in.com",
        port: "",
        pathname: "/media/catalog/**",
      },
      {
        protocol: "https",
        hostname: "**.jules.com",
      },
      {
        protocol: "https",
        hostname: "**.okumak.fr",
      },
    ],
  },
};

export default nextConfig;
