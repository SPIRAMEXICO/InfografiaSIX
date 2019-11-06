var vistos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var vista=0;
var scalePage = 1;
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
        document.getElementById("menuNav").classList.add('menuNavEdge');
        document.querySelectorAll(".btnsNav").forEach(
            elemento => {elemento.classList.add('navEdge')}
        );   
        /*document.getElementById("menuNavHeineken").classList.add('menuNavEdgeHeineken');
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
  slide5(5).addTo(controller);
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
  slide21(21).addTo(controller);
  slide22(22).addTo(controller);
  slide23(23).addTo(controller);
  slide24(24).addTo(controller);
  slide25(25).addTo(controller);
  
  slide26(26).addTo(controller);
  slide27(27).addTo(controller);
  slide28(28).addTo(controller);
  slide29(29).addTo(controller);
  slide30(30).addTo(controller);
  slide31(31).addTo(controller);
  slide32(32).addTo(controller);
  slide33(33).addTo(controller);
  slide34(34).addTo(controller);
  slide35(35).addTo(controller);
  slide36(36).addTo(controller);
  slide37(37).addTo(controller);
  slide38(38).addTo(controller);
  slide39(39).addTo(controller);
  slide40(40).addTo(controller);
  
  iniciarMenu();
  iniciarMenuHeineken();
  iniciarMenuSIX();
  iniciarMenuRetail();
    
        

}

function slide0(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#portada", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#portada_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img4", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img5", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#portada_img6", .5,{delay:3.5,css:{"margin-top": "50vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#menuNav", 1,{css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from(".indice-text", 1,{css:{"margin-top": "30vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#portada"
        
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';
        vistos[i]=1;
    }).on("enter leave", function () {
        console.log("portada");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide1(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken1", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#heineken1_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken1_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken1_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken1"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken1");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide2(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken2", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#heineken2_fondo", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken2_img1", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken2_img2", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken2_img3", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken2"
    }).on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken2");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide3(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken3", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken3_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken3_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken3_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken3_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken3_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#heineken3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken3"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken3");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide4(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken4", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken4_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken4_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0},}),0);
    timeline.add(TweenMax.from("#heineken4_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken4_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken4_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken4_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#heineken4 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken4"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken4");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide5(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken5", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken5_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken5_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken5_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken5_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken5_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    $("#heineken5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken5"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken5");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide6 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken6", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken6_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken6_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken6_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken6_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken6_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken6_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#heineken6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken6"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken5");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide7(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken7", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken7_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken7_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken7_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken7_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken7_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken7_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#heineken7 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken7"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken7");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide8 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken8", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken8_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken8_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken8_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken8_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken8_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);    
    
    $("#heineken8 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken8"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken8");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide9(i){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken9", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken9_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken9_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken9_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken9_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken9_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);    
    timeline.add(TweenMax.from("#heineken9_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);    
    
    $("#heineken9 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken9"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken9");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide10 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#heineken10", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#heineken10_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken10_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken10_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#heineken10_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#heineken10_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);    
    timeline.add(TweenMax.from("#heineken10_img4", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0); 
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#heineken10"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("heineken10");
        colocarMenuPorMarca(1);
    });
    return processScene(scene);
}

function slide11(i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#six1", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#six1_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six1_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six1"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six1");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide12 (i) {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#six2", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#six2_fondo", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six2_img1", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#six2_img2", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#six2_img3", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six2"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six2");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
    
}

function slide13 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#six3", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six3_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six3_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six3_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six3_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six3_img4", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    /*$("#six3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });*/
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six3"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six3");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide14 (i) {    
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#six4", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six4_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six4_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six4_img1", .5,{delay:1, css:{"margin-left": "30vw", opacity:0}}),0);    
    
    $("#six4 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six4"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six4");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide15 (i) {   
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six5", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six5_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six5_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six5_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six5_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six5_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six5_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#six5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six5"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six5");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide16 (i) {    
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six6", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six6_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six6_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six6_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six6_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six6_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six6_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#six6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six6"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six6");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide17 (i) {    
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six7", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six7_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six7_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six7_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six7_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six7_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six7_img4", .5,{delay:2.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#six7_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six7"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six7");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide18 (i) {    
   var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six8", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six8_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six8_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six8_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six8_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six8_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six8_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six8_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    $("#six8 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:3.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six8"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six8");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide19 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six9", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six9_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six9_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six9_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six9_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six9_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six9_img4", .5,{delay:2.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#six9_img5", .5,{delay:3, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six9"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six9");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide20 (i) {    
   var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six10", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six10_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six10_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    /*timeline.add(TweenMax.from("#six10_img6", .5,{delay:3.3, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img7", .5,{delay:3.6, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img8", .5,{delay:3.9, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img9", .5,{delay:4.2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img10", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img11", .5,{delay:4.8, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six10_img12", .5,{delay:5, css:{"margin-left": "30vw", opacity:0}}),0);*/
    
    
    $("#six10 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:3.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six10"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six10");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide21 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six11", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six11_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six11_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six11_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six11_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six11_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six11_img4", .5,{delay:2.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#six11_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six11"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six11");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide22 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six12", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six12_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six12_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six12_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six12_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six12_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six12_img4", .5,{delay:2.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
     timeline.add(TweenMax.from("#six12_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#six12 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:3.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six12"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six12");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}




function slide23 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six13", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six13_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six13_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six13_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six13_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six13_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six13_img4", .5,{delay:2.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six13"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six13");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide24 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six14", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six14_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six14_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six14_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six14_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six14_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six14_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six14_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    $("#six14 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:3.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six14"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six14");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide25 (i) { 
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#six15", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#six15_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#six15_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six15_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#six15_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#six15_img3", .5,{delay:2, css:{"margin-top": "30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#six15"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("six15");
        colocarMenuPorMarca(2);
    });
    return processScene(scene);
}

function slide26 (i) {  
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#retail1", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#retail1_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail1_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail1_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail1"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail1");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide27 (i) {   
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#retail2", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#retail2_fondo", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail2_img1", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail2_img2", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail2_img3", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail2"
        
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail2");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function slide28 (i) { 
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#retail3", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_timeBar", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img2", .5,{delay:2, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img3", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img4", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img5", .5,{delay:3.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img6", .5,{delay:4, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img7", .5,{delay:4.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail3_img8", .5,{delay:5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    $("#retail3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail3"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail3");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide29 (i) {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#retail4", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail4_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_timeBar", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img1", .5,{delay:2, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img2", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img3", .5,{delay:3, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img4", .5,{delay:3.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img5", .5,{delay:4, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img6", .5,{delay:4.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail4_img7", .5,{delay:5, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail4"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail4");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide30 (i) {
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail5", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail5_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail5_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail5_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail5_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail5_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail5_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail5"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail5");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide31 (i) {    
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail6", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail6_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail6_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail6_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail6_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail6_img4", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail6_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail6"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail6");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide32 (i) {    
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail7", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail7_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail7_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail7_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail7_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail7_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail7_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail7 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail7"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail7");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide33 (i) { 
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail8", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail8_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail8_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail8_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail8_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail8_img3", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail8_img4", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail8"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail8");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide34 (i){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail9", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail9_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail9_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail9_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail9_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail9_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail9_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail9 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail9"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail9");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide35(i){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail10", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail10_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail10_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail10_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail10_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail10_img3", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail10_img4", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail10"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail10");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide36(i){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail11", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail11_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail11_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail11_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail11_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail11_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail11_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail11 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail11"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail11");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide37(i){
     var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail12", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail12_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail12_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail12_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail12_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail12_img4", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail12_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail12 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail12"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail12");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide38(i){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail13", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail13_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail13_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail13_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail13_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail13_img4", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail13_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail13 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail13"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail13");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide39(i){
     var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#retail14", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#retail14_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#retail14_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail14_img2", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#retail14_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail14_img4", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#retail14_img5", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#retail14 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#retail14"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("retail14");
        colocarMenuPorMarca(3);
    });
    return processScene(scene);
}

function slide40(i){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#creditos", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#creditos_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img4", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img5", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#creditos_img6", .5,{delay:3.5,css:{"margin-top": "50vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#cierre"
    })
    .on('enter', function(){
        (vistos[i]==0)?timeline.play():'';vistos[i]=1;
    }).on("enter leave", function () {
        console.log("cierre");
        colocarMenuPorMarca(0);
    });
    return processScene(scene);
}

function iniciarMenu(){
    $("#btn1").hover(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:1}});});
    $("#btn1").mouseout(function(){TweenMax.to("#btn1Tag", .5, {css:{opacity:0}});});
    $("#btn2").hover(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:1}});});
    $("#btn2").mouseout(function(){TweenMax.to("#btn2Tag", .5, {css:{opacity:0}});});
    $("#btn3").hover(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:1}});});
    $("#btn3").mouseout(function(){TweenMax.to("#btn3Tag", .5, {css:{opacity:0}});});
    $("#btn4").hover(function(){TweenMax.to("#btn4Tag", .5, {css:{opacity:1}});});
    $("#btn4").mouseout(function(){TweenMax.to("#btn4Tag", .5, {css:{opacity:0}});});
   

    $("#btn1").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#portada").offset().top}, 5000);
    });
    $("#btn2").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken1").offset().top}, 5000);
    });
    $("#btn3").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six1").offset().top}, 5000);
    });
    $("#btn4").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail1").offset().top}, 5000);
    });   
}

function iniciarMenuHeineken(){
    $("#btn1Heineken").hover(function(){TweenMax.to("#btn1TagHeineken", .5, {css:{opacity:1}});});
    $("#btn1Heineken").mouseout(function(){TweenMax.to("#btn1TagHeineken", .5, {css:{opacity:1}});});
    $("#btn2Heineken").hover(function(){TweenMax.to("#btn2TagHeineken", .5, {css:{opacity:1}});});
    $("#btn2Heineken").mouseout(function(){TweenMax.to("#btn2TagHeineken", .5, {css:{opacity:1}});});
    $("#btn3Heineken").hover(function(){TweenMax.to("#btn3TagHeineken", .5, {css:{opacity:1}});});
    $("#btn3Heineken").mouseout(function(){TweenMax.to("#btn3TagHeineken", .5, {css:{opacity:1}});});
    $("#btn4Heineken").hover(function(){TweenMax.to("#btn4TagHeineken", .5, {css:{opacity:1}});});
    $("#btn4Heineken").mouseout(function(){TweenMax.to("#btn4TagHeineken", .5, {css:{opacity:1}});});
    $("#btn5Heineken").hover(function(){TweenMax.to("#btn5TagHeineken", .5, {css:{opacity:1}});});
    $("#btn5Heineken").mouseout(function(){TweenMax.to("#btn5TagHeineken", .5, {css:{opacity:1}});});
    $("#btn6Heineken").hover(function(){TweenMax.to("#btn6TagHeineken", .5, {css:{opacity:1}});});
    $("#btn6Heineken").mouseout(function(){TweenMax.to("#btn6TagHeineken", .5, {css:{opacity:1}});});
    $("#btn7Heineken").hover(function(){TweenMax.to("#btn7TagHeineken", .5, {css:{opacity:1}});});
    $("#btn7Heineken").mouseout(function(){TweenMax.to("#btn7TagHeineken", .5, {css:{opacity:1}});});
   

    $("#btn1Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken3").offset().top}, 5000);
    });
    $("#btn2Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken4").offset().top}, 5000);
    });
    $("#btn3Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken5").offset().top}, 5000);
    });
    $("#btn4Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken6").offset().top}, 5000);
    });
    $("#btn5Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken7").offset().top}, 5000);
    });
    $("#btn6Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken8").offset().top}, 5000);
    });
    $("#btn7Heineken").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#heineken9").offset().top}, 5000);
    });   
}

function iniciarMenuSIX(){
    $("#btn1SIX").hover(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn1SIX").mouseout(function(){TweenMax.to("#btn1TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").hover(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn2SIX").mouseout(function(){TweenMax.to("#btn2TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").hover(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn3SIX").mouseout(function(){TweenMax.to("#btn3TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").hover(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn4SIX").mouseout(function(){TweenMax.to("#btn4TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").hover(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn5SIX").mouseout(function(){TweenMax.to("#btn5TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").hover(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn6SIX").mouseout(function(){TweenMax.to("#btn6TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").hover(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn7SIX").mouseout(function(){TweenMax.to("#btn7TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").hover(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    $("#btn8SIX").mouseout(function(){TweenMax.to("#btn8TagSIX", .5, {css:{opacity:1}});});
    
   

    $("#btn1SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six3").offset().top}, 5000);
    });
    $("#btn2SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six5").offset().top}, 5000);
    });
    $("#btn3SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six6").offset().top}, 5000);
    });
    $("#btn4SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six7").offset().top}, 5000);
    });
    $("#btn5SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six9").offset().top}, 5000);
    });
    $("#btn6SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six11").offset().top}, 5000);
    });
    $("#btn7SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six13").offset().top}, 5000);
    }); 
   $("#btn8SIX").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#six15").offset().top}, 5000);
    });   
}

function iniciarMenuRetail(){
    $("#btn1Retail").hover(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn1Retail").mouseout(function(){TweenMax.to("#btn1TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").hover(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn2Retail").mouseout(function(){TweenMax.to("#btn2TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").hover(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn3Retail").mouseout(function(){TweenMax.to("#btn3TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").hover(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn4Retail").mouseout(function(){TweenMax.to("#btn4TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").hover(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn5Retail").mouseout(function(){TweenMax.to("#btn5TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").hover(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn6Retail").mouseout(function(){TweenMax.to("#btn6TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").hover(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn7Retail").mouseout(function(){TweenMax.to("#btn7TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").hover(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn8Retail").mouseout(function(){TweenMax.to("#btn8TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").hover(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
    $("#btn9Retail").mouseout(function(){TweenMax.to("#btn9TagRetail", .5, {css:{opacity:1}});});
   

    $("#btn1Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail3").offset().top}, 5000);
    });
    $("#btn2Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail5").offset().top}, 5000);
    });
    $("#btn3Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail6").offset().top}, 5000);
    });
    $("#btn4Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail7").offset().top}, 5000);
    });
    $("#btn5Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail9").offset().top}, 5000);
    });
    $("#btn6Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail11").offset().top}, 5000);
    });
    $("#btn7Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail12").offset().top}, 5000);
    });
    $("#btn8Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail13").offset().top}, 5000);
    });
    $("#btn9Retail").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#retail14").offset().top}, 5000);
    });   
}
/*
    sin menu =0
    heineken = 1
    six = 2
    retail = 3
*/
function colocarMenuPorMarca(marca){
    var Nom="";
    if(marca==0){
        animacion_salida($("#contenedorMenuHeineken"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==1){
        Nom="#contenedorMenuHeineken";
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==2){
        Nom="#contenedorMenuSIX";
        animacion_salida($("#contenedorMenuHeineken"),"default", 0);
        animacion_salida($("#contenedorMenuRetail"),"default", 0);
    }else if(marca==3){
        Nom="#contenedorMenuRetail";
        animacion_salida($("#contenedorMenuHeineken"),"default", 0);
        animacion_salida($("#contenedorMenuSIX"),"default", 0);
    }
    if(marca != vista){
        if(marca !=0){
            animacion_entrada($(Nom),"izquierda_derecha", 0.5);
        }
        vista = marca;
    }
}

function animacion_entrada(objeto, tipo, retardo, funcion_sigue) {
    //tipos de animación: "default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda", "ampliar", "reducir" */
    TweenMax.killTweensOf(objeto);
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 0.5;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[Math.floor(Math.random() * animaciones.length)];
    }
    objeto.css("display", "block");
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 1, ease: Quart.easeOut, delay: retardo });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              { top: parseInt(objeto.attr("_origeny")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              { right: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              { left: parseInt(objeto.attr("_origenx")) * scalePage, alpha: 1, ease: Back.easeOut, delay: retardo }
            );
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 1,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { bottom: parseInt(objeto.attr("_origeny")) * scalePage - 80 },
              {
                bottom: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { top: parseInt(objeto.attr("_origeny")) * scalePage + 80 },
              {
                top: parseInt(objeto.attr("_origeny")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { right: parseInt(objeto.attr("_origenx")) * scalePage - 150 },
              {
                right: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          } else {
            TweenMax.fromTo(
              objeto,
              tiempo_animacion,
              { left: parseInt(objeto.attr("_origenx")) * scalePage + 150 },
              {
                left: parseInt(objeto.attr("_origenx")) * scalePage,
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
              }
            );
          }
          break;
      }
    }
  }

  function animacion_salida(objeto, tipo, retardo, funcion_sigue) {
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var tiempo_animacion = 1;
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }
    if (tipo == "aleatorio") {
      tipo = animaciones[random(animaciones.length - 1)];
    }
    if (funcion_sigue == undefined) {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, { alpha: 0, ease: Quart.easeOut, delay: retardo, display: "none" });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo
            });
          }
          break;
      }
    } else {
      switch (tipo) {
        case "default":
          TweenMax.to(objeto, tiempo_animacion, {
            alpha: 0,
            ease: Quart.easeOut,
            delay: retardo,
            onComplete: funcion_sigue
          });
          break;
        case "arriba_abajo":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "abajo_arriba":
          if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
            TweenMax.to(objeto, tiempo_animacion, {
              bottom: parseInt(objeto.css("bottom")) + 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              top: parseInt(objeto.css("top")) - 80,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "izquierda_derecha":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
        case "derecha_izquierda":
          if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
            TweenMax.to(objeto, tiempo_animacion, {
              right: parseInt(objeto.css("right")) + 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          } else {
            TweenMax.to(objeto, tiempo_animacion, {
              left: parseInt(objeto.css("left")) - 150,
              alpha: 0,
              ease: Back.easeIn,
              delay: retardo,
              onComplete: funcion_sigue
            });
          }
          break;
      }
    }
  }