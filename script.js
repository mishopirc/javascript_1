const form = document.querySelector("#form1");
const input = document.querySelector('input[name="username"]');

const ul = document.querySelector('.ul');

form.addEventListener('submit', function(event){
  event.preventDefault();

  //vqmnit axal element li-s da vamatebt ul-shi
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);

  input.value = '';
  input.focus();
});