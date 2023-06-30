// for Admin Login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation
    if (username === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      window.location.href = "home.html"; // Redirect to next page
    } else {
      // Invalid login
      alert("Invalid username or password. Please try again.");
    }
  });

//For User Login
document
  .getElementById("loginMemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;

    // Perform validation
    if (username === "Member" && password === "password") {
      // Successful login
      alert("Login successful!");
      window.location.href = "home1.html"; // Redirect to next page
    } else {
      // Invalid login
      alert("Invalid username or password. Please try again.");
    }
  });

  //For User Login

  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      var username = document.getElementById("uName").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("uPass").value;

      // Perform validation
      if (
        username === "User1" &&
        email === "xyz@gmail.com" &&
        password === "pass"
      ) {
        // Successful login
        alert("Login successful!");
        window.location.href = "home2.html"; // Redirect to next page
      } else {
        // Invalid login
        alert("Invalid username or password. Please try again.");
      }
    });

const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  const authLinks = document.querySelector(".auth-links");

  navLinks.classList.toggle("active");
  authLinks.classList.toggle("active");
});


//Update And Delete User 
// Retrieve user data and populate HTML elements
var currentUser = firebase.auth().currentUser;
var usernameElement = document.getElementById("username");
var emailElement = document.getElementById("email");
usernameElement.textContent = currentUser.displayName;
emailElement.textContent = currentUser.email;

// Edit user information
function editUser() {
  document.getElementById("userInfo").style.display = "none";
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editUsername").value = currentUser.displayName;
  document.getElementById("editEmail").value = currentUser.email;
}

// Update user information
function updateUser() {
  var newUsername = document.getElementById("editUsername").value;
  var newEmail = document.getElementById("editEmail").value;

  currentUser.updateProfile({
    displayName: newUsername
  }).then(function() {
    currentUser.updateEmail(newEmail).then(function() {
      // User updated successfully
      console.log("User updated:", currentUser);
      // Additional actions like displaying a success message
    }).catch(function(error) {
      // Handle email update error
      console.error("Email update error:", error);
    });
  }).catch(function(error) {
    // Handle profile update error
    console.error("Profile update error:", error);
  });
}

// Cancel edit and go back to displaying user information
function cancelEdit() {
  document.getElementById("userInfo").style.display = "block";
  document.getElementById("editForm").style.display = "none";
}

// Delete user
function deleteUser() {
  currentUser.delete().then(function() {
    // User deleted successfully
    console.log("User deleted:", currentUser);
    // Additional actions like displaying a success message or redirecting to another page
  }).catch(function(error) {
    // Handle deletion error
    console.error("Deletion error:", error);
  });
}



// Get elements
const notificationContainer = document.getElementById('notification-container');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');

// Function to show the notification
function showNotification(message) {
  notificationMessage.textContent = message;
  notification.style.display = 'block';
}

// Function to close the notification
function closeNotification() {
  notification.style.display = 'none';
}

// Event listener for the close button
notificationClose.addEventListener('click', closeNotification);






// Get elements
const exportForm = document.getElementById('export-form');
const exportResults = document.getElementById('export-results');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Get selected report type
  const reportType = document.getElementById('report-type').value;
  
  // Simulate export process (replace with actual export logic)
  simulateExport(reportType);
}

// Function to simulate export process
function simulateExport(reportType) {
  // Display loading message
  exportResults.textContent = 'Exporting... Please wait.';
  exportResults.style.display = 'block';
  
  // Simulate delay for export process
  setTimeout(function() {
    // Display export results
    exportResults.textContent = `Successfully exported ${reportType} report.`;
  }, 2000);
}

// Event listener for form submission
exportForm.addEventListener('submit', handleFormSubmit);



// Sample product data (replace with your actual data)
const products = [
  {
    name: 'Product 1',
    image: 'product1.jpg',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Product 2',
    image: 'product2.jpg',
    price: 24.99,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  // Add more products here...
];

// Function to generate product HTML
function generateProductHTML(product) {
  return `
    <div class="product-item">
      <img src="images/${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    </div>
  `;
}

// Function to populate featured products
function populateFeaturedProducts() {
  const productContainer = document.getElementById("product-container");

  // Generate HTML for each product
  const productHTML = products
    .map((product) => generateProductHTML(product))
    .join("");

  // Add the product HTML to the container
  productContainer.innerHTML = productHTML;
}

// Call the function to populate featured products
populateFeaturedProducts();



