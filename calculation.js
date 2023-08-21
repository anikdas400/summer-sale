// prod1
function prod1PriceCalculate(){
    const p1 = getElementValue('prod-1')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('K. Accessories')
    
    

    // apply button
    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }

    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


        if(Totalprice >= 200){
            const discountTotal =  Totalprice * (20 / 100);
            const totalDiscount = parseFloat(discountTotal)
            const tDiscount = totalDiscount.toFixed(2)
            setElementInnerText('discount',tDiscount)
    
            const totalt = Totalprice - tDiscount;
            setElementInnerText('total',totalt)
        }

    

}



// prod2
function prod2PriceCalculate(){
    const p1 = getElementValue('prod-2')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('kitchen A.')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod3
function prod3PriceCalculate(){
    const p1 = getElementValue('prod-3')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Home Cooker')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod4
function prod4PriceCalculate(){
    const p1 = getElementValue('prod-4')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Sports Back Cap')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod5
function prod5PriceCalculate(){
    const p1 = getElementValue('prod-5')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Full Jersey Set')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod6
function prod6PriceCalculate(){
    const p1 = getElementValue('prod-6')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Sports cates')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod7
function prod7PriceCalculate(){
    const p1 = getElementValue('prod-7')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Single Relax Chair')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod8
function prod8PriceCalculate(){
    const p1 = getElementValue('prod-8')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Children play')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}
// prod9
function prod9PriceCalculate(){
    const p1 = getElementValue('prod-9')
    const previousTotal = getElementValue('t-price');
    const Totalprice = previousTotal + p1
    setElementInnerText('t-price',Totalprice)
    addToProductEntry('Flexible Sofa')


    // apply button

    const updateButton = document.getElementById('update-btn')
    if(Totalprice >= 200){
        updateButton.disabled = false;
    }
    else{
        updateButton.disabled = true;
    }


    // purches btn
    const dunButton = document.getElementById('submit')
    if(Totalprice > 0){
        dunButton.disabled = false;
    }
    else{
        dunButton.disabled = true;
    }


    if(Totalprice >= 200){
        const discountTotal =  Totalprice * (20 / 100);
        const totalDiscount = parseFloat(discountTotal)
        const tDiscount = totalDiscount.toFixed(2)
        setElementInnerText('discount',tDiscount)

        const totalt = Totalprice - tDiscount;
        setElementInnerText('total',totalt)
    }

    

}







