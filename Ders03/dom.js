

// // let value;
// // value=document.URL;

// //id ile seçme
// // value=document.getElementById("title");

// const button=document.createElement("a");
// button.id="deneme";
// button.className="btn btn-danger";
// button.href="https://www.yandex.com.tr/search/?text=google&lr=107756&clid=2411726&src=suggest_B";
// button.target="_blank";
// button.textContent="googla git";
// const divs=document.querySelector("#denemeDiv");
// divs.appendChild(button);
// value=document.getElementById("deneme");
// value.addEventListener("click",function(){
//     console.log("tıklama oldu")
// });
// console.log(value);

const textInput=document.querySelector("#text-input");
textInput.addEventListener("keyup",()=> console.log(textInput.value));
textInput.addEventListener("focus",()=>(textInput.value=""));
textInput.addEventListener("blur",()=>console.log("çıkış"));