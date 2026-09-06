/* ============ DATA ============ */
const members = [
  {
    name:"Todoroki Hajime",
    tag:"DEV_IS · Regloss",
    accent:"#EE82EE",
    desc:"Add Hajime's bio here — background, debut date, and what makes him your favourite.",
    photos:3
  },
  {
    name:"Mori Calliope",
    tag:"hololive English · Myth",
    accent:"#e63950",
    desc:"Add Calliope's bio here — reaper rapper of Hololive English, first gen Myth.",
    photos:3
  },
  {
    name:"Shirakami Fubuki",
    tag:"hololive · GAMERS",
    accent:"#8ecae6",
    desc:"Add Fubuki's bio here — the everyday elite fox, GAMERS founding member.",
    photos:3
  },
  {
    name:"Inugami Korone",
    tag:"hololive · GAMERS",
    accent:"#52d1a3",
    desc:"Add Korone's bio here — energetic dog, gaming marathoner of GAMERS.",
    photos:3
  },
  {
    name:"Nekomata Okayu",
    tag:"hololive · GAMERS",
    accent:"#ffb26b",
    desc:"Add Okayu's bio here — laid-back cat with the iconic laugh, GAMERS member.",
    photos:3
  },
  {
    name:"Oozora Subaru",
    tag:"hololive · GAMERS",
    accent:"#9b8cf2",
    desc:"Add Subaru's bio here — hardworking crow, GAMERS' resident idol enthusiast.",
    photos:3
  },
  {
    name:"Watson Amelia",
    tag:"hololive English · Myth",
    accent:"#ffd166",
    desc:"Add Amelia's bio here — time-travelling detective, Myth gen member.",
    photos:3
  },
  {
    name:"Gawr Gura",
    tag:"hololive English · Myth",
    accent:"#4cc9f0",
    desc:"Add Gura's bio here — shark idol, most subscribed VTuber, Myth gen member.",
    photos:3
  },
  {
    name:"Takanashi Kiara",
    tag:"hololive English · Myth",
    accent:"#ff5e5b",
    desc:"Add Kiara's bio here — fiery phoenix, Myth gen member.",
    photos:3
  },
  {
    name:"Ninomae Ina'nis",
    tag:"hololive English · Myth",
    accent:"#7b2ff7",
    desc:"Add Ina'nis' bio here — cosmic priestess and artist, Myth gen member.",
    photos:3
  }
];

let currentIndex = 0;
let currentPhoto = 0;

/* ============ BACKGROUND DOTS ============ */
const dotField = document.getElementById('dot-field');
const DOT_COUNT = 70;
for(let i=0;i<DOT_COUNT;i++){
  const d = document.createElement('div');
  d.className = 'dot';
  const size = Math.random()*3 + 1.5;
  d.style.width = size+'px';
  d.style.height = size+'px';
  d.style.left = Math.random()*100+'%';
  d.style.top = Math.random()*100+'%';
  d.style.setProperty('--peak', (Math.random()*0.5+0.4).toFixed(2));
  d.style.animationDuration = (Math.random()*5 + 3.5)+'s';
  d.style.animationDelay = (Math.random()*6)+'s';
  dotField.appendChild(d);
}

/* ============ RENDER GRID ============ */
const grid = document.getElementById('grid');
const personIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg>`;

members.forEach((m, i)=>{
  const card = document.createElement('button');
  card.className = 'card';
  card.style.setProperty('--card-accent', m.accent);
  card.innerHTML = `
    <div class="card-photo">${personIcon}</div>
    <div class="card-name">${m.name}</div>
    <div class="card-tag"><span class="card-dot"></span>${m.tag}</div>
  `;
  card.addEventListener('click', ()=> openModal(i));
  grid.appendChild(card);
});

/* ============ MODAL ============ */
const backdrop = document.getElementById('backdrop');
const panel = document.getElementById('panel');
const panelTag = document.getElementById('panelTag');
const panelName = document.getElementById('panelName');
const panelDesc = document.getElementById('panelDesc');
const mediaLabel = document.getElementById('mediaLabel');
const thumbRow = document.getElementById('thumbRow');
const closeBtn = document.getElementById('closeBtn');

function renderPanel(index, photoIndex){
  const m = members[index];
  panel.style.setProperty('--card-accent', m.accent);
  panelTag.textContent = m.tag;
  panelName.textContent = m.name;
  panelDesc.innerHTML = m.desc + `<span class="placeholder-note">Placeholder text &mdash; swap in the real bio.</span>`;
  mediaLabel.textContent = `Full body image ${photoIndex+1} of ${m.photos} goes here`;

  thumbRow.innerHTML = '';
  for(let p=0; p<m.photos; p++){
    const t = document.createElement('div');
    t.className = 'thumb' + (p===photoIndex ? ' active' : '');
    t.textContent = p+1;
    t.addEventListener('click', ()=> setPhoto(p));
    thumbRow.appendChild(t);
  }
}

function openModal(index){
  currentIndex = index;
  currentPhoto = 0;
  renderPanel(currentIndex, currentPhoto);
  document.body.classList.add('blur-bg');
  backdrop.classList.add('open');
}

function closeModal(){
  document.body.classList.remove('blur-bg');
  backdrop.classList.remove('open');
}

function setPhoto(p){
  currentPhoto = p;
  renderPanel(currentIndex, currentPhoto);
}

function changeMember(dir){
  const dirSign = dir === 'next' ? 1 : -1;
  panel.style.setProperty('--slide', (dirSign*24)+'px');
  panel.classList.add('switching');
  setTimeout(()=>{
    currentIndex = (currentIndex + dirSign + members.length) % members.length;
    currentPhoto = 0;
    renderPanel(currentIndex, currentPhoto);
    panel.style.setProperty('--slide', (dirSign*-24)+'px');
    panel.classList.remove('switching');
  }, 220);
}

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', (e)=>{ if(e.target === backdrop) closeModal(); });

document.addEventListener('keydown', (e)=>{
  if(!backdrop.classList.contains('open')) return;
  if(e.key === 'Escape') closeModal();
  if(e.key === 'ArrowRight') changeMember('next');
  if(e.key === 'ArrowLeft') changeMember('prev');
});

/* ============ EDGE HOVER ARROWS ============ */
const zoneLeft = document.getElementById('zoneLeft');
const zoneRight = document.getElementById('zoneRight');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

document.addEventListener('mousemove', (e)=>{
  if(!backdrop.classList.contains('open')){
    zoneLeft.classList.remove('active','hovered');
    zoneRight.classList.remove('active','hovered');
    return;
  }
  zoneLeft.classList.add('active');
  zoneRight.classList.add('active');

  const w = window.innerWidth;
  const edge = w * 0.14;
  zoneLeft.classList.toggle('hovered', e.clientX < edge);
  zoneRight.classList.toggle('hovered', e.clientX > w - edge);
});

prevArrow.addEventListener('click', ()=> changeMember('prev'));
nextArrow.addEventListener('click', ()=> changeMember('next'));
