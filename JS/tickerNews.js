const newsSpan = document.getElementById('news');
// NEWS

class tickerNews {
    constructor(title, site, text, url){
    this.title = title
    this.site = site
    this.text = text
    this.url = url
    }
    changeHtml(tag) {
        tag.innerHTML += `
        <a target="_blank" href='${this.url}'> 
        <h1>${this.title}</h1> 
        <p> Article provided by ${this.site}</p>
        <p>${this.text}</p>
        </a>`
    }
}


async function newsLoad(){
activeSettings();
try{
let fetched = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=38f0db76372c4155ed8a5fd5e0b70efd`)
let resulted = await fetched.json();
for(i=0; i<resulted.length; i++){
    const news = new tickerNews(resulted[i].title, resulted[i].site, resulted[i].text, resulted[i].url);
    news.changeHtml(newsSpan)

}
}catch(error){
console.log(error)
}defaultSettings();
}

document.addEventListener('DOMContentLoaded', newsLoad());
// INTIALIZATION OF GETPAGE() ON DOM LOAD