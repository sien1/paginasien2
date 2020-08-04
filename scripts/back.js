import fragment from '../fragment.glsl';
import {TweenMax} from 'gsap'; 


$(document).ready(function() {
    const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
        autoResize:true
    });

    document.getElementById("bgspecial").appendChild(app.view);
    
    $.getJSON("data.json", function(data){
        //
        let loader  = PIXI.loader;

        data.forEach((element,i) => {
            loader.add(`image${i+1}`, `./imgs/${element.img}`)
        });

        loader.on('complete', function(loader, resources){
            let  Filter = new PIXI.Filter(null, fragment);

            const background =  new PIXI.Sprite(resources.image2.texture);
            background.x = app.renderer.width / 2;
            background.y = app.renderer.height / 2;

            background.anchor.x = 0.5;
            background.anchor.y = 0.5;
            let winAspect = $(window).width()/$(window).height();
            let imageAspect = background.width/background.height;

            if(winAspect > imageAspect) {
                Filter.uniforms.uvAspect = {x:1.,y:imageAspect/winAspect}
            }
            else{
                Filter.uniforms.uvAspect = {x:winAspect/imageAspect,y:1.}
            }

            // console.log(winAspect, imageAspect);

            Filter.uniforms.uTextureOne = resources.image4.texture;
            Filter.uniforms.uTextureTwo = resources.image1.texture;
            Filter.uniforms.uTime = 0.;

            background.width = window.innerWidth;

            background.filters = [Filter]; 

            app.stage.addChild(background);


            $('.view').click((e)=>{
                let element = data.find((x) => e.target.hash===x.hash)
                
            });




            app.ticker.add(() => {
               Filter.uniforms.uTime += 0.02;
            });
        }); 

        loader.load();
    });

    // let loader = PIXI.loader;
    // loader.add('img1', img1);
    // loader.add('img2', img2);
    // loader.add('img3', img3);
    // loader.add('img4', img4);
    
    // loader.load((loader, resources) => {
    //     //let Filter = new PIXI.Filter(null, fragment);
    //     const background = new PIXI.Filter(null, fragment);

    //     background.x = app.renderer.width / 2;
    //     background.y = app.renderer.height / 2;


    //     let Filter = new PIXI.Filter(null, fragment);

    //     background.filters = [Filter];
    // });
});

// $(document).ready(function(){
//     // The application will create a renderer using WebGL, if possible,
//     // with a fallback to a canvas render. It will also setup the ticker
//     // and the root stage PIXI.Container.
//     const app = new PIXI.Application();
    
//     // The application will create a canvas element for you that you
//     // can then insert into the DOM.
//     document.body.appendChild(app.view);
    
//     // load the texture we need
//     PIXI.loader.add('bunny', 'bunny.png').load((loader, resources) => {
//         // This creates a texture from a 'bunny.png' image.
//         const bunny = new PIXI.Sprite(resources.bunny.texture);
    
//         // Setup the position of the bunny
//         bunny.x = app.renderer.width / 2;
//         bunny.y = app.renderer.height / 2;
    
//         // Rotate around the center
//         bunny.anchor.x = 0.5;
//         bunny.anchor.y = 0.5;
    
//         // Add the bunny to the scene we are building.
//         app.stage.addChild(bunny);
    
//         // Listen for frame updates
//         app.ticker.add(() => {
//             // each frame we spin the bunny around a bit
//             bunny.rotation += 0.01;
//         });
//     });

//     /*FUNCION PARA CAMBIAR EL FONDO*/ 
//     //Poner todas las imagenes en el require
//     // let reqImgs = (x) => {
//     //     return new Promise((resolve, reject) => {
//     //         let imgs = {};
//     //         let rootFolder = __dirname+'\\imgs\\';
//     //         data.map((x, index)=>{
//     //             console.log(rootFolder+x.img);
//     //             imgs[`img${x.Id}`] = require(rootFolder+x.img);
//     //         });

//     //         resolve(imgs);
//     //     });
//     // }

//     // reqImgs().then((data, err)=>{
//     //     console.log(data);
//     // });

// });