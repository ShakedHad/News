import Post from './Post.model';

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
            content: req.body.content,
            category: req.body.category,
        });

        const post = await newPost.save();

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const updateViewsNumber = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        post.numberOfViews += 1;

        post.save();

        res.send();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};