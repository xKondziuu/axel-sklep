/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    unoptimized: true
  },
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
