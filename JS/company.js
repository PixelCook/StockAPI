const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol')
// FETCH QUERY STRING DEFINITIONS (https://davidwalsh.name/query-string-javascript)

const profilePage = document.getElementById('profile-page'); 
const logo = document.getElementById('logo'); 
const name = document.getElementById('name'); 
const description = document.getElementById('description');
const chart = document.getElementById('chart'); 
const link = document.getElementById('link'); 
const price = document.getElementById('stock-price');
const change = document.getElementById('change');
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
        logo.innerHTML = `<a href= '${result.profile.website}'><img src= '${result.profile.image}' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'"> </img><br>${result.profile.website}</a>`
        // LOGO IMAGE AND WEBSITE LINK
        name.innerHTML = `<h1>${result.profile.companyName}<h1>`
        // COMPANY NAME
        description.innerHTML = `<p>${result.profile.description}</p>`
        // COMPANY DESCRIPTION
        price.innerHTML = `<h2>$${result.profile.price}<h2>`
        // RETOOLING OF THE INNERHTML
        let changes = result.profile.changesPercentage
        let changeDiff = result.profile.changes
        if (changeDiff < 0) {
            change.classList.add('red')
        }else if (changeDiff === 0){
            change.classList.add('white')
        }else change.classList.add('green')
        change.innerHTML = `<h3>${changes}<h3>`
        
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
        let xlabels = result.historical.slice(0).reverse().map(element => {
            return (element.date)
        })
        let chartyData = result.historical.slice(0).reverse().map(element => {
            return (element.close)
        })

const chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Stock Prices VS. Time',
            backgroundColor: '#558b6e',
            borderColor: '#88a09e',
            data: chartyData,
            hoverBackgroundColor: '#fff95b',
            
        }]
    },
    // Configuration options go here
    options: {
        steppedLine: false,

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                ticks: {
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'MMM YYYY'
                        }
                    },
                    autoSkip: true,
                    maxTicksLimit: 10,
                }
            }]
        }   
    }
});return chart2
    }catch(error){
    console.log(error)
    }
}