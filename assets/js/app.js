const url = 'https://randomuser.me/api/?results=12&gender=male';
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
          <button>Call</button>
        </div>
      </div>
    </div>`;
  return;
}

function createCardView(data) {
  const mapArrHolder = data.results.map(getCard);
  const mainContainer = document.getElementsByClassName('row');
  mainContainer[0].innerHTML += cardTemplate;
}

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    createCardView(data);
  })
  .catch(function () {
    console.log("Error something went wrong! Please try again later. ");
  });   