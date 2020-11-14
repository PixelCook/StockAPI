const marquee= document.getElementById('marquee');
// MARQUEE

class tickerValues {
    constructor(ticker, companyName, price, changesPercentage){
        this.ticker = ticker
        this.companyName = companyName
        this.price = price
        this.changesPercentage = changesPercentage
    }
    changeHtml(tag){
        let innerclass = 'green';
        if (this.changesPercentage < 0){
            innerclass = 'red'
        }else if (this.changesPercentage === 0){
            innerclass = 'white'
        }
        tag.innerHTML += ` ${this.ticker} ${this.companyName} $${this.price} <i class="${innerclass}">${this.changesPercentage} </i> --`
    }
}

async function tickerLoad(){
    try{
        let fetched = await fetch(`https://financialmodelingprep.com/api/v3/gainers?apikey=38f0db76372c4155ed8a5fd5e0b70efd`)
        let resulted = await fetched.json();
            for(i=0; i<resulted.length; i++){
                const ticker = new tickerValues(resulted[i].ticker, resulted[i].companyName, resulted[i].price, resulted[i].changesPercentage);

                ticker.changeHtml(marquee);
            }

    }catch(error){
        console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', tickerLoad());
// INTIALIZATION OF GETPAGE() ON DOM LOAD