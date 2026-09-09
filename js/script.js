/* ============ DATA ============ */
const sections = [
  { id:"gen0", label:"Gen 0", accent:"#38bdf8", flag:"🇯🇵", members:[
    { name:"Tokino Sora", accent:"#38bdf8", bio:"&ldquo;Hey, Sora-tomo! How are you all doing? It's me, Tokino Sora!&rdquo;<br><br>hololive Production's first virtual idol, debuting on September 7, 2017. She loves horror games and singing, and has always dreamed of performing in Yokohama Arena.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg" },
      { platform:"twitter", url:"https://x.com/tokino_sora" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/tokino-sora/" },
    ] },
    { name:"Robocosan", accent:"#f87171", bio:"", photos:[], socials:[] },
    { name:"AZKi", accent:"#d946ef", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC0TXe_LYZ4scaW2XMyi5_kw" },
      { platform:"twitter", url:"https://twitter.com/AZKi_VDiVA" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/azki/" },
    ] },
    { name:"Sakura Miko", accent:"#ec4899", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA" },
      { platform:"twitter", url:"https://twitter.com/sakuramiko35" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/sakuramiko/" },
    ] },
    { name:"Hoshimachi Suisei", accent:"#22d3ee", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A" },
      { platform:"twitter", url:"https://twitter.com/suisei_hosimati" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/hoshimachi-suisei/" },
    ] },
  ]},
  { id:"gen1", label:"Gen 1", accent:"#f59e0b", flag:"🇯🇵", members:[
    { name:"Aki Rosenthal", accent:"#eab308", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA" },
      { platform:"twitter", url:"https://twitter.com/akirosenthal" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/aki-rosenthal/" },
    ] },
    { name:"Akai Haato", accent:"#dc2626", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg" },
      { platform:"twitter", url:"https://twitter.com/akaihaato" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/akai-haato/" },
    ] },
    { name:"Shirakami Fubuki", accent:"#94a3b8", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg" },
      { platform:"twitter", url:"https://twitter.com/shirakamifubuki" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shirakami-fubuki/" },
    ] },
    { name:"Natsuiro Matsuri", accent:"#f97316", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://youtube.com/channel/UCQ0UDLQCjY0rmuxCDE38FGg" },
      { platform:"twitter", url:"https://twitter.com/natsuiromatsuri" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/natsuiro-matsuri/" },
    ] },
  ]},
  { id:"gen2", label:"Gen 2", accent:"#ec4899", flag:"🇯🇵", members:[
    { name:"Nakiri Ayame", bio:"", photos:[], socials:[] },
    { name:"Yuzuki Choco", bio:"", photos:[], socials:[] },
    { name:"Oozora Subaru", bio:"", photos:[], socials:[] },
    { name:"Minato Aqua", status:"alum", bio:"", photos:[], socials:[] },
    { name:"Murasaki Shion", status:"alum", bio:"", photos:[], socials:[] },
  ]},
  { id:"gamers", label:"GAMERS", accent:"#10b981", flag:"🇯🇵", members:[
    { name:"Shirakami Fubuki", bio:"", photos:[], socials:[] },
    { name:"Ookami Mio", bio:"", photos:[], socials:[] },
    { name:"Nekomata Okayu", bio:"", photos:[], socials:[] },
    { name:"Inugami Korone", bio:"", photos:[], socials:[] },
  ]},
  { id:"gen3", label:"Gen 3", accent:"#ef4444", flag:"🇯🇵", members:[
    { name:"Usada Pekora", bio:"", photos:[], socials:[] },
    { name:"Shiranui Flare", bio:"", photos:[], socials:[] },
    { name:"Shirogane Noel", bio:"", photos:[], socials:[] },
    { name:"Houshou Marine", bio:"", photos:[], socials:[] },
  ]},
  { id:"gen4", label:"Gen 4", accent:"#8b5cf6", flag:"🇯🇵", members:[
    { name:"Tsunomaki Watame", bio:"", photos:[], socials:[] },
    { name:"Tokoyami Towa", bio:"", photos:[], socials:[] },
    { name:"Himemori Luna", bio:"", photos:[], socials:[] },
    { name:"Amane Kanata", status:"alum", bio:"", photos:[], socials:[] },
    { name:"Kiryu Coco", status:"alum", bio:"", photos:[], socials:[] },
  ]},
  { id:"gen5", label:"Gen 5", accent:"#0ea5e9", flag:"🇯🇵", members:[
    { name:"Yukihana Lamy", bio:"", photos:[], socials:[] },
    { name:"Momosuzu Nene", bio:"", photos:[], socials:[] },
    { name:"Shishiro Botan", bio:"", photos:[], socials:[] },
    { name:"Omaru Polka", bio:"", photos:[], socials:[] },
  ]},
  { id:"holox", label:"holoX", accent:"#a855f7", flag:"🇯🇵", members:[
    { name:"La+ Darknesss", bio:"", photos:[], socials:[] },
    { name:"Takane Lui", bio:"", photos:[], socials:[] },
    { name:"Hakui Koyori", bio:"", photos:[], socials:[] },
    { name:"Kazama Iroha", bio:"", photos:[], socials:[] },
    { name:"Sakamata Chloe", status:"affiliate", bio:"", photos:[], socials:[] },
  ]},
  { id:"area15", label:"AREA15", accent:"#f97316", flag:"🇮🇩", members:[
    { name:"Ayunda Risu", bio:"", photos:[], socials:[] },
    { name:"Moona Hoshinova", bio:"", photos:[], socials:[] },
    { name:"Airani Iofifteen", bio:"", photos:[], socials:[] },
  ]},
  { id:"holoro", label:"HOLORO", accent:"#fb923c", flag:"🇮🇩", members:[
    { name:"Kureiji Ollie", bio:"", photos:[], socials:[] },
    { name:"Anya Melfissa", bio:"", photos:[], socials:[] },
    { name:"Pavolia Reine", bio:"", photos:[], socials:[] },
  ]},
  { id:"holoh3ro", label:"holoH3RO", accent:"#ea580c", flag:"🇮🇩", members:[
    { name:"Vestia Zeta", bio:"", photos:[], socials:[] },
    { name:"Kaela Kovalskia", bio:"", photos:[], socials:[] },
    { name:"Kobo Kanaeru", bio:"", photos:[], socials:[] },
  ]},
  { id:"myth", label:"Myth", accent:"#dc2626", flag:"🌐", members:[
    { name:"Mori Calliope", bio:"", photos:[], socials:[] },
    { name:"Takanashi Kiara", bio:"", photos:[], socials:[] },
    { name:"Ninomae Ina'nis", bio:"", photos:[], socials:[] },
    { name:"Watson Amelia", status:"affiliate", bio:"", photos:[], socials:[] },
    { name:"Gawr Gura", status:"alum", bio:"", photos:[], socials:[] },
  ]},
  { id:"hope", label:"Project: HOPE", accent:"#eab308", flag:"🌐", members:[
    { name:"IRyS", bio:"", photos:[], socials:[] },
  ]},
  { id:"council", label:"Council", accent:"#3b82f6", flag:"🌐", members:[
    { name:"Ouro Kronii", bio:"", photos:[], socials:[] },
    { name:"Hakos Baelz", bio:"", photos:[], socials:[] },
    { name:"Tsukumo Sana", status:"alum", bio:"", photos:[], socials:[] },
    { name:"Ceres Fauna", status:"alum", bio:"", photos:[], socials:[] },
    { name:"Nanashi Mumei", status:"alum", bio:"", photos:[], socials:[] },
  ]},
  { id:"advent", label:"Advent", accent:"#c026d3", flag:"🌐", members:[
    { name:"Shiori Novella", bio:"", photos:[], socials:[] },
    { name:"Koseki Bijou", bio:"", photos:[], socials:[] },
    { name:"Nerissa Ravencroft", bio:"", photos:[], socials:[] },
    { name:"Fuwawa Abyssgard", bio:"", photos:[], socials:[] },
    { name:"Mococo Abyssgard", bio:"", photos:[], socials:[] },
  ]},
  { id:"justice", label:"Justice", accent:"#06b6d4", flag:"🌐", members:[
    { name:"Elizabeth Rose Bloodflame", bio:"", photos:[], socials:[] },
    { name:"Gigi Murin", bio:"", photos:[], socials:[] },
    { name:"Cecilia Immergreen", bio:"", photos:[], socials:[] },
    { name:"Raora Panthera", bio:"", photos:[], socials:[] },
  ]},
  { id:"regloss", label:"ReGLOSS", accent:"#f43f5e", flag:"🇯🇵", members:[
    { name:"Otonose Kanade", bio:"", photos:[], socials:[] },
    { name:"Ichijou Ririka", bio:"", photos:[], socials:[] },
    { name:"Juufuutei Raden", bio:"", photos:[], socials:[] },
    { name:"Todoroki Hajime", bio:"", photos:[], socials:[] },
    { name:"Hiodoshi Ao", status:"alum", bio:"", photos:[], socials:[] },
  ]},
  { id:"flowglow", label:"FLOW GLOW", accent:"#65a30d", flag:"🇯🇵", members:[
    { name:"Isaki Riona", bio:"", photos:[], socials:[] },
    { name:"Koganei Niko", bio:"", photos:[], socials:[] },
    { name:"Mizumiya Su", bio:"", photos:[], socials:[] },
    { name:"Rindo Chihaya", bio:"", photos:[], socials:[] },
    { name:"Kikirara Vivi", bio:"", photos:[], socials:[] },
  ]},
];

const STATUS_LABEL = { alum:"Alum", affiliate:"Affiliate" };

/* Platform icons + a color per platform.
   - youtube/twitter use close, recognizable approximations of their
     actual marks — standard practice for "this links to X" icons,
     the same reason link-badge icon packs exist.
   - hololive defaults to a generic sparkle, since I can't draw hololive's
     actual logo/mascots myself (that's real, non-abstract character
     art, unlike a simple platform glyph). If a social entry includes
     an `icon` path (see the `socials` format note up top), that image
     is used instead of the generic icon below — so once you have a
     mascot image file, it drops right in. */
const SOCIAL_META = {
  youtube: {
    label:"YouTube",
    color:"#ff0000",
    icon:`<svg viewBox="0 0 28 20" fill="currentColor"><path d="M27.4 3.1c-.3-1.2-1.3-2.1-2.5-2.4C22.7.1 14 .1 14 .1s-8.7 0-10.9.6C1.9 1 .9 1.9.6 3.1 0 5.3 0 10 0 10s0 4.7.6 6.9c.3 1.2 1.3 2.1 2.5 2.4C5.3 19.9 14 19.9 14 19.9s8.7 0 10.9-.6c1.2-.3 2.2-1.2 2.5-2.4.6-2.2.6-6.9.6-6.9s0-4.7-.6-6.9z"/><path fill="#fff" d="M11.2 14.3V5.7L18.5 10z"/></svg>`
  },
  twitter: {
    label:"X",
    color:"#000000",
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  },
  hololive: {
    label:"hololive page",
    color:"#38bdf8",
    icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.8L22 10l-6 4.6L17.6 22 12 17.8 6.4 22 8 14.6 2 10l7.6-1.2z"/></svg>`
  }
};

/* Flatten into one ordered list so the popup can cycle through everyone.
   This just copies each member's fields through — it does NOT invent
   any text. If bio/photos/socials are empty, that's carried through as
   empty, and the render functions below decide what placeholder to show. */
const members = [];
sections.forEach(section=>{
  section.members.forEach(member=>{
    members.push({
      name: member.name,
      status: member.status || null,
      bio: member.bio || "",
      photos: member.photos || [],
      socials: member.socials || [],
      tag: section.label,
      accent: member.accent || section.accent,
      flag: section.flag,
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

  section.members.forEach(member=>{
    const i = flatIndex++;
    const card = document.createElement('button');
    card.className = 'card';
    card.style.setProperty('--card-accent', member.accent || section.accent);
    const statusBit = member.status ? ` · ${STATUS_LABEL[member.status]}` : '';
    const photoMarkup = member.photos[0]
      ? `<img src="${member.photos[0]}" alt="${member.name}">`
      : personIcon;
    card.innerHTML = `
      <div class="card-photo">${photoMarkup}</div>
      <div class="card-name">${member.name}</div>
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
const panelSocials = document.getElementById('panelSocials');
const fullbodyPlaceholder = document.getElementById('fullbodyPlaceholder');
const thumbRow = document.getElementById('thumbRow');
const closeBtn = document.getElementById('closeBtn');

function renderPanel(index, photoIndex){
  const m = members[index];
  panel.style.setProperty('--card-accent', m.accent);
  panelTag.textContent = m.status ? `${m.tag} · ${STATUS_LABEL[m.status]}` : m.tag;
  panelName.textContent = m.name;

  /* Bio: use the real bio if this member has one, otherwise a
     placeholder note so it's obvious it's still unwritten. */
  panelDesc.innerHTML = m.bio
    ? m.bio
    : `Add ${m.name}'s bio here.<span class="placeholder-note">Placeholder text &mdash; swap in the real bio.</span>`;

  /* Socials: one badge per entry in m.socials, using SOCIAL_META for
     the icon/color. No badges at all if the member has none set. */
  panelSocials.innerHTML = '';
  m.socials.forEach(social=>{
    const meta = SOCIAL_META[social.platform];
    if(!meta) return;
    const badge = document.createElement('a');
    badge.className = 'social-badge';
    badge.href = social.url;
    badge.target = '_blank';
    badge.rel = 'noopener noreferrer';
    badge.title = meta.label;
    badge.style.setProperty('--badge-accent', meta.color);
    badge.innerHTML = social.icon
      ? `<img src="${social.icon}" alt="${meta.label}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`
      : meta.icon;
    panelSocials.appendChild(badge);
  });

  /* Photo: use the real image if this member has one at this index,
     otherwise fall back to the dashed placeholder box. */
  const photoPath = m.photos[photoIndex];
  if(photoPath){
    fullbodyPlaceholder.innerHTML = `<img src="${photoPath}" alt="${m.name}" style="width:100%; height:100%; object-fit:contain;">`;
  } else {
    const totalSlots = m.photos.length || 1;
    fullbodyPlaceholder.innerHTML = `
      ${personIcon}
      <span id="mediaLabel">Full body image ${photoIndex+1} of ${totalSlots} goes here</span>
    `;
  }

  thumbRow.innerHTML = '';
  const totalSlots = m.photos.length || 3;
  for(let p=0; p<totalSlots; p++){
    const t = document.createElement('div');
    t.className = 'thumb' + (p===photoIndex ? ' active' : '');
    if(m.photos[p]){
      t.innerHTML = `<img src="${m.photos[p]}" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:7px;">`;
    } else {
      t.textContent = p+1;
    }
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
