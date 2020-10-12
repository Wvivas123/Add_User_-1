document.getElementById('myForm').onsubmit = function () {
  //get values from forms
  const firstName = document.getElementById('firstName').value;

  const secondName = document.getElementById('secondName').value;

  const email = document.getElementById('email').value;

  //const userName = document.getElementById('userName').value;

  const newUser = JSON.stringify({
    firstName: firstName,
    secondName: secondName,
    email: email,
  });
  alert(newUser);

  $.ajax({
    type: 'POST',
    url: 'https://vast-reaches-61935.herokuapp.com/user',
    data: newUser,
    success: function () {
      alert('it works');
    },
    dataType: 'json',
    contentType: 'application/json',
  });
};
