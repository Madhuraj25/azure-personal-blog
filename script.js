// Theme toggle (persist in localStorage)
(function(){
  const key='theme-preference';
  const btn=document.getElementById('themeToggle');
  const root=document.documentElement;
  function setTheme(t){ if(t==='light'){ root.classList.add('light'); document.body.classList.add('light'); } else { root.classList.remove('light'); document.body.classList.remove('light'); } localStorage.setItem(key,t); }
  function getTheme(){ return localStorage.getItem(key) || 'dark'; }
  setTheme(getTheme());
  btn?.addEventListener('click', ()=>{ const next = (getTheme()==='dark')?'light':'dark'; setTheme(next); });
})();