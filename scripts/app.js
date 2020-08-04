    $(document).ready(function(){

    $(".view").click((e) => {
        var hash  = e.target.hash;
        displayer(hash);
    });

    let displayer = (hash) => {
        $(".rollo .title label").remove();
        $(".rollo .subtitle label").remove();
        $(".contenido .testo p").remove();

        var title = $("<label></label>").appendTo(".rollo .title");
        var subtitle = $("<label></label>").appendTo(".rollo .subtitle");
        var paragraph = $("<p></p>").appendTo(".contenido .testo");
    
        // gsap.to(".delimiter", {duration: .9, opacity: 0, y:-100} );
        retriever(hash).then((text, err)=>{
           // $(".bg-special").css("background-image", "url('"+text.bgimg+"')");
            $(title).text(text.Titulo);
            $(subtitle).text(text.Subtitulo);
            $(paragraph).text(text.parrafo);
            gsap.to([".contenido .margen"], {duration:3, opacity:1});
            gsap.from([title, subtitle, paragraph], {duration:3 , opacity:0 } , (93));
        });
    }

    let retriever = (x) => {
        return new Promise((resolve, reject) => {
            fetch("./data.json")
            .then(response => response.json())
            .then(data => {
                var chorizo = data.find(element => element.hash == x);
            
                if(!chorizo){
                    chorizo = data.find(element => element.Id == 1);
                }
                
                resolve(chorizo);
            });
        });
    }

    displayer(window.location.hash);
});