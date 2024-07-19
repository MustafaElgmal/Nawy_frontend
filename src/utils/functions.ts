export const calculateDownPayment=(price:number,percentage:number)=>{
    return price * percentage
}

export const calculateMonthlyPayment=(price:number,percentage:number,numberOfYear:number)=>{
    const dwonPayment=calculateDownPayment(price,percentage)
    return (price-dwonPayment)/(numberOfYear*12)
    
}