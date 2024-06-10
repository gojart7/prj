
let All_song = [
    {
      name: "Jasht (Intro)",
      path: "../Album3Music/Unikkatil1.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Per Vllazni (feat. the Bloody Alboz)",
      path: "../Album3Music/Unikkatil2.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Na Thej (feat. the Bloody Alboz)",
      path: "../Album3Music/Unikkatil3.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Gishtin e Tret (feat. B52, Tee & Klepto)",
      path: "../Album3Music/Unikkatil4.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Shuj (feat. Gjikla & Halili)",
      path: "../Album3Music/Unikkatil5.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Sun um prek (feat. Jeton & Tee)",
      path: "../Album3Music/Unikkatil6.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Besnik i Rruges (feat. 2po2 & Immortel)",
      path: "../Album3Music/Unikkatil7.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Kungjat Interlude (feat. Klepto, Cynaide & the Bloody Alboz)",
      path: "../Album3Music/Unikkatil8.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Kungjat (feat. Klepto & Vz)",
      path: "../Album3Music/Unikkatil9.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Pa Mshir (feat. n.a.G.)",
      path: "../Album3Music/Unikkatil10.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Rrenat (feat. B52 & Klepto)",
      path: "../Album3Music/Unikkatil11.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Hajde T'lagi (feat. Vz, Buja & n.a.G.)",
      path: "../Album3Music/Unikkatil12.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Nalna (feat. the Bloody Alboz)",
      path: "../Album3Music/Unikkatil13.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Nuk Dorzona (feat. Sakrifica & Tribun)",
      path: "../Album3Music/Unikkatil14.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Lidhje e re (feat. Barooti,Floetri & Cynaide)",
      path: "../Album3Music/Unikkatil15.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
      singer: "Unikkatil"
    },{
      name: "Veq Fillimi (feat. Cyanide & B52)",
      path: "../Album3Music/Unikkatil116.mp3",
      img: "../img/TheBloodyAlboz.jpeg",
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