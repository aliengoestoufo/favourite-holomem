/* ============ DATA ============ */
const sections = [
  { id:"gen0", label:"Gen 0", accent:"#38bdf8", flag:"🇯🇵", members:[
    ["Tokino Sora"],["Robocosan"],["AZKi"],["Sakura Miko"],["Hoshimachi Suisei"]
  ]},
  { id:"gen1", label:"Gen 1", accent:"#f59e0b", flag:"🇯🇵", members:[
    ["Aki Rosenthal"],["Akai Haato"],["Shirakami Fubuki"],["Natsuiro Matsuri"]
  ]},
  { id:"gen2", label:"Gen 2", accent:"#ec4899", flag:"🇯🇵", members:[
    ["Nakiri Ayame"],["Yuzuki Choco"],["Oozora Subaru"],["Minato Aqua","alum"],["Murasaki Shion","alum"]
  ]},
  { id:"gamers", label:"GAMERS", accent:"#10b981", flag:"🇯🇵", members:[
    ["Shirakami Fubuki"],["Ookami Mio"],["Nekomata Okayu"],["Inugami Korone"]
  ]},
  { id:"gen3", label:"Gen 3", accent:"#ef4444", flag:"🇯🇵", members:[
    ["Usada Pekora"],["Shiranui Flare"],["Shirogane Noel"],["Houshou Marine"]
  ]},
  { id:"gen4", label:"Gen 4", accent:"#8b5cf6", flag:"🇯🇵", members:[
    ["Tsunomaki Watame"],["Tokoyami Towa"],["Himemori Luna"],["Amane Kanata","alum"],["Kiryu Coco","alum"]
  ]},
  { id:"gen5", label:"Gen 5", accent:"#0ea5e9", flag:"🇯🇵", members:[
    ["Yukihana Lamy"],["Momosuzu Nene"],["Shishiro Botan"],["Omaru Polka"]
  ]},
  { id:"holox", label:"holoX", accent:"#a855f7", flag:"🇯🇵", members:[
    ["La+ Darknesss"],["Takane Lui"],["Hakui Koyori"],["Kazama Iroha"],["Sakamata Chloe","affiliate"]
  ]},
  { id:"area15", label:"AREA15", accent:"#f97316", flag:"🇮🇩", members:[
    ["Ayunda Risu"],["Moona Hoshinova"],["Airani Iofifteen"]
  ]},
  { id:"holoro", label:"HOLORO", accent:"#fb923c", flag:"🇮🇩", members:[
    ["Kureiji Ollie"],["Anya Melfissa"],["Pavolia Reine"]
  ]},
  { id:"holoh3ro", label:"holoH3RO", accent:"#ea580c", flag:"🇮🇩", members:[
    ["Vestia Zeta"],["Kaela Kovalskia"],["Kobo Kanaeru"]
  ]},
  { id:"myth", label:"Myth", accent:"#dc2626", flag:"🌐", members:[
    ["Mori Calliope"],["Takanashi Kiara"],["Ninomae Ina'nis"],["Watson Amelia","affiliate"],["Gawr Gura","alum"]
  ]},
  { id:"hope", label:"Project: HOPE", accent:"#eab308", flag:"🌐", members:[
    ["IRyS"]
  ]},
  { id:"council", label:"Council", accent:"#3b82f6", flag:"🌐", members:[
    ["Ouro Kronii"],["Hakos Baelz"],["Tsukumo Sana","alum"],["Ceres Fauna","alum"],["Nanashi Mumei","alum"]
  ]},
  { id:"advent", label:"Advent", accent:"#c026d3", flag:"🌐", members:[
    ["Shiori Novella"],["Koseki Bijou"],["Nerissa Ravencroft"],["Fuwawa Abyssgard"],["Mococo Abyssgard"]
  ]},
  { id:"justice", label:"Justice", accent:"#06b6d4", flag:"🌐", members:[
    ["Elizabeth Rose Bloodflame"],["Gigi Murin"],["Cecilia Immergreen"],["Raora Panthera"]
  ]},
  { id:"regloss", label:"ReGLOSS", accent:"#f43f5e", flag:"🇯🇵", members:[
    ["Otonose Kanade"],["Ichijou Ririka"],["Juufuutei Raden"],["Todoroki Hajime"],["Hiodoshi Ao","alum"]
  ]},
  { id:"flowglow", label:"FLOW GLOW", accent:"#65a30d", flag:"🇯🇵", members:[
    ["Isaki Riona"],["Koganei Niko"],["Mizumiya Su"],["Rindo Chihaya"],["Kikirara Vivi"]
  ]},
];

const STATUS_LABEL = { alum:"Alum", affiliate:"Affiliate" };

/* Flatten into one ordered list so the popup can cycle through everyone */
const members = [];
sections.forEach(section=>{
  section.members.forEach(([name, status])=>{
    members.push({
      name,
      status: status || null,
      tag: section.label,
      accent: section.accent,
      flag: section.flag,
      desc: `Add ${name}'s bio here.`,
      photos: 3
    });
  });
});

let currentIndex = 0;
let currentPhoto = 0;

/* ============ BACKGROUND BLOBS ============ */
const blobField = document.getElementById('blob-field');
const blobColors = ['#bfe0ff', '#93c5fd', '#7dd3fc', '#a5b4fc', '#c7d2fe'];
const BLOB_COUNT = 6;
for(let i=0;i<BLOB_COUNT;i++){
  const b = document.createElement('div');
  b.className = 'blob';
  const size = Math.random()*260 + 260;
  b.style.width = size+'px';
  b.style.height = size+'px';
  b.style.left = Math.random()*90+'%';
  b.style.top = Math.random()*90+'%';
  b.style.background = blobColors[i % blobColors.length];
  b.style.animationDuration = (Math.random()*18 + 26)+'s';
  b.style.animationDelay = (Math.random()*-30)+'s';
  b.style.setProperty('--dx', (Math.random()*220 - 110)+'px');
  b.style.setProperty('--dy', (Math.random()*220 - 110)+'px');
  blobField.appendChild(b);
}

/* ============ RENDER NAV (flat pill capsule) ============ */
const navPillsEl = document.getElementById('navPills');
const personIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg>`;

sections.forEach(section=>{
  const a = document.createElement('a');
  a.href = `#${section.id}`;
  a.className = 'nav-pill';
  a.textContent = section.label;
  a.style.setProperty('--pill-accent', section.accent);
  navPillsEl.appendChild(a);
});

/* ============ NAV LIQUID SHIMMER (follows cursor) ============ */
const pillNavGlass = document.querySelector('.pill-nav-glass');
pillNavGlass.addEventListener('mousemove', (e)=>{
  const rect = pillNavGlass.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  pillNavGlass.style.setProperty('--mx', x + '%');
  pillNavGlass.style.setProperty('--my', y + '%');
});
pillNavGlass.addEventListener('mouseenter', ()=> pillNavGlass.classList.add('glow-active'));
pillNavGlass.addEventListener('mouseleave', ()=> pillNavGlass.classList.remove('glow-active'));

/* Let vertical mouse-wheel scroll the pill row horizontally too, since
   it's wider than the viewport at this many sections */
navPillsEl.addEventListener('wheel', (e)=>{
  if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
    navPillsEl.scrollLeft += e.deltaY;
    e.preventDefault();
  }
}, { passive:false });

/* ============ RENDER SECTIONS ============ */
const content = document.getElementById('content');
let flatIndex = 0;

sections.forEach(section=>{
  const sectionEl = document.createElement('section');
  sectionEl.className = 'section';
  sectionEl.id = section.id;

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.innerHTML = `<span class="section-dot" style="--dot-accent:${section.accent}">${section.flag}</span>${section.label}`;
  sectionEl.appendChild(sectionTitle);

  const grid = document.createElement('div');
  grid.className = 'grid';

  section.members.forEach(([name, status])=>{
    const i = flatIndex++;
    const card = document.createElement('button');
    card.className = 'card';
    card.style.setProperty('--card-accent', section.accent);
    const statusBit = status ? ` · ${STATUS_LABEL[status]}` : '';
    card.innerHTML = `
      <div class="card-photo">${personIcon}</div>
      <div class="card-name">${name}</div>
      <div class="card-tag"><span class="card-dot">${section.flag}</span>${section.label}${statusBit}</div>
    `;
    card.addEventListener('click', ()=> openModal(i));
    grid.appendChild(card);
  });

  sectionEl.appendChild(grid);
  content.appendChild(sectionEl);
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
  panelTag.textContent = m.status ? `${m.tag} · ${STATUS_LABEL[m.status]}` : m.tag;
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

/* ============ BACK TO TOP ============ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', ()=>{
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
