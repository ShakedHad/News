import Category from './Category.model';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const addCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.categoryName,
        });

        const category = await newCategory.save();

        res.json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};