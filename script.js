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
const colorThemes = document.querySelectorAll('[name="theme"]');
// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};
// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});
document.onload = setTheme();
