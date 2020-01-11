import User from './user.model';

export const getAllUsers = () => { };

export const addUser = (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = User.findOne({ email });

        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            name, email, password
        });
        user.save();
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

export const editUser = (id) => {
    console.log(id);
};

export const getUser = (id) => {
    console.log(id);
};
