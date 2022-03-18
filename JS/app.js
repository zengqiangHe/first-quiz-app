const buttons = document.querySelectorAll('.section-btn');
const sections = document.querySelectorAll('.app-container');

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    sections.forEach(item => {
      item.style.display = 'none';
    });
    sections[index].style.display = 'block';
  });
});
