enum Users {
	Get 			= "get/by-name",
	ChangeBalance 	= "users/change-balance",
	Block	 		= "users/block",
	Activate		= "users/activate",

	//Chat
	NewMessage      = "messages/new",
	DialogsList		= "dialogs/list",
}

enum Tariffs {
	List 			= "tariffs/list",
	Create 			= "tariffs/create",
	Delete 			= "tariffs/delete",
	ChangePrivate	= "tariffs/change-private"
}

enum Promocodes {
	List 		 = "promocodes/list",
	Create 		 = "promocodes/create",
	Delete		 = "promocodes/delete"
}

enum Billing {
	List 		= "transactions/list",

	Approve 	= "transactions/approve",
	Decline 	= "transactions/decline",
}

export const Endpoints = {
	Users,
	Tariffs,
	Promocodes,
	Billing
}

