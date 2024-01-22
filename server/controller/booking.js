const connection = require('../database/database');

const start_booking = async (req, res) => {
    const db = await connection();

    try {
        const { student_id, isbn, book_id, start_date, end_date } = req.body;
        const status = "booking"
        // Use prepared statement to prevent SQL injection
        const [booking] = await db.query(
            'INSERT INTO booking (student_id, isbn, book_id, start_date,end_date,status) VALUES (?, ?, ?, ?,?,?)',
            [student_id, isbn, book_id, start_date, end_date, status]
        );

        return res.json(booking);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const endDate = async (req, res) => {
    const db = await connection();
    try {
        const { student_id, isbn, book_id } = req.body;
        const [data] = await db.query(`SELECT * FROM booking where student_id =? AND isbn =? AND book_id =?`, [student_id, isbn, book_id]);
        return res.json(data);
    } catch (error) {
        console.error("Error fetching end date:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


const Booking = async (req, res) => {
    const db = await connection();
    const { student_id } = req.body;

    try {
        const [allBookings] = await db.query(`SELECT 
        booking.student_id,
        booking.start_date,
        booking.end_date,
        booking.renew,
        booking.status,
        book_detail.book_id,
        book_detail.title,
        book_detail.description,
        book_detail.author,
        book_detail.category,
        book_detail.imageUrls,
        book_isbn.isbn
    FROM 
        book_detail
    JOIN 
        book_isbn ON book_detail.book_id = book_isbn.book_id
    JOIN 
        booking ON booking.isbn = book_isbn.isbn
    WHERE student_id = ?`, [student_id]);

        if (allBookings.length === 0) {
            return res.status(404).json({ message: "No bookings found for the given student_id." });
        }

        return res.json(allBookings);
    } catch (error) {
        console.error("Error fetching all bookings:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


const renew = async (req, res) => {
    const db = await connection()
    try {
        const { student_id, isbn, book_id, addDate, renew, status } = req.body;
        const [checkRenew] = await db.query(`SELECT renew FROM booking where student_id =? AND isbn =? AND book_id =?`, [student_id, isbn, book_id])

        if (checkRenew[0].renew !== 1) {
            const [renewDate] = await db.query(`UPDATE booking SET end_date =?,renew=?,status=? WHERE student_id =? AND isbn =? AND book_id =?`, [addDate, renew, status, student_id, isbn, book_id])
            return res.json(renewDate)
        }
        return res.json("You are Renewed!")
    } catch (error) {

    }
}

const overDate = async (req, res) => {
    const db = await connection();
    try {
        const { student_id, isbn, book_id, end_date } = req.body;
        const status = "Over Date";
        console.log("Request Body:", req.body);
        const [return_book] = await db.query(
            `UPDATE booking SET status = ? WHERE student_id = ? AND isbn = ? AND book_id = ? AND end_date = ?`,
            [status, student_id, isbn, book_id, end_date]
        );

        return res.json({
            success: true,
            message: "Booking status updated successfully.",
            data: return_book,
        });
    } catch (error) {
        console.error("Error updating overDate:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const autoChange = async (req, res) => {
    const db = await connection()
    const now = new Date().toISOString().split('T')[0]
    const status = "Over Date";
    try {
        const [check] = await db.query(`Select * from booking where end_date < ? and status != ?`, [now, status])
        if (check.length > 0) {
            const [change] = await db.query(`UPDATE booking set status=? WHERE end_date < ? and status != ?`, [status, now,status])
            return res.json({check,change})
        }
        else{
            return res.json("ไม่มีที่ตรงเงื่อนไข")
        }
    } catch (error) {

    }
}


module.exports = { start_booking, endDate, Booking, renew, overDate, autoChange };
