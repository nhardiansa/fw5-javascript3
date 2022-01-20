const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}

getmonth((error, result) => {
  if (error) {
    console.log(error);
  } else {
    result.map(el => {
      console.log(el);
    })
  }
})