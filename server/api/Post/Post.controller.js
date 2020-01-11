import Post from './Post.model';
import User from '../User/User.model';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const addPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            text: req.body.text,
            artist: req.body.artist,
            price: req.body.price,
            user: req.body.userId,
        });

        console.log(newPost.date);

        const post = await newPost.save();

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const editUser = (req, res) => {
    res.status(501).send('not implemented');
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(user);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
    }
};
