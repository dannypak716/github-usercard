import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');

(async () => {
  try {
    const userObject = await axios.get('https://api.github.com/users/dannypak716');
    const data = userObject.data;
    const newCard = cardCreator(data);
    cards.appendChild(newCard);
  } catch(err) {
    console.log('Error getting data');
  }
})();

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Profile:
          <a href={URL to users github page}>{URL to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
      </div>
    </div>
*/
function cardCreator(userObject){
  const card = document.createElement('div');
  const avatarURL = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const profile = document.createElement('p');
  const profileURL = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');

  card.classList.add('card');
  avatarURL.src = userObject['avatar_url'];
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = `${userObject.name}`;
  username.classList.add('username');
  username.textContent = `${userObject['login']}`;
  profile.textContent = 'Profile: ';
  profileURL.href = userObject['html_url'];
  followers.textContent = `Followers: ${userObject['followers']}`;
  following.textContent = `Following: ${userObject['following']}`;

  card.appendChild(avatarURL);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  profile.appendChild(profileURL);

  return card;
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
