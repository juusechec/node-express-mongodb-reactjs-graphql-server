const config = {
  bioEndpoint: process.env.BIO_ENDPOINT || 'https://bio.torre.co/api/bios',
  torreSearchEndpoint: process.env.TORRE_SEARCH_ENDPOINT || 'https://search.torre.co',
  extractEndpoint: process.env.EXTRACT_ENDPOINT || 'https://monkeylearn.com/word-cloud/api/extract/',
  monkeylearnToken: process.env.MONKEY_LEARN_TOKEN || 'Configure Secret Token!',
};
export default config;