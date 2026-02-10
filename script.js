function startApp(){
  document.getElementById('intro').style.display='none';
  document.getElementById('mainApp').style.display='block';
}

const questions=[
  "Do you like me? 💕",
  "Do you think about me? 😍",
  "Will you go on a date with me? 🌹",
  "Do you love me? ❤️",
  "Can I hold your hand forever? 🥺",
  "Will you stay with me always? 💞",
  "Be My Valentine? 💖"
];

let index=0;

const qn=document.getElementById('question');
const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const toast=document.getElementById('toast');

const params=new URLSearchParams(window.location.search);

document.getElementById('name').innerText=
  params.get('name')||"My Love 💘";

document.getElementById('photo').src=
  "https://i.imgur.com/6X4KQ0B.jpeg";

qn.innerText=questions[index];

setInterval(()=>{
  const heart=document.createElement('span');
  heart.innerHTML='💖';
  heart.style.left=Math.random()*100+'vw';
  heart.style.top='100vh';
  heart.style.fontSize=(18+Math.random()*25)+'px';

  document.getElementById('hearts').appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},500);

yesBtn.onclick=()=>{
  showYesToast();
  index++;
  if(index<questions.length){
    qn.innerText=questions[index];
  }else{
    finalScreen();
  }
};

noBtn.onmouseover=()=>{
  const x=Math.random()*window.innerWidth-100;
  const y=Math.random()*window.innerHeight-50;

  noBtn.style.position='absolute';
  noBtn.style.left=x+'px';
  noBtn.style.top=y+'px';

  showNoToast();
};

function showNoToast(){
  const msgs=[
    "No ah? Think again 😜",
    "Seri comedy pannadha 😏",
    "Yes dhaan click pannanum 😂",
    "Escape aagala 😎"
  ];
  toast.innerText=msgs[Math.floor(Math.random()*msgs.length)];
  toast.style.display='block';
  setTimeout(()=>toast.style.display='none',1500);
}

function showYesToast(){
  const msgs=[
    "Awww 🥰",
    "Correct answer 💯",
    "Love you already 💖",
    "Nee dhan en valentine 😘"
  ];
  toast.innerText=msgs[Math.floor(Math.random()*msgs.length)];
  toast.style.display='block';
  setTimeout(()=>toast.style.display='none',1500);
}

function finalScreen(){
  document.body.innerHTML=`
    <div style="text-align:center;color:white">
      <h1 style="font-size:3.2rem">She Said Yes 💖😍</h1>
      <h2 style="font-size:2.2rem">I Love You ❤️</h2>
      <div class="hearts" id="hearts"></div>
    </div>

    <audio autoplay>
      <source src="https://cdn.pixabay.com/download/audio/2022/02/23/audio_d1718a0d3b.mp3" type="audio/mp3">
    </audio>
  `;

  setInterval(()=>{
    const heart=document.createElement('span');
    heart.innerHTML='💖';
    heart.style.left=Math.random()*100+'vw';
    heart.style.top='100vh';
    heart.style.fontSize=(25+Math.random()*35)+'px';

    document.getElementById('hearts').appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },180);
}