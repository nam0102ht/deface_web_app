const redis = require("redis");
const client = redis.createClient({
  port: 6379,
  host: "localhost",
});

module.exports = {
  client,
};
