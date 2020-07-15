import Admin from './Admin.model';

export const authenticate = async (req, res) => {
    try {
        const admin = await Admin.findOne({ userName: req.body.userName });

        if (admin.password === req.body.password) {
            res.json({ userId: admin._id, username: admin.userName }).send();
        } else {
            res.status(403).send();
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
