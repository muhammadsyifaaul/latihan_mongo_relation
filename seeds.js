const mongoose = require('mongoose');
const { Book, User, Library, Borrow } = require('./models/index');

mongoose.connect('mongodb://127.0.0.1/library_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const dummyData = async () => {
    try {
        const user = new User({
            name: 'John Doe',
            email: 'YJ7qA@example.com'
        });

        const book = new Book({
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald'
        });

        const result = await Promise.all([user.save(), book.save()]);

        if (!result) {
            console.log('Error');
        }

        const library = new Library();
        library.books.push(book._id);
        
        await library.save();

        console.log('Data added successfully');
    } catch (error) {
        console.error('Error:', error);
    }
};

dummyData();
