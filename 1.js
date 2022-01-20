const cekHariKerja = (day) => { // inisialisasi fungsi dengan bentuk arrow function
  return new Promise((resolve, reject) => { // dan langsung mengembalikan dalam bentuk object Promise
    setTimeout(() => { // menjalankan fungsi setTimeOut yang akan menjalankan cb setelah 3 detik
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] // inisialisasi data hari dalam bentuk array ke variabel dataDay

      let cek = dataDay.find((item) => { // inisialisasi variabel cek dan menerima hasil dari pencarian hari dari dataDay menggunakan find
        return item === day // jika terdapat item yang sama dengan day maka akan langsung dikembalikan dengan item yang sama tersebut
      })

      console.log(cek, 'dalam');

      if (cek) { // pengecekan isi variabel cek
        resolve(cek) // jika isi dari cek ada, maka akan menjalankan resolve dan mengirim cek ke dalam parameter resolve
      } else {
        reject(new Error('Hari ini bukan hari kerja')) // jika isi dari cek undifined, maka akan menjalankan reject dan mengirim object error sebagai parameter
      }
    }, 3000)
  })
}

cekHariKerja('senin') // jalankan fungsi cekHariKerja dengan memasukan parameter yang diinginkan, misalnya: hari senin
  .then((result) => { // fungsi ini dijalankan ketika resolve berjalan dan menerima data yang dikirim oleh resolve melalui result
    console.log(result); // bagian ini menampilkan hasil dari pencarian hari yang sesuai dengan parameter
  })
  .catch((error) => { // fungsi ini dijalankan ketika reject berjalan dan menerima data yang dikirim oleh reject melalui error
    console.error(error); // bagian ini menampilkan data yang dikirim oleh fungsi reject
  })


const lihatHariKerja = async () => { // inisialisasi fungsi lihatHariKerja
  try { // bagian ini pertama kali dijalankan
    const result = await cekHariKerja('selasa') // inisialisasi result yang menunggu dan menerima hasil dari menjalankan fungsi cekHariKerja
    console.log(result); // menampilkan isi dari variabel result
  } catch (error) { // jika fungsi reject dijalankan maka catch akan menanganinya serta menerima data yang dikirim melalui error
    console.error(error); // menampilkan isi dari error
  }
}

lihatHariKerja() // menjalankan fungsi lihatHariKerja