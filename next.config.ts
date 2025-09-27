// next.config.js
/** @type {import('next').NextConfig}; */
const nextConfig = {
  images: {
    domains: [
      'www.svgrepo.com',
      'upload.wikimedia.org',
      'wagmi.sh',
      'icon.icepanel.io',
      'cdn-icons-png.flaticon.com',
      'cdn.worldvectorlogo.com',
      'https://encrypted-tbn0.gstatic.com',   // your CDN
      'images.unsplash.com', // if you test with Unsplash
      'ipfs.io',       // Web3 storage
      'raw.githubusercontent.com' // GitHub hosted images
    ],
    formats: ['image/avif', 'image/webp'], // ✅ faster formats
  },
};

module.exports = nextConfig;
