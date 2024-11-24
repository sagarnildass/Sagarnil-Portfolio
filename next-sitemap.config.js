/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sagarnildas.com/",
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [
      "/api/*",
    //   "/server-sitemap.xml",
    ],
  
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
        {
          userAgent: "*",
          disallow: [
            "/api/*",
          ],
        },
      ],
    //   additionalSitemaps: [
    //     `${process.env.SITE_URL}/server-sitemap.xml`, // Specify the URL to your dynamic sitemap
    //   ],
    },
  };
  