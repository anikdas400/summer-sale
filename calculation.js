// prod1
function prod1PriceCalculate(){
    const p1 = getElementValue('prod-1')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('K. Accessories')
    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)
    }
    // const total = Totalprice - tDiscount;
    // setElementInnerText('total',total)

   
    

}
// prod2
function prod2PriceCalculate(){
    const p1 = getElementValue('prod-2')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('kitchen A.')
    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)
    }

    // const totalvalue =getElementValue('total')

    // const total = Totalprice - tDiscount;
    // setElementInnerText('total',total)

    

}
