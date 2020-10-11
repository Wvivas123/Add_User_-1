document.getElementById('myForm').onsubmit = function () {
  //get values from forms
  const firstName = document.getElementById('firstName').value;
  const secondName = document.getElementById('secondName').value;
  const email = document.getElementById('email').value;
  const userName = document.getElementById('userName').value;
  //JSON the Data
  const newUser = JSON.stringify({
    firstName: firstName,
    secondName: secondName,
    email: email,
    userName: userName,
  });
  //send Data to Server
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8000/user',
    data: newUser,
    success: function () {
      alert('it works');
    },
    dataType: 'json',
    contentType: 'application/json',
  });
};
