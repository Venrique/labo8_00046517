
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    if(formulario[1].value!==""){
        formulario[1].style.borderColor="green";
    }else{
        formulario[1].style.borderColor="red";
    }

    formulario[2].value = formulario[2].value.trim();

    if(formulario[2].value!==""){
        formulario[2].style.borderColor="green";
    }else{
        formulario[2].style.borderColor="red";
    }

    if(formulario[3].value!==""){
        formulario[3].style.borderColor="green";
    }else{
        formulario[3].style.borderColor="red";
    }

    if(formulario[1].value!=="" && formulario[2].value!=="" && formulario[3].value!==""){
    let bitacora = { 
        cant:cont, 
        fecha: formulario[1].value, 
        descripcion: formulario[2].value, 
        cantidad: formulario[3].value 
      }
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }else{
        alert("No puede dejar campos vacíos");
    }
});

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    let btn = document.createElement("button");
    var t = document.createTextNode("eliminar");
    btn.appendChild(t);
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click"); 
        tr.appendChild(td);
        tr.appendChild(btn);

        btn.addEventListener("click", (evt) =>{
            tbody.removeChild(tr);
            bitacoras.splice(bitacoras.indexOf(bitacora),1);
        })
    }); 
    tbody.appendChild(tr);

}

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
} 

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 
