
let All_song = [
    {
      name: "Mos T'vjen Ináti ft. The Bloody Alboz",
      path: "../Album1Music/Unikkatil1.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Belagji",
      path: "../Album1Music/Unikkatil2.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Qëndro",
      path: "../Album1Music/Unikkatil3.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Krejt Hajván (Remix)",
      path: "../Album1Music/Unikkatil4.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Dóstat E Vërtét",
      path: "../Album1Music/Unikkatil5.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Vdekjen e Sfidoj (Remix)",
      path: "../Album1Music/Unikkatil6.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Mos Sháj Mas Shpíne",
      path: "../Album1Music/Unikkatil7.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kah Do Që Po Shkójna (Skit)",
      path: "../Album1Music/Unikkatil8.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Ku T'meten Shokt ft. Jeton (Remix)",
      path: "../Album1Music/Unikkatil9.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },{
      name: "Prishtinalít Numër Njô",
      path: "../Album1Music/Unikkatil10.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Jéta S’ôsht Film ft. N.A.G. & Tee",
      path: "../Album1Music/Unikkatil11.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kejt Hajvan",
      path: "../Album1Music/Unikkatil12.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },{
      name: "Per Qato (Bonus Track)",
      path: "../Album1Music/Unikkatil13.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },{
      name: "Pse po fryhna",
      path: "../Album1Music/Unikkatil14.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
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
 
 