// Запитуємо у користувача параметри
let a = parseFloat(prompt("Введіть напіввелику вісь a", ""));
let b = parseFloat(prompt("Введіть напівмалу вісь b", ""));

// Перевірка введених значень
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("Введіть коректні додатні числа для осей.");
} else {
    // Обчислюємо площу еліпса
    let area = Math.PI * a * b;

    // Обчислюємо периметр еліпса (наближена формула Раману)
    let h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
    let perimeter = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

    // Обчислюємо ексцентриситет еліпса
    let eccentricity = Math.sqrt(1 - (Math.pow(b, 2) / Math.pow(a, 2)));

    // Виведення результатів
    alert("Площа еліпса = " + area.toFixed(2));
    alert("Периметр еліпса = " + perimeter.toFixed(2));
    alert("Ексцентриситет еліпса = " + eccentricity.toFixed(2));
}
