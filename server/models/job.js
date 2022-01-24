const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    name: String,
    link: String,
    date: String,
    company: String,
    status: String,
    interviews: [{ type: Schema.Types.ObjectId, ref: 'interview' }]
})

const Job = mongoose.model("Job", jobSchema)
module.exports = Job