let elForm = document.querySelector(" .js-form");

let elFormInput = document.querySelector(" .js-form-input");

let elSelect = document.querySelector(" .js-select");

let elText = document.querySelector(" .text");


elForm.addEventListener("submit",function (hodisa) {

  hodisa.preventDefault();

  console.log("Ketdi");

  let money = elFormInput.value;

  let select = elSelect.value;

  let natija = money/select;

  elText.textContent=natija;
  
})










