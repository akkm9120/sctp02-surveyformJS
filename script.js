const prompt = require("prompt-sync")();
let people =[];

const btn_submit =document.querySelector("#btn_submit");
btn_submit.addEventListener("click",()=>{
    let first_name=document.querySelector("#first_name").value
    let last_name=document.querySelector("#last_name").value;
    
    const checkedHobies = document.querySelectorAll(".hobbies:checked")
    const hobby =checkedHobies.value;

    const edu_level = document.querySelectorAll(".edu:checked")?.value || "No Educational lvl Selected";

    let selected_scents = [];

    const checked_secnts = document.querySelectorAll(".scent:checked").value
    for (s of checked_secnts){
        const scents = s.value;
        selected_scents.push(scents);
    }

    let selected_Cusines = [];

    const checked_Cuisine = document.querySelectorAll(".cuisine:checked").value
    for (c of checked_Cuisine){
        const cuisine = c.value;
        selected_Cusines.push(cuisine);
    }

    const country = document.querySelector("#country").value;



    const output = document.querySelector("#output");
    output.style.display="block";
    output.innerHTML += `
     <ul>
        <li>Name: ${firstName} ${lastName}</li>
        <li>Country: ${country}</li>
        <li>Favorite Hobby: ${hobby}</li>
        <li>Educational Level: ${educationalLevel}</li>
        <li>Scent: ${selectedScents}</li>
        <li>Favorite Cuisine: ${favoriteCuisines}</li>
     </ul>`



    create(people,first_name,last_name,hobby,edu_level,selected_scents,selected_Cusines,country);
    
})

