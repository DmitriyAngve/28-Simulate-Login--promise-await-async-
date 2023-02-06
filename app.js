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
const message = adder(output, "div", ":", false, false);
userName.value = "Angve";
userPsw.value = "1234";

function encry() {
  const url = "data.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const val = btoa(item.pass);
        const val1 = atob(val);
        console.log(val, val1);
      });
    });
}

btn.addEventListener("click", checker);

function checker(e) {
  if (userName.value.length > 3 && userPsw.value.length > 3) {
    console.log(userName.value, userPsw.value);
    addStyler([userName, userPsw], "");
    async function aCall() {
      console.log("call made");
      const data = await getList();
      console.log(data);
      let okay = false;
      let user = userName.value;
      data.forEach((user) => {
        let found = [];
        if (user.user == userName.value) {
          //   console.log("User Match");
          found[0] = true;
        } else {
          found[0] = false;
        }
        // let decodedPass = atob(user.value);
        if (user.pass == userPsw.value) {
          //   console.log("Password Match");
          found[1] = true;
        } else {
          found[1] = false;
        }
        if (found[0] && found[1]) {
          okay = true;
          user = user.user;
        }
      });
      if (okay) {
        console.log(`${user} Allowed!`);
        output.innerHTML = `<h2>Welcome ${user}</h2><div>Secret Content</div>`;
      } else {
        message.innerHTML = `${user} Denied!`;
      }
    }
    aCall();
  } else {
    addStyler([userName, userPsw], "red");
  }
}

function getList() {
  const url = "data.json";
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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
