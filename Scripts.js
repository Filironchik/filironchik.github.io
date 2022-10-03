let aMinutes1, aWaths1, bMinutes1, bWaths1, aMinutes2, aWaths2, bMinutes2, bWaths2, N, w, wA, wB
let results = []

butt.onclick = function(){
    aMinutes1 = Number(document.getElementById('aMinutes1').value)
    aWaths1 = Number(document.getElementById('aWaths1').value)
    bMinutes1 = Number(document.getElementById('bMinutes1').value)
    bWaths1 = Number(document.getElementById('bWaths1').value)
    aMinutes2 = Number(document.getElementById('aMinutes2').value)
    aWaths2 = Number(document.getElementById('aWaths2').value)
    bMinutes2 = Number(document.getElementById('bMinutes2').value)
    bWaths2 = Number(document.getElementById('bWaths2').value)
    N = Number(document.getElementById('N').value)
    W()
}

function wAB(wath1, min1, wath2, min2, n, wN) { 
  if (wath2 < 0){
    wath2 = wath2 * -1
    min2 = min2 * -1

    watch = wath1 + wath2
    console.log(watch + " watch")

    min = min1 + min2
    console.log(min + " min")
  } else {
    watch = wath1 - wath2
    console.log(watch + " watch")

    min = min1 - min2
    console.log(min + " min")
  }
  
  if (min < 0) {
    watch--
    min = min + 60
  } 
  
  if (wN == 'a') {
    min = min + watch * 60
    console.log(min + " all min")
    wA = min / n
    console.log(wA + ' Omega a')
  } else {
    watch = watch + min / 60
    console.log(min + " all watch")
    wB = watch / n
    console.log(wB + ' Omega b')
  }
  
}

function W(){
  wAB(aWaths1, aMinutes1, aWaths2, aMinutes2, N, 'a')
  wAB(bWaths1, bMinutes1, bWaths2, bMinutes2, N, 'b')
  wB = wB * 4
  console.log(wB + ' wB')
  wA = wA ** 2
  wB = wB ** 2
  w = wB + wA
  console.log(w + ' w')
  w = Math.sqrt(w)
  console.log(w.toFixed(2) + ' Omega')
  result.innerHTML = w.toFixed(2)
  res(w.toFixed(2))
}

function res(result){
  results.unshift(result)
  for(let i = 0; i < result.length; i++){
    
  }
  result__div.after(result, document.createElement('hr'))
}
