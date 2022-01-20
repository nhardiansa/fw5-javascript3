const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found', []))
    }
  }, 1000)
}

getmonth((error, data) => {
  if (!error) {
    data.map(el => {
      console.log(el);
    })
  } else {
    console.log(error);
  }
})