// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const connection = require('../database/database')

const login = async (req, res) => {
   const db = await connection()
   try{
      //check student id
      const student_id = req.body.student_id
      //check password 
      const passworD = req.body.password

      const [student] = await db.query(`SELECT * FROM student WHERE student_id = ?`,[student_id])
      if(student){
        //password database
        const password = student[0].password

        if(passworD == password){
          return res.json(student)
        }else{
          return res.json('password not correct!')
        }
      }else{
        return res.json({message:'no data'})
      }
   }
   catch(err){
      return res.json({error:err})
   }
  };

  module.exports = { login };