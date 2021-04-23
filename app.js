let idCount = 1;
btn_add.onclick = function () {
    let div2 = document.createElement("div");
  div2.appendChild(document.createTextNode("this is test"));
  div2.setAttribute('id', "task"+idCount);
  idCount++;
  let div1 = document.getElementById("div1");
  div1.appendChild(div2);
  
};

btn_del.onclick = function () {
    document.getElementById("task"+ --idCount).remove();
};
