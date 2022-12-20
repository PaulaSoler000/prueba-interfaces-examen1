// nombre_del_alumno
let el = document.querySelector("#login [data-dialog]")
el.addEventListener("click",function(){
    let nombre = document.querySelector("input[name=nombre]").value
    document.querySelector("a.menu_usuario").innerText = nombre
})
// Completar JS aqui