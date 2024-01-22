const connection = require('../database/database');

const upload = async (req, res) => {
  const db = await connection();

  try {
    const { book_id, title, author, category, description, imageUrls, isbn, currentDate } = req.body;

    // Check if book_id already exists in the book_detail table
    const [existingBook] = await db.query('SELECT * FROM book_detail WHERE book_id = ?', [book_id]);

    if (existingBook.length > 0) {
      // If book_id already exists, return an error response
      return res.status(400).json({ error: 'Book with the same ID already exists.' });
    }

    // Ensure placeholders match the actual columns in the book_detail table
    const [book_image] = await db.query(
      'INSERT INTO book_detail (book_id, title, author, category, description, imageUrls) VALUES (?, ?, ?, ?, ?, ?)',
      [book_id, title, author, category, description, imageUrls]
    );

    // Use parameterized query to prevent SQL injection
    const [book] = await db.query('INSERT INTO book_isbn (isbn, book_id, date_of_purchase) VALUES (?, ?, ?)', [isbn, book_id, currentDate]);

    return res.json({ book_image, book });
  } catch (error) {
    console.error('Error uploading book details:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
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
        book_detail.category,
        book_detail.author,
        COUNT(*) AS volume
      FROM 
        book_detail
      JOIN 
        book_isbn ON book_detail.book_id = book_isbn.book_id
      GROUP BY 
        book_detail.book_id
    `);
    const [category_list] = await db.query(`select category from book_detail group by category`)

    // Send the response to the client
    res.json( {book_table ,category_list});
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    
    // Send an error response to the client
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const book_edit = async(req,res)=>{
  const db = await connection()
  try {
    const {book_id} = req.params
    const {title, author, category, description, imageUrls } = req.body;
    const [book] = await db.query(`UPDATE book_detail SET title=?,author=?,category=?,description=?,imageUrls=? WHERE book_id = ?`,[title, author, category, description, imageUrls,book_id])

    return res.json(book)
  } catch (error) {
    console.error("Error updating book detail ",error)
    return res.status(500).json({error:"Internalserver error"})
  }
}

const book_detail = async (req, res) => {
  const db = await connection();

  try {
    const { book_id } = req.params;
    const [bookDetail] = await db.query('SELECT * FROM book_detail WHERE book_id = ?', [book_id]);

    if (!bookDetail.length) {
      return res.status(404).json({ error: 'Book not found' });
    }

    return res.json(bookDetail);
  } catch (error) {
    console.error('Fetching detail error', error);
    return res.status(500).json({ error: 'Error fetching book detail' });
  } finally {
    // Close the database connection if needed
    // db.close();
  }
};



module.exports = { upload ,book_table,book_edit,book_detail};
