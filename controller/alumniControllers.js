const Alumni = require('../models/Alumni');

class AlumniController {
    static async getAll(req, res) {
        try {
            const alumni = await Alumni.findAll();
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const alumni = await Alumni.findByPk(id);
            if (!alumni) return res.status(404).json({ message: 'Alumni not found' });
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const { name, graduationYear, major, email } = req.body;
            const newAlumni = await Alumni.create({ name, graduationYear, major, email });
            res.status(201).json(newAlumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, graduationYear, major, email } = req.body;
            const alumni = await Alumni.findByPk(id);
            if (!alumni) return res.status(404).json({ message: 'Alumni not found' });
            await alumni.update({ name, graduationYear, major, email });
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const alumni = await Alumni.findByPk(id);
            if (!alumni) return res.status(404).json({ message: 'Alumni not found' });
            await alumni.destroy();
            res.json({ message: 'Alumni deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = AlumniController;
