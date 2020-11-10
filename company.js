const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol')
// FETCH QUERY STRING DEFINITIONS (https://davidwalsh.name/query-string-javascript)

const profilePage = document.getElementById('profile-page'); 
const logo = document.getElementById('logo'); 
const name = document.getElementById('name'); 
const description = document.getElementById('description');
const chart = document.getElementById('chart'); 
const link = document.getElementById('link'); 
// PAGE ELEMENT DEFINITIONS 

const ctx = document.getElementById('myChart').getContext('2d');
// CHARTY CHART

document.addEventListener('DOMContentLoaded', getPage());
// INTIALIZATION OF GETPAGE() ON DOM LOAD
document.addEventListener('DOMContentLoaded', getChart());
// INTIALIZATION OF getChart() ON DOM LOAD
async function getPage(){
    try{
        let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`) 
        // FETCHES THE API ASYNC
        let result = await response.json();
        // RETURNS THE API.JSON 

        logo.innerHTML = `<a href= '${result.profile.website}'><img src= '${result.profile.image}' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'"> </img>${result.profile.website}</a>`
        // LOGO IMAGE AND WEBSITE LINK
        name.innerHTML = `<h1>${result.profile.companyName}<h1>`
        // COMPANY NAME
        description.innerHTML = `<p>${result.profile.description}</p>`
        // COMPANY DESCRIPTION

        // RETOOLING OF THE INNERHTML
}catch(error) {
    console.log(error)
    // CONSOLE.LOGS THE ERROR FROM THE FETCH REQUEST, ERROR GIVEN BY API SERVER
}
}

async function getChart(){
    try{
        let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`)
        let result = await response.json()
        console.log(result)
        let xlabels = result.historical.map(element => {
            return (element.date)
        })
        let chartyData = result.historical.map(element => {
            return (element.close)
        })

const chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Stock Prices VS. Time',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: chartyData,
        }]
    },

    // Configuration options go here
    options: {}
});return chart2


        


    }catch(error){
    console.log(error)
    }
}