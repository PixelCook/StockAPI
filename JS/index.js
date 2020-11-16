const urlParams = new URLSearchParams(window.location.search);
// const symbol = urlParams.get('symbol')
// FETCH QUERY STRING DEFINITIONS (https://davidwalsh.name/query-string-javascript)


    const spinner = document.getElementById('spinner');
    const change = document.getElementById('change');
    const formdiv = document.getElementById('formdiv');
    const responsediv = document.getElementById('responsediv');

class formLoad {
    formLoad(){
    formdiv.innerHTML = `<input
    id="search"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button id="searchbtn" class="btn example_e" type="submit">
    Search
  </button>`
  responsediv.innerHTML = `<ul class="resultq" id="resultq"></ul>
  </div>
  <div class="overlay"></div>
  <div class="spanner">
    <div class="loader"></div>
    <p>Mixing Investments</p>`
    
    const searchResults = document.getElementById('resultq');
    const userSearch = document.getElementById('search');
    const searchBtn = document.getElementById('searchbtn');

    searchBtn.addEventListener('click', resultsLoad);
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
        // DETAILED QUERY STRING
    
            searchResults.innerHTML += `<a href='./company.html?symbol=${result[i].symbol}'><li class="resultq__item"><img src='https://financialmodelingprep.com/image-stock/${result[i].symbol}.png' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'">${result[i].name}(${result[i].symbol})<i id='change'>${detailResult.profile.changesPercentage}</i>
            <li></a>`

        }
    }catch(error) {
        console.log(error)
    }
    defaultSettings();
    const context = document.querySelector(".resultq");
    const instance = new Mark(context);
    instance.mark(userSearch.value);
}
}
}



function defaultSettings(){
    $("div.spanner").removeClass("show");
    $("div.overlay").removeClass("show");
  };
function activeSettings() {
      $("div.spanner").addClass("show");
      $("div.overlay").addClass("show");
  };
document.addEventListener('DOMContentLoaded', () => {
    const form = new formLoad()
    form.formLoad();
});
// INTIALIZATION OF GETPAGE() ON DOM LOAD



