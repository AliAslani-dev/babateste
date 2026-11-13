// next.config.js
/** @type {import('next').NextConfig} */
const withSerwist = require("@serwist/next").default({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  // ✅ در production فعال، در development غیرفعال
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: true,
  cacheOnNavigation: true,
  register: true,
});

const nextConfig = {
  reactStrictMode: true,

  // برای production build سالید
  output: "standalone",

  // disable source maps در production
  productionBrowserSourceMaps: false,

  //  دامنه‌های مجاز برای next/image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
      {
        protocol: "http", 
        hostname: "**",
      },
    ],
  },

  // هدرهای امنیتی + cache
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },

      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = withSerwist(nextConfig);
