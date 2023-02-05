module.exports = {
    "type": "postgres",
    "url": 'postgress://FOX_ANIMA:je11071999@fox-anima-db.cfmsvjxqs5d0.us-east-1.rds.amazonaws.com/anima',
    "migrations": ['./dist/database/migrations/*.js'],
    "entities": ['./dist/modules/**/entities/*.js'],
    "cli": {
        "migrationsDir": './src/database/migrations'
    },
    // "migrations": [process.env.MIGRATIONS_LOCATION],
    // "entities": [process.env.ENTITIES_LOCATION],
    // "cli": {
    //     "migrationsDir": process.env.MIGRATIONS_DIR
    // },
    // "ssl": false,
    // "extra": {
    //     "ssl": {
    //         "rejectUnauthorized": false
    //     }
    // }
}
