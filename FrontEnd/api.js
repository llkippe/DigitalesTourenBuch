//const url = 'http://raspberrypi:8090/api/touren';
const url = 'http://localhost:8090/api/touren';


async function getData(url = "") {
  const response = await fetch(url);
  return response.json();;
}
async function putData(url = "", data) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const response = await fetch(url, requestOptions);
  return response.json();
}
async function postData(url = "", data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const response = await fetch(url, requestOptions);
  return response.json();
}

async function getImage(imgname) {
    const response = await fetch(`http://localhost:8090/api/images/${imgname}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    const imgSrc = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backgroundRepeat = 'no-repeat';
    img.style.backgroundImage = `url(${imgSrc}`;
    
    return img;
  }
