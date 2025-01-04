const express = require('express');
const db = require('./db.js');
const router = express.Router();

// POST /tasks: Create a new task
router.post('/tasks', (req, res) => {
    const { title, description, status = 'pending' } = req.body;

    // Check if title and description are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const sql = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
    const params = [title, description, status];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            title,
            description,
            status
        });
    });
});
// GET /tasks: Fetch all tasks
router.get('/tasks', (req, res) => {
    const sql = `SELECT * FROM tasks`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// GET /tasks/:id: Fetch a task by its ID
router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM tasks WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(row);
    });
});

// PUT /tasks/:id: Update the task status
router.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const sql = `UPDATE tasks SET status = ? WHERE id = ?`;
    db.run(sql, [status, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task updated successfully' });
    });
});

// DELETE /tasks/:id: Delete a task by its ID
router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    });
});

module.exports = router;
