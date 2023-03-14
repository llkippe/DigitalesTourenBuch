const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'raspberrypi',
    user: 'luca',
    password: 'luHmN!Lu!bD2004',
    database: 'Touren'
});

async function main() {
    try {
        let conn = await pool.getConnection();
        let rows = await conn.query("SELECT * FROM skitouren");
        console.log(rows);
    }catch(err) {

    }
}

main();