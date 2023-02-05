module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
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
