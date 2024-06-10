
let All_song = [
    {
      name: "Ala",
      path: "../AllMusic/Unikkatil1.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Je Ngulë",
      path: "../AllMusic/Unikkatil2.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Po Eci",
      path: "../AllMusic/Unikkatil3.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Ça jon ft. Klepto",
      path: "../AllMusic/Unikkatil4.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Ni Milion Rrugë (prod. by D.M.K.)",
      path: "../AllMusic/Unikkatil5.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "A Pe Sheh ft. Milot & Don Phenom",
      path: "../AllMusic/Unikkatil6.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Ndryshe ft. Kobra",
      path: "../AllMusic/Unikkatil7.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Për Qato",
      path: "../AllMusic/Unikkatil8.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Si Ni Vakt feat Presioni & Big T",
      path: "../AllMusic/Unikkatil9.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },{
      name: "A Nive ft. Klepto",
      path: "../AllMusic/Unikkatil10.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Nentori i Trete ft. UniKKatiL",
      path: "../AllMusic/Unikkatil11.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    },
    {
      name: "Do feat. Presioni",
      path: "../AllMusic/Unikkatil12.mp3",
      img: "../img/ShihemiN'Perkujtime.jpeg",
      singer: "Unikkatil"
    }
 ];

 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
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
 
