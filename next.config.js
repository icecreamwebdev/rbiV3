/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['instagram.fgla3-2.fna.fbcdn.net', 'instagram.fgla3-1.fna.fbcdn.net','www.instagram.fgla3-2.fna.fbcdn.net', 'www.instagram.fgla3-1.fna.fbcdn.net', 'https://instagram.fgla3-2.fna.fbcdn.net', 'https://instagram.fgla3-1.fna.fbcdn.net'],
//   },
  
// }

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.cdninstagram.com', 'instagram.fgla3-1.fna.fbcdn.net','www.instagram.fgla3-2.fna.fbcdn.net', 'www.instagram.fgla3-1.fna.fbcdn.net', 'https://instagram.fgla3-2.fna.fbcdn.net', 'https://instagram.fgla3-1.fna.fbcdn.net','https://instagram.fgla3-2.fna.fbcdn.net/','instagram.fgla3-2.fna.fbcdn.net/'],
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      tls: false,
    };

    return config;
  },
};