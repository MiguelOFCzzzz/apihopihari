const mysql = require ("../mysql");


exports.entrarFila = async (req,res,next) => {

    try{
        const resultados = await mysql.execute(`
            INSERT INTO lines (id_user, id_rides) VALUES(?,?)
            `,[res.locais.idUsuario,req.params.idRide]);
    } catch (error) {
        return res.status(500).send(error)
    }
}