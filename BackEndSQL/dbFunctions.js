const config = require('./tourenDBconfig');
const sql = require('mssql');


async function getSkitouren() {
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM Skitouren");
        return res.recordsets;
    }catch (error){
        console.log(error);
    }
}

async function getSkitour(id) {
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query(`SELECT * FROM Skitouren WHERE id = ${id}`);
        return res.recordsets;
    }catch (error){
        console.log(error);
    }
}

async function insertSkitour(skitour) {
    try{
        let pool = await sql.connect(config);
        //let res = await pool.request().query(`INSERT INTO Skitouren VALUES(${skitour.id},${skitour.Bergname},${skitour.Berghoehe},${skitour.Datum},${skitour.Personen},${skitour.Beschreibung}`);
        let res = await pool.request().query(`INSERT INTO Skitouren VALUES(${skitour.Id},'${skitour.Bergname}',${skitour.Berghoehe},'${skitour.Datum}','${skitour.Personen}','${skitour.Beschreibung}')`);
    }catch (error){
        console.log(error);
    }
}

module.exports = {
    getSkitouren : getSkitouren,
    getSkitour : getSkitour,
    insertSkitour : insertSkitour
}