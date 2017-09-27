function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("div.target")
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    var number = parseInt(lis[i].innerHTML)
    //number = parseInt(lis[i].innerHTML) +=3
    number += 3
  }
  }

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
