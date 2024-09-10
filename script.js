// 1. Question
// var btn = document.querySelector("button");
// var p = document.querySelector("p");

// btn.addEventListener("click", function () {
//   p.textContent = "Hey Mahmood!";
//   p.style.background = "green";
//   p.style.fontFamily = "arial";
//   p.style.fontSize = "3rem";
// });

//2. Question
// var img1 = document.querySelector("#one");
// var img2 = document.querySelector("#two");

// document.querySelector("button").addEventListener("click", function () {
//   var src1 = img1.src;
//   var src2 = img2.src;

//   img1.src = src2;
//   img2.src = src1;
// });

//3. Question
// var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");

// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();
//   console.log(inp1.value);
// });

//4. Question
// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul = document.querySelector("ul");

// var li;

// add.addEventListener("click", function () {
//   if (inp.value.trim() === "") {
//   } else {
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value = "";
//   }
// });

// remove.addEventListener("click", function () {
//   ul.removeChild(li);
// });

//5. Question
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");
// var int;
// start.addEventListener("click", function () {
//   var count = 0;
//   int = setInterval(function () {
//     h3.textContent = count;
//     count++;
//   }, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(int);
// });

//6.Quetion
// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");

// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

// hometext.style.display = "block";
// hometext.style.width = "50%";

// home.addEventListener("click", function () {
//   hideAllText();
//   hometext.style.display = "block";
//   hometext.style.width = "50%";
// });

// about.addEventListener("click", function () {
//   hideAllText();
//   abouttext.style.display = "block";
//   abouttext.style.width = "50%";
// });

// contact.addEventListener("click", function () {
//   hideAllText();
//   contacttext.style.display = "block";
//   contacttext.style.width = "50%";
// });

// function hideAllText() {
//   document.querySelectorAll("h3").forEach(function (h3) {
//     h3.style.display = "none";
//   });
// }

//7. Question
// var prg = document.querySelector("#progress");
// var h3 = document.querySelector("h3");

// var count = 0;
// var int = setInterval(function () {
//   if (count === 100) {
//     h3.style.opacity = 1;
//     clearInterval(int);
//   }
//   count++;
//   prg.style.width = count + "%";
// }, 50);

//8. Question

var input = document.querySelector("input");
var data = [
  {
    name: "Neha",
    src: "https://images.unsplash.com/photo-1712068944618-21bbd010c8ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Geeta",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Akansha",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Khushboo",
    src: "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `   <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
            </div>`;
});
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `   <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
            </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
