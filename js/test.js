let linkRes = document.querySelector('.res-link')

function result() {
  let resLet = '';

  const obj = document.querySelector('input[name="obj"]:checked').value;
  const work = document.querySelector('input[name="work"]:checked').value;
  const games = document.querySelector('input[name="games"]:checked').value;
  const attempt = document.querySelector('input[name="attempt"]:checked').value;


  if (obj == "1" && work == "1" && games == "3" && attempt == "1") {
      resLet = 'tech'
  } else {
      resLet = 'bio'
  }

  localStorage.setItem('reslet', resLet)
  console.log(obj, work, games, attempt);
}

linkRes.addEventListener('click', result)
