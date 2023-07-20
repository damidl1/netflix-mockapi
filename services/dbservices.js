class DBService {
  
    static getAllShows() {
    
    const url = "https://64b78c2521b9aa6eb0784ad1.mockapi.io/shows";

    return fetch(url).then((resp) => resp.json());
  }

  static upDateShow(show) {
    const updateUrl =
      "https://64b78c2521b9aa6eb0784ad1.mockapi.io/shows/" + show.id;
    return fetch(updateUrl, {
      method: "put",
      body: JSON.stringify(show),
      headers: { "content-type": "application/json" },
    }).then((resp) => resp.json());
  }

  static createShow(show){
    
    const createUrl = 
        "https://64b78c2521b9aa6eb0784ad1.mockapi.io/shows";
     return fetch(createUrl, {
          method: "post",
          body: JSON.stringify(show),
          headers: { "content-type": "application/json" },
     }).then((resp) => resp.json());
  }

  static upVote(show) {
    show.upVotes++;
    return this.upDateShow(show);
  }

  static downVote(show) {
    show.downVotes++;
    return this.upDateShow(show);
  }
}

