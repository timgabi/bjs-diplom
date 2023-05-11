'use strict';

const logoutButton = new LogoutButton();

action.logoutButton = function logoutRequest() {
	logout(() => {
		if (response) {
			location.reload();
		}
	})
};

current(() => {
	
})