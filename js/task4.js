const userValue = prompt('Enter your value to start the render');

// Генерація динамічних елементів HTML та вставка їх у документ
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>You generated dynamic site</h1> <p>Your value ${userValue}</p>`);