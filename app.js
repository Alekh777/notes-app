let idCount = 1;
btn_add.onclick = function () {
  let div2 = document.createElement("div");
  let txt = document.getElementById('inp_task').value;
  console.log(txt);
  div2.appendChild(document.createTextNode(txt));
  div2.setAttribute('id', "task"+idCount);
  idCount++;
  let div1 = document.getElementById("div1");
  div1.appendChild(div2);
  
};
