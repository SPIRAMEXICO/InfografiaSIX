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
    }
    
  slide0().addTo(controller);
  slide1().addTo(controller);
  slide2().addTo(controller);
    
  slide3().addTo(controller);    
  slide4().addTo(controller);
  slide5().addTo(controller);

  slide6().addTo(controller);

  slide7().addTo(controller);
  slide8().addTo(controller);
  slide9().addTo(controller);
  slide10().addTo(controller);
  slide11().addTo(controller);
  slide12().addTo(controller);

  slide13().addTo(controller);
  slide14().addTo(controller);
  slide15().addTo(controller);
  slide16().addTo(controller);

  slide17().addTo(controller);
  slide18().addTo(controller);
  slide19().addTo(controller);
  slide20().addTo(controller);
  slide21().addTo(controller);

  slide22().addTo(controller);
  slide23().addTo(controller);
  slide24().addTo(controller);
  slide25().addTo(controller);

  slide26().addTo(controller);
  slide27().addTo(controller);
  slide28().addTo(controller);
  slide29().addTo(controller);

  slide30().addTo(controller);
  slide31().addTo(controller);
  slide32().addTo(controller);
  slide33().addTo(controller);
  slide34().addTo(controller);
  slide35().addTo(controller);
  slide36().addTo(controller);

  slide37().addTo(controller);
  slide38().addTo(controller);
  slide39().addTo(controller);
  slide40().addTo(controller);

  slide41().addTo(controller);
  slide42().addTo(controller);
  slide43().addTo(controller);
  slide44().addTo(controller);


  iniciarMenu();
}

function slide0 () { 
    console.log("pantalla1");   
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#intro", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#intro_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img4", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img5", .5,{delay:3,css:{"margin-left": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#intro_img6", .5,{delay:3.5,css:{"margin-top": "50vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#menuNav", 1,{css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from(".indice-text", 1,{css:{"margin-top": "30vh", opacity:0}}),0);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#intro"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide1() {
    console.log("pantalla2"); 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#intro1", 0.5, {css: {opacity:.7, top:"1vw"}}));
    timeline.add(TweenMax.from("#intro1_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#intro1_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#intro1_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#intro1_img3", .5,{delay:2, css:{opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#intro1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide2() {
    var timeline = new TimelineMax({paused: true});
    
    timeline.add(TweenMax.from("#intro2_fondo", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#intro2_img1", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#intro2_img2", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#intro2_img3", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);
    $("#intro2_img4").fadeOut();
        
    $("#click1").click(function(){
       
        $("#intro2_img2").fadeOut();
        $("#intro2_img3").fadeOut();
        $("#click1").fadeOut();
        $("#intro2_img4").fadeIn();
    });


    var scene = new ScrollMagic.Scene({
        triggerElement: "#intro2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide3() {
    console.log("pantalla4"); 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#beneficios", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#beneficios_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#beneficios_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#beneficios .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#beneficios"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide4() {
    console.log("pantalla5"); 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#beneficios1", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#beneficios1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios1_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0},}),0);
    timeline.add(TweenMax.from("#beneficios1_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#beneficios1_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios1_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#beneficios1_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    
    $("#beneficios1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#beneficios1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide5() {
    console.log("pantalla6"); 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#beneficios2", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#beneficios2_fondo", .5,{css:{opacity:0}}),0);
    
    timeline.add(TweenMax.from("#beneficios2_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    $("#beneficios2 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#beneficios2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide6 () {
    console.log("pantalla7");     
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#donluis", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#donluis_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#donluis_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#donluis_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    /*timeline.add(TweenMax.from("#donluis_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);*/
    

    $("#donluis_img4").fadeOut();
        
    $("#click2").click(function(){
       
        $("#donluis_img2").fadeOut();
        $("#donluis_img3").fadeOut();
        $("#click2").fadeOut();
        $("#donluis_img4").fadeIn();
    });


    
    $("#donluis .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#donluis"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide7() {
    console.log("pantalla8"); 
    var timeline = new TimelineMax({paused: true});
   +  
    timeline.add(TweenMax.from("#primeros_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#primeros_img3", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros_img4", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#primeros_img6", .5,{delay:3.1, css:{"margin-rigth": "-30vw", opacity:0}}),0);

    
    $("#primeros .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros"
    })
    .on('enter', function(){

        timeline.play();
    })
    return processScene(scene);
}

function slide8 () {
    console.log("pantalla9");     
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#primeros1", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#primeros1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros1_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#primeros1_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros1_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);    
    
    $("#primeros1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide9(){
    console.log("pantalla10"); 
    var timeline = new TimelineMax({paused: true});
    
    timeline.add(TweenMax.from("#primeros2_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros2_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros2_img3", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);    
    timeline.add(TweenMax.from("#primeros2_img4", .5,{delay:2.5, css:{"margin-top": "-30vw", opacity:0}}),0);       
    
    $("#primeros2 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide10 () {
    console.log("pantalla11"); 
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#primeros3", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#primeros3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros3_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros3_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#primeros3_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros3_img3", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);    
    timeline.add(TweenMax.from("#primeros3_img4", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0); 
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide11() {
    console.log("pantalla12"); 
    var timeline = new TimelineMax({paused: true});
    
    timeline.add(TweenMax.from("#primeros4_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros4_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros4_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros4_img3", .5,{delay:2, css:{opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros4"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide12 () {
    console.log("pantalla13"); 
    var timeline = new TimelineMax({paused: true});
    
    timeline.add(TweenMax.from("#primeros5_fondo", .5,{"margin-top": "0vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros5_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros5_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#primeros5_img3", .5,{delay:2, css:{opacity:0}}),0);
        
    var scene = new ScrollMagic.Scene({
        triggerElement: "#primeros5"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
    
}

function slide13 () {
    console.log("pantalla14");     
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#promociones_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#promociones_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    
       
    var scene = new ScrollMagic.Scene({
        triggerElement: "#promociones"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide14 () {
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#promociones1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img1", .5,{delay:1, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img3", .5,{delay:1.8, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img4", .5,{delay:2, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img5", .5,{delay:2.3, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones1_img6", .5,{delay:2.6, css:{"margin-top": "-30vw", opacity:0}}),0);

    
    $("#promociones1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#promociones1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide15 () {   
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#promociones2_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones2_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#promociones2_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    $("#promociones2 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#promociones2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide16 () {    
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#promociones3", .5,{css:{opacity:.7, top:"1vw"}}));   
    timeline.add(TweenMax.from("#promociones3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones3_timeBar", .5,{delay:.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones3_img2", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#promociones3_img3", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    /*timeline.add(TweenMax.from("#promociones3_img4", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#promociones3_img5", .5,{delay:2.8, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);*/

    $("#promociones3_img4").fadeOut();
    $("#promociones3_img5").fadeOut();
        
    $("#click3").click(function(){
       
        $("#promociones3_img2").fadeOut();
        $("#promociones3_img3").fadeOut();
        $("#click3").fadeOut();
        $("#promociones3_img4").fadeIn();
        $("#promociones3_img5").fadeIn();
    });


    
    $("#promociones3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#promociones3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide17 () {    
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#pago_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#pago_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#pago_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago_img3", .5,{delay:2, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago_img4", .5,{delay:2.5, css:{"margin-top": "10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#pago_img5", .5,{delay:3, css:{"margin-top": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago_img6", .5,{delay:3.5, css:{"margin-top": "30vw", opacity:0}}),0);    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pago"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide18 () {    
   var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#pago1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#pago1_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#pago1_img2", .5,{delay:1.5, css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago1_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago1_img4", .5,{delay:2.5, css:{"margin-right": "10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#pago1_img5", .5,{delay:3, css:{"margin-right": "30vw", opacity:0}}),0);  
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pago1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide19 () {    
    var timeline = new TimelineMax({paused: true}); 
     timeline.add(TweenMax.from("#pago2_fondo", .5,{css:{opacity:0}}),0);
     timeline.add(TweenMax.from("#pago2_img1", .5,{delay:1, css:{"margin-top": "-30vw", opacity:0}}),0);
     timeline.add(TweenMax.from("#pago2_img2", .5,{delay:1.5, css:{"margin-top": "-30vw", opacity:0}}),0);
     timeline.add(TweenMax.from("#pago2_img3", .5,{delay:2, css:{"margin-right": "30vw", opacity:0}}),0);
     timeline.add(TweenMax.from("#pago2_img4", .5,{delay:2.5, css:{"margin-right": "10vw", opacity:0},ease:Back.easeOut}),0);
     timeline.add(TweenMax.from("#pago2_img5", .5,{delay:3, css:{"margin-left": "30vw", opacity:0}}),0);  
     
     var scene = new ScrollMagic.Scene({
         triggerElement: "#pago2"
     })
     .on('enter', function(){
         timeline.play();
     })
     return processScene(scene);
 }



function slide20 () {    
   var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#pago3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#pago3_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#pago3_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    $("#pago3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:3.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pago3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide21 () {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#pago4_fondo", .3,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#pago4_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#pago4_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#pago4_img11", .5,{delay:3, css:{"margin-left": "-30vw", opacity:0}}),0);
    /*timeline.add(TweenMax.from("#pago4_img12", .5,{delay:6.5, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#pago4_img13", .5,{delay:7, css:{"margin-left": "30vw", opacity:0}}),0);*/

    $("#pago4_img12").fadeOut();
    $("#pago4_img13").fadeOut();
        
    $("#click4").click(function(){
        /*$("#pago4 .equipo_bounce").fadeOut();*/
        $("#pago4_img2").fadeOut();
        $("#pago4_img11").fadeOut();
        $("#click4").fadeOut();
        $("#pago4_img12").fadeIn();
        $("#pago4_img13").fadeIn();
    });



    $("#pago4 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:2, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#pago4"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide22 () {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#surtido_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#surtido_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
   
    var scene = new ScrollMagic.Scene({
        triggerElement: "#surtido"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide23 () {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#surtido1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido1_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#surtido1_img2", .5,{delay:1.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    $("#surtido1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:2.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#surtido1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide24 () { 
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#surtido2_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido2_img1", .5,{delay:1, css:{scale: 0}}),0);
    timeline.add(TweenMax.from("#surtido2_img2", .5,{delay:1.5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#surtido2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide25 () {  
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#surtido3_fondo", .5,{"margin-top": "-30vw",css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido3_img1", .5,{delay:.8, css:{width:"0vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido3_img2", .5,{delay:1.5, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido3_img3", .5,{delay:2, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#surtido3_img5", .5,{delay:2.5, css:{opacity:0}}),0);
    
    $("#surtido3_img4").fadeOut();
        
    $("#click5").click(function(){
        
        $("#surtido3_img2").fadeOut();
        $("#surtido3_img3").fadeOut();
        $("#click5").fadeOut();
        $("#surtido3_img4").fadeIn();
        
    });

    $("#click6").click(function(){
        window.open("librerias/descargables/01_aSIXtente_PEDELEC.pdf")
        
        $("#click6").fadeOut();
    });

    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#surtido3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide26 () {   
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#cambio_fondo", .5,{delay:.5 ,css:{"margin-top": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img1", .5,{delay:1,css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img2", .5,{delay:1.5,css:{"margin-top": "-30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img3", .5,{delay:1.8,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img4", .5,{delay:2,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img5", .5,{delay:2.2,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img6", .5,{delay:2.4,css:{"margin-top": "30vh", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio_img7", .5,{delay:2.6,css:{"margin-top": "30vh", opacity:0}}),0);

    $("#cambio_img6").fadeOut();
    $("#cambio_img7").fadeOut();
        
    $("#click7").click(function(){
        
        $("#cambio_img2").fadeOut();
        $("#cambio_img5").fadeOut();
        $("#click7").fadeOut();
        $("#cambio_img6").fadeIn();
        $("#cambio_img7").fadeIn();
    });


    var scene = new ScrollMagic.Scene({
        triggerElement: "#cambio"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide27 () { 
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#cambio1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio1_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio1_img2", .5,{delay:2, css:{scale:0, opacity:0}}),0);
    
    
    $("#cambio1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1.5, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#cambio1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide28 () {  
    var timeline = new TimelineMax({paused: true}); 
    timeline.add(TweenMax.from("#cambio2_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio2_img1", .5,{delay:.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio2_img2", .5,{delay:1.2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio2_img3", .5,{delay:1.4, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#cambio2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide29 () {    
    var timeline = new TimelineMax({paused: true});    
   timeline.add(TweenMax.from("#cambio3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio3_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio3_img2", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio3_img3", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#cambio3_img4", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#cambio3_img5", .5,{delay:3.2, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#cambio3_img6", .5,{delay:3.4, css:{"margin-left": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#cambio3_img7", .5,{delay:3.6, css:{"margin-left": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#cambio3_img8", .5,{delay:4.2, css:{"margin-right": "-10vw", opacity:0},ease:Back.easeOut}),0);
    /*TweenMax.fromTo($("#cambio3_img8"), .5, {alpha: 1}, { alpha: 0.4, yoyo: true, repeat: -1 });*/
    
           
    $("#click8").click(function(){
        window.open("librerias/descargables/02_aSIXtente_aSIXtel.pdf")
        
        $("#click8").fadeOut();
    });


    $("#cambio3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#cambio3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide30 () {    
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
   
    $("#administracion .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide31 () {    
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion1_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion1_img2", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion1_img3", .5,{delay:2.5, css:{"margin-bottom": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion1_img4", .5,{delay:3, css:{"margin-bottom": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#administracion1_img5", .5,{delay:3.3, css:{"margin-bottom": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#administracion1_img6", .5,{delay:3.6, css:{"margin-bottom": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#administracion1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide32 () { 
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion2_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion2_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion2_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide33 (){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion3_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion3_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion3_img2", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    
    $("#administracion3 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide34(){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion4_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion4_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion4_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion4_img3", .5,{delay:2.5, css:{"margin-left": "30vw", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion4"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide35(){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion5_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion5_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion5_img2", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion5_img3", .5,{delay:2.5, css:{"margin-left": "-30vw", opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion5_img4", .5,{delay:3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    timeline.add(TweenMax.from("#administracion5_img5", .5,{delay:3.3, css:{"margin-top": "-10vw", opacity:0},ease:Back.easeOut}),0);
    
    $("#administracion5 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion5"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide36(){
     var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#administracion6_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion6_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#administracion6_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
    
    $("#administracion6 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#administracion6"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide37(){
    var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#corte_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#corte_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#corte_img2", .5,{delay:2, css:{"margin-left": "30vw", opacity:0}}),0);
     
    $("#corte .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#corte"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide38(){
     var timeline = new TimelineMax({paused: true});    
    timeline.add(TweenMax.from("#corte1_fondo", .5,{css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#corte1_img1", .5,{delay:1.5, css:{scale:0, opacity:0}}),0);
    timeline.add(TweenMax.from("#corte1_img2", .5,{delay:2, css:{"margin-left": "-30vw", opacity:0}}),0);
      
    $("#corte1 .equipo_bounce").each(function(i,v){
        timeline.add(TweenMax.from(v, 1,{delay:1, css:{scale: 0, opacity:0}, ease:Elastic.easeOut}), i * 0.1);
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#corte1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide39(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#corte2_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#corte2_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#corte2_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#corte2_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    timeline.add(TweenMax.from("#corte2_img4", .5,{delay:2.5,css:{"margin-left": "-30vh", opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#corte2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide40(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#corte3_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#corte3_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#corte3_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#corte3_img3", .5,{delay:2, css:{"margin-left": "10vh",opacity:0}}),0);
   
    $("#click9").click(function(){
        window.open("librerias/descargables/03_aSIXtente_entrega_de_cantidades_exactas.pdf")
        
        $("#click9").fadeOut();
    });

    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#corte3"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide41(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#quedaclaro_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro_img3", .5,{delay:2, css:{"margin-left": "10vh",opacity:0}}),0);

    $("#click10").click(function(){
        window.open("librerias/descargables/Manual asixtente.pdf")
        
        $("#click10").fadeOut();
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#quedaclaro"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide42(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#quedaclaro1_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro1_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro1_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro1_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#quedaclaro1"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide43(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#quedaclaro2_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro2_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro2_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#quedaclaro2"
    })
    .on('enter', function(){
        timeline.play();
    })
    return processScene(scene);
}

function slide44(){
    var timeline = new TimelineMax({paused: true});
    timeline.add(TweenMax.from("#quedaclaro3_fondo", .5,{delay:.5, css:{ opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro3_img1", .5,{delay:1, css:{opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro3_img2", .5,{delay:1.5, css:{"margin-top": "-10vh",opacity:0}}),0);
    timeline.add(TweenMax.from("#quedaclaro3_img3", .5,{delay:2,css:{scale:3, opacity:0}}),0);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#quedaclaro3"
    })
    .on('enter', function(){
        timeline.play();
    })
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
    $("#btn5").hover(function(){TweenMax.to("#btn5Tag", .5, {css:{opacity:1}});});
    $("#btn5").mouseout(function(){TweenMax.to("#btn5Tag", .5, {css:{opacity:0}});});
    $("#btn6").hover(function(){TweenMax.to("#btn6Tag", .5, {css:{opacity:1}});});
    $("#btn6").mouseout(function(){TweenMax.to("#btn6Tag", .5, {css:{opacity:0}});});
    $("#btn7").hover(function(){TweenMax.to("#btn7Tag", .5, {css:{opacity:1}});});
    $("#btn7").mouseout(function(){TweenMax.to("#btn7Tag", .5, {css:{opacity:0}});});
    $("#btn8").hover(function(){TweenMax.to("#btn8Tag", .5, {css:{opacity:1}});});
    $("#btn8").mouseout(function(){TweenMax.to("#btn8Tag", .5, {css:{opacity:0}});});
    $("#btn9").hover(function(){TweenMax.to("#btn9Tag", .5, {css:{opacity:1}});});
    $("#btn9").mouseout(function(){TweenMax.to("#btn9Tag", .5, {css:{opacity:0}});});
    $("#btn10").hover(function(){TweenMax.to("#btn10Tag", .5, {css:{opacity:1}});});
    $("#btn10").mouseout(function(){TweenMax.to("#btn10Tag", .5, {css:{opacity:0}});});
    $("#btn11").hover(function(){TweenMax.to("#btn11Tag", .5, {css:{opacity:1}});});
    $("#btn11").mouseout(function(){TweenMax.to("#btn11Tag", .5, {css:{opacity:0}});});
   

    $("#btn1").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#intro").offset().top}, 5000);
    });
    $("#btn2").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#beneficios").offset().top}, 5000);
    });
    $("#btn3").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#donluis").offset().top}, 5000);
    });
    $("#btn4").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#primeros").offset().top}, 5000);
    });   
    $("#btn5").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#promociones").offset().top}, 5000);
    }); 
    $("#btn6").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#pago").offset().top}, 5000);
    }); 
    $("#btn7").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#surtido").offset().top}, 5000);
    }); 
    $("#btn8").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#cambio").offset().top}, 5000);
    }); 
    $("#btn9").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#administracion").offset().top}, 5000);
    }); 
    $("#btn10").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#corte").offset().top}, 5000);
    }); 
    $("#btn11").on('click', function(event) {
        $("html,body").animate({ scrollTop : $("#quedaclaro").offset().top}, 5000);
    }); 
}