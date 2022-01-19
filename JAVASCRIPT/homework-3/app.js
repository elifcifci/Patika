const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },

  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

for (let i = 0; i <= menu.length; i++) {
  let sectionDOM = document.querySelector(".section-center");
  sectionDOM.innerHTML = document.createElement("div");
  let divFirst = document.querySelector("sectionDOM>div");
  divFirst.classList.add("card", "mb-3", "col-sm-5", "offset-1");
  divFirst.setAttribute("id", `${i}`);

  divFirst.innerHTML = document.createElement("div");
  let divSecond = document.querySelector("sectionDOM>div>div")
  divSecond.classList.add("row", "g-0")

  divSecond.innerHTML = document.createElement("div");
  let divThirth_1 = document.querySelector("divSecond>div");
  divThirth_1.classList.add("col-md-4");

  divThirth_1.innerHTML = document.createElement("img")
  let imgs = document.querySelector("divThirth_1>img");
  imgs.setAttribute("src", `${i}`)
  imgs.classList.add("img-fluid", "img", "photo");

  divSecond.innerHTML = document.createElement("div");
  let divThirth_2 = document.querySelector("divSecond>div+div");
  divThirth_2.classList.add("col-md-8");

  divThirth_2.innerHTML = document.createElement("div");
  let divFourth= document.querySelector("divThirth_2>div");
  divThirth_1.classList.add("card-body", "row");

  divFourth.innerHTML = document.createElement("h4");
  let h4 = document.querySelector("divFourth>h4");
  h4.classList.add("title", "col-sm-8");

  divFourth.innerHTML = document.createElement("h4");
  let h4 = document.querySelector("divFourth>h4+h4");
  h4.classList.add("price", "col-sm-4" , "ms-auto");

  divFourth.innerHTML = document.createElement("hr");

  divFourth.innerHTML = document.createElement("p");
  let p = document.querySelector("divFourth>h4+h4+p");
  h4.classList.add("desc");
}

 let cardDOM = document.querySelectorAll(".card");
 let titleDOM = document.querySelectorAll(".title");
 let priceDOM = document.querySelectorAll(".price");
 let imgDOM = document.querySelectorAll(".img");
 let descDOM = document.querySelectorAll(".desc");

 menu.forEach((value, index) => {
   titleDOM[index].innerHTML = menu[index].title;
   priceDOM[index].innerHTML = menu[index].price;
   descDOM[index].innerHTML = menu[index].desc;
   imgDOM[index].setAttribute("src", menu[index].img);
 });



