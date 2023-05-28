const url = "https://restcountries.com/v3.1/all";
const url1 = "https://restcountries.com/v3.1/region/";
const langUrl = "https://restcountries.com/v3.1/lang/"
const regions = ["europe", "asia", "america", "africa"];
const rootEl = "body";

async function peopleMore37M(){
  const root = document.querySelector(rootEl);
  try {
    const request = await fetch(url);
    const res = await request.json();
    const popMore37M = res.filter(el => el.population > 37000000);
    console.log("pM37People", popMore37M);
    popMore37M.forEach(el => {
    const div = document.createElement('div');
    div.innerHTML = `
                    <div class="tiles__desc--1 desc">
                    <div class="tiles__nav">
                        <div class="tiles__nav--text">
                        <p>${el.population} -- ${el.name.common}</>
                        </div>
                    </div>
                    </div>`;
    root.append(div);
    });
  } catch (err) {console.log(err);}
}

/////////////////////////////////////////////////////////////////////////////


async function averageRegion(url, region){
    try {
        const request = await fetch(url + region);
        const res = await request.json();
        const sum = res.reduce((prev, current) => prev + current.population, 0);
        const average = sum / res.length;
        console.log(` average region ${region} == ${average}`);
      } catch (err) {
        console.log(err);
      }
}


/////////////////////////////////////////////////////////////////////////////


async function maxRegion(url, region){
    try {
        const request = await fetch(url + region);
        const res = await request.json();
        const sortPopulation = res.sort((a, b) =>  b.population - a.population);
        console.log(`Najwiecej ludnosci na kontynencie ${region} ma ` , sortPopulation[0].name.common, `liczba ludnosci: ${sortPopulation[0].population}`);
      } catch (err) {console.log(err);}
}


///////////////////////////////////////////////////////////////////////////

async function languageRegion(langUrl, region){
    try {
        const request = await fetch(langUrl + region);
        const res = await request.json();
        
        console.log("languages", res);
      } catch (err) {console.log(err);}
}

function language(url, region){
    let arrayLanguage = [];
  
        fetch("https://restcountries.com/v3.1/all?fields=languages")
        .then(request => request.json())
        .then(res => res.map(el => el.languages))
        .then(lang => lang.map(el => arrayLanguage.push(el)));
        
    console.log(arrayLanguage);
    arrayLanguage.forEach(el => console.log(el));
      
}

/////WYWOŁANIA//////////////////////////////////////////////////////////////

peopleMore37M();
for (let i=0; i<regions.length; i++) maxRegion(url1, regions[i]);
for (let i=0; i<regions.length; i++) averageRegion(url1, regions[i]);
//languageRegion(url1, regions[1]);
language(url1, regions[0])












