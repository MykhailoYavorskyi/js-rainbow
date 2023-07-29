const refs = {
  form: document.querySelector(".js-form"),
  input: document.querySelector(".js-input"),
  text: document.querySelector(".js-text"),
  clear: document.querySelector(".js-clear"),
};

refs.input.addEventListener("input", onInput);
refs.form.addEventListener("submit", onSubmit);
refs.clear.addEventListener("click", onClear);

function onInput(e) {
  refs.text.textContent = e.currentTarget.value;
}
function onSubmit(e) {
  e.preventDefault();
  refs.text.classList.add("rainbow");
}
function onClear(e) {
  refs.text.classList.remove("rainbow");
  refs.input.value = "";
  refs.text.textContent = "";
}
