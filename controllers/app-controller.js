class AppController{

    constructor(){

        this.shows = [];
        this.isVoting = false;
        this.orderMethod = 'upvote';
      
    }

    init(){

      this.render();  
      DBService.getAllShows().then(shows => {
        this.shows = shows;
        this.renderShows();
      })
    }

    render(){

       const appContainer = document.getElementById('app');

       appContainer.innerHTML = `
       <header>
      
        <a href= "./index.html">Lista Show</a>
        <a href= "./new-show.html">Nuovo Show</a>
      
       </header>
     
     <main>
        <div id="btn-container"></div>
        <ul id="shows-container"></ul>
     </main>
     
     <footer>
       <p>Sito creato da damidl ©, 2023</p>
     </footer>
     `
    
    
    }


    selectOrder(orderMethod){
      this.orderMethod = orderMethod;
      this.renderShows();
    }

    updateOrderShows() {
      if (this.orderMethod === 'upvote') {
          return this.shows.sort((s1, s2) => s2.upVotes - s1.upVotes);
      } else if (this.orderMethod === 'downVote') {
          return this.shows.sort((s1, s2) => s2.downVotes - s1.downVotes);
      }
      return this.shows;
  }

  


    renderShows(){

        // if(this.orderMethod = 'upvote'){
            //sorting per upvote          esempio per task
        // } else if {
             // sorting per downvote
        // }

      const btnContainer = document.getElementById('btn-container');
      btnContainer.innerHTML = '';

      const sortUpButton = document.createElement('button');
      sortUpButton.appendChild(document.createTextNode('Ordina per upvotes'));
      sortUpButton.addEventListener('click', () => this.sortByUpvotes());
      btnContainer.appendChild(sortUpButton);
      sortUpButton.classList.add('sortUpBtn');

      const sortDownButton = document.createElement('button');
      sortDownButton.appendChild(document.createTextNode('Ordina per downvotes'));
      sortDownButton.addEventListener('click', () => this.sortByDownvotes());
      btnContainer.appendChild(sortDownButton);
      sortDownButton.classList.add('sortDownBtn');

      const showsContainer = document.getElementById('shows-container');
      showsContainer.innerHTML = '';


      for (let i = 0; i < this.shows.length; i++) {
        
        const show = this.shows[i];

        const listElement = document.createElement('li');

        const titleNode = document.createTextNode(show.title);
        listElement.appendChild(titleNode);

        const upVotesSpan = document.createElement('span');
        upVotesSpan.appendChild(document.createTextNode(show.upVotes));
        upVotesSpan.classList.add('upVotesSpan');
        listElement.appendChild(upVotesSpan);

        const upButton = document.createElement('button');
        upButton.appendChild(document.createTextNode('👍'));
        upButton.addEventListener('click', () => this.upVoteShow(show));
        upButton.classList.add('upBtn');
        listElement.appendChild(upButton);

        const downVotesSpan = document.createElement('span');
        downVotesSpan.appendChild(document.createTextNode(show.downVotes));
        downVotesSpan.classList.add('downVotesSpan');
        listElement.appendChild(downVotesSpan);
        

        const downButton = document.createElement('button');
        downButton.appendChild(document.createTextNode('👎'));
        downButton.addEventListener('click', () => this.downVoteShow(show));
        downButton.classList.add('downBtn');
        listElement.appendChild(downButton);

        const image = document.createElement('img');
        image.src= show.imageUrl;

        
        
        showsContainer.appendChild(image);

        showsContainer.appendChild(listElement);
        
      }

      

    }

    // upVoteShow(show){

    //   if(!this.isVoting){

    //     this.isVoting = true;

    //     DBService.upVote(show).then(show => {
    //       this.renderShows();
    //       this.isVoting = false;
    //     });
    //   }
    // }

    upVoteShow(show){
      if(!this.isVoting){
          this.isVoting = true;
          DBService.upVote(show).then(upDateShow => {
              show.upVotes = upDateShow.upVotes;
              this.shows.sort((s1, s2) => s2.upVotes - s1.upVotes);
              this.renderShows();
              this.isVoting = false;
          });
      }
  }


  downVoteShow(show){
    if(!this.isVoting){
        this.isVoting = true;
        DBService.downVote(show).then(upDateShow => {
            show.downVotes = upDateShow.downVotes;
            this.shows.sort((s1, s2) => s2.downVotes - s1.downVotes);
            this.renderShows();
            this.isVoting = false;
        });
    }
}


    // downVoteShow(show){

    //   if(!this.isVoting){

    //     this.isVoting = true;
    //     DBService.downVote(show).then(show => {
    //       this.renderShows();
    //       this.isVoting = false;
    //     });
    //   }
    // }

    sortByUpvotes(){

      this.shows.sort((s1, s2) => s2.upVotes - s1.upVotes);
      this.renderShows();
    }

    sortByDownvotes(){

      this.shows.sort((s1, s2) => s2.downVotes - s1.downVotes);
      this.renderShows();
    }

   
 
}

