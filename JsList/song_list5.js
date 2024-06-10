
let All_song = [
    {
      name: "Kanuni Katilit (Intro)",
      path: "../Album5Music/Unikkatil1.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kur Qes Kanun(feat. Klepto & n.a.G.)",
      path: "../Album5Music/Unikkatil2.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Robt e Friks",
      path: "../Album5Music/Unikkatil3.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Cubat (feat. The Bloody Alboz)",
      path: "../Album5Music/Unikkatil4.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "T'qoj Pesh (feat. Klepto, Milot & Vz)",
      path: "../Album5Music/Unikkatil5.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kaj (feat. Pristine)",
      path: "../Album5Music/Unikkatil6.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Neper Cka Do (feat. Tribun & Sakrifica)",
      path: "../Album5Music/Unikkatil7.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Shtigjet e Verteta (feat. Pristine)",
      path: "../Album5Music/Unikkatil8.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },{
      name: "Kungjat (feat. Klepto & Vz)",
      path: "../Album5Music/Unikkatil9.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Mentaliteti Jem (feat. DMK & Rameka)",
      path: "../Album5Music/Unikkatil10.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Rrenat (feat. B52 & Klepto)",
      path: "../Album5Music/Unikkatil11.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },{
      name: "Caku i Arritun",
      path: "../Album5Music/Unikkatil12.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },{
      name: "Se Skom Qare (feat. Presioni & Benny",
      path: "../Album5Music/Unikkatil13.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },{
      name: "Inat (feat. DMC & Kobra)",
      path: "../Album5Music/Unikkatil14.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    },{
      name: "Kanuni i Katilit",
      path: "../Album5Music/Unikkatil15.mp3",
      img: "../img/KanuniKatilit.jpeg",
      singer: "Unikkatil"
    }
 ];

 let tracks = document.querySelector('.tracks');

 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 