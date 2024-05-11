const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/task', async (req,res) => {
    try {
        const tasks = await db.all ('SELECT * FROM tasks');
        res.json(tasks);
    } catch (err) {
        console.error(err);
        req.statusCode(500).send('Error Geuningan?');
        
    }
});

router.post('/task', async (req,res) => {
    const { title, description} = req.body ;
    try {
        const tasks = await db.run ('INSERT INTO tasks (title, description) VALUES (?,?)', [title,description]);
        res.json({message : 'Berhasil Membuat Tugas'});
    } catch (err) {
        console.error(err);
        req.statusCode(500).send('Error Geuningan?');
        
    }
});

router.put('/task/:id', async (req,res) => {
    const {id, title, description, completed} = req.body ;
    try {
        const tasks = await db.run ('UPDATE tasks SET title = ?, deskription =?, complete = ?, WHERE id = ?', [id, title, description, completed,id
        ]);
        res.json({message : 'Berhasil Update'});
    } catch (err) {
        console.error(err);
        req.statusCode(500).send('Error Geuningan?');
        
    }
});

router.delete('/task/:id', async (req,res) => {
    const {id} = req.body ;
    try {
        const tasks = await db.run ('DELETE FROM tasks WHERE id =?', [id]);
        res.json({message : 'Berhasil Dihapus'});
    } catch (err) {
        console.error(err);
        req.statusCode(500).send('Error Geuningan?');
        
    }
});

module.exports = router;