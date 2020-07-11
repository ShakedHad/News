import Admin from './Admin.model';

export const authenticate = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        console.log(admin);

        res.json(admin.userName === req.params.userName
                 && admin.password === req.params.password);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
