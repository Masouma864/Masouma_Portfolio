//modal 
const overlay = document.querySelector('.mobileOverlay');
function mytoggleMenu() {
  overlay.classList.toggle('hide');
}
mytoggleMenu();

//popup window
// create array
const projects = [
  {
    id: 1,
    title: 'crypto-metric-app',
    info: {
      client: 'Masouma',
      role: 'Front end Dev',
      year: 2022,
    },
    screenshot: 'images/works/cryptocurrency.jpg',
    shortDescription:
      ' The Cryptocurrency website is built using React, Redux, and CoinStats APIs',
    description:
      "In this project, I added some functionality to application to make it interactive.See a list of 100 cryptocurrencies and Check the latest information on the currencies. ",
    skills: ['API', 'react', 'github', 'webpack', 'redux'],
    liveLink: 'https://crypto-metric-app.vercel.app/',
    sourceLink: 'https://github.com/Masouma864/crypto-metric-app',
  },
  {
    id: 2,
    title: 'space-travelers',
    info: {
      client: 'Microverse',
      role: 'Front end Dev',
      year: 2022,
    },
    screenshot: 'images/works/space-traveler.png',
    shortDescription:
      'An SPA app to view and read about the SpaceX latest rockets and missions form SpaceX API',
    description:
      "A website that uses a real live api from space x and displays it, You are able to Reserve a rocket and you will have it on your profile page aslo join missions which you will be able to see it on your profile..",
    skills: ['html', 'css', 'react', 'redux'],
    liveLink: 'https://space-travelers-react-project.vercel.app/',
    sourceLink: 'https://github.com/Masouma864/Space-Travelers-React-Project',
  },
  {
    id: 3,
    title: 'Math-magician',
    info: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: 2022,
    },
    screenshot: 'images/works/Math-Magician.jpg',
    shortDescription:
      "A simple and fun website that contains three single page applications. It has welcome page, calculator page, quotes page. this project is built with react.",
    description:
      "In this project, I use react to create a single-page app that contains a working calculator with a random quote",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://github.com/Masouma864/Math-magician',
    sourceLink: 'https://snazzy-phoenix-84d292.netlify.app/m/',
  },
  {
    id: 4,
    title: 'Loaderboard-App',
    info: {
      client: 'Microverse',
      role: 'Front end Developer',
      year: 2022,
    },
    screenshot: 'images/works/Loaderboard.jpg',
    shortDescription:
      'The leaderboard website displays scores submitted by different players.',
    description:
      "This is a Webpack Leaderboard project based on REST API. With this app, you can add players score to the board and get the scores on the leader board list using API endpoint.",
    skills: ['html', 'css', 'javascript', 'API'],
    liveLink: 'https://masouma864.github.io/Loaderboard-App/',
    sourceLink: 'https://github.com/Masouma864/Loaderboard-App',
  },
];
const newContent = document.querySelector('.work-container');
const projectsHtml = projects
  .map(
    (project, index) => `<div class="card-layout">
      <div class="image-container">
         <img
          class="image-fluid"
          src=${project.screenshot}
          alt="background_image"
        />
      </div>
      <div class="p-title">
        <h3 class="title">${project.title}</h3>
        <ul class="flex-items">
          <li class="list-item canopy">${project.info.client}</li>
          <li class="list-item role">${project.info.role}</li>
          <li class="list-item year">${project.info.year}</li>
        </ul>
        <p class="text_paragraph">
          ${project.shortDescription}
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">${project.skills[0]}</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">${project.skills[1]}</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">${project.skills[2]}</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" id="${index}" class="see-btn">See Project</button>
        </div>
      </div>
     </div>`,
  )
  .join('');
newContent.innerHTML = projectsHtml;

/*  Pop Up section */
const popUpHtml = projects.map(
  (project) => `<section class="popup">
<div class="popup-header">
  <h2 class="popup-project-title" id="popup-project-title">
    ${project.title}
  </h2>
  <span id="cl" class="close">&times;</span>
</div>
<div class="popup-project-info" id="project-info"></div>
<div id="project-image-holder">
  <img
    src="${project.screenshot}"
    alt="Tonic project screenshot"
    class="popup-project-image"
    id="popup-project-image"
  />
</div>
<div class="popup-project-details">
  <div class="column-left">
    <p class="popup-project-description" id="project-description">
      ${project.description}
    </p>
  </div>
  <div class="column-right">
    <div class="popup-project-stack" id="popup-project-stack">
      <ul class="btn-container-flex">
        <li class="btn">
          <button class="btn-sm" type="button">
            ${project.skills[0]}
          </button>
          <button class="btn-sm" type="button">
            ${projects[0].skills[3]}
          </button>
        </li>
        <li class="btn">
          <button class="btn-md" type="button">
            ${project.skills[1]}
          </button>
          <button class="btn-md" type="button">
          ${projects[0].skills[4]}
          </button>
        </li>
        <li class="btn">
          <button class="btn-lg" type="button">
            ${project.skills[2]}
          </button>
          <button class="btn-lg" type="button">
          ${projects[0].skills[5]}
          </button>
        </li>
      </ul>
    </div>

    <div class="popup-project-buttons">
    <a href="https://masouma864.github.io/Todo-List-Project">
      <button type="button" id="see-live-bt" class="newBtn" onclick="">
        See Live
      </button>
      </a>
      <a href="https://github.com/Masouma864/Todo-List-Project">
      <button type="button" id="see-source-btn" class="newBtn" onclick="">
        See Source
      </button>
      </a>
    </div>
  </div>
</div>
</section>`,
);
/* Pop Up Menu */
const popup = document.getElementById('popup');


function f1() {
  const x = Number(this.id);
  popup.innerHTML = popUpHtml[x];
  popup.style.display = 'block';
  document.getElementById('cl').onclick = function cl() {
    popup.innerHTML = '';
    popup.style.display = 'none';
  };
}

document.getElementById('0').onclick = f1;
document.getElementById('1').onclick = f1;
document.getElementById('2').onclick = f1;
document.getElementById('3').onclick = f1;

const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

//form validation

// client-side-validation and local storage data
const form = document.getElementById('form');
const message = document.querySelector('.error-mesg');
const nameFull = document.getElementById('fullname');
const email = document.getElementById('email');
const textMessage = document.getElementById('message');

// save data in local storage
function saveData() {
  const obj = {
    name: nameFull.value,
    email: email.value,
    message: textMessage.value,
  };
  localStorage.setItem('data', JSON.stringify(obj));
}
form.addEventListener('submit', saveData);

// handle Submit
function handleSubmit(e) {
  e.preventDefault();
  if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    message.innerText = 'Email in lowercase is required';
    message.style.display = "block";
  }
}
form.addEventListener('submit', (e) => {
  handleSubmit(e);
});

// getting data back on window load
window.addEventListener('load', () => {
  const dataB = JSON.parse(localStorage.getItem('data'));
  if (dataB) {
    nameFull.value = dataB.name;
    email.value = dataB.email;
    textMessage.value = dataB.message;
  }
});