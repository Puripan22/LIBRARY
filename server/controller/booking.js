const connection = require('../database/database')

const start_booking = async(req,res)=>{
    const db = await connection()
    try{
        const {student_id,isbn,start_date} = req.body
        
    }catch(err){
        console.log(err)
    }
}

module.exports = {start_booking}