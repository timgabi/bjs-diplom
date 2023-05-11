'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = data => {
	ApiConnector.login(data, response => {
		if (response) {
			location.reload();
		} else {
			user.setLoginErrorMessage();
		}
	})
};

userForm.registerFormCallback = data => {
	ApiConnector.register(data, response => {
		if (response) {
			location.reload();
		} else {
			user.setRegisterErrorMessage();
		}
	})
};