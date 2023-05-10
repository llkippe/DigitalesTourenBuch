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