




// handling animation
const wrapper = document.getElementById("wrapper");
const terrain = document.getElementById("terrain");

const maxXOffsetTerrain = (terrain.offsetWidth - window.innerWidth) * 1;
const maxYOffsetTerrain = (terrain.offsetHeight - window.innerHeight) * 1;




window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const normalizedX = mouseX / window.innerWidth;
    const normalizedY = mouseY / window.innerHeight;

    const zeroNormalizedX = normalizedX - 0.5;
    const zeroNormalizedY = normalizedY - 0.5;

    const maxPan = 40; // in percent. also controlls distance to border


   wrapper.animate({
    transform: `translate(${-50 + zeroNormalizedX * maxPan * -1}%, ${-50 + zeroNormalizedY  * maxPan * -1}%)`
   },{
    duration: 1500,
    fill: "forwards",
    easing: "ease"
   });

   terrain.animate({
    transform: `translate(${maxXOffsetTerrain * normalizedX * -1}px, ${maxYOffsetTerrain * normalizedY * -1}px)`
   },{
    duration: 1500,
    fill: "forwards",
    easing: "ease"
   });
   

}



// getting images

// Set up an array to keep track of the positions of the placed images
const imagePositions = [];


getData(`${url}/skitouren/`).then(res => {

    for(let i = 0; i < res.length; i++){
        getImage(res[i].imgPath).then(img => {
            
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("movingImage");
            imgDiv.style.position = "absolute";
            imgDiv.appendChild(img);
            
            img.onload = function() {
                
                imgDiv.style.height = wrapper.offsetHeight/3 + "px";
                imgDiv.style.width = "fit-content";

                const maxX = wrapper.offsetWidth - img.width ;
                const maxY = wrapper.offsetHeight - img.height;

                imgDiv.style.left = maxX * Math.random()  + "px";
                imgDiv.style.top =  maxY * Math.random() + "px";
                
            };

           wrapper.appendChild(imgDiv); 
        });
    }
});     

