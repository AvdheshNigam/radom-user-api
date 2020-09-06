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

const getData = async (gender) => {
  try {
    const url = `https://randomuser.me/api/?results=12&gender=${gender}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;

  } catch(error) {
    console.log('Error something went wrong! Please try again later.')
  }
}

let gender;

getData('male').then(data => {
  gender = data;
  createCardView(data);
});

// getData('female').then(data => {
//   gender = data;
// createCardView(data);
// });
