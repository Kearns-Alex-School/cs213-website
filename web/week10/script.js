function loadCountry(text) {
    // create our request object
    var xhttp = new XMLHttpRequest();

    var resultTable = document.getElementById("countryInfo");

    if (text == "")
    {
        resultTable.innerHTML = "<tr><td>Select a Country</td></tr>";
        return;
    }
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        var dataArray = data.split("\n");
        var arrayLength = dataArray.length;
  
        var table = "<tr><th>City</th><th>Population</th></tr>";
  
        for (var index = 0; index < arrayLength; index++) {
          var line = dataArray[index].split("|");
          table += "<tr><td>" + line[0] + "</td><td class=\"right\">" + line[1] + "</td></tr>";
        }
  
        resultTable.innerHTML = table;
      }
      else {
        resultTable.innerHTML = "<tr><td>Loading...</td></tr>";
      }
    };
  
    xhttp.open("GET", text, true);
    xhttp.send();
  }
  
  function loadStudents(text) {
    //var value = document.getElementById("fileName").value;
    var xhttp = new XMLHttpRequest();

    var resultTable = document.getElementById("studentInfo");
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var myObj;

        try {
            myObj = JSON.parse(this.responseText);
        } catch (error) {
            resultTable.innerHTML = "<tr><td>Error parsing '" + text + "'</td></tr>";
            return;
        }
        
        var table="<tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>";
  
        for(var index = 0; index < myObj.students.length; index++) {
          table += "<tr><td>" +
          myObj.students[index].last + ", " + myObj.students[index].first +
          "</td><td>" +
          myObj.students[index].address.city + ", " + myObj.students[index].address.state + " " + myObj.students[index].address.zip +
          "</td><td>" +
          myObj.students[index].major +
          "</td><td>" +
          myObj.students[index].gpa +
          "</td></tr>";
        }

        resultTable.innerHTML = table;
      } else if (this.readyState == 4 && this.status == 404)
      {
        resultTable.innerHTML = "<tr><td>ERROR 404: FILE '" + text + "' NOT FOUND</td></tr>";
      } else {
        resultTable.innerHTML = "<tr><td>Loading...</td></tr>";
      }
    };
  
    xhttp.open("GET", "../" + text, true);
    xhttp.send();
  }