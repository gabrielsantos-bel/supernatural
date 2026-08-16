// aplica o tema salvo antes de renderizar, pra manter consistência entre abas/recarregamentos
try{
   const savedTheme = localStorage.getItem('sobrenatural-theme');
   if(savedTheme === 'light'){ document.documentElement.setAttribute('data-theme','light'); }
}catch(e){}
