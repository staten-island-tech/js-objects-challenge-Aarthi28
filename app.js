/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age:function(){
        console.log(this);
        return 2020-this.dob;
    }
};
 */

/* const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name:"Marge",
            age:32
        },
        son: {
            name:"Bart",
            age:10
        }
    },
    pets: ["cats", "dog"]
};

//adds property to object aka Homer
Homer.family.daughter = {
    name: "Lisa",
    age:8
}; */

//destructuring
/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age:function(){
        console.log(this);
        return 2020-this.dob;
    }
}; */

/* const {name,age} = Riya;

const calc ={
    add: function(){
        return x + y;
    }
};

const {add} = calc; */

/* const Angel = Riya; //this is not a COPY, it's a reference to
Angel.name = "Angel";
 */

/* const Angel = {};
Angel.dob = Riya.dob; */

/* const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
  
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  const Dems = presidents.filter(president => president.party === "D");
  console.log(Dems);

  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
  function Repubs1(president){
      if (president.party === "R" && president.terms === 1){
          return president;
      }
  };
  console.log(presidents.filter(Repubs1));
  
  //3) return only the last three presidents
  const Last3 = presidents.slice(9,12);
  console.log(Last3);

  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
  const Dems2 = presidents.filter(president => president.party === "D").filter(president => president.terms === 2).slice(/*???*///);
  //console.log(Dems2);

  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done" */

  ////////////////////////////////////////////////////////////////
//const header = document.querySelector(".header");
/* const items = document.querySelectorAll(".list-item");
const itemsArr = Array.from(items);
itemsArr.forEach(element=>element.style.backgroundColor="red"); */

//const header = document.querySelector("#Idheader");
/* const header = document.getElementById("Idheader");
const toggle = document.querySelector(".toggle"); */
/* header.classList.add("Karen"); //adds and removes classes easily
header.classList.remove("Karen");   */
/* toggle.addEventListener("click", function(){
    header.classList.toggle("Karen");
}); */

//button clicked, change background to red
//button clicked, change background to blue 
const background = document.querySelector(".background");
const button = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

/* button.addEventListener("click", function(){
    if(background.style.backgroundColor !== "rgb(255, 0, 0)"{
        background.style.backgroundColor = "rgb(255, 0, 0)";
    } else{
        background.style.backgroundColor = "rgb(0, 0, 255)";
        headerTwo.textContent = "Blue";
    }
}); */

//generate 3 numbers for R G and B (store in variables)
//get random number, make random number usuable

button.addEventListener("click", function(){
    const R = Math.floor((Math.random())*255); //scoped variable
    const G = Math.floor((Math.random())*255);
    const B = Math.floor((Math.random())*255);
    background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    headerTwo.textContent =`rgb(${R}, ${G}, ${B})`;
});
