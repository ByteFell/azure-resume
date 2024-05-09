window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})


//This sets up the API variable with an empty string for now
const funtionApi = '';

//
const getVisitCount = () =>{
    let count = 30;
    fetch(functionApi).then(Response =>{
        return Response.json()
    }).then(Response =>{
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("Counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}