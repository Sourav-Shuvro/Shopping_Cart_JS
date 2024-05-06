document.getElementById('cover-minus').addEventListener('click',function(){
    const value = calculateQuantity(false,'cover-quantity')
    calculateCoverPrice(value);
    calculateTotal();
})
document.getElementById('cover-plus').addEventListener('click',function(){
    const value = calculateQuantity(true,'cover-quantity');
    calculateCoverPrice(value);
    calculateTotal();
})