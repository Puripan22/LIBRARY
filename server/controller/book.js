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

    return res.json( book_image );
  } catch (error) {
    console.error('Error uploading book details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { upload };
