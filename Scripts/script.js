// enxame de criaturas ao clicar no título — se espalha pelo site por 15s
  const SKULL_SVG = '<img src="data:image/png;base64,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">';
  const SWARM_GHOST_SVG = '<img src="data:image/png;base64,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">';
const SPIDER_SVG = '<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="6"/><circle cx="20" cy="13" r="4.5"/><path d="M14 19 L4 12 M13 22 L2 22 M14 26 L4 33 M26 19 L36 12 M27 22 L38 22 M26 26 L36 33" fill="none" stroke-width="2" stroke-linecap="round"/></svg>';

const PHRASES = [
  'Todo caçador carrega duas coisas: uma arma e uma promessa.',
  'As sombras nunca vencem quem se recusa a andar sozinho.',
  'Existe sempre uma estrada, mesmo quando o mapa acaba.',
  'O verdadeiro monstro é o medo que a gente não enfrenta.',
  'Família não é sangue — é quem fica quando a noite é longa.',
  'Cada porta fechada esconde algo que reza pra não ser encontrado.',
  'Um bom caçador sabe: sal, ferro e coragem nunca são demais.',
  'Nem todo herói usa capa — alguns dirigem a noite toda numa jaqueta de couro.',
  'O fim do mundo já bateu à porta várias vezes — e eles sempre abriram.',
  'No banco de trás do Impala, até o silêncio conta histórias.'
];
const TRIVIA = [
  'Com 15 temporadas, é uma das séries de fantasia/terror mais longevas da TV americana.',
  'O Impala 1967 dos irmãos praticamente vira um personagem à parte na trama.',
  'A série brinca com metalinguagem: livros que narram a vida dos próprios protagonistas.',
  'Rock clássico marca a trilha sonora e o gosto musical de Dean.',
  'Apesar da história se passar nos EUA, quase tudo foi filmado em Vancouver, no Canadá.',
  'Jensen Ackles fez teste originalmente para o papel de Sam, não de Dean.',
  'Jared Padalecki fraturou o pulso de verdade durante uma cena de luta na 2ª temporada.',
  'A ideia da série nasceu numa reunião de brainstorm: "dois caras numa estrada".',
  'Antes de atuar, Misha Collins (Castiel) teve sua própria empresa de software.',
  'A cena do incêndio no berçário do piloto usou fogo real, com bombeiros de prontidão.'
];

const titleEl = document.getElementById('tituloSobrenatural');
const swarmLayer = document.getElementById('swarmLayer');
let swarmBusy = false;

function spawnShock(x,y){
  const s1 = document.createElement('div');
  s1.className = 'shockwave';
  s1.style.left = x+'px'; s1.style.top = y+'px';
  document.body.appendChild(s1);
  requestAnimationFrame(()=> s1.classList.add('play'));
  setTimeout(()=> s1.remove(), 1100);

  const s2 = document.createElement('div');
  s2.className = 'shockwave shockwave2';
  s2.style.left = x+'px'; s2.style.top = y+'px';
  document.body.appendChild(s2);
  requestAnimationFrame(()=> s2.classList.add('play'));
  setTimeout(()=> s2.remove(), 1500);

  const flash = document.createElement('div');
  flash.className = 'flash-overlay';
  flash.style.setProperty('--fx', x+'px');
  flash.style.setProperty('--fy', y+'px');
  document.body.appendChild(flash);
  requestAnimationFrame(()=> flash.classList.add('play'));
  setTimeout(()=> flash.remove(), 700);
}

function spawnTitleSwarm(){
  if(swarmBusy) return;
  swarmBusy = true;
  const rect = titleEl.getBoundingClientRect();
  const originXFixed = rect.left + rect.width/2;
  const originYFixed = rect.top + rect.height/2;
  const originX = originXFixed + window.scrollX;
  const originY = originYFixed + window.scrollY;
  const docH = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  const docW = document.documentElement.clientWidth;

  spawnShock(originXFixed, originYFixed);

  const kinds = [
    {svg:SKULL_SVG, cls:'sw-skull'},
    {svg:SWARM_GHOST_SVG, cls:'sw-ghost'},
    {svg:SPIDER_SVG, cls:'sw-spider'}
  ];
  const created = [];

  // criaturas (caveiras, fantasmas, aranhas)
  const creatureCount = 30;
  for(let i=0;i<creatureCount;i++){
    const kind = kinds[i % kinds.length];
    const el = document.createElement('div');
    el.className = 'swarm-creature ' + kind.cls;
    el.innerHTML = '<div class="sw-inner">' + kind.svg + '</div>';
    el.style.left = originX + 'px';
    el.style.top = originY + 'px';
    const size = 16 + Math.random()*16;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    swarmLayer.appendChild(el);
    created.push(el);

    requestAnimationFrame(()=> el.classList.add('active'));

    const targetTop = 60 + Math.random()*(docH-140);
    const targetLeft = 30 + Math.random()*(docW-60);
    setTimeout(()=>{
      el.style.top = targetTop + 'px';
      el.style.left = targetLeft + 'px';
    }, 100 + i*15 + Math.random()*50);
  }

  // frases e curiosidades — uma de cada vez, em sequência, numa caixa única
  const combo = PHRASES.map(t=>({text:t, tag:'frase'})).concat(TRIVIA.map(t=>({text:t, tag:'curiosidade'})));
  for(let i=combo.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [combo[i],combo[j]]=[combo[j],combo[i]]; }
  const sequence = combo.slice(0,7);

  const caption = document.createElement('div');
  caption.className = 'swarm-caption';
  caption.innerHTML = '<span class="sw-tag"></span><span class="sw-txt"></span><button class="sw-share" type="button" aria-label="Copiar frase">⧉</button>';
  document.body.appendChild(caption);
  const tagEl = caption.querySelector('.sw-tag');
  const txtEl = caption.querySelector('.sw-txt');
  const shareBtn = caption.querySelector('.sw-share');

  shareBtn.addEventListener('click', ()=>{
    const text = txtEl.textContent;
    const done = ()=>{
      shareBtn.textContent = '✓';
      setTimeout(()=> shareBtn.textContent = '⧉', 1400);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(()=> window.prompt('Copie a frase:', text));
    } else {
      window.prompt('Copie a frase:', text);
    }
  });

  let idx = 0;
  function showItem(){
    const item = sequence[idx % sequence.length];
    txtEl.classList.add('swap');
    setTimeout(()=>{
      tagEl.textContent = item.tag;
      txtEl.textContent = item.text;
      txtEl.classList.remove('swap');
    }, 220);
    idx++;
  }
  showItem();
  requestAnimationFrame(()=> caption.classList.add('active'));
  const captionInterval = setInterval(showItem, 5000);

  // permanece por 15 segundos, depois some aos poucos
  setTimeout(()=>{
    clearInterval(captionInterval);
    caption.classList.remove('active');
    caption.classList.add('fading');
    setTimeout(()=> caption.remove(), 600);

    created.forEach((el,i)=>{
      setTimeout(()=>{
        el.classList.add('fading');
        setTimeout(()=> el.remove(), 850);
      }, i*18);
    });
    swarmBusy = false;
  }, 15000);
}

titleEl.addEventListener('click', (e)=>{
  e.stopPropagation();
  SoundFX.titleClick();
  spawnTitleSwarm();
});

// curtain reveal
window.addEventListener('load', ()=>{
  setTimeout(()=>document.body.classList.add('opened'), 700);
});

// theme toggle (dark / light)
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', ()=>{
  const isLight = root.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  try{ localStorage.setItem('sobrenatural-theme', next); }catch(e){}
});

// ghost click effect — onda de choque + faíscas + mini-fantasmas se espalhando
const GHOST_SVG = '<svg viewBox="0 0 64 64"><path d="M32 4C19 4 10 14 10 27v27l6-6 6 6 6-6 6 6 6-6 6 6V27C40 14 45 4 32 4zm-9 22a4 4 0 110-8 4 4 0 010 8zm18 0a4 4 0 110-8 4 4 0 010 8z"/></svg>';

function spawnClickRing(x,y){
  const r = document.createElement('div');
  r.className = 'click-ring';
  r.style.left = x + 'px';
  r.style.top = y + 'px';
  document.body.appendChild(r);
  requestAnimationFrame(()=> r.classList.add('play'));
  setTimeout(()=> r.remove(), 620);
}

function spawnSpark(x,y,tx,ty,delay){
  const s = document.createElement('div');
  s.className = 'click-spark';
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  s.style.setProperty('--tx', tx + 'px');
  s.style.setProperty('--ty', ty + 'px');
  document.body.appendChild(s);
  setTimeout(()=>{
    s.classList.add('play');
    setTimeout(()=> s.remove(), 750);
  }, delay);
}

function spawnMiniGhost(x,y,tx,ty,delay,size,rot){
  const g = document.createElement('div');
  g.className = 'mini-ghost';
  g.style.left = x + 'px';
  g.style.top = y + 'px';
  g.style.width = size + 'px';
  g.style.height = size + 'px';
  g.style.setProperty('--tx', tx + 'px');
  g.style.setProperty('--ty', ty + 'px');
  g.style.setProperty('--rot', rot + 'deg');
  g.innerHTML = GHOST_SVG;
  document.body.appendChild(g);
  setTimeout(()=>{
    g.classList.add('play');
    setTimeout(()=> g.remove(), 1100);
  }, delay);
}

document.addEventListener('click', (e)=>{
  if(e.target.closest('#tituloSobrenatural')) return; // o título tem sua própria mecânica
  const x = e.clientX, y = e.clientY;

  SoundFX.click();
  spawnClickRing(x,y);

  const sparkCount = 5;
  for(let i=0;i<sparkCount;i++){
    const angle = (Math.PI*2/sparkCount)*i + Math.random()*0.4;
    const dist = 20 + Math.random()*26;
    spawnSpark(x, y, Math.cos(angle)*dist, Math.sin(angle)*dist, Math.random()*80);
  }

  const count = 6;
  for(let i=0;i<count;i++){
    const angle = (Math.PI*2/count)*i + (Math.random()*0.5 - 0.25);
    const dist = 45 + Math.random()*55;
    const tx = Math.cos(angle)*dist;
    const ty = Math.sin(angle)*dist - 18;
    const size = 16 + Math.random()*12;
    const delay = 60 + i*25 + Math.random()*40;
    const rot = (Math.random()*60 - 30);
    spawnMiniGhost(x,y,tx,ty,delay,size,rot);
  }
});

// scroll suave customizado com easing, tipo "rolagem de filme"
function easeInOutCubic(t){ return t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
function smoothScrollTo(targetY, duration){
  const startY = window.scrollY;
  const diff = targetY - startY;
  if(Math.abs(diff) < 2) return;
  let startTime = null;
  function step(ts){
    if(!startTime) startTime = ts;
    const elapsed = ts - startTime;
    const t = Math.min(elapsed/duration, 1);
    window.scrollTo({top: startY + diff*easeInOutCubic(t), left:0, behavior:'auto'});
    if(t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    navLinks.classList.remove('open');
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      const y = target.getBoundingClientRect().top + window.scrollY - 8;
      smoothScrollTo(y, 1000);
    }
  });
});
const scrollCueEl = document.querySelector('.scroll-cue');
if(scrollCueEl){
  scrollCueEl.style.cursor = 'pointer';
  scrollCueEl.addEventListener('click', ()=>{
    const target = document.getElementById('sobre');
    const y = target.getBoundingClientRect().top + window.scrollY - 8;
    smoothScrollTo(y, 1000);
  });
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:.15});
revealEls.forEach(el=>io.observe(el));

// contagem animada dos números da seção "Sobre"
const countEls = document.querySelectorAll('[data-count]');
const countIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const t = Math.min((now-start)/duration, 1);
      const eased = 1 - Math.pow(1-t, 3);
      el.textContent = Math.round(target*eased);
      if(t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, {threshold:.4});
countEls.forEach(el=>countIO.observe(el));

// active nav link on scroll
const sections = document.querySelectorAll('section[id]');

// bestiário: virar cartas ao clicar
document.querySelectorAll('.beast-card').forEach(card=>{
  card.addEventListener('click', ()=>{ SoundFX.flip(); card.classList.toggle('flipped'); });
});

// ---- mapa da estrada ----
const mapTooltip = document.getElementById('mapTooltip');
document.querySelectorAll('.map-pin').forEach(pin=>{
  pin.addEventListener('click', ()=>{
    SoundFX.select();
    document.querySelectorAll('.map-pin').forEach(p=>p.classList.remove('active'));
    pin.classList.add('active');
    mapTooltip.textContent = pin.dataset.info;
  });
});

// inclinação 3D nos cards de personagens ao mover o mouse
document.querySelectorAll('.cast-card').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    card.style.transform = `perspective(700px) rotateX(${(-y*10).toFixed(2)}deg) rotateY(${(x*10).toFixed(2)}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});

// acordeão do guia de temporadas
document.querySelectorAll('.season-row').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const detail = btn.nextElementSibling;
    const isOpen = detail.classList.contains('open');
    detail.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

// ---- QUIZ: qual caçador você seria ----
const QUIZ_RESULTS = {
  sam:     {name:'Sam Winchester', accent:'96,128,158',  desc:'Você é o estrategista do grupo: pensa antes de agir e busca entender o motivo por trás de cada caçada.'},
  dean:    {name:'Dean Winchester', accent:'168,64,42',   desc:'Você lidera pelo exemplo, age com o coração e nunca abandona quem ama — nem que o mundo esteja acabando.'},
  cas:     {name:'Castiel', accent:'150,132,86',          desc:'Você questiona as regras que não fazem sentido e escolhe seu próprio caminho, mesmo contra ordens superiores.'},
  bobby:   {name:'Bobby Singer', accent:'140,92,48',      desc:'Você é a base que todo grupo precisa: experiente, confiável e sempre pronto pra ensinar o que sabe.'},
  crowley: {name:'Crowley', accent:'122,34,64',           desc:'Você é esperto e pragmático, sempre um passo à frente — e não tem medo de negociar pra sobreviver.'},
  mary:    {name:'Mary Winchester', accent:'184,148,58',  desc:'Sua coragem silenciosa e instinto protetor fazem de você alguém em quem todos podem confiar.'},
  angel:   {name:'Um Anjo', accent:'194,164,74',          desc:'Seu senso de dever fala mais alto que tudo. Você segue um propósito maior, mesmo quando ele exige sacrifício.', imgAlt:'Anjo'},
  demon:   {name:'Um Demônio', accent:'150,26,34',        desc:'Pragmático e ambicioso, você faz o que for preciso pra conseguir o que quer — regras são só sugestões.', imgAlt:'Demônio'}
};
const quizQuestions = Array.from(document.querySelectorAll('.quiz-question'));
const quizProgressBar = document.getElementById('quizProgressBar');
const quizResult = document.getElementById('quizResult');
const quizBox = document.getElementById('quizBox');
let quizIndex = 0;
const quizScores = {};

function updateQuizProgress(){
  const pct = (quizIndex/quizQuestions.length)*100;
  quizProgressBar.style.width = pct + '%';
}
updateQuizProgress();

quizQuestions.forEach(q=>{
  q.querySelectorAll('.quiz-options button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      SoundFX.select();
      const char = btn.dataset.char;
      quizScores[char] = (quizScores[char]||0) + 1;
      q.classList.remove('active');
      quizIndex++;
      if(quizIndex < quizQuestions.length){
        quizQuestions[quizIndex].classList.add('active');
        updateQuizProgress();
      } else {
        updateQuizProgress();
        showQuizResult();
      }
    });
  });
});

function renderQuizResultByKey(key){
  const data = QUIZ_RESULTS[key] || QUIZ_RESULTS.dean;
  const realKey = QUIZ_RESULTS[key] ? key : 'dean';
  quizBox.style.setProperty('--accent-rgb', data.accent);
  quizBox.style.setProperty('--accent', 'rgb(' + data.accent + ')');
  document.getElementById('quizResultName').textContent = data.name;
  document.getElementById('quizResultDesc').textContent = data.desc;
  quizResult.hidden = false;
  quizResult.style.setProperty('--accent-rgb', data.accent);
  quizResult.style.setProperty('--accent', 'rgb(' + data.accent + ')');

  const avatarEl = document.getElementById('quizResultAvatar');
  const sourceImg = data.imgAlt
    ? document.querySelector('.quiz-duality-img[alt="' + data.imgAlt + '"]')
    : document.querySelector('.cast-card[data-char="' + realKey + '"] img');
  avatarEl.innerHTML = sourceImg ? '<img src="' + sourceImg.src + '" alt="' + data.name + '">' : '';

  document.getElementById('quizShareBtn').dataset.name = data.name;
}

function showQuizResult(){
  let best = null, bestScore = -1;
  Object.entries(quizScores).forEach(([char,score])=>{
    if(score > bestScore){ best = char; bestScore = score; }
  });
  renderQuizResultByKey(best);
  try{
    localStorage.setItem('sobrenatural-last-quiz', JSON.stringify({key: best, ts: Date.now()}));
  }catch(e){}
}

// ---- lembrar do último resultado do quiz ----
(function initQuizMemory(){
  const box = document.getElementById('quizLastResult');
  let saved = null;
  try{ saved = JSON.parse(localStorage.getItem('sobrenatural-last-quiz')); }catch(e){}
  if(!saved || !QUIZ_RESULTS[saved.key]) return;

  document.getElementById('quizLastResultText').textContent =
    'Da última vez, você foi ' + QUIZ_RESULTS[saved.key].name + '.';
  box.hidden = false;

  document.getElementById('quizShowLast').addEventListener('click', ()=>{
    box.hidden = true;
    quizQuestions.forEach(q=> q.classList.remove('active'));
    quizProgressBar.style.width = '100%';
    renderQuizResultByKey(saved.key);
    quizResult.scrollIntoView({behavior:'smooth', block:'center'});
  });
  document.getElementById('quizDoAgain').addEventListener('click', ()=>{
    box.hidden = true;
  });
})();

// ---- compartilhar resultado do quiz ----
document.getElementById('quizShareBtn').addEventListener('click', async (e)=>{
  const name = e.currentTarget.dataset.name || 'um caçador';
  const statusEl = document.getElementById('quizShareStatus');
  const text = 'Fiz o quiz do site de fã de Sobrenatural e descobri que eu seria ' + name + '! 🔮';

  if(navigator.share){
    try{
      await navigator.share({text});
      statusEl.textContent = 'Compartilhado!';
    }catch(err){
      // usuário cancelou o compartilhamento, sem problema
    }
  } else if(navigator.clipboard && navigator.clipboard.writeText){
    try{
      await navigator.clipboard.writeText(text);
      statusEl.textContent = 'Copiado! Cole onde quiser.';
    }catch(err){
      window.prompt('Copie seu resultado:', text);
    }
  } else {
    window.prompt('Copie seu resultado:', text);
  }
  setTimeout(()=> statusEl.textContent = '', 3000);
});

document.getElementById('quizRestart').addEventListener('click', ()=>{
  quizIndex = 0;
  Object.keys(quizScores).forEach(k=> delete quizScores[k]);
  quizResult.hidden = true;
  quizQuestions.forEach((q,i)=> q.classList.toggle('active', i===0));
  updateQuizProgress();
});

// ---- easter egg: código Konami ----
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiPos = 0;
document.addEventListener('keydown', (e)=>{
  const key = e.key;
  if(key === KONAMI[konamiPos]){
    konamiPos++;
    if(konamiPos === KONAMI.length){
      konamiPos = 0;
      activateHunterMode();
    }
  } else {
    konamiPos = (key === KONAMI[0]) ? 1 : 0;
  }
});

function activateHunterMode(){
  const toast = document.createElement('div');
  toast.className = 'hunter-toast';
  toast.textContent = '🐺 Modo Caçador ativado';
  document.body.appendChild(toast);
  requestAnimationFrame(()=> toast.classList.add('show'));
  setTimeout(()=>{ toast.classList.remove('show'); setTimeout(()=> toast.remove(), 500); }, 3200);

  if(titleEl){ spawnTitleSwarm(); }
}


const castSearch = document.getElementById('castSearch');
const castCards = Array.from(document.querySelectorAll('#castGrid .cast-card'));
const castSearchCount = document.getElementById('castSearchCount');
function filterCast(){
  const q = castSearch.value.trim().toLowerCase();
  let visible = 0;
  castCards.forEach(card=>{
    const name = card.querySelector('h4').textContent.toLowerCase();
    const actor = card.querySelector('.actor').textContent.toLowerCase();
    const match = !q || name.includes(q) || actor.includes(q);
    card.classList.toggle('hidden', !match);
    if(match) visible++;
  });
  castSearchCount.textContent = q ? visible + ' de ' + castCards.length : '';
}
castSearch.addEventListener('input', filterCast);

// ---- gerador de nome de caçador ----
const ALIAS_FIRST = ['Ace','Raven','Duke','Jett','Roxy','Axl','Cash','Dutch','Sonny','Nico','Blaze','Harlow','Wes','Cruz','Shade','Frankie','Joey','Lucky'];
const ALIAS_LAST = ['Steel','Cross','Malone','Calloway','Vance','Sterling','Ryder','Slade','Cole','Dane','Rourke','Vaughn','Knox','Doyle','Marlowe','Wolfe'];

function hashText(str){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
  return h;
}

const aliasInput = document.getElementById('aliasInput');
const aliasBtn = document.getElementById('aliasBtn');
const aliasAgain = document.getElementById('aliasAgain');
const aliasResult = document.getElementById('aliasResult');
const aliasName = document.getElementById('aliasName');

function generateAlias(randomize){
  const base = aliasInput.value.trim() || 'caçador';
  const seed = randomize ? Math.floor(Math.random()*100000) : hashText(base.toLowerCase());
  const first = ALIAS_FIRST[seed % ALIAS_FIRST.length];
  const last = ALIAS_LAST[Math.floor(seed/7) % ALIAS_LAST.length];
  aliasName.textContent = first + ' ' + last;
  aliasResult.hidden = false;
  requestAnimationFrame(()=> aliasResult.classList.add('show'));
}

aliasBtn.addEventListener('click', ()=> generateAlias(false));
aliasAgain.addEventListener('click', ()=> generateAlias(true));
aliasInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') generateAlias(false); });

// ---- calculadora de maratona ----
const TOTAL_EPISODES = 327;
const MIN_PER_EP = 44;
const marathonSlider = document.getElementById('marathonSlider');
const marathonEpDay = document.getElementById('marathonEpDay');
const marathonDays = document.getElementById('marathonDays');
function updateMarathon(){
  const perDay = parseInt(marathonSlider.value, 10);
  marathonEpDay.textContent = perDay;
  const days = Math.ceil(TOTAL_EPISODES / perDay);
  marathonDays.textContent = days === 1 ? '1 dia' : days + ' dias';
}
marathonSlider.addEventListener('input', updateMarathon);
updateMarathon();

const navA = document.querySelectorAll('.nav-link');
const progressBar = document.getElementById('scrollProgressBar');
// ---- sistema de efeitos sonoros (sintetizados, sem arquivos externos) ----
const SoundFX = (()=>{
  let ctx = null;
  let muted = (localStorage.getItem('sobrenatural-muted') === '1');

  function getCtx(){
    if(!ctx){
      try{ ctx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ return null; }
    }
    if(ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, duration, type, startGain, opts){
    if(muted) return;
    const audioCtx = getCtx();
    if(!audioCtx) return;
    opts = opts || {};
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    if(opts.slideTo){
      osc.frequency.exponentialRampToValueAtTime(opts.slideTo, audioCtx.currentTime + duration);
    }
    gain.gain.setValueAtTime(startGain, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }

  return {
    click(){ tone(320, .18, 'sine', .05, {slideTo:120}); },
    titleClick(){
      tone(180, .6, 'sine', .07, {slideTo:40});
      setTimeout(()=> tone(500, .35, 'triangle', .04, {slideTo:700}), 90);
    },
    select(){ tone(440, .12, 'triangle', .045, {slideTo:520}); },
    flip(){ tone(260, .16, 'square', .03, {slideTo:180}); },
    isMuted(){ return muted; },
    toggle(){
      muted = !muted;
      localStorage.setItem('sobrenatural-muted', muted ? '1' : '0');
      if(!muted) getCtx();
      return muted;
    }
  };
})();

const soundToggleBtn = document.getElementById('soundToggle');
if(SoundFX.isMuted()) soundToggleBtn.classList.add('muted');
soundToggleBtn.addEventListener('click', ()=>{
  const nowMuted = SoundFX.toggle();
  soundToggleBtn.classList.toggle('muted', nowMuted);
});

const backToTopBtn = document.getElementById('backToTop');
backToTopBtn.addEventListener('click', ()=> smoothScrollTo(0, 900));
const footerTopBtn = document.getElementById('footerTop');
if(footerTopBtn) footerTopBtn.addEventListener('click', ()=> smoothScrollTo(0, 900));
window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(sec=>{
    const top = sec.offsetTop - 140;
    if(window.scrollY >= top) current = sec.id;
  });
  navA.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';

  backToTopBtn.classList.toggle('show', scrollTop > window.innerHeight * .6);
});

// embers canvas
const canvas = document.getElementById('embers');
const ctx = canvas.getContext('2d');
function resize(){canvas.width = innerWidth; canvas.height = innerHeight;}
resize(); window.addEventListener('resize', resize);

let sulfurRGB = getComputedStyle(root).getPropertyValue('--sulfur-rgb').trim() || '201,162,39';
themeBtn.addEventListener('click', ()=>{
  sulfurRGB = getComputedStyle(root).getPropertyValue('--sulfur-rgb').trim() || '201,162,39';
});

const embers = Array.from({length:46}, ()=> spawn());
function spawn(){
  return {
    x: Math.random()*innerWidth,
    y: innerHeight + Math.random()*100,
    r: 1 + Math.random()*2.4,
    speed: .3 + Math.random()*1,
    drift: (Math.random()-.5)*.6,
    life: Math.random()*1
  };
}
function tick(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  embers.forEach(p=>{
    p.y -= p.speed;
    p.x += p.drift;
    p.life += 0.004;
    const flicker = .4 + Math.abs(Math.sin(p.life*8))*.6;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = `rgba(${sulfurRGB},${flicker*0.7})`;
    ctx.shadowColor = `rgba(${sulfurRGB},.9)`;
    ctx.shadowBlur = 8;
    ctx.fill();
    if(p.y < -20){ Object.assign(p, spawn(), {y: innerHeight+20}); }
  });
  requestAnimationFrame(tick);
}
tick();

// ---- contador de visitas (local, sem banco de dados) ----
function initVisitCounter(){
  const textEl = document.getElementById('visitCounterText');
  try{
    const alreadyCountedToday = sessionStorage.getItem('sobrenatural-visited');
    let n = parseInt(localStorage.getItem('sobrenatural-visit-count') || '0', 10);
    if(!alreadyCountedToday){
      n += 1;
      localStorage.setItem('sobrenatural-visit-count', String(n));
      sessionStorage.setItem('sobrenatural-visited', '1');
    }
    textEl.textContent = 'você visitou ' + n + (n === 1 ? ' vez' : ' vezes') + ' neste navegador';
  }catch(e){
    textEl.textContent = 'obrigado pela visita!';
  }
}
initVisitCounter();