// MenuItems
export const menuItems = [
	{
		id: 1,
		title: "Home",
		link: "/",
	},
	{ id: 2, title: "About", link: "/about" },
	{
		id: 3,
		title: "Home Furniture",
		link: "/",
		subItems: [
			{ title: "Bedroom", link: "/collection/bedroom" },
			{ title: "Dining", link: "/collection/dining" },
			{ title: "Living", link: "/collection/living" },
		],
	},
	{
		id: 4,
		title: "Office Furniture",
		link: "/",
		subItems: [
			{ title: "Lounge", link: "/collection/lounge" },
			{ title: "Office Chair", link: "/collection/office-chair" },
			{ title: "Office Table", link: "/collection/office-table" },
		],
	},
	{
		id: 5,
		title: "Hospital Furniture",
		link: "/",
		subItems: [
			{ title: "Hospital Bed", link: "/collection/hospital-bed" },
			{ title: "Hospital Utility", link: "/collection/hospital-utility" },
		],
	},
	{ id: 6, title: "Contact", link: "/contact" },
];

//UserMenu

export const userMenu = [
	{
		id: 1,
		name: "Sign In",
		link: "/signin",
	},
	{
		id: 2,
		name: "Cart",
		link: "/cart",
	},
	{
		id: 3,
		name: "Wishlist",
		link: "/wishlist",
	},
	{
		id: 4,
		name: "Compare",
		link: "/compare",
	},
];

// Collections
export const collections = [
	{
		id: 1,
		title: "Bedroom",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/Bella_0001_Double_Bed_Pink__27958.jpg?v=1709185149",
		link: "/collection/bedroom",
	},
	{
		id: 2,
		title: "Living",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png?v=1709185425",
		link: "/collection/living",
	},
	{
		id: 3,
		title: "Dining",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/dining_sets_luxury.jpg?v=1709185177",
		link: "/collection/dining",
	},
	{
		id: 4,
		title: "Lounge",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/office_lounge_sofa_set_black.jpg?v=1709185129",
		link: "/collection/lounge",
	},
	{
		id: 5,
		title: "Office Chair",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/office_chari.jpg?v=1709185213",
		link: "/collection/office-chair",
	},
	{
		id: 6,
		title: "Bedroom",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/Bella_0001_Double_Bed_Pink__27958.jpg?v=1709185149",
		link: "/collection/bedroom",
	},
	{
		id: 7,
		title: "Living",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png?v=1709185425",
		link: "/collection/living",
	},
	{
		id: 8,
		title: "Dining",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/dining_sets_luxury.jpg?v=1709185177",
		link: "/collection/dining",
	},
	{
		id: 9,
		title: "Lounge",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/office_lounge_sofa_set_black.jpg?v=1709185129",
		link: "/collection/lounge",
	},
	{
		id: 10,
		title: "Office Chair",
		imageUrl: "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/office_chari.jpg?v=1709185213",
		link: "/collection/office-chair",
	},
];

// export const products = [
// 	{
// 		id: 1,
// 		name: "Product 1",
// 		image: "/path/to/image1.jpg",
// 		hoverimage: "/path/to/hoverimage1.jpg",
// 		MRP_PRICE: 100,
// 		SALE_PRICE: 80,
// 		discount: "20% OFF",
// 		stokout: false,
// 		isNewArrival: true,
// 		isFeatured: false,
// 		isOnSale: true,
// 		isTrending: false,
// 	},
// 	{
// 		id: 2,
// 		name: "Product 2",
// 		image: "/path/to/image2.jpg",
// 		hoverimage: "/path/to/hoverimage2.jpg",
// 		MRP_PRICE: 150,
// 		SALE_PRICE: 120,
// 		discount: "20% OFF",
// 		stokout: false,
// 		isNewArrival: false,
// 		isFeatured: true,
// 		isOnSale: false,
// 		isTrending: true,
// 	},
// 	// Add more products as needed
// ];

export const products = [
	{
		id: 1,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		image:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 2,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		image:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=384&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
		stokout: true,
		isNewArrival: true,
		isFeatured: true,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 3,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		stokout: true,
		image:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 4,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		stokout: true,
		image:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=384&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: true,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 5,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		image:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 6,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		image:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=384&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: true,
	},
	{
		id: 7,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		stokout: true,
		image:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F3_00f4381c-69ee-413c-bdaf-d635a392bd1d.jpg%3Fv%3D1709108882&w=1920&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: false,
	},
	{
		id: 8,
		name: "Leaving Room Sets",
		MRP_PRICE: 149.99,
		SALE_PRICE: 99.99,
		discount: "15%",
		stokout: true,
		image:
			"https://furns-react.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_b0f3af65-1151-442e-9ade-09deb3213eac.jpg%3Fv%3D1709108882&w=1920&q=75",
		hoverimage:
			"https://furns-react.netlify.app/_ipx/w_384,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=384&q=75",
		stokout: false,
		isNewArrival: true,
		isFeatured: false,
		isOnSale: true,
		isTrending: true,
	},
];
