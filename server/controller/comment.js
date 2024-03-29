const connection = require('../database/database');

const getComment = async (req, res) => {
    const db = await connection();
    try {
        const { book_id } = req.body;

        // Use parameterized query to prevent SQL injection
        const [commentList] = await db.query(`
            SELECT 
                booking.book_id, 
                booking.student_id,
                student.name, 
                book_ratings.rating, 
                book_comments.comment,
                book_comments.comment_timestamp
            FROM 
                booking
                JOIN book_ratings ON 
                    booking.book_id = book_ratings.book_id
                    AND booking.student_id = book_ratings.student_id
                JOIN book_comments ON 
                    booking.book_id = book_comments.book_id
                    AND booking.student_id = book_comments.student_id
                JOIN student ON booking.student_id = student.student_id
            WHERE 
            booking.book_id = ?
        `, [book_id]);

        return res.json(commentList);
    } catch (error) {
        console.error("Error in getComment:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const postComment=async(req,res)=>{
    const db = await connection()
    const {book_id,student_id,comment,rating} = req.body
    try {
        const [newComment] = await db.query(`INSERT INTO book_comments(book_id,student_id,comment) VALUES(?,?,?)`,[book_id,student_id,comment])
        const [newRating] = await db.query(`INSERT INTO book_ratings(book_id,student_id,rating) VALUES(?,?,?)`,[book_id,student_id,rating])

        return res.json({newComment,newRating})
    } catch (error) {
        console.error("Error in postComment:",error)
        return res.status(500).json({error:"Internal Server Error"})
    }
}
module.exports = { getComment ,postComment};
