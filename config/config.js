//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://llzimcqm:aTlsytFOFt-_69u0Wo4JQqNedg-MY4TN@babar.db.elephantsql.com/llzimcqm',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
