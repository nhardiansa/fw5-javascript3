const getmonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found', []))
    }
  }, 4000)
}

getmonth((error, data) => { // menjalankan fungsi dengan metode then dan catch
  if (error === null) { // jika error bernilai null maka dalam blok if ini akan di jalankan
    data.map(el => { // tiap-tiap elemen dalam data akan di map menggunakan fungsi map() lalu di tampilkan lewat console
      console.log(el);
    })
  } else {
    console.log(error); // jika parameter error bernilai lain maka akan langsung ditampilkan
  }
})