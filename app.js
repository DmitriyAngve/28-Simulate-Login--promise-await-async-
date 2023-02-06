// This is not a Secure login as its all frontend code and the JSON file is not secure
const output = document.querySelector(".output");
// const userName = document.createElement("input");
// const userPsw = document.createElement("input");
// const btn = document.createElement("button");
// output.append(userName);
// output.append(userPsw);
// output.append(btn);

const userName = adder(output, "input", false, "text", false);
const userPsw = adder(output, "input", false, "password", false);
const btn = adder(output, "button", "Login", false, "btn");

btn.addEventListener("click", checker);

function checker(e) {
  if (userName.value.length > 3 && userPsw.value.length > 3) {
    console.log(userName.value, userPsw.value);
    addStyler([userName, userPsw], "");
  } else {
    addStyler([userName, userPsw], "red");
  }
  console.log(userName.value, userPsw.value);
}

function adder(parent, eleType, html, att, cla) {
  const ele = document.createElement(eleType);
  if (html) ele.innerHTML = html;
  if (att) ele.setAttribute("type", att);
  if (cla) ele.classList.add(cla);
  //   return parent.append(ele);
  return parent.appendChild(ele); // ap"endChild()" возвращает элемент в отличие от "append()"
}

function addStyler(eles, colr) {
  eles.forEach((ele) => {
    ele.style.color = colr;
    ele.style.borderColor = colr;
  });
}
