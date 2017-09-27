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

    //parseInt(lis[i].innerHTML)=parseInt(lis[i].innerHTML)+n

    //number = parseInt(lis[i].innerHTML) +=3


    // for (let i = 0; i < lis.length; i++) {
    //   console.log(lis[i].innerHTML)
    }
  }
  }
