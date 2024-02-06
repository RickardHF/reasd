const conf = require('./config.json');

const en = require('./en.json');
const es = require('./es.json');

module.exports = {
    default: conf.default,
    languages: conf.languages,
    messages: {
        "en": en,
        "es": es
    }
};