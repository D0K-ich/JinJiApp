enum Users {
	Get 			= "profile/get",
	ChangeBalance 	= "users/change-balance",
	Block	 		= "users/block",
	Activate		= "users/activate",

	SendCode        = "notify/send_code",
	CheckCode       = "code/check",
	RecoverPass     = "pass/recover",
	NewUser         = "new/user",
	SerchProfile    = "serch/profile",

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

