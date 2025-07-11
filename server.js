// ✅ server.js (Complete Backend Server)
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vibhanshu@2003',
  database: 'userDetails',
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return process.exit(1);
  }
  console.log('✅ MySQL Connected');
});

// Sign Up Route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ success: false, message: 'Missing fields' });

  try {
    const hash = await bcrypt.hash(password, 10);
    db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hash],
      err => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY')
            return res.status(400).json({ success: false, message: 'Email already exists' });
          return res.status(500).json({ success: false, message: 'Signup failed', error: err.message });
        }
        res.json({ success: true });
      }
    );
  } catch (err) {
    res.status(500).json({ success: false, message: 'Hashing failed' });
  }
});

// Sign In Route
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (results.length === 0) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image_url || null,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Update User Profile
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, image } = req.body;

  if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

  db.query('UPDATE users SET name = ?, image_url = ? WHERE id = ?', [name, image, id], (err, result) => {
    if (err) {
      console.error('DB error on profile update:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    if (result.affectedRows === 0)
      return res.status(404).json({ success: false, message: 'User not found' });

    res.json({ success: true, message: 'Profile updated successfully' });
  });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
