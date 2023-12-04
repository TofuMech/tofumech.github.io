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
    
    //light theme color attributes
    document.body.style.transition = 'all .1s';
    document.body.style.backgroundColor = '#c4c8cf'; 
    document.documentElement.style.setProperty('--text-color', '#8BAAAD');
    document.documentElement.style.setProperty('--button-text', '#F4FFF8');
    document.documentElement.style.setProperty('--button-colorOne', '#D7263D');
    document.documentElement.style.setProperty('--button-colorTwo', '#4D4847');
    document.documentElement.style.setProperty('--navbar-color', '#37A1A1 ');

  } else if (theme === 'dark') {
    //dark theme color attributes
    document.body.style.transition = 'all .1s';
    document.body.style.backgroundColor = '#363747';
    document.documentElement.style.setProperty('--text-color', '#4591EE');
    document.documentElement.style.setProperty('--button-text', '#FFC07D');
    document.documentElement.style.setProperty('--button-colorOne', '#3a5f7c');
    document.documentElement.style.setProperty('--button-colorTwo', '#524d3b'); //This should be the darker color of the button
    document.documentElement.style.setProperty('--navbar-color', '#284059');
  }
}
function displayRandomText() {
  var quotes = [
    "[TAKE YOUR TIME]",
    "[LOADING..]",
    "[DRINK WATER]",
    "[CLEAN YOUR SCREEN]",
    "[DESTROY THE INTERNET]",
    "[DRAW EVERY DAY]",
    "[I GET NO KICK FROM CHAMPAGNE]"
  ];
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("hometitleTagline").innerHTML = quotes[randomIndex];
}

