// const profilePage = document.getElementById('profile-page'); 
// const logo = document.getElementById('logo'); 
// const name = document.getElementById('name'); 
// const description = document.getElementById('description');
// const chart = document.getElementById('chart'); 
// const link = document.getElementById('link'); 
// const price = document.getElementById('stock-price');
// const change = document.getElementById('change');
// // PAGE ELEMENT DEFINITIONS 
// document.addEventListener('DOMContentLoaded', getPage());
// // INTIALIZATION OF GETPAGE() ON DOM LOAD
// async function getPage(){
//     try{
//         let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`) 
//         // FETCHES THE API ASYNC
//         let result = await response.json();
//         // RETURNS THE API.JSON 
//         console.log(result)
//         logo.innerHTML = `<a href= '${result.profile.website}'><img src= '${result.profile.image}' onerror="this.onerror=null;this.src='https://financialmodelingprep.com/image-stock/PEER.jpg'"> </img><br>${result.profile.website}</a>`
//         // LOGO IMAGE AND WEBSITE LINK
//         name.innerHTML = `<h1>${result.profile.companyName}<h1>`
//         // COMPANY NAME
//         description.innerHTML = `<p>${result.profile.description}</p>`
//         // COMPANY DESCRIPTION
//         price.innerHTML = `<h2>$${result.profile.price}<h2>`
//         // RETOOLING OF THE INNERHTML
//         let changes = result.profile.changesPercentage
//         let changeDiff = result.profile.changes
//         if (changeDiff < 0) {
//             change.classList.add('red')
//         }else if (changeDiff === 0){
//             change.classList.add('white')
//         }else change.classList.add('green')
//         change.innerHTML = `<h2>${changes}<h2>`
        
// }catch(error) {
//     console.log(error)
//     // CONSOLE.LOGS THE ERROR FROM THE FETCH REQUEST, ERROR GIVEN BY API SERVER
// }
// }