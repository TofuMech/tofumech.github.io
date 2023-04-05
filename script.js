var button = document.getElementById('DropDownMenu');
var box = document.getElementById('box');
var isMoved = false;
var moonIcon = document.querySelector('#moon')
var sunIcon = document.querySelector('#sun')
var menuBar3 = document.querySelector('#bar3')
var menuBar2 = document.querySelector('#bar2')


button.addEventListener('click', function () {
  if (!isMoved) {
    box.style.transform = 'translateY(550px)';
    menuBar3.style.transform = 'translateY(-17px)';
    menuBar2.style.transform = 'translateY(-10px)';
    isMoved = true;
  } else {
    box.style.transform = 'translateX(0)';
    menuBar3.style.transform = 'translateY(0px)';
    menuBar2.style.transform = 'translateY(0px)';    
    isMoved = false;
  }
});

// check if a theme preference has already been set
if (localStorage.getItem('theme')) {
  // set the active icon and apply the stored theme preference
  if (localStorage.getItem('theme') === 'light') {
    sunIcon.classList.add('active');
    applyTheme('light');
  } else if (localStorage.getItem('theme') === 'dark') {
    moonIcon.classList.add('active');
    applyTheme('dark');
  }
} else {
  // set a default theme preference of 'light' and apply it
  localStorage.setItem('theme', 'light');
  sunIcon.classList.add('active');
  applyTheme('light');
}

// add event listeners to the moon and sun icons
moonIcon.addEventListener('click', () => {
  // store the selected theme preference in local storage
  localStorage.setItem('theme', 'dark');
  // animate the icons and apply the selected theme
  moonIcon.classList.add('active');
  sunIcon.classList.remove('active');
  setTimeout(() => {
    applyTheme('dark');
  }, 100);
});
sunIcon.addEventListener('click', () => {
  // store the selected theme preference in local storage
  localStorage.setItem('theme', 'light');
  // animate the icons and apply the selected theme
  sunIcon.classList.add('active');
  moonIcon.classList.remove('active');
  setTimeout(() => {
    applyTheme('light');
  }, 100);
});
// function to apply the selected theme
function applyTheme(theme) {
  if (theme === 'light') {
    // apply dark theme
    document.body.style.transition = 'all .1s';
    document.body.style.backgroundColor = '#6c97a8 ';
    
   document.documentElement.style.setProperty('--cube-color', '#6c79a8');
   document.documentElement.style.setProperty('--text-color', '#1c3253');
   document.documentElement.style.setProperty('--button-text', '#261523');
   document.documentElement.style.setProperty('--button-colorOne','#FF9D00');
   document.documentElement.style.setProperty('--button-colorTwo','#131736');
   document.documentElement.style.setProperty('--navbar-color', '#648BB0');
   
  } else if (theme === 'dark') {
    //apply light theme
   document.body.style.transition = 'all .1s';
   document.body.style.backgroundColor = '#333';
   document.documentElement.style.setProperty('--cube-color', '#9FF0CE');
    document.documentElement.style.setProperty('--text-color', '#b6895a ');
    document.documentElement.style.setProperty('--button-text', '#FFC07D');
  document.documentElement.style.setProperty('--button-colorOne', '#3a5f7c');
  document.documentElement.style.setProperty('--button-colorTwo', '#524d3b'); //This should be the darker color
  document.documentElement.style.setProperty('--navbar-color', '#284059');  
  }
}