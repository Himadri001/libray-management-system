const database = require('./js/database');

// Populates the persons table
window.onload = function() {
  populateTable();

}
function populateTable(){
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].userid + '</td>';
      tableBody += '  <td>' + persons[i].uname + '</td>';
      tableBody += '  <td>' + persons[i].udesignation + '</td>';
      tableBody += '  <td>' + persons[i].uemail + '</td>';
      tableBody += '  <td>' + persons[i].uphone + '</td>';
      tableBody += '  <td>' + persons[i].title + '</td>';
      tableBody += '  <td><input type="button" class="btn btn-outline-primary" value="Update" onclick="editPerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '  <td><input type="button" class="btn btn-outline-danger" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;

  });
}

  // Retrieve the persons
  // Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table
  populateTable();
}



// Deletes a person

