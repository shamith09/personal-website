/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Shamith_Pasula_resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
