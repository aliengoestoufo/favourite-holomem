/* ============ DATA ============ */
const sections = [
  { id:"gen0", label:"Gen 0", accent:"#38bdf8", flag:"🇯🇵", members:[
    { name:"Tokino Sora", accent:"#1565c0", bio:"&ldquo;Hey, Sora-tomo! How are you all doing? It's me, Tokino Sora!&rdquo;<br><br>hololive Production's first virtual idol, debuting on September 7, 2017. She loves horror games and singing, and has always dreamed of performing in Yokohama Arena.<br><br>She signed a record deal with Victor Entertainment in March 2019. She is active in various forms of media, such as appearing in Watanuki-san Chi no and hosting Sora Ao to!, a radio show.<br><br>She held her first solo concert, Dream!, on October 6, 2019, taking one step closer to her ultimate goal.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg" },
      { platform:"twitter", url:"https://x.com/tokino_sora" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/tokino-sora/" },
    ] },
    { name:"Robocosan", accent:"#a888b8", bio:"&ldquo;Hellobo! Roboco here!&rdquo;<br><br>Hellobo! It's me, the high-spec hololive VTuber Roboco! I showed up from a faraway wasteland having lost all my memories. I believe I'm pretty high-spec, but some rumors say that it'd be more accurate to call me &ldquo;broken&rdquo;... lol. I'm a gamer gal whose defining trait is a very human, emotional singing voice!", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCDqI2jOz0weumE8s7paEk6g" },
      { platform:"twitter", url:"https://twitter.com/robocosan" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/roboco-san/" },
    ] },
    { name:"AZKi", accent:"#c2bcae", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC0TXe_LYZ4scaW2XMyi5_kw" },
      { platform:"twitter", url:"https://twitter.com/AZKi_VDiVA" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/azki/" },
    ] },
    { name:"Sakura Miko", accent:"#ff77ab", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA" },
      { platform:"twitter", url:"https://twitter.com/sakuramiko35" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/sakuramiko/" },
    ] },
    { name:"Hoshimachi Suisei", accent:"#33c6e0", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A" },
      { platform:"twitter", url:"https://twitter.com/suisei_hosimati" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/hoshimachi-suisei/" },
    ] },
  ]},
  { id:"gen1", label:"Gen 1", accent:"#f59e0b", flag:"🇯🇵", members:[
    { name:"Aki Rosenthal", accent:"#ff3d94", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA" },
      { platform:"twitter", url:"https://twitter.com/akirosenthal" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/aki-rosenthal/" },
    ] },
    { name:"Akai Haato", accent:"#e6323c", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg" },
      { platform:"twitter", url:"https://twitter.com/akaihaato" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/akai-haato/" },
    ] },
    { name:"Shirakami Fubuki", accent:"#4fc3e8", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg" },
      { platform:"twitter", url:"https://twitter.com/shirakamifubuki" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shirakami-fubuki/" },
    ] },
    { name:"Natsuiro Matsuri", accent:"#ff9d1f", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://youtube.com/channel/UCQ0UDLQCjY0rmuxCDE38FGg" },
      { platform:"twitter", url:"https://twitter.com/natsuiromatsuri" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/natsuiro-matsuri/" },
    ] },
  ]},
  { id:"gen2", label:"Gen 2", accent:"#ec4899", flag:"🇯🇵", members:[
    { name:"Nakiri Ayame", accent:"#e13a4a", bio:"&ldquo;Greetings, Humans! Yoohoo!&rdquo;<br><br>A kimono-clad Oni girl from the Underworld Academy. As she loves to prank people, she always uses will-o'-the-wisp on them just to have fun. Many may not realize it, but she is actually the president of the student council.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC7fk0CB07ly8oSl0aqKkqFg" },
      { platform:"twitter", url:"https://twitter.com/nakiriayame" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/nakiri-ayame/" },
    ] },
    { name:"Yuzuki Choco", accent:"#ff5c9d", bio:"&ldquo;Good evening, my cute students! Choc-on!&rdquo;<br><br>The school nurse at the Underworld Academy. Is incredibly popular among the students, with the boys in particular coming to get checked up all the time. Loves sweets, and often gets into trouble for leaving them strewn about on her desk.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg" },
      { platform:"twitter", url:"https://twitter.com/yuzukichococh" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/yuzuki-choco/" },
    ] },
    { name:"Oozora Subaru", accent:"#c3d825", bio:"&ldquo;Sup! I'm Oozora Subaru from hololive 2nd Generation!&rdquo;<br><br>The manager of an MMA team and an e-sports club. A bright and cheerful girl full of spirit, she can interact with anyone and everyone without hesitation. She's currently working hard on her own pro-gamer skills.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA" },
      { platform:"twitter", url:"https://twitter.com/oozorasubaru" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/oozora-subaru/" },
    ] },
    { name:"Minato Aqua", status:"alum", accent:"#ff8fc0", bio:"", photos:[], socials:[] },
    { name:"Murasaki Shion", status:"alum", accent:"#8a4fc4", bio:"", photos:[], socials:[] },
  ]},
  { id:"gamers", label:"GAMERS", accent:"#10b981", flag:"🇯🇵", members:[
    { name:"Shirakami Fubuki", accent:"#4fc3e8", bio:"", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg" },
      { platform:"twitter", url:"https://twitter.com/shirakamifubuki" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shirakami-fubuki/" },
    ] },
    { name:"Ookami Mio", accent:"#dd4b39", bio:"&ldquo;Hellooowl! It is Ookami Mio!&rdquo;<br><br>A black-haired wolf girl who appeared on our radar randomly. She often shows up around shrines. She likes gaming.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg" },
      { platform:"twitter", url:"https://twitter.com/ookamimio" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/ookami-mio/" },
    ] },
    { name:"Nekomata Okayu", accent:"#9b6fc4", bio:"&ldquo;Nom nom Okayu~!&rdquo;<br><br>A cat being raised by an old woman that runs an onigiri store. She streams from the computer in her grandma's room.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw" },
      { platform:"twitter", url:"https://twitter.com/nekomataokayu" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/nekomata-okayu/" },
    ] },
    { name:"Inugami Korone", accent:"#e0b02a", bio:"&ldquo;Ello! Fingers! Give me your fingers!&rdquo;<br><br>A dog from a bakery in the city. She likes to play games during her free time while watchdogging.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q" },
      { platform:"twitter", url:"https://twitter.com/inugamikorone" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/inugami-korone/" },
    ] },
  ]},
  { id:"gen3", label:"Gen 3", accent:"#ef4444", flag:"🇯🇵", members:[
    { name:"Usada Pekora", accent:"#8ecae6", bio:"&ldquo;Hiya-peko! Hiya-peko! Hiya-pekooo! I'm Usada Pekora, peko!&rdquo;<br><br>A lonely rabbit-eared girl who loves carrots. She loves them so much that she always brings a few anywhere she goes.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ" },
      { platform:"twitter", url:"https://twitter.com/usadapekora" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/usada-pekora/" },
    ] },
    { name:"Shiranui Flare", accent:"#e8442e", bio:"&ldquo;Noon-nui! This is hololive 3rd Gen's Shiranui Flare!&rdquo;<br><br>A half-elf born to a human and elf. Usually enjoys life as she pleases. Wants to be a source of comfort so rely on her whenever you're in trouble. She may be passionate and overly sentimental, but praising her will bring her joy, even if also a little embarrassment! &ldquo;Hehehe! Let's get along!&rdquo;", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg" },
      { platform:"twitter", url:"https://twitter.com/shiranuiflare" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shiranui-flare/" },
    ] },
    { name:"Shirogane Noel", accent:"#9c9c9c", bio:"&ldquo;All hustle, all muscle! Shirogane Noel's here!&rdquo;<br><br>As much as this fluffy, meatheaded knight may be easy-going, she has the dangerous habit of attempting to muscle her way through her problems. Hungering for power, she came to train to the VTuber world where all the stronk people are.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCdyqAaZDKHXg4Ahi7VENThQ" },
      { platform:"twitter", url:"https://twitter.com/shiroganenoel" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shirogane-noel/" },
    ] },
    { name:"Houshou Marine", accent:"#8e1f2e", bio:"&ldquo;Ahoy! Captain of the Houshou Pirates, Houshou Marine here! Keep 'er steady!&rdquo;<br><br>Loves jewels, treasure, and money. Her dream is to become a pirate and go treasure hunting. In order to get a pirate ship, she is now stacking up money as a VTuber on the great lands, just like how the other land-lovers do.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg" },
      { platform:"twitter", url:"https://twitter.com/houshoumarine" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/houshou-marine/" },
    ] },
  ]},
  { id:"gen4", label:"Gen 4", accent:"#8b5cf6", flag:"🇯🇵", members:[
    { name:"Tsunomaki Watame", accent:"#eec213", bio:"&ldquo;Hoof, hoof, helloof!&rdquo; &ldquo;Watame did nothing wrong!&rdquo;<br><br>Loves singing, and as she continued uploading song covers and having weekly singing streams titled &ldquo;Watameh Night Fever!!,&rdquo; she started wanting to stand on Tokyo Budokan's stage someday.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA" },
      { platform:"twitter", url:"https://twitter.com/tsunomakiwatame" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/tsunomaki-watame/" },
    ] },
    { name:"Tokoyami Towa", accent:"#8bc4e8", bio:"&ldquo;Suppies! 'Tis I, Tokoyami Towa, from hololive 4th Generation!&rdquo;<br><br>A young devil who is visiting human society to gain experience and develop her skills. But instead of studying, she became addicted to video games! After learning about a tool for communicating with humans called &ldquo;streaming,&rdquo; she's trying it out to help with her studies.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC1uv2Oq6kNxgATlCiez59hw" },
      { platform:"twitter", url:"https://twitter.com/tokoyamitowa" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/tokoyami-towa/" },
    ] },
    { name:"Himemori Luna", accent:"#ff70a6", bio:"&ldquo;Is evewyone heeere?&rdquo;<br><br>The princess of Candy Kingdom. She's affectionate and loves being pampered, but her butler often scolds her for acting too spoiled. Her moon-shaped accessories are said to be the crest of a country in another world.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCa9Y57gfeY0Zro_noHRVrnw" },
      { platform:"twitter", url:"https://twitter.com/himemoriluna" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/himemori-luna/" },
    ] },
    { name:"Amane Kanata", status:"alum", accent:"#5fc4e8", bio:"", photos:[], socials:[] },
    { name:"Kiryu Coco", status:"alum", accent:"#ff9f3a", bio:"", photos:[], socials:[] },
  ]},
  { id:"gen5", label:"Gen 5", accent:"#0ea5e9", flag:"🇯🇵", members:[
    { name:"Yukihana Lamy", accent:"#5fc2e0", bio:"&ldquo;Lamyoohoo!&rdquo;<br><br>hololive 5th Generation's Yukihana Lamy! The daughter of a noble snow family living in the vast, white, icy lands far from civilization. Struck by the smiles and vibrant live streams by the talents from hololive, she burst out of the comforts of her home with her companion, Daifuku. Her serious facade belies her clueless and empty-headed side of her.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCFKOVgVbGmX65RxO3EtH3iw" },
      { platform:"twitter", url:"https://twitter.com/yukihanalamy" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/yukihana-lamy/" },
    ] },
    { name:"Momosuzu Nene", accent:"#ff9f40", bio:"&ldquo;Kon-Nene~! hololive 5th Generation, Momosuzu Nene the idol VTuber!&rdquo;<br><br>A girl who came from another world in order to become an idol. She loves singing and dancing, and drawing. She is training hard every day to become someone loved by many.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA" },
      { platform:"twitter", url:"https://twitter.com/momosuzunene" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/momosuzu-nene/" },
    ] },
    { name:"Shishiro Botan", accent:"#4fc4ad", bio:"&ldquo;La-lion&#9834;&rdquo; &ldquo;Well then, cya~&rdquo;<br><br>Contrary to her sporty appearance, she's a white lion who prefers lazing around. Despite her typically hands-off attitude, once she has made up her mind she will always follow through to the end. Her favorite phrase is &ldquo;Wealth isn't measured with money.&rdquo;", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCUKD-uaobj9jiqB-VXt71mA" },
      { platform:"twitter", url:"https://twitter.com/shishirobotan" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/shishiro-botan/" },
    ] },
    { name:"Omaru Polka", accent:"#e0343f", bio:"&ldquo;Is Polka on the dot? Yes, she is!&rdquo;<br><br>A circus performer who joined hololive in hopes of becoming the ringmaster of the VTuber world. She enjoys wowing audiences with acrobatics, and she lives by the words, &ldquo;When you've decided you're gonna do something, follow through!&rdquo; Her natural charm glosses over her occasional mess-ups.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA" },
      { platform:"twitter", url:"https://twitter.com/omarupolka" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/omaru-polka/" },
    ] },
  ]},
  { id:"holox", label:"holoX", accent:"#a855f7", flag:"🇯🇵", members:[
    { name:"La+ Darknesss", accent:"#4b2e82", bio:"&ldquo;See me, hear me, all of you!&rdquo;<br><br>The one who established Secret Society holoX. She was originally known for her vast power and intelligence, but most of it is now sealed away. She is vaguely aware of the debilitating nature of her shackles but does not remember when or how they got there. The crow by her side is a long-time companion.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCENwRMx5Yh42zWpzURebzTw" },
      { platform:"twitter", url:"https://twitter.com/LaplusDarknesss" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/la-darknesss/" },
    ] },
    { name:"Takane Lui", accent:"#5e2030", bio:"&ldquo;Did I Luive you waiting!?&rdquo;<br><br>The executive officer of Secret Society holoX. As holoX's point of contact and the one in charge of external affairs, she is the de facto leader of the group, handling matters that the founder cannot. While she may seem aloof and standoffish at first glance, she is a compassionate person who cares a lot for her subordinates.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCs9_O1tRPMQTHQ-N_L6FU2g" },
      { platform:"twitter", url:"https://twitter.com/takanelui" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/takane-lui/" },
    ] },
    { name:"Hakui Koyori", accent:"#ff5aa0", bio:"&ldquo;The brain of holoX! My name is Koyori Hakui!&rdquo;<br><br>The one in charge of R&amp;D in Secret Society holoX. As part of her studies into human behavior, she meddles in the other members' affairs and tries to help them out at every turn. Possessed by an insatiable thirst for knowledge, she may sometimes also deliberately mess with people just to see how they react.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC6eWCld0KwmyHFbAqK3V-Rw" },
      { platform:"twitter", url:"https://twitter.com/hakuikoyori" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/hakui-koyori/" },
    ] },
    { name:"Kazama Iroha", accent:"#33b8a8", bio:"&ldquo;Secret Society holoX's insurance policy, Kazama Iroha here, I daresay!&rdquo;<br><br>Secret Society holoX's insurance policy. Hailing from a remote mountainous area, she left her home behind and, along with her companion, set off on a journey to achieve her dream of seeing and learning more about the outside world. Nowadays, she handles security detail and bodyguard missions for holoX.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UC_vMYWcDjmfdpH6r4TTn1MQ" },
      { platform:"twitter", url:"https://twitter.com/kazamairohach" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/kazama-iroha/" },
    ] },
    { name:"Sakamata Chloe", status:"affiliate", accent:"#6fd4c0", bio:"&ldquo;Chomp, chomp, chooomp!&rdquo;<br><br>An intern who acts as a fixer and cleaner for Secret Society holoX. Calm and composed at all times, she carries out her orders without so much as batting an eyelid. She loves music and can be found listening to it every chance she gets.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCIBY1ollUsauvVi4hW4cumw" },
      { platform:"twitter", url:"https://twitter.com/sakamatachloe" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/sakamata-chloe/" },
    ] },
  ]},
  { id:"area15", label:"AREA15", accent:"#f97316", flag:"🇮🇩", members:[
    { name:"Ayunda Risu", accent:"#ffa0c4", bio:"&ldquo;Hewwrroo, everyone~!&rdquo; &ldquo;Purupuru ganbari Risu~!&rdquo;<br><br>A squirrel girl who came from a magical forest. After getting lost in the human world, she ended up living with a kind big sister under rather unusual circumstances. Wanting to repay her kindness, she decided to become a VTuber. Her mannerisms are just like a squirrel's. She's shy around strangers, but loves playing pranks and teasing her viewers. Her one-of-a-kind laugh is another part of her charm.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCOyYb1c43VlX9rc_lT6NKQw" },
      { platform:"twitter", url:"https://twitter.com/ayunda_risu" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/ayunda-risu/" },
    ] },
    { name:"Moona Hoshinova", accent:"#8a6bc9", bio:"&ldquo;Moon Moon~ Moona Dayo!&rdquo;<br><br>A college girl who works as a model and idol, but later got interested to become a VTuber too. On some rare occasion, Moona's stream might be visited by Moona's &ldquo;another personality,&rdquo; Hoshinova. That has deeper big sister-like voices and sadistic tendencies. Pay attention to her streams to meet Hoshinova!", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCP0BspO_AMEe3aQqqpo89Dg" },
      { platform:"twitter", url:"https://twitter.com/moonahoshinova" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/moona-hoshinova/" },
    ] },
    { name:"Airani Iofifteen", accent:"#8ad42f", bio:"&ldquo;IOFORIA~! OBISA!&rdquo; &ldquo;Selamat pagi! I'm your beloved smart alien Iofi from hololive AREA15! Nice to meet you!&rdquo;<br><br>An artistic-minded princess from outer space who ran away from home to visit Earth. Her love for Earth's culture grew so strong that she eventually enrolled in a university to study Visual Communication Design. She's known to tease her viewers from time to time, and occasionally takes on the role of Iomama. And every now and then, she completely loses herself to the gacha.", photos:[], socials:[
      { platform:"youtube", url:"https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg" },
      { platform:"twitter", url:"https://twitter.com/airaniiofifteen" },
      { platform:"hololive", url:"https://hololive.hololivepro.com/en/talents/airani-iofifteen/" },
    ] },
  ]},
  { id:"holoro", label:"HOLORO", accent:"#fb923c", flag:"🇮🇩", members:[
    { name:"Kureiji Ollie", accent:"#dc2340", bio:"", photos:[], socials:[] },
    { name:"Anya Melfissa", accent:"#33bfc0", bio:"", photos:[], socials:[] },
    { name:"Pavolia Reine", accent:"#2f5fd0", bio:"", photos:[], socials:[] },
  ]},
  { id:"holoh3ro", label:"holoH3RO", accent:"#ea580c", flag:"🇮🇩", members:[
    { name:"Vestia Zeta", accent:"#a0a0a0", bio:"", photos:[], socials:[] },
    { name:"Kaela Kovalskia", accent:"#df3540", bio:"", photos:[], socials:[] },
    { name:"Kobo Kanaeru", accent:"#5fb8e0", bio:"", photos:[], socials:[] },
  ]},
  { id:"myth", label:"Myth", accent:"#dc2626", flag:"🌐", members:[
    { name:"Mori Calliope", accent:"#8a1f30", bio:"", photos:[], socials:[] },
    { name:"Takanashi Kiara", accent:"#e0522a", bio:"", photos:[], socials:[] },
    { name:"Ninomae Ina'nis", accent:"#5c3c8c", bio:"", photos:[], socials:[] },
    { name:"Watson Amelia", status:"affiliate", accent:"#d1a63a", bio:"", photos:[], socials:[] },
    { name:"Gawr Gura", status:"alum", accent:"#2f6fd0", bio:"", photos:[], socials:[] },
  ]},
  { id:"hope", label:"Project: HOPE", accent:"#eab308", flag:"🌐", members:[
    { name:"IRyS", accent:"#c23a98", bio:"", photos:[], socials:[] },
  ]},
  { id:"council", label:"Council", accent:"#3b82f6", flag:"🌐", members:[
    { name:"Ouro Kronii", accent:"#1c3070", bio:"", photos:[], socials:[] },
    { name:"Hakos Baelz", accent:"#ff8291", bio:"", photos:[], socials:[] },
    { name:"Tsukumo Sana", status:"alum", accent:"#df4f9a", bio:"", photos:[], socials:[] },
    { name:"Ceres Fauna", status:"alum", accent:"#4fb85a", bio:"", photos:[], socials:[] },
    { name:"Nanashi Mumei", status:"alum", accent:"#a88a5f", bio:"", photos:[], socials:[] },
  ]},
  { id:"advent", label:"Advent", accent:"#c026d3", flag:"🌐", members:[
    { name:"Shiori Novella", accent:"#8a6fc0", bio:"", photos:[], socials:[] },
    { name:"Koseki Bijou", accent:"#ad9cd6", bio:"", photos:[], socials:[] },
    { name:"Nerissa Ravencroft", accent:"#22336e", bio:"", photos:[], socials:[] },
    { name:"Fuwawa Abyssgard", accent:"#7fc4e8", bio:"", photos:[], socials:[] },
    { name:"Mococo Abyssgard", accent:"#ff8fc4", bio:"", photos:[], socials:[] },
  ]},
  { id:"justice", label:"Justice", accent:"#06b6d4", flag:"🌐", members:[
    { name:"Elizabeth Rose Bloodflame", accent:"#8a1a2a", bio:"", photos:[], socials:[] },
    { name:"Gigi Murin", accent:"#ffa73a", bio:"", photos:[], socials:[] },
    { name:"Cecilia Immergreen", accent:"#3aa658", bio:"", photos:[], socials:[] },
    { name:"Raora Panthera", accent:"#df4488", bio:"", photos:[], socials:[] },
  ]},
  { id:"regloss", label:"ReGLOSS", accent:"#f43f5e", flag:"🇯🇵", members:[
    { name:"Otonose Kanade", accent:"#eec93a", bio:"", photos:[], socials:[] },
    { name:"Ichijou Ririka", accent:"#ff8fb0", bio:"", photos:[], socials:[] },
    { name:"Juufuutei Raden", accent:"#205c3c", bio:"", photos:[], socials:[] },
    { name:"Todoroki Hajime", accent:"#ff9f2a", bio:"", photos:[], socials:[] },
    { name:"Hiodoshi Ao", status:"alum", accent:"#1a2a5a", bio:"", photos:[], socials:[] },
  ]},
  { id:"flowglow", label:"FLOW GLOW", accent:"#65a30d", flag:"🇯🇵", members:[
    { name:"Isaki Riona", accent:"#df3878", bio:"", photos:[], socials:[] },
    { name:"Koganei Niko", accent:"#ff8f2a", bio:"", photos:[], socials:[] },
    { name:"Mizumiya Su", accent:"#3fc4d8", bio:"", photos:[], socials:[] },
    { name:"Rindo Chihaya", accent:"#205c5e", bio:"", photos:[], socials:[] },
    { name:"Kikirara Vivi", accent:"#ff6fa0", bio:"", photos:[], socials:[] },
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
