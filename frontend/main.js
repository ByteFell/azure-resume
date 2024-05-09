
// winow object used for browser interaction
// addEventListener'DOMContentLoaded' listens for html page loading
window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount(); // calls getVisitCount after webpage loads
})


//This sets up the API variable with an empty string for now
const functionApi = ''; //declares the variable functionAPI - this will take in and store th api url

// declares getVisitCount function 
const getVisitCount = () =>{ // arrow function used to create readable block of code
    let count = 30; //eclares initial count
    fetch(functionApi).then(Response =>{ // fetches the api url from where its kept
        return Response.json() // .then stores it as JSON for easier handling.
    }).then(Response =>{
        console.log("Website called function API."); // checking if the website calls api function
        count = Response.count; // sets joins api response with count
        document.getElementById("Counter").innerText = count; // add the visiter count to the html where ID is "counter"
    }).catch(function(error){ // basic error handling
        console.log(error);
    });
    return count;
}