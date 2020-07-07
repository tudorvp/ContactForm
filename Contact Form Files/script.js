validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

validatePassword = (password, username) => {
	return password.toLowerCase() !== username.toLowerCase() && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(String(password).toLocaleLowerCase());
}

handleFormValidation = (event) => {

	const alertElement = document.querySelector('#alert');

	if (!/^(?=[^\._])[\w\._]{5,20}$/.test(String(event.target.elements['username'].value).toLowerCase())) {
		alertElement.classList.add('alert-trigger');
		alertElement.innerHTML = 'Username-ul este invalid \n -trebuie sa aiba minim 5 caractere \n si sa nu contina punct sau underline pentru primul caracter'// alert in cazul nerespectarii conditiei if 
		event.preventDefault();  //previne actiunea default a browserului inteferent de browser.
		return false;
	}

	if (!validatePassword(event.target.elements['password'].value, event.target.elements['username'].value)) {
		alertElement.classList.add('alert-trigger');
		alertElement.innerHTML = 'Parola trebuie sa contina: \n minim 8 caractere, \n sa contina cel putin o litera mare, \n o cifra si un caracter special (care nu e cifra sau litera) \n parola nu poate fi la fel ca numele de utilizator.'
		event.preventDefault();
		return false;
	}

	if (!validateEmail(event.target.elements['email'].value)) {
		alertElement.classList.add('alert-trigger');
		alertElement.innerHTML = 'Emailul trebuie sa aiba un format precum: \n deak.tudor@gmail.com'
		event.preventDefault();  
		return false;
	} 

	alertElement.classList.remove('alert-trigger');

	}