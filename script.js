function run() {
    let kiloprice = parseFloat(document.getElementById('kiloprice').value) || 0;
    let kiloquantity = parseFloat(document.getElementById('kiloquantity').value) || 0;
    let length = parseFloat(document.getElementById('length').value) || 0;
    let width = parseFloat(document.getElementById('width').value) || 0;

    let area = length * width;
    let quantity = area * kiloquantity;
    let price = quantity * kiloprice;

    document.getElementById('area').innerText = `Für die Fläche von ${area.toFixed(2)} qm`;
    document.getElementById('quantity').innerText = `werden ${quantity.toFixed(2)} Kilo Farbe benötigt.`;
    document.getElementById('price').innerText = `Der Preis für diese ${quantity.toFixed(2)} kg Farbe beträgt ${price.toFixed(2)} EUR.`;
}