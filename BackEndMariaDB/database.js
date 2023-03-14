const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'maHmN!Lu!bD2004',
    database: 'touren'
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