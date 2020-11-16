const totallyunique = document.getElementById('marqueediv')
// MARQUEE CONTAINER

class divLoad {
    divLoad(){
    totallyunique.innerHTML = `<div class="marquee__inner" aria-hidden="true">
    <span class="marquee__text" id="marquee"> </span>
  </div>`
}
}


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

async function tickerLoad(element){
    try{
        let fetched = await fetch(`https://financialmodelingprep.com/api/v3/gainers?apikey=38f0db76372c4155ed8a5fd5e0b70efd`)
        let resulted = await fetched.json();
            for(i=0; i<resulted.length; i++){
                const ticker = new tickerValues(resulted[i].ticker, resulted[i].companyName, resulted[i].price, resulted[i].changesPercentage);

                ticker.changeHtml(element);
            }

    }catch(error){
        console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const div = new divLoad
    div.divLoad();
    const marquee = document.getElementById('marquee');
    tickerLoad(marquee)
});
// INTIALIZATION OF GETPAGE() ON DOM LOAD