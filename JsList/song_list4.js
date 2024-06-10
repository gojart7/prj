
let All_song = [
    {
      name: "Armiqt Suprem (Intro)",
      path: "../Album4Music/Unikkatil1.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Slujna Lojna (feat. Presion, Klepto & Jeton)",
      path: "../Album4Music/Unikkatil2.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Iliria(feat. Presioni, F.a.T & O.G. 043)",
      path: "../Album4Music/Unikkatil3.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Krejt Zemer(feat. Pristine & Rameka)",
      path: "../Album4Music/Unikkatil4.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Un e Di Kush Jom (feat. Vz)",
      path: "../Album4Music/Unikkatil5.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Reper I Smut (feat. Dredha)",
      path: "../Album4Music/Unikkatil6.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Qa Tha",
      path: "../Album4Music/Unikkatil8.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "1 Haver(feat. Tribun & Sakrifica)",
      path: "../Album4Music/Unikkatil9.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },{
      name: "Gatshem Per Pasoja(feat. Jeton & Dredha)",
      path: "../Album4Music/Unikkatil10.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "T'part (feat. Barooti & Floetri)",
      path: "../Album4Music/Unikkatil11.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Na Jena (feat. F Tim)",
      path: "../Album4Music/Unikkatil12.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },{
      name: "Metafora (feat. Zingjirt)",
      path: "../Album4Music/Unikkatil13.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },{
      name: "Prishtinali (feat. Pristine,Presioni & Jeton)",
      path: "../Album4Music/Unikkatil14.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },{
      name: "Demtues (feat. Presioni & Vz)",
      path: "../Album4Music/Unikkatil14.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
      singer: "Unikkatil"
    },{
      name: "Ku T'meten Shokt (feat. Jeton)",
      path: "../Album4Music/Unikkatil14.mp3",
      img: "../img/ArmiqtSuprem.jpeg",
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
 