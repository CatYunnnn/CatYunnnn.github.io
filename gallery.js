const pistal = document.querySelector("#pistal");
const shorty = document.querySelector("#shorty");
const mainpage = document.querySelector("#mainpage");
const all = document.querySelectorAll(".menu");
const xhr = new XMLHttpRequest();
const setNull = function (x) {
  x["data"][`8`]["skins"][`29`]["displayIcon"] = null;
  x["data"][`11`]["skins"][`14`]["displayIcon"] = null;
  x["data"][`7`]["skins"][`26`]["displayIcon"] = null;
  x["data"][`9`]["skins"][`24`]["displayIcon"] = null;
  x["data"][`10`]["skins"][`23`]["displayIcon"] = null;
  x["data"][`16`]["skins"][`18`]["displayIcon"] = null;
  x["data"][`15`]["skins"][`31`]["displayIcon"] = null;
  x["data"][`6`]["skins"][`23`]["displayIcon"] = null;
  x["data"][`5`]["skins"][`24`]["displayIcon"] = null;
  x["data"][`3`]["skins"][`19`]["displayIcon"] = null;
  x["data"][`13`]["skins"][`13`]["displayIcon"] = null;
  x["data"][`13`]["skins"][`22`]["displayIcon"] = null;
  x["data"][`13`]["skins"][`26`]["displayIcon"] = null;
  x["data"][`4`]["skins"][`42`]["displayIcon"] = null;
  x["data"][`2`]["skins"][`38`]["displayIcon"] = null;
  x["data"][`14`]["skins"][`15`]["displayIcon"] = null;
  x["data"][`14`]["skins"][`16`]["displayIcon"] = null;
  x["data"][`12`]["skins"][`29`]["displayIcon"] = null;
  x["data"][`1`]["skins"][`25`]["displayIcon"] = null;
  x["data"][`0`]["skins"][`13`]["displayIcon"] = null;
  x["data"][`17`]["skins"][`42`]["displayIcon"] = null;
  x["data"][`17`]["skins"][`60`]["displayIcon"] = null;
}; //////////////////////////////////////////////////////////官方給的圖像有錯誤
const arr = [
  "8",
  "11",
  "7",
  "9",
  "10",
  "16",
  "15",
  "6",
  "5",
  "3",
  "13",
  "4",
  "2",
  "14",
  "12",
  "1",
  "0",
  "17",
];
const getImage = function (x, y) {
  let output = "";
  let output2 = "";
  let control = 0;
  for (let i = 0; i < x["data"][`${y}`]["skins"].length; i++) {
    if (x["data"][`${y}`]["skins"][`${i}`]["displayIcon"] && control === 0) {
      output +=
        `<div class="outside outside1 thumbnail">` +
        "<br>" +
        `<img class="image img-responsive" src="${
          x["data"][`${y}`]["skins"][`${i}`]["displayIcon"]
        }">` +
        "<br>"+'<p class="size">'+
        `${x["data"][`${y}`]["skins"][`${i}`]["displayName"]}`+"</p>"+
        "</div>";
      document.querySelector(`#first`).innerHTML = output;
      control === 1 ? (control = 0) : (control = 1);
    } else if (
      x["data"][`${y}`]["skins"][`${i}`]["displayIcon"] &&
      control === 1
    ) {
      output2 +=
        `<div class="outside outside2 thumbnail">` +
        "<br>" +
        `<img class="image img-responsive" src="${
          x["data"][`${y}`]["skins"][`${i}`]["displayIcon"]
        }">` +
        "<br>" +'<p class="size">'+
        `${x["data"][`${y}`]["skins"][`${i}`]["displayName"]}`+"</p>"+
        "</div>";
      document.querySelector(`#second`).innerHTML = output2;
      control === 1 ? (control = 0) : (control = 1);
    }
  }
};
xhr.open("GET", "https://valorant-api.com/v1/weapons", true);
xhr.onload = function () {
  let users = JSON.parse(xhr.responseText);
  setNull(users);
  getImage(users, "8");
};
xhr.send();
for (let x = 0; x < all.length; x++) {
  all[x].addEventListener("click", function (e) {
    mainpage.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    control = 0;
    xhr.open("GET", "https://valorant-api.com/v1/weapons", true);
    xhr.onload = function () {
      let users = JSON.parse(xhr.responseText);
      console.log(users);
      setNull(users);
      getImage(users, arr[x]);
    };
    xhr.send();
  });
}