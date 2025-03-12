let counterEle = document.getElementById("countValue")

function onIncrement() {
    let previousCountValue = counterEle.textContent
    let updatedCountValue = parseInt(previousCountValue) + 1
    
    if (updatedCountValue > 0) {
        counterEle.style.color = "green"
    }
    else if (updatedCountValue < 0) {
        counterEle.style.color = "red";
    }
    else {
        counterEle.style.color = "black";
    }
    counterEle.textContent = updatedCountValue
}

function onDecrement() {
    let previousCountValue = counterEle.textContent
    let updatedCountValue = parseInt(previousCountValue) - 1 

    if (updatedCountValue > 0) {
        counterEle.style.color = "green"
    }
    else if (updatedCountValue < 0) {
        counterEle.style.color = "red";
    }
    else {
        counterEle.style.color = "black";
    }
    counterEle.textContent = updatedCountValue
}

function onReset() {
    let counterValue = 0
    counterEle.textContent = counterValue
    counterEle.style.color = "black"

}