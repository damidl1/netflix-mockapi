class DBService{

    static BASE_URL = 'https://64b78c2521b9aa6eb0784ad1.mockapi.io';

    static getAllShows() {
        const url = DBService.BASE_URL + "/shows";

        return fetch(url, { method: "get" })
            .then((resp) => resp.json());

    }
}

