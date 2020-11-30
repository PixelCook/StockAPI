const totallyunique = document.getElementById("marqueediv");
// MARQUEE CONTAINER

class divLoad {
  divLoad() {
    totallyunique.innerHTML = `<div class="marquee__inner" aria-hidden="true">
    <span class="marquee__text" id="marquee"> </span>
  </div>`;
  }
}

class tickerValues {
  constructor(ticker, companyName, price, changesPercentage) {
    this.ticker = ticker;
    this.companyName = companyName;
    this.price = price;
    this.changesPercentage = changesPercentage;
  }
  changeHtml(tag) {
    let innerclass = "green";
    if (this.changesPercentage < 0) {
      innerclass = "red";
    } else if (this.changesPercentage === 0) {
      innerclass = "white";
    }
    tag.innerHTML += ` ${this.ticker} ${this.companyName} $${this.price} <i class="${innerclass}">${this.changesPercentage} </i> --`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const div = new divLoad();
  div.divLoad();
});
// INTIALIZATION OF GETPAGE() ON DOM LOAD
