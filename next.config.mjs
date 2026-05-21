/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/en/about", permanent: false },
      { source: "/contact", destination: "/en/contact", permanent: false },
      { source: "/service", destination: "/en/service", permanent: false },
      { source: "/case", destination: "/en/case", permanent: false },
      { source: "/faq", destination: "/en/faq", permanent: false },
      {
        source: "/service-details/:slug",
        destination: "/en/service-details/:slug",
        permanent: false,
      },
      {
        source: "/case-details/:slug",
        destination: "/en/case-details/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
