const btnMas = document.querySelector(".btnMas");
const menu = document.querySelector(".menu");

btnMas.addEventListener("click", function(event){
    event.preventDefaul
    menu.classList.toggle("active")
})

const slides = document.querySelector(".slider-items").children;
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const total_slides = slides.length;
let index = 0;

next.onclick = function() {
    next_index("next");
}

prev.onclick = function() {
    next_index("prev")
}

function next_index(direction){
    if(direction === "next"){
        index++;
        if(index === total_slides){
            index = 0;
        }
    }else{
        if(index === 0){
            index = total_slides-1;
        }else{
            index --
        }
    }
    for(i=0; i<slides.length; i++){
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active");
}

const nameSend = document.getElementById("name-send")
const lastnameSend = document.getElementById("lastname-send")
const emailSend = document.getElementById("email-send")
const mesageSend = document.getElementById("message-send")
const TransactionForm = document.getElementById('AddNewTransactionForm');
let subString = " ";
let subat = "@"

TransactionForm.addEventListener('click', function(event){
    console.log("hola")
    event.preventDefault();
    if(!nameSend.value || !lastnameSend.value || !emailSend.value || !mesageSend.value){
        alert("Completa todos los recuadros para enviar el formulario.")
        return
    }
    if(nameSend.value.includes(subString) || lastnameSend.value.includes(subString) || !emailSend.value.includes(subat) || !emailSend.value.includes(".")){
        alert('Algun dato que ingreso es incorrecto, chequee los campos.')
        return
    }

    console.log(`
    Nombre: ${nameSend.value} 
    Apellido: ${lastnameSend.value}
    email: ${emailSend.value}
    message: ${mesageSend.value}
    `)

    alert("Su solicitud ha sido enviada correctamente!")

    nameSend.value = "";
    lastnameSend.value = "";
    emailSend.value = "";
    mesageSend.value = "";
})

const skillsBox = document.getElementById("center");

const skills = [
    {id:1, lenguage: "Html", porcentaje: "48%"},
    {id:2, lenguage: "css", porcentaje: "37%"},
    {id:3, lenguage: "Java Sript", porcentaje: "15%"},
    {id:4, lenguage: "Java", porcentaje: "50%"},
    {id:5, lenguage: "Python", porcentaje: "73%"},
]

function SkillsBox(skills){
    let i = 0;
    for(i = 0; i < skills.length; i++){
        skillsBox.innerHTML += `
        <div class="skillsbox">
            <p>${skills[i].lenguage}</p>
            <p>${skills[i].porcentaje}</p>
            <div class="skill">
                <div class="skill_level" style="width: ${skills[i].porcentaje}"></div>
            </div>
        </div>
    `
    }
}

SkillsBox(skills)