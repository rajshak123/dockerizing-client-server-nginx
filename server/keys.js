module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  // pgUser: process.env.PGUSER,
  // MONGOHOST: process.env.MONGOHOST,
  // MDATABASE: process.env.MDATABASE,
  // pgPassword: process.env.PGPASSWORD,
  // MPORT: process.env.MPORT,
  MONGOHOST: process.env.MONGOHOST||'klkl:klkl96@ds149365.mlab.com:49365/songs',
  MPORT: process.env.MPORT||'27017',
};
