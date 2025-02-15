/*// 1 - Inserir dado
localStorage.setItem("name","Nico")

// 2 - Restart sem perder dados

// 3 - Resgatar item
const name = localStorage.getItem("name");

console.log(name);

// 4 - Resgatando item que não existe
    const lastName = localStorage.getItem("lastname");

    console.log(lastName);

// 5 - Remover item
//localStorage.removeItem("name")

// 6 - limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log (typeof localStorage.getItem("a"));

//localStorage.clear();*/

const infoForm = document.querySelector("#join-form");

infoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailLs = document.getElementById('emailInput');
    
    localStorage.setItem("email", emailLs.value)

    emailLs.value = ""; 
});


// 5 - Remover item
localStorage.removeItem("a")
localStorage.removeItem("b")
localStorage.removeItem("name")