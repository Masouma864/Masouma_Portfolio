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
    title: 'Altaqwa Academy',
    info: {
      client: 'Altaqwa Academy',
      role: 'Full stack Dev',
      year: 2023,
    },
    screenshot: 'images/works/Altaqwa.PNG',
    shortDescription:
      'A comprehensive Laravel-based platform designed to serve the needs of a university. Empowered by Laravels robust backend framework, the website offers seamless navigation, user-friendly interfaces, and personalized experiences for students, faculty, and administrators.',
    description:
      "Our university website project aimed to revolutionize the digital presence of the institution. Leveraging the power of Laravel, we developed a scalable and intuitive platform that caters to the diverse needs of students, faculty, and administrators. The website offers a range of features, including user authentication, course registration, grade tracking, event management, and more. With a clean and modern design, the user interface ensures easy navigation and accessibility across different devices. Our team meticulously implemented Laravel's MVC architecture, enabling efficient code organization and modular development. We integrated various Laravel packages, such as Eloquent ORM for database management, Blade templating engine for dynamic content rendering, and Laravel Mix for asset compilation. The result is a secure, high-performance website that streamlines university operations and enhances the overall user experience",
    skills: ['Bootstrap', 'Laravel', "Jquery", 'Javascript', 'Css', 'HTML'],
    liveLink: 'https://altaqwa.edu.af/',
    sourceLink: '',
  },
  {
    id: 2,
    title: 'Crypto-metric-app',
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
    skills: ['API', 'React', 'GitHub', 'Webpack', 'Redux'],
    liveLink: 'https://crypto-metric-app.vercel.app/',
    sourceLink: 'https://github.com/Masouma864/crypto-metric-app',
  },
  {
    id: 3,
    title: 'Book Store App',
    info: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: 2022,
    },
    screenshot: 'images/works/bookstore.PNG',
    shortDescription:
      "Single Page Application that display Books and allows users to Add, Remove and Edit these books.",
    description:
      "This is an app created with React and Redux that enables you to showcase a catalog of books that you have added, add new titles to the list, and delete existing ones. It's essentially a virtual bookstore where you can manage your collection of books.",
    skills: ['Javascript', 'React', 'Redux', 'Css', 'HTML'],
    liveLink: 'https://nimble-sherbet-ce8220.netlify.app/',
    sourceLink: 'https://github.com/Masouma864/React-BookStore',
  },
  {
    id: 4,
    title: 'TeamWork',
    info: {
      client: 'Microverse',
      role: 'Front end Developer',
      year: 2022,
    },
    screenshot: 'images/works/teamwork.PNG',
    shortDescription:
      'The Team-Work app provides a range of  services and information.',
    description:
      "A web application using JavaScript, jQuery, and Bootstrap, where users can order their projects to be tailored by the admin and also view sample works.",
    skills: ['Javascript', 'Bootstrap', 'jQuery'],
    liveLink: 'https://team-work-three.vercel.app/',
    sourceLink: 'https://github.com/Masouma864/TeamWork',
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
    <a href="https://crypto-metric-app.vercel.app/">
      <button type="button" id="see-live-bt" class="newBtn" onclick="">
       <a href="${project.liveLink}"> See Live</a>
      </button>
      </a>
      <a href="https://github.com/Masouma864/crypto-metric-app">
      <button type="button" id="see-source-btn" class="newBtn" onclick="">
       <a href="${project.sourceLink}">  See Source</a>
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