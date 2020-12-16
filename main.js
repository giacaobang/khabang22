// var a = 10;
// var b = 25;
// var c = a + b;

// document.write("c = " + c + "\n");
// var x = 100 + 200;
// document.write("x = " + x);

// var a = prompt("Nhap chieu dai: ", "0");
// var b = prompt("Nhap chieu rong: ", "0");

// console.log(a);
// alert("Dien tich hinh chu nhat: " + a*b);


// alert("Welcome to Game Zone!");
// if(confirm("Do you want to play?")) {
//     var n = prompt("Enter your name: ")
//     alert(n+ "! now you are part of the game, enjoy!")
// }


// function myF () {
//     var person = prompt("Please enter your name!", "Harry Potter");
//     if(person != null) {
//         document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
//     }
// }

var bd = prompt("Nhap ngay thang nam sinh (dd/mm/yyyy): ", "0");

var cur = new Date();
var birthday = new Date(bd).getFullYear();

// var diff = Math.floor(cur.getTime() - birthday.getTime());

// document.getElementById("date").innerHTML= "Ban duoc sinh ra vao thu: " + birthday.getDay();
document.getElementById("age").innerHTML = "Hom nay ban duoc " +(cur.getFullYear() - 2001) + " tuoi" ;