

const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const answer = document.getElementById('answer');
const clear = document.getElementById('clear');
const minus = document.getElementById('minus');

function numberClick() {
  answer.innerHTML += this.innerHTML;
}
//number declarations

zero.addEventListener("click",numberClick )
one.addEventListener("click", numberClick);
two.addEventListener("click", numberClick);
three.addEventListener("click", numberClick);
four.addEventListener("click", numberClick);
five.addEventListener("click", numberClick);
six.addEventListener("click", numberClick);
seven.addEventListener("click", numberClick);
eight.addEventListener("click", numberClick);
nine.addEventListener("click", numberClick);


//functionality of operations
plus.addEventListener("click", numberClick);
minus.addEventListener("click", numberClick);
divide.addEventListener("click", numberClick);
decimal.addEventListener("click", numberClick);
//mulitplication function
mult.addEventListener("click", function() {
  answer.innerHTML += "*";
});

clear.addEventListener("click", function() {
  answer.innerHTML = '';
});

equal.addEventListener("click", function() {
  let answerContent = answer.innerHTML;
  answer.innerHTML = eval(answerContent);
});
