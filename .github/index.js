const userSearch = document.getElementById('search');  
const searchResults = document.getElementById('resultq');
const spinner = document.getElementById('spinner');
const searchBtn = document.getElementById('searchbtn')

function defaultSettings(){
    spinner.classList.add('no-disp');
};
function activeSettings(){
    spinner.classList.remove('no-disp')
};

async function resultsLoad(event){
    setInterval(activeSettings(), 1000);
    event.preventDefault()
    let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userSearch.value}&limit=10&exchange=NASDAQ`)
    if (response.ok){
        searchResults.innerHTML = " ";
        let result = await response.json();
        for(i=0; i<result.length; i++) {
            searchResults.innerHTML += `<li>
            <a href='#'><img src='https://financialmodelingprep.com/image-stock/${result[i].symbol}.png' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'">${result[i].name}(${result[i].symbol})</a>
            <li>`
        }
    }else {
        console.log(`error`)
    }
    defaultSettings();
}
searchBtn.addEventListener('click', resultsLoad);

