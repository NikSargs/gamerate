    let games;
    let gamesLoaded = false;
    let asd = 'asd'
    async function getGames() {
        try {
            const response = await axios.get('http://localhost:3000/games.json');
            games = response.data;
            showGames();
            asd = 'qwe';
        } catch (error) {
            console.error(error);
        }
    }

    function showGames() {
        let gameCardsContainer = document.getElementById("game-cards-container");

        const cardsFragment = document.createDocumentFragment();
    
        for(let i = 0; i < games.length; i++) {
            const col = document.createElement("div");  
            col.classList.add("col");
            col.classList.add("s12");
                
            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("blue-grey");
            card.classList.add("darken-1");
            col.appendChild(card);
            
            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
            cardContent.classList.add("white-text");
            card.appendChild(cardContent);

            const cardTitle = document.createElement("span");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = games[i].name;
            cardContent.appendChild(cardTitle);

            const cardDescription = document.createElement("p");
            cardDescription.textContent = games[i].description;
            cardContent.appendChild(cardDescription);

            const cardAction = document.createElement("div");
            cardAction.classList.add("card-action");
            card.appendChild(cardAction);

            const gameLink = document.createElement("a");
            gameLink.textContent = "Link";
            gameLink.href = `#${games[i].slug}`
            cardAction.appendChild(gameLink);

            cardsFragment.appendChild(col);
        }
        
        gameCardsContainer.appendChild(cardsFragment);
    }

    getGames();