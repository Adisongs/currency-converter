const currencySelector = document.querySelector('.currency-selector')


function convertButton() {

    const inputcurrencyvalues = document.querySelector('.currencyvalue').value
    const valueToConvert = document.querySelector('.value-to-convert') // valor real
    const convertedvalue = document.querySelector('.converted-value')// valor em dolar

    const eurotoday = 6.36
    const dolarToDay = 5.43
    const librastoday = 7.29
    const bitcointoday = 487.07670

    if (currencySelector.value == 'dolar') {
        convertedvalue.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'UDS' }).format(inputcurrencyvalues / dolarToDay)

    }

    if (currencySelector.value == 'euro') {
        convertedvalue.innerHTML = new Intl.NumberFormat
            ('de-DE', { style: 'currency', currency: 'EUR' }).format(inputcurrencyvalues / eurotoday)
    }

    if (currencySelector.value == 'libra') {
        convertedvalue.innerHTML = new Intl.NumberFormat
            ('en-GB', { style: 'currency', currency: 'GBP' }).format(inputcurrencyvalues / librastoday)
    }

    if (currencySelector.value == 'bit') {
        convertedvalue.innerHTML =
            "₿ " + new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }).format(inputcurrencyvalues / bitcointoday);
    }

    valueToConvert.innerHTML = new Intl.NumberFormat
        ('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputcurrencyvalues)

}







function selector() {
    const convertTo = document.querySelector('.convert-to')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelector.value == 'dolar') {
        convertTo.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/dolar.png'

    }
    if (currencySelector.value == 'euro') {
        convertTo.innerHTML = '€ Euro'
        currencyImg.src = './assets/euro.png'

    }
    if (currencySelector.value == 'libra') {
        convertTo.innerHTML = '£ Libra'
        currencyImg.src = './assets/libra.png'

    }
    if (currencySelector.value == 'bit') {
        convertTo.innerHTML = '₿ Bitcoin'
        currencyImg.src = './assets/bitcoin 1.png'

    }


}
currencySelector.addEventListener('change', selector)

