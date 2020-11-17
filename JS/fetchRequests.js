class fetchClass {
  fetchReqIndex() {
    const searchResults = document.getElementById("resultq");
    const userSearch = document.getElementById("search");
    const searchBtn = document.getElementById("searchbtn");
    searchBtn.addEventListener("click", resultsLoad);
    async function resultsLoad(event) {
      activeSettings();
      event.preventDefault();
      try {
        let response = await fetch(
          `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userSearch.value}&limit=10&exchange=NASDAQ`
        );
        searchResults.innerHTML = " ";
        let result = await response.json();

        for (i = 0; i < result.length; i++) {
          // DETAILED QUERY STRING
          let detailResponse = await fetch(
            `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${result[i].symbol}`
          );
          // FETCHES THE API ASYNC FOR EACH RESULT IN ARRAY
          let detailResult = await detailResponse.json();
          // RETURNS THE API.JSON FOR ALL RESULTS
          // DETAILED QUERY STRING

          searchResults.innerHTML += `<a href='./company.html?symbol=${result[i].symbol}'><li class="resultq__item"><img src='https://financialmodelingprep.com/image-stock/${result[i].symbol}.png' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'">${result[i].name}(${result[i].symbol})<i id='change'>${detailResult.profile.changesPercentage}</i>
        <li></a>`;
        }
      } catch (error) {
        console.log(error);
      }
      defaultSettings();
      const context = document.querySelector(".resultq");
      const instance = new Mark(context);
      instance.mark(userSearch.value);
    }
  }

  async fetchReqTicker(element) {
    try {
      let fetched = await fetch(
        `https://financialmodelingprep.com/api/v3/gainers?apikey=38f0db76372c4155ed8a5fd5e0b70efd`
      );
      let resulted = await fetched.json();
      for (i = 0; i < resulted.length; i++) {
        const ticker = new tickerValues(
          resulted[i].ticker,
          resulted[i].companyName,
          resulted[i].price,
          resulted[i].changesPercentage
        );
        ticker.changeHtml(element);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fetchInst = new fetchClass();
  fetchInst.fetchReqIndex();
  const marquee = document.getElementById("marquee");
  fetchInst.fetchReqTicker(marquee);
});
