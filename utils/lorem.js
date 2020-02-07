import React from 'react';

const paragraphs = [
	'Gummies gingerbread pie ice cream. Fruitcake pastry caramels chupa chups candy. Candy canes jelly pastry. Sweet roll sweet lollipop. Apple pie icing pastry apple pie cake oat cake soufflé. Toffee cupcake danish fruitcake muffin. Apple pie dessert powder. Dessert jujubes halvah fruitcake cookie gummies caramels marzipan. Cheesecake pudding dragée candy.',
	'Tiramisu sweet donut candy sesame snaps. Soufflé jelly wafer jelly beans powder biscuit pastry donut. Dragée marzipan bonbon cake chocolate chupa chups jujubes lollipop lemon drops. Sweet roll chocolate cake jelly-o cookie pastry. Bonbon jelly sesame snaps apple pie fruitcake donut gingerbread toffee dragée. Jelly muffin cookie chupa chups. Marshmallow jelly cookie soufflé cake marzipan sesame snaps. Oat cake jelly ice cream. Ice cream croissant tiramisu.',
	'Sweet macaroon sweet roll cake muffin cotton candy chocolate bar brownie. Brownie sesame snaps cake pastry gummies gummi bears icing. Jujubes halvah powder candy canes oat cake tart fruitcake biscuit pudding. Ice cream marshmallow oat cake dragée lollipop. Sweet candy canes lollipop. Cupcake gingerbread ice cream.',
	'Jelly beans dragée halvah muffin. Jujubes gummies sweet dessert gingerbread. Lollipop candy jelly beans tiramisu soufflé bear claw chocolate liquorice. Gummies fruitcake toffee lollipop. Jelly-o muffin biscuit chocolate halvah jujubes cotton candy. Jelly beans brownie tootsie roll sugar plum sugar plum carrot cake. Gummi bears bear claw halvah danish. Sesame snaps chocolate cake carrot cake cake sweet roll candy jujubes sesame snaps. Marshmallow liquorice ice cream gingerbread carrot cake caramels croissant.',
	'Cotton candy bonbon toffee biscuit chocolate gummies dragée. Muffin cotton candy sweet powder bonbon icing macaroon bear claw. Brownie sugar plum marshmallow caramels. Carrot cake tootsie roll cupcake chocolate. Liquorice toffee ice cream candy cheesecake. Jujubes soufflé cake soufflé fruitcake muffin caramels sweet. Soufflé jelly-o bonbon chocolate apple pie jelly beans.',
	'Dessert lemon drops sugar plum donut biscuit topping powder. Brownie apple pie fruitcake oat cake tootsie roll cookie sweet roll biscuit lollipop. Candy cookie sugar plum chocolate ice cream carrot cake cake tart carrot cake. Jujubes lemon drops cotton candy jujubes biscuit powder croissant macaroon macaroon. Topping croissant fruitcake dragée. Marzipan chocolate marzipan powder bear claw. Jelly beans marzipan tart sesame snaps. Candy canes biscuit tootsie roll ice cream cotton candy chupachups icing macaroon toffee.',
	'Topping cotton candy chupa chups marshmallow ice cream. Powder chocolate bar lemon drops candy powder biscuit. Halvah lemon drops sugar plum. Croissant fruitcake brownie cake sweet roll. Caramels candy canes jelly-o chupa chups lemon drops soufflé tart gummi bears. Pie soufflé marzipan. Chocolate cake danish tart cotton candy powder gingerbread cotton candy pudding gingerbread. Macaroon chocolate bar wafer dragée pastry lollipop. Caramels cheesecake bear claw. Cake soufflé cake dragée jellybeans.',
	'Chupa chups pudding biscuit tiramisu lemon drops jelly beans ice cream powder jujubes. Chocolate cake croissant fruitcake jelly marzipan sweet roll bonbon soufflé. Candy bear claw jelly-o oat cake marshmallow sweet roll halvah. Cake liquorice carrot cake apple pie. Bonbon lemon drops muffin jelly-o bear claw biscuit marzipan. Sesame snaps powder biscuit liquorice cake cotton candy liquorice cotton candy cotton candy. Carrot cake liquorice dessert cheesecake bear claw toffee dragée. Jelly beans apple pie ice cream dessert. Tiramisu gummies sweet roll jelly beans pastry gummies.',
	'Donut carrot cake jujubes candy canes fruitcake sweet roll. Cupcake icing candy jelly beans. Pudding lemon drops tart tart. Dessert icing sweet soufflé. Tootsie roll biscuit candy canes ice cream pie cheesecake jelly. Cake dragée cotton candy jujubes liquorice sugar plum lemon drops. Chocolate bar cupcake icing.',
	'Gummi bears fruitcake cheesecake. Biscuit fruitcake candy candy ice cream pudding cake chupa chups. Candy canes lemon drops croissant. Cheesecake biscuit gummies liquorice dragée ice cream toffee jujubes soufflé. Wafer gummies danish sesame snaps caramels carrot cake dessert. Tootsie roll jelly-o gummies tiramisu.',
	'Topping bonbon muffin marshmallow donut tootsie roll carrot cake. Gummies sweet marshmallow. Caramels jelly-o donut. Muffin cupcake dragée marzipan sesame snaps jelly. Danish gummi bears sweet roll dessert carrot cake muffin gingerbread brownie. Candy canes carrot cake tootsie roll powder carrot cake. Apple pie donut cake halvah cake tootsie roll. Donut cotton candy icing jujubes marshmallow.',
	'Biscuit dessert candy canes pie jelly lollipop caramels marzipan cake. Jelly beans gummi bears ice cream jelly beans gummies sweet jelly marshmallow. Donut croissant cotton candy jelly sweet roll tootsie roll. Lollipop dragée gingerbread cupcake oat cake. Oat cake chocolate cake jelly-o sugar plum cupcake gummies dragée. Tootsie roll cheesecake powder bonbon. Wafer donut sugar plum.',
	'Fruitcake pie soufflé chocolate cake cheesecake candy powder marzipan donut. Pie sugar plum jujubes danish sweet jelly-o sesame snaps wafer. Pastry pastry lollipop apple pie tiramisu biscuit. Marshmallow marshmallow sesame snaps candy jujubes sweet roll lemon drops cookie oat cake. Bear claw jujubes jelly apple pie sweet roll chocolate cake wafer. Macaroon toffee toffee candy canes chocolate bar carrot cake carrot cake icing cake. Oat cake liquorice oat cake apple pie jujubes sesame snaps tart. Liquorice candy icing ice cream chocolate bar muffin.',
	'Powder carrot cake candy canes dragée. Danish danish jelly-o tiramisu cupcake. Toffee icing candy canes toffee fruitcake. Macaroon cookie cake. Chocolate bar chocolate jelly-o candy caramels chocolate marshmallow. Sweet roll cake marzipan sweet gummi bears. Brownie gummies tiramisu cake chupa chups. Sweet roll liquorice apple pie bonbon marshmallow lollipop marshmallow.',
	'Icing tiramisu sweet roll gingerbread cotton candy pastry. Icing tart sweet dessert cupcake. Macaroon cake pudding ice cream marzipan tiramisu muffin carrot cake apple pie. Sweet cheesecake chocolate bar pudding tiramisu. Sweet roll lollipop tiramisu danish candy liquorice candy canes donut. Marzipan chupa chups cheesecake chocolate cake gummies sesame snaps biscuit. Halvah cookie sweet roll tootsie roll tootsie roll bear claw apple pie cheesecake. Pie lollipop sweet cookie.',
	'Chocolate donut chocolate cake dessert cupcake cheesecake powder donut. Jujubes caramels icing cupcake brownie jujubes bonbon. Cheesecake biscuit sesame snaps fruitcake carrot cake cotton candy brownie cotton candy. Carrot cake marshmallow brownie powder halvah. Bear claw soufflé chupa chups jelly lemon drops pudding halvah oat cake gummies. Oat cake tootsie roll pastry pastry cupcake muffin.',
	'Gingerbread pie wafer brownie apple pie bonbon biscuit dessert. Sweet roll danish sweet roll muffin powder topping lollipop oat cake liquorice. Pastry pudding gummies jujubes carrot cake marzipan lollipop. Toffee wafer chocolate bar sesame snaps lollipop pie. Biscuit wafer bear claw. Tootsie roll cake gummi bears tootsie roll croissant. Powder apple pie cheesecake cheesecake candy canes marzipan.',
	'Toffee dragée jujubes. Bonbon jelly-o carrot cake danish cheesecake sweet roll jelly bear claw. Gummies sesame snaps jelly-o jujubes cookie marzipan bear claw caramels soufflé. Pie cake chocolate jujubes. Wafer toffee lollipop sweet roll gummies. Candy toffee halvah tootsie roll sweet roll.',
	'Macaroon tootsie roll carrot cake cotton candy bear claw tootsie roll. Gummi bears biscuit fruitcake candy canes cheesecake pie apple pie pastry lollipop. Tiramisu pie bonbon chocolate bar. Sesame snaps candy canes candy canes apple pie gummies. Gummies macaroon jelly beans cake toffee. Sesame snaps sesame snaps cake gingerbread topping topping. Dessert candy tart cookie apple pie icing jujubes tootsie roll pudding.',
	'Cheesecake muffin marzipan. Bear claw cake cake apple pie lollipop gingerbread. Gummi bears cotton candy chocolate bar gummies gingerbread pie. Biscuit tootsie roll topping cheesecake sweet. Chocolate bar chocolate bar sugar plum cookie jelly beans. Marzipan cake bear claw halvah caramels. Chocolate bar bonbon icing. Topping carrot cake carrot cake jelly-o ice cream dessert chocolate.',
];

function shuffle(arr) {
	var array = arr.slice(0); // clone
	var m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

export function generateLoremIpsum(n = 1) {
	return shuffle(paragraphs).slice(0, n);
}

export const Lorem = ({ count }) =>
	generateLoremIpsum(count).map((p, i) => <p key={i}>{p}</p>);
