(function () {
  'use strict';
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var preference = window.matchMedia('(prefers-color-scheme: dark)');
  var savedTheme;
  try { savedTheme = localStorage.getItem('jiayi-theme'); } catch (error) { /* Storage is optional. */ }
  function applyTheme(theme) {
    root.dataset.theme = theme;
    button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
    button.title = button.getAttribute('aria-label');
  }
  if (button) {
    applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (preference.matches ? 'dark' : 'light'));
    button.hidden = false;
    button.addEventListener('click', function () {
      savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme);
      try { localStorage.setItem('jiayi-theme', savedTheme); } catch (error) { /* Keep working without storage. */ }
    });
    if (preference.addEventListener) {
      preference.addEventListener('change', function (event) {
        if (savedTheme !== 'light' && savedTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
      });
    }
  }
}());
