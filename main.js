function calculateQuantity(isIncrease, quantityName){
    const quantityId = document.getElementById(quantityName);
    const quantityIdString = quantityId.value;
    const quantityInitial = parseInt(quantityIdString);

    if(isIncrease == true){
        const quantity = quantityInitial + 1;
        quantityId.value = quantity;
        return quantity;
    }
    else{
        const quantity = quantityInitial - 1;
        if(quantity < 0){
            quantity = 0;
            quantityId.value = quantity;
            return quantity;
        }
        quantityId.value = quantity;
        return quantity;
    }

}

function calculatePhonePrice(quantity){
    const priceId = document.getElementById('phn-price');
    const price = quantity * 1219;
    priceId.innerText = price;
    return price;
}


function calculateCoverPrice(quantity){
    const priceId = document.getElementById('cover-price');
    const price = quantity * 59;
    priceId.innerText = price;
}

function calculateTotal(){
    const phnPriceId = document.getElementById('phn-price');
    const phnPriceIdString = phnPriceId.innerText;
    const phnPrice = parseInt(phnPriceIdString);

    const coverPriceId = document.getElementById('cover-price');
    const coverPriceIdString = coverPriceId.innerText;
    const coverPrice = parseInt(coverPriceIdString);

    const subTotalPrice = phnPrice + coverPrice;
    const subTotalId = document.getElementById('sub-total');
    subTotalId.innerText = subTotalPrice;

    const totalTax = subTotalPrice * 0.1;
    const taxId = document.getElementById('tax');
    taxId.innerText = totalTax;

    const totalPrice = subTotalPrice + totalTax;
    const totalId = document.getElementById('total');
    totalId.innerText = totalPrice;
}
