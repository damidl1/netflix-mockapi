let manager;

DBService.getAllShows()
         .then(showsArray => {
            manager = new Manager(showsArray);
            render();
         });

function render() {
    

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    if(manager.showsArray){

        for (const show of manager.showsArray) {
           
            const showContainer = document.createElement('div');
            showContainer.classList.add('show-container');

           showContainer.appendChild(createElementWithString('strong', show.title));

           const image = document.createElement('img');
           image.src= show.imageUrl;
   
           showContainer.appendChild(image);

           const authorSpan = createElementWithString('span', show.author);
           const isOverSpan = createElementWithString('span', show.isOver);

           const upVoteBtn = createElementWithString('button', '👍');
           const downVoteBtn = createElementWithString('button', '👎');

          
            showContainer.appendChild(authorSpan);
            showContainer.appendChild(isOverSpan);
           showContainer.appendChild(upVoteBtn);
           showContainer.appendChild(downVoteBtn);
   
   
   
        //    mainContainer.appendChild(showCard);
           mainContainer.appendChild(showContainer);
        }
    }
}

