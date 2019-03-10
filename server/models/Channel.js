/**
 * Created by raj on 7/14/2017.
 */
const mongoose = require('mongoose')


var Channel = mongoose.model('Channel', {
    rank: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    grade: {
        type: String,
        required: false,
        default: null
    },
    channelName: {
        type: String,
        required: true,
        default: null
    },
    video_uploads: {
        type: Number,
        required: false,
        default: null
    },
    subscribers: {
        type: Number,
        required: true,
        default: null
    },
    video_views: {
        type: Number,
        required: true,
        default: null
    }

})
module.exports = {
    Channel
}
