

// const ctx = document.getElementById('myChart').getContext('2d');
// // CHARTY CHART

// async function getChart(){
//     try{
//         let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`)
//         let result = await response.json()
//         console.log(result)
//         let xlabels = result.historical.slice(0).reverse().map(element => {
//             return (element.date)
//         })
//         let chartyData = result.historical.slice(0).reverse().map(element => {
//             return (element.close)
//         })

// const chart2 = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',
//     // The data for our dataset
//     data: {
//         labels: xlabels,
//         datasets: [{
//             label: 'Stock Prices VS. Time',
//             backgroundColor: '#558b6e',
//             borderColor: '#88a09e',
//             data: chartyData,
//             hoverBackgroundColor: '#fff95b',
            
//         }]
//     },
//     // Configuration options go here
//     options: {
//         steppedLine: false,

//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                 }
//             }],
//             xAxes: [{
//                 ticks: {
//                     type: 'time',
//                     time: {
//                         displayFormats: {
//                             quarter: 'MMM YYYY'
//                         }
//                     },
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                 }
//             }]
//         }   
//     }
// });return chart2
//     }catch(error){
//     console.log(error)
//     }
// }