

// var a=10;
// var b=3.14;
// var c="javascript";

 
// var first; //hosting 
// console.log(first);
// first=20;
// deneme();   // mülakat sorusu 
// function deneme(){
//     console.log("a fonksiyonu");
// }


// 
//object
// var user={
//     name:"hakan",
//     age:30,
//     isActive:true,
//     notlar:["mat:50","fizik:80"],
//     favorite:["elma","armut"],
// };
// console.log(user);                                                                                                                                                                                                                                                                                                                                        



// var a=[10,20,30,40];  //array olarak geçtiği için js çeviriyor
// var b=a;
// console.log("1-",a,b);
// a[0]=60;
// console.log("2-",a,b);

//  var a=10;
//  function scope(){
//      var b=20;
//      c
//console.log(a,b);
// }
// if(true){
//     var c=30;
//     b=40;

// }{


// var d=40;
// }console.log(a,b,c,d);

// var a=5+"2";
// console.log(a, typeof a);



// let value;
// const first="varol";
// const last="sarı";
// const age=30;

// value=`İsim:${first}+soy isim:${last}+yaş:${age}`;
// console.log(value);


// const langs=["python","java","c++","js"];
// const numbers=[34,56,7,8,90,44,55,67];
// value=numbers.length;
// value =numbers[0];

// console.log(value);


// const student={
//     fullname:"sevval",
//     age:30,
//     adres:{city:"istanbul",country:"türkiye"},

//     work:function (){
//         console.log("calışıyor");
//     }
// };
// value=student;
// value=student.fullname;
// value=student.work();
// console.log(value);

// let date=new Date();
// value=date;
// value=`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
// console.log(value);

// let a=10;
// let b=20;

// if(a>b){
//     value=`${a} buyuk`;
// }else if(a==b){
//     value=`${a} eşittir ${b}`;
// }else{
//     value=`${a} küçük`;
// }
// const islem=3;
// switch (islem){
//     case 1:
//         value="islem 1";
//         break;
//     case 2:
//         value="islem 1";
//         break;
//     case 3:
//         value="islem 1";
//         break;
    
// }

// function merhaba(){
//     console.log("merhaba");
// }
// merhaba();

// function square(x){
//     return x*x;
// }
// const result=square(5)*3;
// console.log(result);

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

const langs=["python","c++","c"];
langs.forEach(function(langs,index){
    console.log(langs,index);
});