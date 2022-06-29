
    //navbar start//
    var count1=true;
    var count2=true;
    var count3=true;
    var count4=true;
    //DROPDOWN1
    document.querySelector("#icon1").addEventListener("click",displayDropdown1)
      
    function displayDropdown1(){
      //document.querySelector("#icon1").style.transform="rotate(180deg)"
       if( count1===true){
        document.querySelector("#dropdown1").style.display="block"
        count1=false;
       document.querySelector("#icon1").style.transform="rotate(180deg)"
       //document.querySelector("#icon1").style.padding="px"
    }else if (count1===false){
        document.querySelector("#dropdown1").style.display="none";
        document.querySelector("#icon1").style.transform="rotate(360deg)"
        count1=true;
        //console.log(count1)
    }
    }

  //DROPDOWN2
    document.querySelector("#icon2").addEventListener("click",displayDropdown2)
      
      function displayDropdown2(){
         
         if( count2===true){
          document.querySelector("#dropdown2").style.display="block"
          count2=false;
         // console.log(count2);
      }else if (count2===false){
          document.querySelector("#dropdown2").style.display="none";
          
          count2=true;
        // console.log(count2)
      }
      }
      //DROPDOWN3
      document.querySelector("#icon3").addEventListener("click",displayDropdown3)
      
      function displayDropdown3(){
         
         if( count3===true){
          document.querySelector("#dropdown3").style.display="block"
          count3=false;
         //  console.log(count3);
      }else if (count3===false){
          document.querySelector("#dropdown3").style.display="none";
          
          count3=true;
       // console.log(count3)
      }
      }

      //DROPDOWN4;
      document.querySelector("#icon4").addEventListener("click",displayDropdown4)
      
      function displayDropdown4(){
         
         if( count4===true){
          document.querySelector("#dropdown4").style.display="block"
          count4=false;
        //   console.log(count4);
      }else if (count4===false){
          document.querySelector("#dropdown4").style.display="none";
          
          count4=true;
       // console.log(count4)
      }
      }

   // navbar end//






    //slideshow  start//
    var slideNum=0;
    displaySlides(slideNum);
    function displaySlides(n){
    var totalslides=document.querySelectorAll(".slides");
    for(var i=0;i<totalslides.length;i++){
        totalslides[i].style.display="none";
    }
    slideNum++;
    if(slideNum>totalslides.length){slideNum=1}
    totalslides[slideNum-1].style.display="block";
    setTimeout(displaySlides,2000);

    }
    //slidshow end//



    //destination start//
    var destiny1=[
      {
         id:1,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/XaytahvmQ4-_ftorVrLJvA/aurangabad-20220127184606.jpg?h=400",
      name:"Aurangabad"
      },
      {
         id:2,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/7CHJ2bvRQMG4-O8BxdWQ6Q/banikhet-20220609102033.jpg?h=400",
      name:"Banikhet"
      },
      {
         id:3,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Au2EbwKgSbm7VRBzFhzwIg/taste-adventure-in-the-himalayas-of-bir-202_H7vz0yf.jpg?h=400",
      name:"Bir"
      },
      {
         id:4,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/UckUVWBuRO26Pzrm9kNB8A/chamba-20220602201924.jpg?h=400",
      name:"Chambha"
      },
      {
         id:5,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/klPbFw-LTqKyyzDQBl0Zew/cheog-20220531115200.jpg?h=400",
      name:"Cheog"
      },
      {
         id:6,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/VFvd-Qq7Q92zkhbjE2ufYA/karnatakas-metropolitan-city-with-its-grand_3lJVBIb.jpg?h=400",
      name:"Bangalore"
      },
      {
         id:7,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/0h7EG5blRO60ptcETfeOxw/a-trekking-destination-for-adventure-lovers_bpY4sqa.jpg?h=400",
      name:"Barat"
      },
      {
         id:8,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/AogyCX0KQpeNYeOK545cgA/burwa-20220520080419.jpg?h=400",
      name:"Burwa"
      },
      {
         id:9,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/AYGyj3isTgCtwXOe8QPzWA/chamera-20220603112550.jpg?h=400",
      name:"Chamera"
      },
      {
         id:10,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/0wlj3wscTd-7gpMeKkSinA/a-pure-hidden-gem-of-the-himalayas-20201112102045.jpg?h=400",
      name:"Chitkol"
      }
    ]
    var destiny2=[
      {
         id:1,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/nFSCCFyoT1On6QD2gG3SHQ/greenery-is-found-at-its-best-in-coorg-2020_o86HXBS.jpg?h=400",
      name:"Coorg"
      },
      {
         id:2,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/2qNpdv4mTy-OyDx-VFpTOg/explore-history-modernism-in-the-capital-of_2l8lKSl.jpg?h=400",
      name:"Delhi"
      },
      {
         id:3,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Um739YDBSuSRUSTyNUQzJQ/fagu-20220129085617.jpeg?h=400",
      name:"Fagu"
      },
      {
         id:4,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Vws-7i_-RB6wVpatSsELBQ/pristine-beaches-a-boho-vibe-for-reposeful-_CPIOTmf.jpg?h=400",
      name:"Gokarna"
      },
      {
         id:5,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/673Xm9LkQW2dIay4ft-Aiw/folk-music-a-living-fort-golden-houses-make_oXWFuru.jpg?h=400",
      name:"Jaisalmer"
      },
      {
         id:6,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/KV_nLxpvQhWEun7qPyzdQw/nature-to-its-most-serene-simple-20201112102036.jpg?h=400",
      name:"Dalhousie"
      },
      {
         id:7,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Gfsg8IToQ06i9kMUmr2zFg/dobhi-20211221140238.JPG?h=400",
      name:"Dobhi"
      },
      {
         id:8,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/PPACzAu0TgGZoOToeONP2A/explore-cultures-offbeat-landscapes-of-sikk_hGGsKcC.jpg?h=400",
      name:"Gangatok"
      },
      {
         id:9,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Du8SGQOGTf2fv801B28URw/the-pink-city-swarms-with-exceptional-monum_cvNBOwX.jpg?h=400",
      name:"Jaipur"
      },
      {
         id:10,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/_7osfwtmT9SiCNJo_Z5LGw/jibhi-20220129082028.jpeg?h=400",
      name:"Jibhi"
      }
    ]
    var destiny3=[
      {
         id:1,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/SkZZW54OQLGE2oB7jWQqKg/the-blue-city-charms-travellers-with-rich-h_AT52qza.jpg?h=400",
      name:"Jodhpur"
      },
      {
         id:2,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/ycrLKCSzTLynEcEMWhfhbQ/kibber-village-20220518114707.jpg?h=400",
      name:"Kibber"
      },
      {
         id:3,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/n2DSeX-CTqW9OH3Uxbfk4g/green-hills-waterfalls-await-you-on-a-cooli_jj2RuNL.jpg?h=400",
      name:"Kodaikanal"
      },
      {
         id:4,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/Bc7YNiSfR4GdQpPFhIfBXQ/kotgarh-20220520094350.jpg?h=400",
      name:"Kotgarh"
      },
      {
         id:5,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/u8jCb_7nTdqjHp4YBfiMMg/a-valley-rich-in-culture-adventure-20201112102053.jpg?h=400",
      name:"Kullu"
      },
      {
         id:6,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/BBojebYVRMC_Kz6Vb9HlGQ/kathmandu-20220509195537.jpg?h=400",
      name:"Kathmandu"
      },
      {
         id:7,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/q2_1UJRKRi-JA5URnsYlrw/a-city-of-eclectic-cultures-mounuments-and-_8br8xkb.jpg?h=400",
      name:"Dobhi"
      },
      {
         id:8,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/10vEzZsmTGOYrdrMxt1t4A/kolad-20220509201522.jpg?h=400",
      name:"Kochi"
      },
      {
         id:9,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/7aR77y23RE2ku4DqWkxMQw/kotkhai-20220129082514.jpeg?h=400",
      name:"Kotkhai"
      },
      {
         id:10,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/mSbYyUKESay5ju_3gMdLIg/quaint-village-in-lahaul-and-spiti-20211126122444.jpg?h=400",
      name:"Lahaul"
      }
    ]
    var place1=document.querySelector("#placesbox1")
    var place2=document.querySelector("#placesbox2")
    var place3=document.querySelector("#placesbox3")
 destinydisplay(destiny1,place1)
 destinydisplay(destiny2,place2)
 destinydisplay(destiny3,place3)
 function destinydisplay(data,place1){
   data.map(function(elem){
   var div1=document.createElement('div');
   var img=document.createElement("img")
   img.setAttribute("src",elem.image);
   var placename=document.createElement("h3");
   placename.innerText=elem.name;
    div1.append(img,placename);
    console.log(div1);
    place1.append(div1);
 })
}
var destinyslide=1;
placesdisplay(destinyslide);

function destinyclick(m){
placesdisplay(destinyslide+=m)
}

function placesdisplay(n){
   var tot_slides=document.querySelectorAll(".slides2");
   for( var i=0;i<tot_slides.length;i++){
      tot_slides[i].style.display="none";
   }
   
   if(destinyslide>tot_slides.length){destinyslide=1}
   if(destinyslide<=0){destinyslide=tot_slides.length}
tot_slides[destinyslide-1].style.display="grid";
}