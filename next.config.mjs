/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove restrições de origem para o desenvolvimento local
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '10.65.81.83:3000'],
    },
  },
};

export default nextConfig;