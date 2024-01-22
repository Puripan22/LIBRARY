const jwt = require('jsonwebtoken');
const connection = require('../database/database');

const login = async (req, res) => {
    const db = await connection();

    try {
        const student_id = req.body.student_id;
        const password = req.body.password;

        const [student] = await db.query(`SELECT * FROM student WHERE student_id = ?`, [student_id]);

        if (student && student.length > 0) {
            const storedPassword = student[0].password;

            if (password === storedPassword) {
                const token = jwt.sign({ student_id: student[0].student_id }, process.env.JWT_SECRET, {
                    expiresIn: '7d',
                });

                const { password, ...rest } = student[0];

                return res.json({
                    token,
                    user: rest,
                });
            } else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        } else {
            return res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { login };
