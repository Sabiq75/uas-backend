const Alumni = require('../models/Alumni');


class AlumniController {
    static async index(req, res) {
        try {
            const alumni = await Alumni.findAll();
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

// Controller method to get alumni by name
static async search(req, res) {
    try {
        const {name } = req.params;  
        const alumni = await Alumni.findOne({
            where: {
                name: name
            }
        });

        if (!alumni) {
            return res.status(404).json({ message: 'Alumni not found' + err});
        }

        res.json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

static async freshGraduate(req, res) {
    try {
        const {freshGraduate } = req.params;  
        const alumni = await Alumni.findAll({
            where: {
                status: freshGraduate
            }
        });

        if (!alumni) {
            return res.status(404).json({ message: 'Alumni not found'});
        }

        res.json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

static async employed(req, res) {
    try {
        const {employed } = req.params;  
        const alumni = await Alumni.findAll({
            where: {
                status: employed
            }
        });

        if (!alumni) {
            return res.status(404).json({ message: 'Alumni not found'});
        }

        res.json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

static async unemployed(req, res) {
    try {
        const {unemployed } = req.params;  
        const alumni = await Alumni.findAll({
            where: {
                status: unemployed
            }
        });

        if (!alumni) {
            return res.status(404).json({ message: 'Alumni not found'});
        }

        res.json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

    static async show(req, res) {
        try {
            const { id } = req.params;
            const alumni = await Alumni.findByPk(id);
            if (!alumni) return res.status(404).json({ message: 'Alumni not found' });
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    

    static async store(req, res) {
        try {
            const { name,phone,address, graduation_year,status, company_name,position } = req.body;
            const newAlumni = await Alumni.create({ name, phone,address,graduation_year, status, company_name,position });
            res.status(201).json(newAlumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name,phone,address, graduation_year,status, company_name,position } = req.body;
            const alumni = await Alumni.findByPk(id);
            if (!alumni) return res.status(404).json({ message: 'Alumni not found' });
            await alumni.update({ name, phone,address,graduation_year, status, company_name,position });
            res.json(alumni);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async destroy(req, res) {
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
