


let imageSelected = false;

// handling animation
const wrapper = document.getElementById("wrapper");
const terrain = document.getElementById("terrain");
const cursor = document.getElementById('cursor');

const maxXOffsetTerrain = (terrain.offsetWidth - window.innerWidth) * 1;
const maxYOffsetTerrain = (terrain.offsetHeight - window.innerHeight) * 1;




window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
       },{
        duration: 1000,
        fill: "forwards",
        easing: "ease"
    });

    

    const normalizedX = mouseX / window.innerWidth;
    const normalizedY = mouseY / window.innerHeight;

    let zeroNormalizedX = normalizedX - 0.5;
    let zeroNormalizedY = normalizedY - 0.5;

    const maxPan = 30; // in percent. also controlls distance to border

    if(!imageSelected) {
    wrapper.animate({
        top: '50%',
        left: '50%',
        transform: `translate(${-50 + zeroNormalizedX * maxPan * -1}%, ${-50 + zeroNormalizedY  * maxPan * -1}%)`
        },{
        duration: 1500,
        fill: "forwards",
        easing: "ease"
    });
    }

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
            const imgOverlay = document.createElement("div");
            imgDiv.classList.add("movingImage");
            imgOverlay.classList.add("imgOverlay");
            

            wrapper.prepend(imgDiv);
            imgDiv.appendChild(img);
            imgDiv.appendChild(imgOverlay);

            

            // add bergname and berghoehe
            imgOverlay.innerHTML = `<p>${res[i].bergname}</p><p>${res[i].berghoehe} m</p>`;

            console.log(res[i]);
            
            img.onload = function() {
                
                imgDiv.style.height = wrapper.offsetHeight/3 + "px";
                imgDiv.style.width = "fit-content";

                const maxX = wrapper.offsetWidth - img.width ;
                const maxY = wrapper.offsetHeight - img.height;

                imgDiv.style.left = maxX * Math.random()  + "px";
                imgDiv.style.top =  maxY * Math.random() + "px";

                addCursorHovering(imgDiv);
                imgDiv.addEventListener('mousedown', () => {
                    // imageSelected = true;
                    wrapper.animate({
                        opacity: 0
                      }, {
                        duration: 700,
                        fill: 'forwards',
                        easing: 'ease-in-out'
                    });
                    localStorage.setItem('skitour', JSON.stringify(res[i]));
                    //const storedSkitour = JSON.parse(localStorage.getItem('skitour'));

                    setTimeout(() => {
                        // Navigate to the other page here
                        window.location.href = 'https://example.com/other-page';
                      }, 1000);
                });
                
            };
        });
    }
});


function addCursorHovering(imgDiv) {
    imgDiv.addEventListener('mouseover', () => {
        cursor.classList.add('hovering');
    });

    imgDiv.addEventListener('mouseout', () => {
        cursor.classList.remove('hovering');
    });
}

function addSelectingListener(imgDiv) {
    
}





