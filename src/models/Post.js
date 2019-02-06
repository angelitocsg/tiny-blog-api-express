const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    tags: Array,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", PostSchema);