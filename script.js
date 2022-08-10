let adviceNumber = document.querySelector(".advice-number");

let advice = document.querySelector(".advice-content");

let diceIcon = document.querySelector(".dice");


function fetchingData(adviceId) {
  fetch(`https://api.adviceslip.com/advice/${adviceId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        adviceNumber.innerText = `ADVICE # ${adviceId}`,
        
        advice.innerText = `" ${data.slip.advice} "`
  })
}


fetchingData(1)



diceIcon.addEventListener("click", ()=>{
  
  let adviceId = Math.floor(Math.random() * 225);
  
  fetchingData(adviceId)

})


