document.addEventListener("DOMContentLoaded", (event) =>{
    let data = document.getElementById("data");
    let texto = localStorage.getItem("texto");
    data.innerHTML = texto; 
});