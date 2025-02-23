const mongoose = require('mongoose'); const MovieSchema = new mongoose.Schema({ title: { type: String, required: true }, description: { type: String }, year: { type: Number }, rating: { type: String }, genres: [{ type: String }], imageUrl: { type: String }, videoUrl: { type: String } }); module.exports = mongoose.model('Movie', MovieSchema);