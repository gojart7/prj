
let All_song = [
    {
      name: "Për Mangúpa (Intro)",
      path: "../Album2Music/Unikkatil1.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Vetbesim",
      path: "../Album2Music/Unikkatil2.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Shqipet si un",
      path: "../Album2Music/Unikkatil3.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Fjalt E Pavdekshme (Ft. Tee)",
      path: "../Album2Music/Unikkatil4.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kur i Kí Mênt Tjetërkàh (Ft. B52, Cyanide & N.A.G)",
      path: "../Album2Music/Unikkatil5.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Arsyetimi Jem",
      path: "../Album2Music/Unikkatil6.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kurgjo Gratis",
      path: "../Album2Music/Unikkatil7.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Pse po m'shtin (Ft. Presioni & Tribun",
      path: "../Album2Music/Unikkatil8.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "N'rrot T'soms (Ft. Jeton & Milot)",
      path: "../Album2Music/Unikkatil9.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },{
      name: "Gjúj (Ft. Jeton)",
      path: "../Album2Music/Unikkatil10.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Qeni Léh Màs Míri",
      path: "../Album2Music/Unikkatil11.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kíle Kíle",
      path: "../Album2Music/Unikkatil12.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },{
      name: "Mos Shaj Mas Shpine (Shota Remix) (Ft. Jeton)",
      path: "../Album2Music/Unikkatil13.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
      singer: "Unikkatil"
    },{
      name: "I Smút (Ft.Tee)",
      path: "../Album2Music/Unikkatil14.mp3",
      img: "../img/FjaltEpavdekshme.jpeg",
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
 
 