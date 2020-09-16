
const mainContainer = document.querySelector('.card__wrapper');

const getCard = (data) => {
  const cardTemplate = `  
    <div class="col">
      <div class="card">
        <div class="card__image">
          <img src="${data.picture.medium}">
        </div>
        <div class="card__title">
          <h2>${data.name.first} <span>${data.name.last}</span></h2>
        </div>
        <div class="card__footer">     
          <button class="card__footer__cta">Call</button>
        </div>
      </div>
    </div>`;
    mainContainer.insertAdjacentHTML('beforeend', cardTemplate);
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
    return data;
  } catch(error) {
    console.log('Error something went wrong! Please try again later.')
  }
}

// You pass gender and number of cards
getData('male',12).then(data => {
  data.results.map(getCard)
});