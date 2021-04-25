let idCount = 0;
let txt = document.getElementById("inp_task");

txt.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn_add").click();
  }
});
btn_add.onclick = function () {
  if (txt.value == "") return;
  let div2 = document.createElement("div");
  div2.innerHTML =
    "<div class='txt'>" +
    txt.value +
    "</div>" +
    "<div class='del_btn' onclick='del_btn(this)'></div>";
  div2.setAttribute("id", "task" + ++idCount);
  div2.setAttribute("class", "task");
  localStorage.setItem("task" + idCount, txt.value);
  let div1 = document.getElementById("div1");
  div1.insertBefore(div2, div1.firstElementChild);
  txt.value = "";
  console.log(idCount);
};
function del_btn(ele) {
  let ID = ele.parentNode.id;
  let idNo = parseInt(ID.slice(4));
  console.log(ID, idNo);
  localStorage.removeItem(ID);
  ele.parentNode.remove();
  let i = idNo + 1;
  for (; i <= idCount; i++) {

    //handling the ids of tasks
    document.getElementById("task" + i).id = "task" + (i-1).toString();

    //handling the local storages' keys
    let temp = document.getElementById('task' + (i-1).toString());
    localStorage.setItem("task" + (parseInt(i-1)).toString(), temp.innerText);

  }
  idCount--;
  console.log(idCount);
  localStorage.removeItem('task' + (idCount+1).toString());
}
