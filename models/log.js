const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    type: {
        type: String,
        enum : ['SIGNUP', 'VIDEO_IN'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});


const Log = mongoose.model('Log', logSchema);

module.exports = Log;