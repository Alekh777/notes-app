let idCount = 0;
let txt = document.getElementById("inp_task");

//Detecting enter key press
txt.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn_add").click();
  }
});

//loading all the stored tasks on localStorage on page load
let j = 1;
while (localStorage.getItem("task" + j) != null) {
  let item = localStorage.getItem("task" + j);
  txt.value = item;
  loadStoredTasks();
  j++;
}

function loadStoredTasks() {
  let div2 = document.createElement("div");
  div2.innerHTML =
    "<div class='txt'>" +
    txt.value +
    "</div>" +
    "<div class='del_btn' onclick='del_btn(this)'></div>";
  div2.setAttribute("id", "task" + ++idCount);
  div2.setAttribute("class", "task");
  div2.setAttribute("onclick", "focusTask(this.id);");
  let div1 = document.getElementById("div1");
  div1.insertBefore(div2, div1.firstElementChild);
  txt.value = "";
}


//ADDITION
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
  div2.setAttribute("onclick", "focusTask(this.id);");
  localStorage.setItem("task" + idCount, txt.value);
  localStorage.setItem("content" + idCount, "");
  let div1 = document.getElementById("div1");
  div1.insertBefore(div2, div1.firstElementChild);
  txt.value = "";
  console.log(idCount);
};


//DELETION
let element;

function del_btn(ele) {
  element = ele;
  delAlert.style.display = "block";
}

yes.addEventListener("click", function () {
  console.log(element);
  del(element);
  delAlert.style.display = "none";
});

no.addEventListener("click", function () {
  delAlert.style.display = "none";
});

function del(ele) {
  let ID = ele.parentNode.id;
  let idNo = parseInt(ID.slice(4));
  console.log(ID);
  localStorage.removeItem(ID);
  ele.parentNode.remove();
  let i = idNo + 1;
  for (; i <= idCount; i++) {
    //handling the ids of tasks
    document.getElementById("task" + i).id = "task" + (i - 1).toString();

    //handling the local storages' keys
    let temp = document.getElementById("task" + (i - 1).toString());
    localStorage.setItem("task" + parseInt(i - 1).toString(), temp.innerText);
    localStorage.setItem("content" + parseInt(i - 1).toString(), localStorage.getItem('content' + i));
  }
  idCount--;
  console.log(idCount);
  localStorage.removeItem("task" + (idCount + 1).toString());
  localStorage.removeItem("content" + (idCount + 1).toString());
  content.value = "";
  heading.innerText = "Note";
  delAlert.style.display = "none";
}

let ID = "";
let tGlobal = "";
function focusTask(id){
  console.log("id=",id);
  if(parseInt(tGlobal.slice(4)) > idCount){
    console.log(idCount, tGlobal)
    tGlobal = "";
  }
  if(tGlobal != ""){
    document.getElementById(tGlobal).classList.remove("focus");
    let txt = document.querySelector("#" + tGlobal + " .txt");
    console.log(txt);
    txt.classList.remove("focus");
  }
  let t = document.getElementById(id);
  tGlobal = id;
  t.classList.add("focus");
  let txt = document.querySelector("#" + id + " .txt");
  txt.classList.add("focus");
  document.getElementById('heading').innerText = document.getElementById(id).innerText;
  let item = localStorage.getItem("content" + id.slice(4));
  if(item != null)
    content.value = item;
  else
    content.value = "";
  ID = id;
}

function saveIt(){
  console.log(typeof ID.slice(4))
  if(ID.slice(4) == "")
  {
    window.alert('Select a Note to save!');
    return;
  }
  console.log("content" + ID.slice(4));
  localStorage.setItem("content" + ID.slice(4), content.value);
}

document.addEventListener("keydown", function(e) {
  if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
    e.preventDefault();
    saveIt();
  }
}, false);