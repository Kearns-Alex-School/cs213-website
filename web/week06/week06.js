function checkAge(ageElement, messageElement) {
	var age = document.getElementById(ageElement);
	var message = document.getElementById(messageElement);

	var pass = age.value.search(/\s/);

	if (age.value < 0 || 118 < age.value || isNaN(age.value) || pass == 0 || age.value.length == 0)
		message.style.display = 'initial';
	else
		message.style.display = 'none';
}

function checkSSN(ssnElement, messageElement) {
	var ssn = document.getElementById(ssnElement);
	var message = document.getElementById(messageElement);

	var pass = ssn.value.search(/^\d{3}\-\d{2}\-\d{4}$/);

	if (pass != 0)
		message.style.display = 'initial';
	else
		message.style.display = 'none';
}

function checkCreditCardNumber(cardElement, messageElement) {
	var cardNumber = document.getElementById(cardElement);
	var message = document.getElementById(messageElement);

	var pass = cardNumber.value.search(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/);

	if (pass != 0)
		message.style.display = 'initial';
	else
		message.style.display = 'none';
}

function checkDate(dateElement, messageElement) {
	var dateNumber = document.getElementById(dateElement);
	var message = document.getElementById(messageElement);

	var pass = dateNumber.value.search(/^\d\d?\/\d\d?\/\d{4}$/);

	if (pass != 0)
		message.style.display = 'initial';
	else
	{
		var split = dateNumber.value.split('\/');

		if(split[0] < 1 || 12 < split[0] ||
			 split[1] < 1 || 31 < split[1] ||
			 split[2] < 1753 || 2100 < split[2])
			message.style.display = 'initial';
		else
			message.style.display = 'none';
	}
}

function checkStateAbbreviation(stateElement, messageElement) {
	var state = document.getElementById(stateElement);
	var message = document.getElementById(messageElement);

	var pass = state.value.search(/^(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/);

	if (pass != 0)
		message.style.display = 'initial';
	else
		message.style.display = 'none';
}

function checkDollarAmount(amountElement, messageElement) {
	var amount = document.getElementById(amountElement);
	var message = document.getElementById(messageElement);

	var pass = amount.value.search(/^\s*\$?[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)\s*$/);

	if (pass != 0)
		message.style.display = 'initial';
	else
		message.style.display = 'none';
}