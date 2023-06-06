const storedSkitour = JSON.parse(localStorage.getItem('skitour'));

document.getElementById('bergname').innerHTML = storedSkitour.bergname;
document.getElementById('berghoehe').innerHTML = storedSkitour.berghoehe;
const date = new Date(storedSkitour.datum);
const formattedDate = date.toLocaleDateString('de', {year: 'numeric', month: '2-digit', day: '2-digit'});
document.getElementById('datum').innerHTML = formattedDate;




const terrain = document.getElementById("terrain");
const maxXOffsetTerrain = (terrain.offsetWidth - window.innerWidth) * 1;
const maxYOffsetTerrain = (terrain.offsetHeight - window.innerHeight) * 1;

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const normalizedX = mouseX / window.innerWidth;
    const normalizedY = mouseY / window.innerHeight;

   terrain.animate({
    transform: `translate(${maxXOffsetTerrain * normalizedX * -1}px, ${maxYOffsetTerrain * normalizedY * -1}px)`
   },{
    duration: 1500,
    fill: "forwards",
    easing: "ease"
   });
}


let imageIndex = 0;
const arrowDown = document.getElementById('arrowDown');
const arrowUp = document.getElementById('arrowUp');
const imgGallaryChildren = document.getElementById('imgGallary').children;

arrowDown.addEventListener("mousedown", e => {
    if(imageIndex < imgGallaryChildren.length-1) {
        imageIndex++; 
        imgGallaryChildren[imageIndex].style.transform = `translateY(0%)`;
        updateGallaryScroller();
    }
    
});
arrowUp.addEventListener("mousedown", e => {
    if(imageIndex > 0) {
        imgGallaryChildren[imageIndex].style.transform = `translateY(-100%)`;
        imageIndex--;
        updateGallaryScroller();
    }
});

const topNumber = document.getElementById('gallaryScroller').children[0];
const bottomNumber = document.getElementById('gallaryScroller').children[2];
const topLine = document.getElementById('topLine');
bottomNumber.innerHTML =  "0" + imgGallaryChildren.length;

function updateGallaryScroller() {
    topNumber.innerHTML = "0"+ (imageIndex+1);
    topLine.style.height = `${ (imageIndex) / (imgGallaryChildren.length-1) * 100}%`;
}
