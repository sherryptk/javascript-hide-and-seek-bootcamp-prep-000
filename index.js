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
    number += n
    lis[i].innerHTML=number
    }
  }



function deepestChild(){
  let current = document.getElementById('grand-node').querySelectorAll('div')
  let next = []
    for (let i = 0; i < current.length; i++) {
            next.push(current[i])
      }
      return next[next.length-1]
}
