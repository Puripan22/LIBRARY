const connection = require('../database/database');

const upload = async (req, res) => {
  const db = await connection();

  try {
    const { book_id, title, author, category, description, imageUrls } = req.body;

    // Ensure you replace placeholders with actual values in the SQL query
    const [book_image] = await db.query(
      'INSERT INTO book_detail VALUES (?, ?, ?, ?, ?, ?)',
      [book_id, title, author, category, description, imageUrls]
    );

    return res.json(book_image);
  } catch (error) {
    console.error('Error uploading book details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const book_table = async (req, res) => {
  const db = await connection();

  try {
    const [book_table] = await db.query(`
      SELECT 
        book_detail.book_id,
        book_detail.title,
        book_detail.imageUrls,
        COUNT(*) AS volume
      FROM 
        book_detail
      JOIN 
        book_isbn ON book_detail.book_id = book_isbn.book_id
      GROUP BY 
        book_detail.book_id
    `);

    // Send the response to the client
    res.json( book_table );
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    
    // Send an error response to the client
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { upload ,book_table};
