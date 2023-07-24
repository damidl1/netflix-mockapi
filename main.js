const app = new AppController();

app.init();

const showButton = document.getElementById("showDialog");
const newShowDialog = document.getElementById("newShowDialog");

const confirmBtn = newShowDialog.querySelector("#confirmBtn");

const cancelButton = newShowDialog.querySelector('#cancelButton');

showButton.addEventListener("click", () => {
  newShowDialog.showModal();
});


cancelButton.addEventListener("click", (event) => {
  event.preventDefault(); 
  newShowDialog.close(); 
});


function sendData(event) {
    event.preventDefault();
    const form = document.forms['create'];

    const formData = new FormData(form);

    const newShow = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,
        upVotes: 0,
        downVotes: 0,
    }


DBService.createShow(newShow)
.then(show => window.location = './index.html')
.catch(error => alert(error.message));

}

// let manager;

// DBService.getAllShows()
//          .then(showsArray => {
//             manager = new Manager(showsArray);
//             render();
//          });

// function render() {
    

//     const mainContainer = document.getElementById('main-container');
//     mainContainer.innerHTML = '';

//     if(manager.showsArray){

//         for (const show of manager.showsArray) {
           
//             const showContainer = document.createElement('div');
//             showContainer.classList.add('show-container');

//             const strongTitle = createElementWithString('strong', show.title)
           
//             strongTitle.classList.add('strong-title');

//             showContainer.appendChild(strongTitle);
           

//            const image = document.createElement('img');
//            image.src= show.imageUrl;
   
//            showContainer.appendChild(image);

//            const authorSpan = createElementWithString('span', show.author);
//            const isOverSpan = createElementWithString('span', show.isOver);

//            const upVoteBtn = createElementWithString('button', '👍');
//            const downVoteBtn = createElementWithString('button', '👎');

          
//             showContainer.appendChild(authorSpan);
//             showContainer.appendChild(isOverSpan);
//            showContainer.appendChild(upVoteBtn);
//            showContainer.appendChild(downVoteBtn);
   
   
   
//             mainContainer.appendChild(showCard);
//            mainContainer.appendChild(showContainer);
//         }
//     }
// }


// const app = new AppController();

// app.init();
