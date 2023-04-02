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
let currentId;

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    currentId = urlParams.get("id");
    const currentSub = imageSets.filter(port => port.id == currentId);

    const sub = `<div class="details-css">
    <p>${currentSub[0].title}</p>
    <p>${currentSub[0].name}</p>
    <img id="details-image" src=${currentSub[0].images} alt=${currentSub[0].name} />
    </div>`

    const subContainer = document.querySelector("main");
    subContainer.innerHTML = sub;  
  }

    backButton = document.getElementById("back");
    nextButton = document.getElementById("next");
    number = document.querySelector("#number");
    
    var i = 1;
    
    function ready() {
        backButton.disabled = true;
      }
    
      function next() {
        i++;
        if (i == 5) {
          nextButton.disabled = true;
        }
        backButton.disabled = false;
        number.innerHTML = i + " of 5";
      }
    
      function back() {
        i--;
        if (i == 1) {
          backButton.disabled = true;
        }
        nextButton.disabled = false;
        number.innerHTML = i + " of 5";
      }
      
    const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const link = document.querySelectorAll(".port-css a");
  const title = document.querySelectorAll(".port-css p");
  const tags = document.querySelectorAll(".details-css p");
  const number = document.querySelectorAll(".main-content p")
  const button = document.querySelectorAll(".details-button button");
  const about = document.querySelectorAll(".about-container h1");
  const text = document.querySelectorAll(".page2-container p");

  if(body.style.backgroundColor === "var(--blue)"){
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";
    for(let i = 0; i < link.length; i++){
    link[i].style.color = "black";
    }
    for(let i = 0; i < title.length; i++){
      title[i].style.color = "black";
      }
      for(let i = 0; i < tags.length; i++){
        tags[i].style.color = "black";
        }
        for(let i = 0; i < number.length; i++){
            number[i].style.color = "black";
            }
            for(let i = 0; i < button.length; i++){
                button[i].style.border = "none";
                }
                for(let i = 0; i < about.length; i++){
                    about[i].style.color = "black";
                    }
                    for(let i = 0; i < text.length; i++){
                        text[i].style.color = "black";
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
        for(let i = 0; i < tags.length; i++){
            tags[i].style.color = "white";
            }
            for(let i = 0; i < number.length; i++){
                number[i].style.color = "white";
                }
                for(let i = 0; i < button.length; i++){
                    button[i].style.border = " 1px solid var(--lightBlue)";
                    }
                    for(let i = 0; i < about.length; i++){
                        about[i].style.color = "white";
                        }
                        for(let i = 0; i < text.length; i++){
                            text[i].style.color = "white";
                            }
  }
}
themeButton.onclick = toggleTheme;