// Base on UU HPP, tarif progresif PPh Orang Pribadi Pasal 17
// PKP 0-60jt : 5%
// PKP 60-250jt : 15%
// PKP 250-500jt : 25%
// PKP 500-5000jt : 30%
// PKP > 5000jt : 35%

const calculatePKP = (yearlyIncome, isMarried, childCount) => {
    let PKP = 0

    if(!isMarried) PKP = yearlyIncome - 54000000
    else
    {
        if(childCount > 3) childCount = 3
    
        PKP = yearlyIncome - (54000000) - 4500000 - (4500000*childCount)
    }
    
    return PKP // taxable income
}

const calculateIncomeTax = (PKP) => {
    if(PKP <= 0) return 0
    else
    {
        let pajakDibayarkan = 0
        const tarif = [0.05, 0.15, 0.25, 0.3, 0.35]
        
        if(PKP <= 60000000)
        {
            pajakDibayarkan += PKP * tarif[0]
        }
        else if(PKP > 60000000 && PKP <= 250000000) 
        {
            pajakDibayarkan += ((PKP-60000000)*tarif[1]) + 3000000
        }
        else if(PKP > 250000000 && PKP <= 500000000)
        {
            pajakDibayarkan += ((PKP-250000000)*tarif[2]) + 31500000 
            // 31500000 = 3mil + 28.5mil
        }
        else if(PKP > 500000000 && PKP <= 5000000000)
        {
            pajakDibayarkan += ((PKP-500000000)*tarif[3]) + 94000000 
            // 94000000 = 3mil + 28.5mil + 62.5mil
        }
        else if(PKP > 5000000000)
        {
            pajakDibayarkan += ((PKP-5000000000)*tarif[4]) + 1444000000 
            // 1444000000 = 3mil + 28.5mil + 62.5mil + 1350mil
        }
        
        return pajakDibayarkan // final income tax
    }
}

// Pak Adi, a father of 3, and a good husband, have a monthly income of Rp100000000. What's his income tax yearly in Indonesia?
let yearlyIncome = 100000000*12
let taxableIncome = calculatePKP(yearlyIncome, true, 3)
console.log(`Pak Adi Yearly Income Tax : Rp${calculateIncomeTax(taxableIncome)}`) // Output : 282400000

// Ranti, a single without any child, an artist, have a total monthly income of Rp450000000. What's his income tax monthly?
yearlyIncome = 450000000 * 12
taxableIncome = calculatePKP(yearlyIncome, false, 0)
console.log(`Ranti Monthly Tax : Rp${calculateIncomeTax(taxableIncome)/12}`) // Output : 130425000