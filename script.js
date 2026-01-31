function run() {
    let kiloprice = parseFloat(document.getElementById('kiloprice').value) || 0;
    let kiloquantity = parseFloat(document.getElementById('kiloquantity').value) || 0;
    let length = parseFloat(document.getElementById('length').value) || 0;
    let width = parseFloat(document.getElementById('width').value) || 0;

    let area = length * width;
    let quantity = area * kiloquantity;
    let price = quantity * kiloprice;

    document.getElementById('area').innerText = `FUER DIE FLAECHE VON ${area.toFixed(2)} QM`;
    document.getElementById('quantity').innerText = `WERDEN ${quantity.toFixed(2)} KILO FARBE BENOETIGT.`;
    document.getElementById('price').innerText = `DER PREIS FUER DIESE ${quantity.toFixed(2)} KG FARBE BETRAEGT ${price.toFixed(2)} EUR.`;
}