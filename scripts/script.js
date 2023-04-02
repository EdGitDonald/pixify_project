const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];
const displaySub = (imageSets) => {
const submissionCon = document.getElementById("subContainer");
 const containers = imageSets.map (port => {
    return `<div class="port-css">
    <img src=${port.images[0]} alt=${port.name} class="port-image" />
      <div class="port-info">
      <p>${port.title} - ${port.name}</p>
      <a href="details.html?id=${port.id}">see more</a>
      </div>
    </div>`;
 }).join("");

 
 subContainer.innerHTML = containers;
}

window.onload = function(){
  displaySub(imageSets);
}


const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const link = document.querySelectorAll(".port-css a");
  const title = document.querySelectorAll(".port-css p");
  const header = document.querySelectorAll("h1");

  if(body.style.backgroundColor === "var(--blue)"){
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";
    for(let i = 0; i < link.length; i++){
    link[i].style.color = "black";
    }
    for(let i = 0; i < title.length; i++){
      title[i].style.color = "black";
      }
      for(let i = 0; i < header.length; i++){
        header[i].style.color = "black";
        }

  } else {
    body.style.backgroundColor = "var(--blue)";
    themeButton.innerHTML = "Light Mode";
    for(let i = 0; i < link.length; i++){
      link[i].style.color = "white";
      }
      for(let i = 0; i < title.length; i++){
        title[i].style.color = "white";
        }
        for(let i = 0; i < header.length; i++){
          header[i].style.color = "white";
          }
  }
}
themeButton.onclick = toggleTheme;

//add new meal

const submitBtn = document.querySelector("#submit-btn");
//event
submitBtn.addEventListener("click", (e) => {
  //prevent the default function
  e.preventDefault();

  //get values
  const name = document.querySelector('input[name="name"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const image1 = document.querySelector('input[name="image1"]').value;
  const image2 = document.querySelector('input[name="image2"]').value;
  const image3 = document.querySelector('input[name="image3"]').value;
  const image4 = document.querySelector('input[name="image4"]').value;
  const image5 = document.querySelector('input[name="image5"]').value;

  const newSub = document.createElement("div");
  newSub.innerHTML = `<div class="port-css">
  <img src=${image1} alt=${name} class="port-image" />
      <div class="port-info">
      <p>${title} - ${name}</p>
      <a href="details.html">see more</a>
      </div>`;

const subContainer = document.querySelector("#subContainer");
subContainer.insertBefore(newSub, subContainer.firstChild);

document.querySelector('input[name="name"]').value = "";
document.querySelector('input[name="title"]').value = "";
document.querySelector('input[name="image1"]').value = "";
document.querySelector('input[name="image2"]').value = "";
document.querySelector('input[name="image3"]').value = "";
document.querySelector('input[name="image4"]').value = "";
document.querySelector('input[name="image5"]').value = "";

});

/* <img src=${image2} alt=${name} class="port-image" />
<img src=${image3} alt=${name} class="port-image" />
<img src=${image4} alt=${name} class="port-image" />
<img src=${image5} alt=${name} class="port-image" /> */







 
 // example code
  /*const displayMenu=(list)=>{
  const mealContainer = document.getElementById("meals-container")  
  const allMeals= list.map(item=>{
  return `<div class="meal">
            <img src=${item.imageUrl} alt=${item.name} class="meal-image" />
            <div class="meal-info">
              <p>${item.name}</p>
              <p class="item-category">${item.category}</p>
            </div>
          </div>`;
    })
    // console.log(allMeals) <-- Shows all of the new meal divs
    // console.log(allMeals.join("")) <-- Show all of the new meal divs joined into a string
   mealContainer.innerHTML=allMeals.join("");

   */