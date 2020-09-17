
const mainContainer = document.querySelector('.card__wrapper');
let markup = '';

const getUserCard = (user) => {
  markup += `
    <div class="col">
      <div class="card">
        <div class="card__image">
          <img src="${user.picture.medium}">
        </div>
        <div class="card__title">
          <h2>${user.name.first} <span>${user.name.last}</span></h2>
        </div>
        <div class="card__footer">     
          <a class="card__footer__cta" href="tel:${user.cell}">Call</a>
        </div>
      </div>
    </div>
  `;
  mainContainer.innerHTML = markup;
}

const getData = async (gender, numberCards) => {

  const config = {
    url: `https://randomuser.me/api/`,
    numberCards: numberCards,
    gender: gender
  }
  // Call API to get cards
  fetch(`${config.url}?results=${config.numberCards}&gender=${gender}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(apiResponse) {
    // Output API response to console to view.
    console.log(apiResponse);
    apiResponse.results.forEach(function(user){
      getUserCard(user);
    });
  })
  .catch((err) => {
    console.log(`Something went wrong. Try again. ${err}`);
  })
}

// You pass gender and number of cards
getData('male', 2);