class AppController{

    constructor(){

        this.shows = [];
        this.isVoting = false;
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
       <h1>Netflix Score</h1>
       <a href= "./index.html">lista</a>
       <a href= "./new-show.html">nuovo</a>
     </header>
     
     <main>
       <div id="btn-container"></div>
       <ul id="shows-container"></ul>
     </main>
     
     <footer>
       <p>I diritti sono tutti miei!!!</p>
     </footer>
     `
    
    
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

      const sortDownButton = document.createElement('button');
      sortDownButton.appendChild(document.createTextNode('Ordina per downvotes'));
      sortDownButton.addEventListener('click', () => this.sortByDownvotes());
      btnContainer.appendChild(sortDownButton);

      const showsContainer = document.getElementById('shows-container');
      showsContainer.innerHTML = '';


      for (let i = 0; i < this.shows.length; i++) {
        
        const show = this.shows[i];

        const listElement = document.createElement('li');

        const titleNode = document.createTextNode(show.title);
        listElement.appendChild(titleNode);
        
      }
    }
}