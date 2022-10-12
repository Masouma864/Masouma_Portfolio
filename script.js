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
    title: 'Todo List App',
    info: {
      client: 'Masouma',
      role: 'Back End Dev',
      year: 2022,
    },
    screenshot: 'images/works/project.png',
    shortDescription:
      ' to do list minimalist websites that allows users to create and modify a to do list with CRUD functionality.',
    description:
      "In this project, I added some functionality to application to make it interactive. selecting the corresponding checkbox (or undo it by unchecking the checkbox). The updated tasks list will be stored in local storage. ",
    skills: ['html', 'css', 'javascript', 'github', 'webpack', 'Ecma Script 6'],
    liveLink: 'https://github.com/Masouma864/Todo-List-Project',
    sourceLink: 'https://github.com/Masouma864/Todo-List-Project',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_2.png',
    shortDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_3.png',
    shortDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: 'images/works/image_4.png',
    shortDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'javascript', 'Ruby on rails'],
    liveLink: 'https://www.uber.com/',
    sourceLink: 'https://www.uber.com/',
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
      <button type="button" id="see-live-bt" class="newBtn" onclick="">
        See Live
      </button>
      <button type="button" id="see-source-btn" class="newBtn" onclick="">
        See Source
      </button>
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
    message.style.display="block";
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