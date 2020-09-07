
let cardTemplate = '';

function getCard(data) {
  cardTemplate += `  
    <div class="col">
      <div class="card">
        <div class="card__image">
          <img src="${data.picture.medium}">
        </div>
        <div class="card__title">
          <h2>${data.name.first} <span>${data.name.last}</${data.name.last}></h2>
        </div>
        <div class="card__footer">     
          <button class="card__footer__cta">Call</button>
        </div>
      </div>
    </div>`;
  return;
}

function createCardView(data) {
  const mapArrHolder = data.results.map(getCard);
  const mainContainer = document.getElementsByClassName('card__wrapper');
  mainContainer[0].innerHTML += cardTemplate;
}

const getData = async (gender, numberCards) => {
  try {

    const config = {
      url: `https://randomuser.me/api/`,
      numberCards: numberCards
    }
    const url = `${config.url}?results=${config.numberCards}&gender=${gender}`;
    const result = await fetch(url);
    const data = await result.json();
    return data

  } catch(error) {
    console.log('Error something went wrong! Please try again later.')
  }
}

// You pass gender and number of cards
getData('male', 12).then(data => {
  createCardView(data);
});