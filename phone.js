document.getElementById('phn-plus').addEventListener('click',function(){
    const value = calculateQuantity(true,'phn-quantity');
    const price = calculatePhonePrice(value);
    calculateTotal();
})

document.getElementById('phn-minus').addEventListener('click',function(){
    const value = calculateQuantity(false,'phn-quantity');
    calculatePhonePrice(value);
    calculateTotal();
})
