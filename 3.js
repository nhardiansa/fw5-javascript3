/*=============== warunk_kopi simple app =============== */

const coffee = [
  {
    brand: 'torabika',
    price: 2000,
    brewTime: 3000
  },
]

const buatKopi = (brand, money) => {
  return new Promise((resolve, reject) => {

    const coffeeCheck = coffee.find(item => item.brand === brand)
    let changeMoney = money - coffeeCheck.price
    
    if (coffeeCheck === undefined) {
      reject('Brand tidak ditemukan')
    }

    if (changeMoney < 0) {
      reject('Uang anda tidak cukup')
    }

    console.log('Kopi sedang disiapkan');

    setTimeout(() => {
      if (changeMoney > 0) {
        resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan dan ini ${changeMoney} untuk kembaliannya`)
      }
      resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan`)
    }, coffeeCheck.brewTime)
  })
}

buatKopi('torabika', 1000)
  .then(result => console.log(result))
  .catch(error => console.log(error))