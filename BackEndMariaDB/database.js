const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root', //root   ||   luca
    password: 'maHmN!Lu!bD2004', //maHmN!Lu!bD2004 ||| lucaPasswort
    database: 'touren'
});

async function getSkitouren() {
    try{
        let con = await pool.getConnection();
        let res = await con.query("SELECT * FROM skitouren");
        console.log("/skitouren");
        con.end();
        return res;
    }catch (error){
        console.log(error);
    }
}

async function getSkitour(id) {
    try{
        let con = await pool.getConnection();
        let res = await con.query(`SELECT * FROM skitouren WHERE id = ${id}`);
        console.log(`/skitouren/${id}`);
        con.end();
        return res;
    }catch (error){
        console.log(error);
    }
}

async function insertSkitour(skitour) {
    try{
        let con = await pool.getConnection();
        skitour.id = 3;
        skitour.berghoehe = skitour.berghoehe.slice(0,-1);
        console.log(skitour);
        let res = await con.query(`INSERT INTO skitouren VALUES(${skitour.id},'${skitour.bergname}',${skitour.berghoehe},'${skitour.datum}','${skitour.personen}','${skitour.beschreibung}')`);
        console.log("added: " + skitour);
        con.end();
        return res;
    }catch (error){
        console.log(error);
    }
}


module.exports = {
    getSkitouren : getSkitouren,
    getSkitour : getSkitour,
    insertSkitour : insertSkitour
}