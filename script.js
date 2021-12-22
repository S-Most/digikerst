
function createSnowflake(){
    // random getal genereren voor de xpositie
    let x = Math.floor(Math.random() * 100)
    console.log(x)
    let delay = Math.floor(Math.random() * 100) / 33;

    // new divje maken
    const Sneeuwvlok = document.createElement("div");
    
    // klasse snowflake toevoegen
    Sneeuwvlok.classList.add("sneeuwvlok");

    // random x-positie
    Sneeuwvlok.style.left = x + "vw";
    Sneeuwvlok.style.animationDelay = delay + "s"

    // divje toevoegen aan body
    document.body.append(Sneeuwvlok);
    
}

const aantal_Sneeuwvlokjes = 30

for(let i=0; i < aantal_Sneeuwvlokjes; i++){
    createSnowflake()
}