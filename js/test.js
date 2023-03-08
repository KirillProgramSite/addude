let linkRes = document.querySelector('.res-link')

function result() {
  let resLet = '';

  const test1 = document.querySelector('input[name="test1"]:checked').value;
  const test2 = document.querySelector('input[name="test2"]:checked').value;
  const test3 = document.querySelector('input[name="test3"]:checked').value;
  const test4 = document.querySelector('input[name="test4"]:checked').value;
  const test5 = document.querySelector('input[name="test5"]:checked').value;
  const test6 = document.querySelector('input[name="test6"]:checked').value;
  const test7 = document.querySelector('input[name="test7"]:checked').value;
  const test8 = document.querySelector('input[name="test8"]:checked').value;
  const test9 = document.querySelector('input[name="test9"]:checked').value;
  const test10 = document.querySelector('input[name="test10"]:checked').value;
  const test11 = document.querySelector('input[name="test11"]:checked').value;
  const test12 = document.querySelector('input[name="test12"]:checked').value;
  const test13 = document.querySelector('input[name="test13"]:checked').value;
  const test14 = document.querySelector('input[name="test14"]:checked').value;
  const test15 = document.querySelector('input[name="test15"]:checked').value;



  if (test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14, test15 == "1") {
      resLet = 'tech'
  } else if(test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14, test15 == "2") {
    resLet = 'guman'
  } else if(test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14, test15 == "3") {
    resLet = 'bis'
  } else {
    resLet = 'other'
  }

  localStorage.setItem('reslet', resLet)
}

linkRes.addEventListener('click', result)
