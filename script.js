var button = document.getElementById('DropDownMenu');
var box = document.getElementById('box');
var isMoved = false;
var moonIcon = document.querySelector('#moon');
var sunIcon = document.querySelector('#sun');
var menuBar3 = document.querySelector('#bar3');
var menuBar2 = document.querySelector('#bar2');

button.addEventListener('click', function () {
  if (!isMoved) {
    box.style.transform = 'translateX(1000px)';
    menuBar3.style.transform = 'translateY(-17px)';
    menuBar2.style.transform = 'translateY(-9px)';
    isMoved = true;
  } else {
    box.style.transform = 'translateX(0)';
    menuBar3.style.transform = 'translateY(0px)';
    menuBar2.style.transform = 'translateY(0px)';
    isMoved = false;
  }
});

if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'light') {
    sunIcon.classList.add('active');
    applyTheme('light');
  } else if (localStorage.getItem('theme') === 'dark') {
    moonIcon.classList.add('active');
    applyTheme('dark');
  }
} else {
  localStorage.setItem('theme', 'light');
  sunIcon.classList.add('active');
  applyTheme('light');
}

moonIcon.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark');
  moonIcon.classList.add('active');
  sunIcon.classList.remove('active');
  setTimeout(() => {
    applyTheme('dark');
  }, 100);
});
sunIcon.addEventListener('click', () => {
  localStorage.setItem('theme', 'light');
  sunIcon.classList.add('active');
  moonIcon.classList.remove('active');
  setTimeout(() => {
    applyTheme('light');
  }, 100);
});

function applyTheme(theme) {
  if (theme === 'light') {
    // Light theme color attributes
    document.body.style.transition = 'all .1s';
    document.body.style.backgroundColor = '#c4c8cf';
    document.documentElement.style.setProperty('--text-color', '#8BAAAD');
    document.documentElement.style.setProperty('--button-text', '#F4FFF8');
    document.documentElement.style.setProperty('--button-colorOne', '#D7263D');
    document.documentElement.style.setProperty('--button-colorTwo', '#2E293A');
    document.documentElement.style.setProperty('--navbar-color', '#37A1A1');
  } else if (theme === 'dark') {
    // Dark theme color attributes
    document.body.style.transition = 'all .1s';
    document.body.style.backgroundColor = '#363747';
    document.documentElement.style.setProperty('--text-color', '#dfe3eb');
    document.documentElement.style.setProperty('--button-text', '#dfe3eb');
    document.documentElement.style.setProperty('--button-colorOne', '#3a5f7c');
    document.documentElement.style.setProperty('--button-colorTwo', '#2E293A');
    document.documentElement.style.setProperty('--navbar-color', '#284059');
  }
}