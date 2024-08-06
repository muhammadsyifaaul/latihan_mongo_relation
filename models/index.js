const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : String
})

const User = mongoose.model('User',userSchema)

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    borrowed: {type: Boolean, default: false}
})

const Book = mongoose.model('Book',bookSchema)

const librarySchema = new mongoose.Schema({
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'

    }]
})

const Library = mongoose.model('Library',librarySchema)

const borrowSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Borrow = mongoose.model('Borrow',borrowSchema)

module.exports = {User,Book,Library,Borrow}