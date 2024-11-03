const a = +prompt('Введіть а');
const b = +prompt('Введіть b');
// Вставка результату в HTML документ
document.querySelector('body').insertAdjacentHTML('beforeend', `<p>a+b: ${a+b}; a-b: ${a-b}; a*b: ${a*b}; a/b: ${a/b}</p>`);