const labels = document.querySelectorAll('label');
const textareas = document.querySelectorAll('textarea');
const input = document.querySelectorAll('input');

textareas.forEach((item, index) => {
  item.addEventListener('keyup', () => {
    let characters = item.value;
    let amount = characters.length;
    if (index === 0) {
      labels[index].textContent = 'Question ' + amount;
    } else {
      labels[index].textContent = 'Answer ' + amount;
    }
  });
});

//for input tags
input[0].addEventListener('keyup', () => {
  let characters = input[0].value;
  let amount = characters.length;
  labels[2].textContent = 'Hashtag ' + amount;
});
