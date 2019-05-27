const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const productSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true }
})

productSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Product', productSchema)