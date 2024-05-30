const box_gredient =document.querySelector(".gredient-box")
const select_menu =document.querySelector(".select-box select")
const textarrea =document.querySelector("textarea")
const colors_inputs =document.querySelectorAll(".color input")
const refresh_btn =document.querySelectorAll("button.refresh")
const copy_btn =document.querySelectorAll(".copy")





const generateur = () => {
    const gredient = `linear-gradient(${select_menu.value} , ${colors_inputs[0].value} , ${colors_inputs[1].value})`;
    box_gredient.style.background=gredient;
    textarrea.value= `background : ${gredient}`
}
colors_inputs.forEach((i)=>{
    i.addEventListener("input",generateur())
})
select_menu.addEventListener("change",generateur)
