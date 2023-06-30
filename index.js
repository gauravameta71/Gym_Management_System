var firebaseConfig = {
  apiKey: "AIzaSyCTs_cQ77yiVSfrJa5QxlbozRv6f1fkLKU",
  authDomain: "gym-management-website-59e11.firebaseapp.com",
  databaseURL: "https://gym-management-website-59e11-default-rtdb.firebaseio.com",
  projectId: "gym-management-website-59e11",
  storageBucket: "gym-management-website-59e11.appspot.com",
  messagingSenderId: "121033252359",
  appId: "1:121033252359:web:f96b3445439e562fe154a2",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var userFormDB = firebase.database().ref("userForm");

document
  .getElementById("registrationForm")
  .addEventListener("submit", submitForm);

  function submitForm(e) {
    // e.preventDefault();

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var gender = document.getElementById("gen");
    var password = document.getElementById("password");

    saveMessages(fname, lname, email, age, gender, password);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("registrationForm").reset();
  }
  const saveMessages = () => {
    var newUserForm = userFormDB.push(
      fname,
      lname,
      email,
      age,
      gender,
      password
    );

    newUserForm.set({
      first_name: fname,
      lirst_name: lname,
      age:age,
      gender:gender,
      emailid: emailid,
      msgContent: msgContent,
    });
  };

//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };