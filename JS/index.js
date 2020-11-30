const urlParams = new URLSearchParams(window.location.search);
// const symbol = urlParams.get('symbol')
// FETCH QUERY STRING DEFINITIONS (https://davidwalsh.name/query-string-javascript)

const spinner = document.getElementById("spinner");
const change = document.getElementById("change");
const formdiv = document.getElementById("formdiv");
const responsediv = document.getElementById("responsediv");

class formLoad {
  formLoad() {
    formdiv.innerHTML = `<input
    id="search"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button id="searchbtn" class="btn example_e" type="submit">
    Search
  </button>`;
    responsediv.innerHTML = `<ul class="resultq" id="resultq"></ul>
  </div>
  <div class="overlay"></div>
  <div class="spanner">
    <div class="loader"></div>
    <p>Mixing Investments</p>`;
  }
}

function defaultSettings() {
  $("div.spanner").removeClass("show");
  $("div.overlay").removeClass("show");
}
function activeSettings() {
  $("div.spanner").addClass("show");
  $("div.overlay").addClass("show");
}
document.addEventListener("DOMContentLoaded", () => {
  const form = new formLoad();
  form.formLoad();
});
// INTIALIZATION OF GETPAGE() ON DOM LOAD
