import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/project-rms.html", destination: "/project-rms" },
      { source: "/project-ecommerce.html", destination: "/project-ecommerce" },
      { source: "/project-ams.html", destination: "/project-ams" },
      { source: "/project-art-gallery.html", destination: "/project-art-gallery" },
    ];
  },
};

export default nextConfig;
