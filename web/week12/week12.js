function checkName(name, marker) {
    var thisName = document.getElementById(name);
    var thisMarker = document.getElementById(marker);

    // check the name for only alphabet
    var pass = thisName.value.search(/(.*\d.*)|(.*\s.*)/);

    if (pass == 0 || thisName.value.length == 0) {
        thisMarker.style.display = 'initial';
        thisMarker.innerHTML = "* Need to be fixed";
        return false;
    }
    else {
        thisMarker.style.display = 'none';
    }
        
    return true;
}

function checkAddress(address, marker) {
    var thisAddress = document.getElementById(address);
    var thisMarker = document.getElementById(marker);

    // check the name for only alphabet
    var pass = thisAddress.value.search(/^\d+\s([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+\.?)\s[a-zA-Z]+,\s(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\s\d{5}$/);

    if (pass != 0 || thisAddress.value.length == 0) {
        thisMarker.style.display = 'initial';
        thisMarker.innerHTML = "* Need to be fixed";
        return false;
    }
    else {
        thisMarker.style.display = 'none';
    }
        
    return true;
}

function checkPhone(phone, marker) {
    var thisPhone = document.getElementById(phone);
    var thisMarker = document.getElementById(marker);

    // check the name for only alphabet
    var pass = thisPhone.value.search(/^\d{3}\-\d{3}\-\d{4}$/);

    if (pass != 0) {
        thisMarker.style.display = 'initial';
        thisMarker.innerHTML = "* Need to be fixed";
        return false;
    }
    else {
        thisMarker.style.display = 'none';
    }
        
    return true;
}

function checkDate(dateElement, marker) {
    var dateNumber = document.getElementById(dateElement);
    var thisMarker = document.getElementById(marker);

    var pass = dateNumber.value.search(/^\d{2}\-\d{4}$/);

    if (pass != 0) {
        thisMarker.style.display = 'initial';
        thisMarker.innerHTML = "* Need to be fixed";
        return false;
    }
    else {
        var split = dateNumber.value.split('-');

        if (split[0] < 1 || 12 < split[0] || split[2] < 2018) {
            thisMarker.style.display = 'initial';
            thisMarker.innerHTML = "* Need to be fixed";
            return false;
        }
        else {
            thisMarker.style.display = 'none';
        }
    }

    return true;
}

function checkCreditCardNumber(cardElement, marker) {
    var cardNumber = document.getElementById(cardElement);
    var thisMarker = document.getElementById(marker);

    var pass = cardNumber.value.search(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/);

    if (pass != 0) {
        thisMarker.style.display = 'initial';
        thisMarker.innerHTML = "* Need to be fixed";
        return false;
    }
    else {
        thisMarker.style.display = 'none';
    }
        
    return true;
}

function checkCheckbox(checkboxElement, qtyElement) {
    var box = document.getElementById(checkboxElement);
    var qty = document.getElementById(qtyElement);

    if (box.checked)
        qty.disabled = false;
    else {
        qty.disabled = true;
        return false;
    }
       
    updateTotal();

    return true;
}

function updateTotal()
{
    var total = 0.00;
    var table = document.getElementById('productTable');
    var numRows = table.rows.length;
    var row;

    for (var i = 0; i < numRows; i++)
    {
        var checkbox = table.rows[i].cells[3].children[0];

        if(checkbox.checked == true)
        {
            var subtotal = table.rows[i].cells[4].children[0].value;
            total += (subtotal * .98);
        }
    }

    document.getElementById('total').innerHTML = "Total $ " + total.toFixed(2);
}

function resetForm() {
    var table = document.getElementById('productTable');
    var numRows = table.rows.length;
    var row;

    for (var i = 0; i < numRows; i++) {
        var checkbox = table.rows[i].cells[3].children[0];
        var qty = table.rows[i].cells[4].children[0];

        checkbox.checked = false;
        qty.value = "";
        qty.disabled = true;
    }

    document.getElementById('total').innerHTML = "Total $ 0.00";

    document.getElementById('fname').value = "";
    checkName('fname', 'fnamevalid')
    document.getElementById('lname').value = "";
    checkName('lname', 'lnamevalid')
    document.getElementById('address').value = "";
    checkAddress('address', 'addressvalid')
    document.getElementById('phone').value = "";
    checkPhone('phone', 'phonevalid')
    document.getElementById('card').value = "";
    checkCreditCardNumber('card', 'cardvalid')
    document.getElementById('date').value = "";
    checkDate('date', 'datevalid')
}

function checkAll() {
    var passed = true;

    if (checkName('fname', 'fnamevalid') == false)
        passed = false;

    if(checkName('lname', 'lnamevalid') == false)
        passed = false;

    if(checkAddress('address', 'addressvalid') == false)
        passed = false;

    if(checkPhone('phone', 'phonevalid') == false)
        passed = false;

    if(checkCreditCardNumber('card', 'cardvalid') == false)
        passed = false;

    if(checkDate('date', 'datevalid') == false)
        passed = false;
    
    return passed;
}