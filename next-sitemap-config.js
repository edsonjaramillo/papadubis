module.exports = {
  siteUrl: 'https://papadubis.vercel.app/',
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
