document.addEventListener("DOMContentLoaded",()=>{
    var btn = document.querySelector(".btn");
    var iput = document.querySelector(".iput");
    var ul = document.querySelector("ul");

    btn.addEventListener("click",function (){
    var value = iput.value.trim();
    if(value == '')return;
    var li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
   ul.value = '';

})
})
