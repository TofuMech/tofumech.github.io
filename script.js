function displayRandomText() {
        var quotes = [
          "[TAKE YOUR TIME]",
          "[LOADING..]",
          "[DRINK WATER]",
          "[TEAM MILK]",
          "[CLEAN YOUR SCREEN]",
          "[BOTTOM TEXT]"
          
        ];
        var randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("randomText").innerHTML = quotes[randomIndex];
      }
// get the moon and sun icons
const moonIcon = document.querySelector('#moon');
const sunIcon = document.querySelector('#sun');
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
  }, 500);
});
sunIcon.addEventListener('click', () => {
  // store the selected theme preference in local storage
  localStorage.setItem('theme', 'light');
  // animate the icons and apply the selected theme
  sunIcon.classList.add('active');
  moonIcon.classList.remove('active');
  setTimeout(() => {
    applyTheme('light');
  }, 500);
});
// function to apply the selected theme
function applyTheme(theme) {
  if (theme === 'light') {
    // apply dark theme
    document.body.style.backgroundImage = "url('images/darkback.png')" ;
    document.body.style.color = '#333';
    document.body.style.transition = 'all 1s';
    document.documentElement.style.setProperty('--div-menu-color', '#9adde7');
    document.documentElement.style.setProperty('--div-cube-color', '#6690ad');
    document.documentElement.style.setProperty('--div-txt', '004677');
    document.documentElement.style.setProperty('--div-btm-txt', '#48AB99');
  } else if (theme === 'dark') {
    // apply light theme
    document.body.style.backgroundImage = "url('images/lightback.png')" ;
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    document.documentElement.style.setProperty('--div-menu-color', '#72AB8E');
    document.documentElement.style.setProperty('--div-cube-color', '#476A58');
    document.documentElement.style.setProperty('--div-txt', '72AB8E');
    document.documentElement.style.setProperty('--div-btm-txt', '#6B554F');
  }
}