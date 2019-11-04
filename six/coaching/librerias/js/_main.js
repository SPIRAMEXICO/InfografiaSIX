var vistos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var vista=0;
var scalePage = 1;
var animacion=["default","arriba_abajo","abajo_arriba","izquierda_derecha","derecha_izquierda","ampliar"];

function playContenidoDesk() {
    if(navigator.userAgent.match(/Firefox/) || navigator.userAgent.match(/Edge/)){
        $(".aFx").each(function() {
            var margenTop = "";
            var margenLeft = "";
            var cadena = $(this).attr("style");
            var cadena2 = cadena.replace(/ /gi, "");
            var bloqueGral = cadena2.split(";");
            for(var i=0;i<bloqueGral.length;i++){
                var bloqueCadena = bloqueGral[i].split(":");
                if(bloqueCadena[0] == "margin-top"){
                    margenTop = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-top", (margenTop*2)+"vw");          
                }
                if(bloqueCadena[0] == "margin-left"){
                    margenLeft = parseFloat(bloqueCadena[1].replace(/vw/gi, ""));
                    $(this).css("margin-left", (margenLeft*2)+"vw");
                }
            }            
        });       
        /*document.getElementById("menuNav").classList.add('menuNavEdge');
        document.querySelectorAll(".btnsNav").forEach(
            elemento => {elemento.classList.add('navEdge')}
        );   
        document.getElementById("menuNavHeineken").classList.add('menuNavEdgeHeineken');
        document.querySelectorAll(".btnsNavheineken").forEach(
            elemento => {elemento.classList.add('navEdgeHeineken')}
        );   
        document.getElementById("menuNavSIX").classList.add('menuNavEdgeSIX');
        document.querySelectorAll(".btnsNavSIX").forEach(
            elemento => {elemento.classList.add('navEdgeSIX')}
        );   
        document.getElementById("menuNavRetail").classList.add('menuNavEdgeRetail');
        document.querySelectorAll(".btnsNavRetail").forEach(
            elemento => {elemento.classList.add('navEdgeRetail')}
        );*/   
    }
    
    slide0(0).addTo(controller);
    slide1(1).addTo(controller);
    slide2(2).addTo(controller);
    slide3(3).addTo(controller);
    slide4(4).addTo(controller);

    slide6(6).addTo(controller);
    slide7(7).addTo(controller);
    slide8(8).addTo(controller);
    slide9(9).addTo(controller);
    slide10(10).addTo(controller);
    slide11(11).addTo(controller);
    slide12(12).addTo(controller);
    slide13(13).addTo(controller);
    slide14(14).addTo(controller);
    slide15(15).addTo(controller);
    slide16(16).addTo(controller);
    slide17(17).addTo(controller);
    slide18(18).addTo(controller);
    slide19(19).addTo(controller);
    slide20(20).addTo(controller);

    slide24(24).addTo(controller);
    slide25(25).addTo(controller);
    slide26(26).addTo(controller);
    slide27(27).addTo(controller);
    slide28(28).addTo(controller);

    slide34(34).addTo(controller);
    slide35(35).addTo(controller);
    slide36(36).addTo(controller);
    slide37(37).addTo(controller);
    slide38(38).addTo(controller);
    slide39(39).addTo(controller);

    slide44(44).addTo(controller);
    slide45(45).addTo(controller);
    slide46(46).addTo(controller);
    slide47(47).addTo(controller);
    slide48(48).addTo(controller);
    slide49(49).addTo(controller);
    slide50(50).addTo(controller);
    slide51(51).addTo(controller);
    slide52(52).addTo(controller);
    slide53(53).addTo(controller);
    slide54(54).addTo(controller);
    slide55(55).addTo(controller);
    slide56(56).addTo(controller);
    slide57(57).addTo(controller);
    slide58(58).addTo(controller);
    slide59(59).addTo(controller);
    slide60(60).addTo(controller);
    slide61(61).addTo(controller);
    slide62(62).addTo(controller);
    slide63(63).addTo(controller);
    slide64(64).addTo(controller);
    slide65(65).addTo(controller);
    slide66(66).addTo(controller);
    slide67(67).addTo(controller);
    slide68(68).addTo(controller);
    slide69(69).addTo(controller);
    slide70(70).addTo(controller);
    slide71(71).addTo(controller);
    slide72(72).addTo(controller);
    slide73(73).addTo(controller);
    slide74(74).addTo(controller);
      /*
          iniciarMenu();
          iniciarMenuHeineken();
          iniciarMenuSIX();
          iniciarMenuRetail();
      */
  }

console.log(vistos.length);


  


function slide0(i) {
    animacion_salida("#slide0",animacion[0],-1);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#slide0"
    }).on('enter', function(){
        if(vistos[i]==0){
          animacion_entrada("#slide0",animacion[0],0.5);
          animacion_entrada("#slide0_fondo",animacion[0], 0);
          animacion_entrada("#slide0_img1",animacion[1], 1);
          animacion_entrada("#slide0_img2",animacion[5], 1.5);
          animacion_entrada("#slide0_img3",animacion[0], 2);
          animacion_entrada("#slide0_img4",animacion[2], 2.5);
        }
        vistos[i]=1;
    });
    return processScene(scene);
}

function slide1(i) {
  animacion_salida("#slide1",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide1"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide1",animacion[0],0.5);
        animacion_entrada("#slide1_fondo",animacion[0], 0);
        animacion_entrada("#slide1_img1",animacion[0], 1);
        animacion_entrada("#slide1_img2",animacion[5], 1.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide2(i) {
  animacion_salida("#slide2",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide2"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide2",animacion[0],0.5);
        animacion_entrada("#slide2_fondo",animacion[0], 0);
        animacion_entrada("#slide2_img1",animacion[5], 1);
        animacion_entrada("#slide2_img2",animacion[3], 1.5);
        animacion_entrada("#slide2_img3",animacion[3], 1.7);
        animacion_entrada("#slide2_img4",animacion[1], 2.6);
        animacion_entrada("#slide2_img5",animacion[1], 2.8);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide3(i) {
  animacion_salida("#slide3",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide3"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide3",animacion[0],0.5);
        animacion_entrada("#slide3_fondo",animacion[0], 0);
        animacion_entrada("#slide3_img1",animacion[3], 1);
        animacion_entrada("#slide3_img2",animacion[0], 2);
        animacion_entrada("#slide3_img3",animacion[5], 2.5);
        animacion_entrada("#slide3_img4",animacion[4], 3.2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide4(i) {
  animacion_salida("#slide4",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide4"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide4",animacion[0],0.5);
        animacion_entrada("#slide4_img1",animacion[5], 1);
        animacion_entrada("#slide4_img2",animacion[2], 2);
        animacion_entrada("#slide4_img3",animacion[0], 2.5);
        animacion_entrada("#slide4_img4",animacion[2], 3.2);
        animacion_entrada("#slide4_img5",animacion[1], 4.3);
        animacion_entrada("#slide4_img6",animacion[1], 4.8);
        animacion_entrada("#slide4_img7",animacion[1], 5.3);
        animacion_entrada("#slide4_img8",animacion[1], 5.8);

        animacion_salida("#slide4_img4",animacion[0], 9.2);
        animacion_entrada("#slide4_img9",animacion[2],9.5);
        vistos[i]=1;
        stop("slide4");
        setTimeout(function(){start()},10000);
      }
  });
  return processScene(scene);
}


function slide6(i) {
  animacion_salida("#slide6",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide6"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide6",animacion[0],0.5);
        animacion_entrada("#slide6_fondo",animacion[0], 0);
        animacion_entrada("#slide6_img1",animacion[0], 1);
        animacion_entrada("#slide6_img2",animacion[4], 1.5);
        animacion_entrada("#slide6_img3",animacion[1], 3);
        animacion_entrada("#slide6_img4",animacion[5], 3.8);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide7(i) {
  animacion_salida("#slide7",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide7"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide7",animacion[0],0.5);
        animacion_entrada("#slide7_fondo",animacion[0], 0);
        animacion_entrada("#slide7_img1",animacion[0], 1);
        animacion_entrada("#slide7_img2",animacion[5], 1.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide8(i) {
  animacion_salida("#slide8",animacion[0],-1);
  animacion_entrada("#slide8_fondo",animacion[0], -1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide8"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide8",animacion[0],0.5);
        
        animacion_entrada("#slide8_img1",animacion[0], 1);
        animacion_entrada("#slide8_img2",animacion[1], 1.5);
        animacion_entrada("#slide8_img3",animacion[2], 2.5);
        animacion_entrada("#slide8_img4",animacion[5], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide9(i) {
  animacion_salida("#slide9",animacion[0],-1);
  animacion_entrada("#slide9_fondo",animacion[0], -1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide9"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide9",animacion[0],0.5);
        animacion_entrada("#slide9_fondo",animacion[0], 0);
        animacion_entrada("#slide9_img1",animacion[0], 1);
        animacion_entrada("#slide9_img2",animacion[1], 1.5);
        animacion_entrada("#slide9_img3",animacion[2], 2.5);
        animacion_entrada("#slide9_img4",animacion[5], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide10(i) {
  animacion_salida("#slide10",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide10"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide10",animacion[0],0.5);
        animacion_entrada("#slide10_fondo",animacion[0], 0);
        //animacion_entrada("#slide10_img1",animacion[2], 1);
        //animacion_entrada("#slide10_img2",animacion[5], 1.5);
        animacion_entrada("#slide10_img3",animacion[3], 0.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide11(i) {
  animacion_salida("#slide11",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide11"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide11",animacion[0],0.3);
        animacion_entrada("#slide11_img4",animacion[3], 0.7);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide12(i) {
  animacion_salida("#slide12",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide12"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide12",animacion[0],0.3);
        animacion_entrada("#slide12_img5",animacion[3], 0.7);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide13(i) {
  animacion_salida("#slide13",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide13"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide13",animacion[0],0.3);
        animacion_entrada("#slide13_img6",animacion[3], 0.7);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide14(i) {
  animacion_salida("#slide14",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide14"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide14",animacion[0],0.5);
        animacion_entrada("#slide14_fondo",animacion[0], 0);
        animacion_entrada("#slide14_img1",animacion[5], 1);
        animacion_entrada("#slide14_img2",animacion[1], 2.3);
        animacion_entrada("#slide14_img3",animacion[2], 2.4);
        animacion_entrada("#slide14_img4",animacion[1], 2.5);
        animacion_entrada("#slide14_img5",animacion[2], 2.6);

      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide15(i) {
  animacion_salida("#slide15",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide15"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide15",animacion[0],0.5);
        animacion_entrada("#slide15_fondo",animacion[0], 0);
        animacion_entrada("#slide15_img1",animacion[2], 1);
        animacion_entrada("#slide15_img2",animacion[5], 1.5);
        animacion_entrada("#slide15_img3",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide16(i) {
  animacion_salida("#slide16",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide16"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide16",animacion[0],0.5);
        animacion_entrada("#slide16_img1",animacion[1], 1);
        animacion_entrada("#slide16_img2",animacion[3], 2);
        animacion_entrada("#slide16_img3",animacion[2], 2.5);
        animacion_entrada("#slide16_img4",animacion[2], 3.2);
        animacion_entrada("#slide16_img5",animacion[0], 4.3);
        animacion_entrada("#slide16_img6",animacion[1], 4.9);
        animacion_entrada("#slide16_img7",animacion[1], 5.8);
        animacion_entrada("#slide16_img8",animacion[5], 6.8);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide17(i) {
  animacion_salida("#slide17",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide17"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide17",animacion[0],0.5);
        animacion_entrada("#slide17_img1",animacion[1], 1);
        animacion_entrada("#slide17_img2",animacion[3], 2);
        animacion_entrada("#slide17_img3",animacion[2], 2.5);
        animacion_entrada("#slide17_img4",animacion[3], 3.2);
        animacion_entrada("#slide17_img5",animacion[3], 4.3);
        animacion_entrada("#slide17_img6",animacion[4], 4.9);
        animacion_entrada("#slide17_img7",animacion[4], 5.8);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide18(i) {
  animacion_salida("#slide18",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide18"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide18",animacion[0],0.5);
        animacion_entrada("#slide18_img1",animacion[1], 1);
        animacion_entrada("#slide18_img2",animacion[5], 2);
        animacion_entrada("#slide18_img3",animacion[2], 3);
        animacion_entrada("#slide18_img4",animacion[3], 4);
        animacion_entrada("#slide18_img5",animacion[3], 4.5);
        animacion_entrada("#slide18_img6",animacion[4], 5.5);
        animacion_entrada("#slide18_img7",animacion[4], 6.2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide19(i) {
  animacion_salida("#slide19",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide19"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide19",animacion[0],0.5);
        animacion_entrada("#slide19_img1",animacion[2], 1);
        animacion_entrada("#slide19_img2",animacion[5], 2);
        animacion_entrada("#slide19_img3",animacion[0], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide20(i) {
  animacion_salida("#slide20",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide20"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide20",animacion[0],0.5);
        animacion_entrada("#slide20_fondo",animacion[0], 0);
        animacion_entrada("#slide20_img1",animacion[5], 1);
        animacion_entrada("#slide20_img2",animacion[3], 1.4);
        animacion_entrada("#slide20_img3",animacion[2], 2.5);
        animacion_entrada("#slide20_img4",animacion[3], 3);

        animacion_salida("#slide20_img2",animacion[0],7);

        animacion_entrada("#slide20_img5",animacion[0], 7.6);
        animacion_entrada("#slide20_img6",animacion[3], 7.9);

        animacion_salida("#slide20_img5",animacion[0],13);

        animacion_entrada("#slide20_img7",animacion[0],13.6);
        animacion_entrada("#slide20_img8",animacion[3],13.9);

        animacion_salida("#slide20_img7",animacion[0],19);

        animacion_entrada("#slide20_img9",animacion[0], 19.6);
        animacion_entrada("#slide20_img10",animacion[3],19.9);
        stop("slide20");
        setTimeout(function(){start()},20800);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}
/*
function slide21(i) {
  animacion_salida("#slide21",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide21"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide21",animacion[0],0.5);
        animacion_entrada("#slide21_img5",animacion[0], 0.8);
        animacion_entrada("#slide21_img6",animacion[3], 1);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide22(i) {
  animacion_salida("#slide22",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide22"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide22",animacion[0],0.2);
        animacion_entrada("#slide22_img7",animacion[0], 0.8);
        animacion_entrada("#slide22_img8",animacion[3], 1);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide23(i) {
  animacion_salida("#slide2",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide23"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide23",animacion[0],0.2);
        animacion_entrada("#slide23_img9",animacion[0], 0.8);
        animacion_entrada("#slide23_img10",animacion[3], 1);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}*/

function slide24(i) {
  animacion_salida("#slide24",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide24"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide24",animacion[0],0.2);
        animacion_entrada("#slide24_fondo",animacion[0], 0);
        animacion_entrada("#slide24_img1",animacion[0], 1);
        animacion_entrada("#slide24_img2",animacion[3], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide25(i) {
  animacion_salida("#slide25",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide25"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide25",animacion[0],0.5);
        animacion_entrada("#slide25_img3",animacion[5], 1);
        animacion_entrada("#slide25_img4",animacion[0], 1.5);
        animacion_entrada("#slide25_img5",animacion[3], 2.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide26(i) {
  animacion_salida("#slide26",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide26"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide26",animacion[0],0.5);
        animacion_entrada("#slide26_img6",animacion[2], 1);
        animacion_entrada("#slide26_img7",animacion[5], 1.8);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide27(i) {
  animacion_salida("#slide27",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide27"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide27",animacion[0],0.5);
        animacion_entrada("#slide27_img8",animacion[5], 1);
        animacion_entrada("#slide27_img9",animacion[0], 1.5);
        animacion_entrada("#slide27_img10",animacion[3], 2.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide28(i) {
  animacion_salida("#slide28",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide28"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide28",animacion[0],0.5);
        animacion_entrada("#slide28_fondo",animacion[0], 0);
        animacion_entrada("#slide28_img1",animacion[5], 1);
        animacion_entrada("#slide28_img2",animacion[0], 1.5);
        animacion_entrada("#slide28_img3",animacion[1], 2);

        animacion_salida("#slide28_img3",animacion[0], 7);
        animacion_entrada("#slide28_img4",animacion[0], 7.2);
        animacion_entrada("#slide28_img5",animacion[1], 7.5);

        animacion_salida("#slide28_img5",animacion[0], 13);
        animacion_entrada("#slide28_img6",animacion[0], 13.2);
        animacion_entrada("#slide28_img7",animacion[1], 13.5);
        
        animacion_salida("#slide28_img7",animacion[0], 23);
        animacion_entrada("#slide28_img8",animacion[0], 23.2);
        animacion_entrada("#slide28_img9",animacion[1], 23.5);

        animacion_salida("#slide28_img9",animacion[0], 28);
        animacion_entrada("#slide28_img10",animacion[0], 28.2);
        animacion_entrada("#slide28_img11",animacion[1], 28.5);

        animacion_salida("#slide28_img11",animacion[0], 33);
        animacion_entrada("#slide28_img12",animacion[0], 33.2);

        animacion_entrada("#slide28_img13",animacion[5], 33.5);
        animacion_entrada("#slide28_img14",animacion[4], 34);

        stop("slide28");
        setTimeout(function(){start()},34500);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide34(i) {
  animacion_salida("#slide34",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide34"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide34",animacion[0],0.5);
        animacion_entrada("#slide34_img1",animacion[2], 1);
        animacion_entrada("#slide34_img2",animacion[0], 2.5);
        animacion_entrada("#slide34_img3",animacion[3], 3.5);
        animacion_entrada("#slide34_img4",animacion[4], 4.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide35(i) {
  animacion_salida("#slide35",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide35"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide35",animacion[0],0.5);
        animacion_entrada("#slide35_img2",animacion[5], 1);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide36(i) {
  animacion_salida("#slide36",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide36"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide36",animacion[0],0.5);
        animacion_entrada("#slide36_img1",animacion[2], 1);
        animacion_entrada("#slide36_img3",animacion[5], 1.5);
        animacion_entrada("#slide36_img4",animacion[4], 2.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide37(i) {
  animacion_salida("#slide37",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide37"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide37",animacion[0],0.5);
        animacion_entrada("#slide37_img1",animacion[5], 1);
        animacion_entrada("#slide37_img3",animacion[0], 1.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide38(i) {
  animacion_salida("#slide38",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide38"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide38",animacion[0],0.5);
        animacion_entrada("#slide38_img1",animacion[2], 1);
        animacion_entrada("#slide38_img2",animacion[2], 1.8);
        animacion_entrada("#slide38_img3",animacion[2], 2.6);
        animacion_entrada("#slide38_img4",animacion[2], 3.4);
        animacion_entrada("#slide38_img5",animacion[0], 4);
        animacion_entrada("#slide38_img6",animacion[1], 4.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide39(i) {
  //"default 0", "arriba_abajo 1", "abajo_arriba 2", "izquierda_derecha 3", "derecha_izquierda 4", "ampliar 5",
  animacion_salida("#slide39",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide39"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide39",animacion[0],0.5);
        animacion_entrada("#slide39_img7",animacion[1], 1);
        animacion_entrada("#slide39_img8",animacion[3], 1.5);
        animacion_entrada("#slide39_img9",animacion[4], 2);

        animacion_entrada("#slide39_img1",animacion[1], 2.5);
        animacion_entrada("#slide39_img10",animacion[2], 2.8);
        animacion_entrada("#slide39_img11",animacion[1], 3);

        animacion_salida("#slide39_img10",animacion[0], 9);
        animacion_salida("#slide39_img11",animacion[0], 9);

        animacion_entrada("#slide39_img2",animacion[0], 9.3);
        animacion_entrada("#slide39_img12",animacion[3],9.6);
        animacion_entrada("#slide39_img13",animacion[4],9.9);

        animacion_salida("#slide39_img12",animacion[0], 18);
        animacion_salida("#slide39_img13",animacion[0], 18);

        animacion_entrada("#slide39_img3",animacion[0], 18.3);
        animacion_entrada("#slide39_img14",animacion[4],18.6);
        animacion_entrada("#slide39_img15",animacion[3],18.9);

        animacion_salida("#slide39_img14",animacion[0], 24);
        animacion_salida("#slide39_img15",animacion[0], 24);

        animacion_entrada("#slide39_img4",animacion[2], 24.3);
        animacion_entrada("#slide39_img16",animacion[1],24.6);
        animacion_entrada("#slide39_img17",animacion[2],24.9);

        animacion_salida("#slide39_img16",animacion[0],30);
        animacion_salida("#slide39_img17",animacion[0],30);
        animacion_salida("#slide39_img8",animacion[0], 30);
        animacion_salida("#slide39_img9",animacion[0], 30);

        animacion_entrada("#slide39_img18",animacion[4],30.3);
        animacion_entrada("#slide39_img19",animacion[3],30.6);
        
        stop("slide39");
        setTimeout(function(){start()},31000);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide44(i) {
  animacion_salida("#slide44",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide44"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide44",animacion[0],0.5);
        animacion_entrada("#slide44_fondo",animacion[0], 0);
        animacion_entrada("#slide44_img1",animacion[1], 1.5);
        animacion_entrada("#slide44_img2",animacion[2], 2);
        animacion_entrada("#slide44_img3",animacion[0], 2.5);
        animacion_entrada("#slide44_img4",animacion[4], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide45(i) {
  animacion_salida("#slide45",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide45"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide45",animacion[0],0.5);
        animacion_entrada("#slide45_fondo",animacion[0], 0);
        animacion_entrada("#slide45_img1",animacion[1], 1.5);
        animacion_entrada("#slide45_img2",animacion[2], 2);
        animacion_entrada("#slide45_img3",animacion[0], 2.5);
        animacion_entrada("#slide45_img4",animacion[4], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide46(i) {
  animacion_salida("#slide46",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide46"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide46",animacion[0],0.5);
        animacion_entrada("#slide46_fondo",animacion[0], 0);
        animacion_entrada("#slide46_img2",animacion[3], 0.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide47(i) {
  animacion_salida("#slide47",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide47"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide47",animacion[0],0.5);
        animacion_entrada("#slide47_img3",animacion[3], 0.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide48(i) {
  animacion_salida("#slide48",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide48"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide48",animacion[0],0.5);
        animacion_entrada("#slide48_img4",animacion[3], 0.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide49(i) {
  animacion_salida("#slide49",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide49"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide49",animacion[0],0.5);
        animacion_entrada("#slide49_img1",animacion[2], 1);
        animacion_entrada("#slide49_img2",animacion[4], 1.5);
        animacion_entrada("#slide49_img3",animacion[2], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide50(i) {
  animacion_salida("#slide50",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide50"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide50",animacion[0],0.5);
        animacion_entrada("#slide50_img4",animacion[1], 1);
        animacion_entrada("#slide50_img5",animacion[0], 1.5);
        animacion_entrada("#slide50_img6",animacion[2], 2.5);
        animacion_entrada("#slide50_img7",animacion[5], 3);
        animacion_entrada("#slide50_img8",animacion[4], 3.5);
        animacion_entrada("#slide50_img9",animacion[1], 4);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide51(i) {
  animacion_salida("#slide51",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide51"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide51",animacion[0],0.5);
        animacion_entrada("#slide51_img10",animacion[1], 0.8);
        animacion_entrada("#slide51_img11",animacion[2], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide52(i) {
  animacion_salida("#slide52",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide52"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide52",animacion[0],0.5);
        animacion_entrada("#slide52_img12",animacion[2], 0.8);
        animacion_entrada("#slide52_img13",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide53(i) {
  animacion_salida("#slide53",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide53"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide53",animacion[0],0.5);
        animacion_entrada("#slide53_img14",animacion[1], 0.8);
        animacion_entrada("#slide53_img15",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide54(i) {
  animacion_salida("#slide54",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide54"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide54",animacion[0],0.5);
        animacion_entrada("#slide54_img16",animacion[2], 0.8);
        animacion_entrada("#slide54_img17",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide55(i) {
  animacion_salida("#slide55",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide55"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide55",animacion[0],0.5);
        animacion_entrada("#slide55_img18",animacion[1], 0.3);
        animacion_entrada("#slide55_img19",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide56(i) {
  animacion_salida("#slide56",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide56"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide56",animacion[0],0.5);
        animacion_entrada("#slide56_img20",animacion[2], 0.8);
        animacion_entrada("#slide56_img21",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide57(i) {
  animacion_salida("#slide57",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide57"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide57",animacion[0],0.5);
        animacion_entrada("#slide57_fondo",animacion[0], 0);
        animacion_entrada("#slide57_img1",animacion[1], 1);
        animacion_entrada("#slide57_img2",animacion[0], 1.5);
        animacion_entrada("#slide57_img3",animacion[2], 2);
        animacion_entrada("#slide57_img4",animacion[5], 2.5);
        animacion_entrada("#slide57_img5",animacion[4], 3);
        animacion_entrada("#slide57_img6",animacion[1], 3.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide58(i) {
  animacion_salida("#slide58",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide58"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide58",animacion[0],0.5);
        animacion_entrada("#slide58_img7",animacion[2], 0.8);
        animacion_entrada("#slide58_img8",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide59(i) {
  animacion_salida("#slide59",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide59"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide59",animacion[0],0.5);
        animacion_entrada("#slide59_img9",animacion[2], 0.8);
        animacion_entrada("#slide59_img10",animacion[5], 1.3);
        animacion_entrada("#slide59_img11",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide60(i) {
  animacion_salida("#slide60",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide60"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide60",animacion[0],0.5);
        animacion_entrada("#slide60_img12",animacion[2], 0.8);
        animacion_entrada("#slide60_img13",animacion[5], 1.3);
        animacion_entrada("#slide60_img14",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide61(i) {
  animacion_salida("#slide61",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide61"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide61",animacion[0],0.5);
        animacion_entrada("#slide61_img15",animacion[2], 0.8);
        animacion_entrada("#slide61_img16",animacion[5], 1.3);
        animacion_entrada("#slide61_img17",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide62(i) {
  animacion_salida("#slide62",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide62"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide62",animacion[0],0.5);
        animacion_entrada("#slide62_img18",animacion[2], 0.8);
        animacion_entrada("#slide62_img19",animacion[5], 1.3);
        animacion_entrada("#slide62_img20",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide63(i) {
  animacion_salida("#slide63",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide63"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide63",animacion[0],0.5);
        animacion_entrada("#slide63_img21",animacion[2], 0.8);
        animacion_entrada("#slide63_img22",animacion[5], 1.3);
        animacion_entrada("#slide63_img23",animacion[0], 2);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide64(i) {
  animacion_salida("#slide64",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide64"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide64",animacion[0],0.5);
        animacion_entrada("#slide64_fondo",animacion[0], 0);
        animacion_entrada("#slide64_img1",animacion[1], 0.5);
        animacion_entrada("#slide64_img2",animacion[0], 1);
        animacion_entrada("#slide64_img3",animacion[2], 1.5);
        animacion_entrada("#slide64_img4",animacion[5], 2);
        animacion_entrada("#slide64_img5",animacion[4], 2.5);
        animacion_entrada("#slide64_img6",animacion[1], 3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide65(i) {
  animacion_salida("#slide65",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide65"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide65",animacion[0],0.5);
        animacion_entrada("#slide65_img7",animacion[2], 0.8);
        animacion_entrada("#slide65_img8",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide66(i) {
  animacion_salida("#slide66",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide66"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide66",animacion[0],0.5);
        animacion_entrada("#slide66_img9",animacion[0], 0.8);
        animacion_entrada("#slide66_img10",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide67(i) {
  animacion_salida("#slide67",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide67"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide67",animacion[0],0.5);
        animacion_entrada("#slide67_img11",animacion[0], 0.8);
        animacion_entrada("#slide67_img12",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide68(i) {
  animacion_salida("#slide68",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide68"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide68",animacion[0],0.5);
        animacion_entrada("#slide68_img13",animacion[0], 0.8);
        animacion_entrada("#slide68_img14",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide69(i) {
  animacion_salida("#slide69",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide69"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide69",animacion[0],0.5);
        animacion_entrada("#slide69_img15",animacion[0], 0.8);
        animacion_entrada("#slide69_img16",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide70(i) {
  animacion_salida("#slide70",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide70"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide70",animacion[0],0.5);
        animacion_entrada("#slide70_img17",animacion[0], 0.8);
        animacion_entrada("#slide70_img18",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide71(i) {
  animacion_salida("#slide71",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide71"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide71",animacion[0],0.5);
        animacion_entrada("#slide71_img19",animacion[0], 0.8);
        animacion_entrada("#slide71_img20",animacion[3], 1.3);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide72(i) {
  animacion_salida("#slide72",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide72"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide72",animacion[0],0.5);
        animacion_entrada("#slide72_fondo",animacion[0], 0);
        animacion_entrada("#slide72_img1",animacion[1], 0.5);
        animacion_entrada("#slide72_img2",animacion[0], 1);
        animacion_entrada("#slide72_img3",animacion[2], 1.5);
        animacion_entrada("#slide72_img4",animacion[5], 2);
        animacion_entrada("#slide72_img5",animacion[4], 2.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide73(i) {
  animacion_salida("#slide73",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide73"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide73",animacion[0],0.5);
        animacion_entrada("#slide73_fondo",animacion[0], 0);
        animacion_entrada("#slide73_img1",animacion[1], 0.5);
        animacion_entrada("#slide73_img2",animacion[0], 1);
        animacion_entrada("#slide73_img3",animacion[4], 1.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function slide74(i) {
  animacion_salida("#slide74",animacion[0],-1);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#slide74"
  }).on('enter', function(){
      if(vistos[i]==0){
        animacion_entrada("#slide74",animacion[0],0.5);
        animacion_entrada("#slide74_fondo",animacion[1], 0);
        animacion_entrada("#slide74_img4",animacion[3], 0.5);
        animacion_entrada("#slide74_img5",animacion[5], 1);
        animacion_entrada("#slide74_img6",animacion[4], 1.5);
      }
      vistos[i]=1;
  });
  return processScene(scene);
}

function stop(id){
  var div = document.getElementById(id);
  div.scrollIntoView({behavior:'smooth',block:'end'});
  setTimeout(function(){document.body.style.overflow = 'hidden';},500);
}

function start(){
  document.body.style.overflow = 'scroll';
}

function animacion_entrada(objeto, tipo, retardo) {
  var tiempo_animacion = 0.5;
  switch (tipo) {
    case "default":
       TweenMax.to(objeto,tiempo_animacion, {delay:-1 ,css:{opacity:0}});
       TweenMax.to(objeto,tiempo_animacion, {delay:retardo ,css:{opacity:1}});
    break;
    case "arriba_abajo":
        TweenMax.from(objeto,tiempo_animacion,{delay:retardo ,css:{"margin-top": "-30vw", opacity:0}});
    break;
    case "abajo_arriba":
        TweenMax.from(objeto,tiempo_animacion,{delay:retardo ,css:{"margin-top": "30vw", opacity:0}});
    break;
    case "izquierda_derecha":
        TweenMax.from(objeto,tiempo_animacion,{delay:retardo, css:{"margin-left": "-30vw", opacity:0}});
    break;
    case "derecha_izquierda":
        TweenMax.from(objeto,tiempo_animacion,{delay:retardo, css:{"margin-left": "30vw", opacity:0}});
    break;
    case "ampliar":
        TweenMax.from(objeto,tiempo_animacion,{delay:retardo, css:{scale: 0}});
    break;
  }
}

function animacion_salida(objeto, tipo, retardo) {
  var tiempo_animacion = 0.5;
  switch (tipo) {
    case "default":
        TweenMax.to(objeto,tiempo_animacion, {delay:retardo ,css:{opacity:0}});
    break;
  }
}