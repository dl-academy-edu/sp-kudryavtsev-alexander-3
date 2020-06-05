// первое

// let name, sName, age;

// name = prompt("введите ваше имя: ",);
// sName = prompt("введите вашу фамилию: ",);
// age = +prompt("введите ваш вазраст: ", 18);

// console.log(name);
// console.log(sName);
// console.log(age);

// let user = {};

// user.name = name;
// user.sName = sName;
// user.age = age;

// console.log(user);


// второе


//  let age;
//  age = prompt("введите ваш вазраст: ", 18);

//   for (let i=1 ; i <= age; i++)
//        {
//   if      ( i % 4 !== 0){
//     console.log(i)
//    }
  
//         }
function myfunk(){
  let useNum5 = +prompt("введите число: ", 18);
    let timerId = setInterval (function() {
      
        for(var i=0; i<1; i++) {
          
            useNum5 +=3;
            console.log(useNum5);
        }
    }, 3000)

    setTimeout (function () {
        clearInterval (timerId);
        console.log ("clearInterval");
    }, 9000)
    }
    myfunk();

