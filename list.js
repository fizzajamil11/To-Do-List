const input=document.getElementById("taskInput");
const button=document.getElementById("addBtn");
const list=document.getElementById("taskList");

button.addEventListener("click",function() {
   const text=input.value.trim();
if(text===""){
    return 0;
}
const li=document.createElement("li");
    li.textContent= text;

const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.classList.add("btn1");
    list.appendChild(li);

    input.value="";

});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.closest("li").remove();
  }
});