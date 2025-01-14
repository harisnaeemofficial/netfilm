/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: { domains: ["images.weserv.nl", "img.rrmj.tv", "img.netpop.app", "img.rr.tv"] },
  devtool: 'eval-source-map',
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://netfilm-kohl.vercel.app" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
