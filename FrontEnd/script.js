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



getData(`${url}/skitouren/`).then(res => {
  res.forEach(skitour => {
    console.log(skitour)

    let section = document.createElement('section');
    section.className = 'skitour';
    section.id = skitour.id;

    let bergname = document.createElement('h2');
    let berghoehe = document.createElement('h2');
    let datum = document.createElement('h2');
    let personen = document.createElement('h2');
    let beschreibung = document.createElement('h2');
    
    bergname.className = 'bergname';
    bergname.innerHTML = skitour.bergname;

    berghoehe.className = 'berghoehe';
    berghoehe.innerHTML = skitour.berghoehe;

    datum.className = 'datum';
    let datumSplit = skitour.datum.split('T')[0];
    let year = datumSplit.split('-')[0];
    let month = datumSplit.split('-')[1];
    let day = datumSplit.split('-')[2];
    datum.innerHTML = `${day}.${month}.${year}`;

    personen.className = 'personen';
    personen.innerHTML = skitour.personen;

    beschreibung.className = 'beschreibung';
    beschreibung.innerHTML = skitour.beschreibung;

    section.appendChild(bergname);
    section.appendChild(berghoehe);
    section.appendChild(datum);
    section.appendChild(personen);
    section.appendChild(beschreibung);
    document.body.insertBefore(section, document.getElementById('startScreen').nextSibling);
  });
});


let addTourForm = document.getElementById('addTour');
addTourForm.addEventListener("submit", event => {
  const myFormData = new FormData(event.target);{
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  
  putData(`${url}/skitouren/`, formDataObj);
}})

