const Product = require('../models/product')

const getAll = async (req, res, next) => {
	try {
		const {page, perPage} = req.query
		const options = {
			page: parseInt(page, 10),
			limit: parseInt(perPage, 10)
		}
 		const products = await Product.paginate({}, options)
		
		return res.status(200).json(products)
	} catch (error) {
		res.status(500).send(error)
	}
}

module.exports = getAll