const config = {
  bioEndpoint: process.env.BIO_ENDPOINT || 'https://bio.torre.co/api/bios',
  torreSearchEndpoint: process.env.TORRE_SEARCH_ENDPOINT || 'https://search.torre.co',
  extractEndpoint: process.env.EXTRACT_ENDPOINT || 'https://monkeylearn.com/word-cloud/api/extract/',
  monkeylearnToken: process.env.MONKEY_LEARN_TOKEN || 'Configure Public Use Token!',
  mongoHost: process.env.MONGO_HOST,
  mongoUsername: process.env.MONGO_USERNAME,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoPort: process.env.MONGO_PORT,
  mongoDb: process.env.MONGO_DB,
};

module.exports = config;
