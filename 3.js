/*=============== warunk_kopi simple app =============== */

// inisialisasi variabel coffee dalam bentuk array yang menyimpan nilai dari tiap-tiap produk kopi
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

// fungsi buatKopi menerima 2 parameter yaitu brand dan money dan akan mengembalikan dalam bentuk promise
const buatKopi = (brand, money) => { 
  return new Promise((resolve, reject) => {

    // dilakukan pencarian terhadap brand kopi terlebih dahulu
    const coffeeCheck = coffee.find(item => item.brand === brand)
    let changeMoney = money - coffeeCheck.price // dan dilakukan pengurangan terhadap money dan harga kopi

    if (coffeeCheck === undefined) { // jika kopi tersebut tidak didapatkan maka akan mengembalikan dengan keterangan dalam blok if ini
      reject('Brand tidak ditemukan')
    } else if (changeMoney < 0) { // jika money lebih kecil dari harga kopi maka blok ini akan dijalankan
      reject('Uang anda tidak cukup')
    } else { // tetapi jika semua error itu tidak terpenuhi maka blok else ini akan dijalankan
      setTimeout(() => { // akan menjalankan fungsi timeOut sesuai dengan waktu pembuatan kopi
        if (changeMoney > 0) { // jika money lebih besar ketimbang harga kopi
          resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan dan ini ${changeMoney} untuk kembaliannya`)
        }
        resolve(`Kopi ${coffeeCheck.brand} siap dihidangkan`)
      }, coffeeCheck.brewTime)
    }

  })
}

buatKopi('kapal api', 3000) // pemanggilan fungsi buatKopi dengan brand kapal api dan uang/money yang dimiliki adalah 3000
  .then(result => {
    console.log(result) // akan menampilakan hasil jika program berhasil dijalankan dengan benar
  })
  .catch(error => {
    console.log(error) // akan menampilakan hasil jika dalam menjalankan program terdapat error
  });




  /*=============== beli pulsa =============== */
  
const beliPulsa = (credit, money) => { // inisialisasi fungsi beliPulsa dan mengembalikan promise
  return new Promise((resolve, reject) => {
    const change = money - credit // dilakukan pengurangan terhadapt credit dan money/uang terlebih dahulu

    if (change < 1000) { // jika perbedaan money dan credit kurang dari 1000 maka blok if ini akan dijalankan
      reject('Saldo anda tidak mencukupi')
    } else { // tetapi jika kondisi sebelumnya tidak terpenuhi maka blok else ini akan dijalankan
      setTimeout(() => { // fungsi setTimeOut akan dijalankan dengan delay 2 detik terlebih dahulu 
        resolve('Pembayaran berhasil')
      }, 2000)
    }
  })
}

const mauBeliPulsa = async (credit, money) => { // inisialisasi fungsi mauBeliPulsa yang menerima parameter credit dan money
  try {
    console.log('Sedang melakukan pembayaran...'); // akan ditampilkan pemberitahuan ini dulu
    const result = await beliPulsa(credit, money) // lalu menjalankan fungsi beliPulsa
    console.log(result); // dan jika berhasil maka hasilnya akan langsung ditampilkan di console
  } catch (error) {
    console.log(error); // dan jika terdapat error maka akan langsung ditampilkan di console juga
  } finally {
    console.log('Transaksi selesai'); // dan jika program akan berakhir maka proses ini akan dijalankan terlebih dahulu
  }
} 

mauBeliPulsa(5000, 5500) // memanggil fungsi mauBeliPulsa dengan mengisi parameternya dengan credit 5000 dan money 5500 yang akan menghasilkan peringantan bahwa saldo tidak mencukupi