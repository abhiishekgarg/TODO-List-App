const mongoose = require('mongoose');

const listSchema = new mongoose.Schema
({
    description:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    dueDate:
    {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const List = mongoose.model('List', listSchema);

module.exports = List;