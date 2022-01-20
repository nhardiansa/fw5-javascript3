/*=============== warunk_kopi simple app =============== */

const coffee = [
  {
    brand: 'torabika',
    price: 2000,
    brewTime: 3000
  },
  {
    brand: 'kapal api',
    price: 3000,
    brewTime: 2000
  },
]

const buatKopi = (brand, money) => {
  return new Promise((resolve, reject) => {

    const coffeeCheck = coffee.find(item => item.brand === brand)
    let changeMoney = money - coffeeCheck.price

    if (coffeeCheck === undefined) {
      reject('Brand tidak ditemukan')
    } else if (changeMoney < 0) {
      reject('Uang anda tidak cukup')
    } else {
      setTimeout(() => {
        if (changeMoney > 0) {
          resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan dan ini ${changeMoney} untuk kembaliannya`)
        }
        resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan`)
      }, coffeeCheck.brewTime)
    }

  })
}

buatKopi('kapal api', 3000)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  });




  /*=============== beli pulsa =============== */
  
const beliPulsa = (credit, money) => {
  return new Promise((resolve, reject) => {
    const change = money - credit

    if (change < 1000) {
      reject('Saldo anda tidak mencukupi')
    } else {
      setTimeout(() => {
        resolve('Pembayaran berhasil')
      }, 2000)
    }
  })
}

const mauBeliPulsa = async (credit, money) => {
  try {
    console.log('Sedang melakukan pembayaran...');
    const result = await beliPulsa(credit, money)
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Transaksi selesai');
  }
} 

mauBeliPulsa(5000, 5500)