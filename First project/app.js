
function myFunction(){
    console.log("i'm first")
  const elements = document.querySelector('.sub-items');
  elements.classList.toggle('show');
  const arrow = document.querySelector('.arrow');
  arrow.classList.toggle('arrow-down');
  }
  
  
  function secondFunction(){
    console.log("i'm second")
    const elements = document.querySelector('.sub-items-two');
    elements.classList.toggle('show');
    const arrow = document.querySelector('.arrow-two');
    arrow.classList.toggle('arrow-down');
    }
    
  
    "use strict"
    
    fetch("/script/characters.json").then(function(resp)
      {
        return resp.json();
      }).then(function(data){
        console.log(data);
      });
  
  
  
      const shopList = document.getElementById('ShopList');
      const searchBar = document.getElementById('searchBar');
      let itemCharacters =[]
  
  
      searchBar.addEventListener('keyup',(e)=>{
        console.log(e.target.value);
      });
    
      searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
    
        const filteredCharacters = hpCharacters.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString) 
            );
        });
        displayCharacters(filteredCharacters);
    });
    
    const loadCharacters = async () => {
        try {
            const res = await fetch("/script/characters.json");
            hpCharacters = await res.json();
            displayCharacters(hpCharacters);
        } catch (err) {
            console.log('err');
        }
    };
    
    const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
                <div class="character">
                    <div>
                    <img src="${character.img}"></img>
                    </div>
                    <div>
                         <div class="item-rate"> 
                               <h3> Raiting: ${character.rating}</h3>
                               <h3> Price: ${character.price}$</h3>
                         </div>
                         <div class="item-disc">
                              <h2>${character.name}</h2>
                              <p>${character.discription}</p>.
                        </div>
                </div>
            </div>
            `;
            })
            .join('');
        charactersList.innerHTML = htmlString;
    };
    
    loadCharacters();
    