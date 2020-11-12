const urlParams = new URLSearchParams(window.location.search);
// const symbol = urlParams.get('symbol')
// FETCH QUERY STRING DEFINITIONS (https://davidwalsh.name/query-string-javascript)

const userSearch = document.getElementById('search');  
const searchResults = document.getElementById('resultq');
const spinner = document.getElementById('spinner');
const searchBtn = document.getElementById('searchbtn')

function defaultSettings(){
    spinner.classList.add('no-disp')
};
function activeSettings(){
    spinner.classList.remove('no-disp');
};
defaultSettings();

async function resultsLoad(event){
    activeSettings();
    event.preventDefault()
    try{
        let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userSearch.value}&limit=10&exchange=NASDAQ`)
        searchResults.innerHTML = " ";
        let result = await response.json();
        for(i=0; i<result.length; i++) {
    // DETAILED QUERY STRING 
            let detailResponse = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${result[i].symbol}`) 
            // FETCHES THE API ASYNC FOR EACH RESULT IN ARRAY
            let detailResult = await detailResponse.json();
            // RETURNS THE API.JSON FOR ALL RESULTS
            console.log(detailResult)
    // DETAILED QUERY STRING
            searchResults.innerHTML += `<li class="resultq__item">
            <a href='./company.html?symbol=${result[i].symbol}'>
            <img src='https://financialmodelingprep.com/image-stock/${result[i].symbol}.png' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'">${result[i].name}(${result[i].symbol})${detailResult.profile.changesPercentage}</a>
            <li>`
        }
    }catch(error) {
        console.log(error)
    }defaultSettings();
}
searchBtn.addEventListener('click', resultsLoad);

