var Usuario = require('./../../../models').Usuarios;

module.exports = {
	findAll: function (req, res, next) {
		Usuario.findAll({
            where: { 
                login: req.params.supermarketId,
                senha: req.params.supermarketId
            }
		// 	order: [
		// 		['name', 'ASC'],
		// 		[db.SubCategorie, 'name', 'ASC'],
		// 		[db.SubCategorie, db.ItensSubCategorie, 'name', 'ASC']
		// 	],
		// 	attributes: ['name', 'categoriesId', 'isHome', 'icon'],
		// 	include: [{
		// 		model: db.SubCategorie,
		// 		attributes: ['name', 'categoriesId', 'subCategoriesId'],
		// 		include: [{
		// 			model: db.ItensSubCategorie,
		// 			attributes: ['name', 'subCategoriesId', 'itensSubCategoriesId']
		// 		}]
		// 	}]
		// }).then(function (result) {
		// 	var tam = 12;
		// 	var length = result.length;
		// 	if (length > tam) {
		// 		var categories = result.slice(0, tam);
		// 		var lastPart = result.slice(tam, length);
		// 		categories.push({
		// 			'name': 'Todos',
		// 			'categories': lastPart
		// 		})
		// 	} else {
		// 		categories = result
		// 	}
		// 	var isHome = [];
		// 	result.forEach(function (cat) {
		// 		if (cat.isHome == true) {
		// 			isHome.push({
		// 				name: cat.name,
		// 				icon: cat.icon,
		// 				categoriesId: cat.categoriesId
		// 			});
		// 		}
		// 	})
		//	return res.status(200).json({ "categories": categories, "isHome": isHome });
		});
	}
}