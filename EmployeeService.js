import axios from "axios";

// Define the URL you want to make a request to
const apiUrl = "http://localhost:8080/api/employees";

// Make a GET request to the API endpoint
axios.get(apiUrl)
  .then(response => {
    // Handle the successful response
    console.log("Response:", response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error("Error:", error);
  });
