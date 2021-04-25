let idCount = 1;
let txt = document.getElementById("inp_task");

txt.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn_add").click();
  }
});

btn_add.onclick = function () {
  if(txt.value == "")
    return;
  let div2 = document.createElement("div");
  console.log(txt.value);
  div2.innerHTML = "<div class='txt'>" + txt.value + "</div>" + "<div class='del_btn' onclick='del_btn(this)'></div>";
  div2.setAttribute("id", "task" + idCount);
  div2.setAttribute("class", "task");
  idCount++;
  let div1 = document.getElementById("div1");
  div1.insertBefore(div2, div1.firstElementChild);
  txt.value = "";
};
function del_btn(ele){
let toDelDiv = ele.parentNode;
toDelDiv.remove();
}