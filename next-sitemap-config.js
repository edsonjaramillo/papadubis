module.exports = {
  siteUrl: 'https://website.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
      },
      { userAgent: '*', allow: '/' },
    ],
  },
};
