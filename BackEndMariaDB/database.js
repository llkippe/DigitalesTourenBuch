const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root', //luca
    password: 'maHmN!Lu!bD2004', //lucaPasswort
    database: 'touren'
});

async function getSkitouren() {
    try{
        let con = await pool.getConnection();
        let res = await con.query("SELECT * FROM skitouren");
        return res;
    }catch (error){
        console.log(error);
    }
}

async function getSkitour(id) {
    try{
        let con = await pool.getConnection();
        let res = await con.query(`SELECT * FROM skitouren WHERE id = ${id}`);
        return res;
    }catch (error){
        console.log(error);
    }
}

async function insertSkitour(skitour) {
    try{
        let con = await pool.getConnection();
        let res = await con.query(`INSERT INTO Skitouren VALUES(${skitour.Id},'${skitour.Bergname}',${skitour.Berghoehe},'${skitour.Datum}','${skitour.Personen}','${skitour.Beschreibung}')`);
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