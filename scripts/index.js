// Store the wallet amount to your local storage with key "amount"
let wallAmt = JSON.parse(localStorage.getItem("amount")) || []

document.getElementById("wallet").innerText = wallAmt.total

function addWallet(){
    var userobj = {
        total: "",
        money: function(){
            this.total += document.getElementById("amount").value
        }
    }
    userobj.money()
    console.log(userobj.total)
    localStorage.setItem("amount",JSON.stringify(userobj))
    let avail = JSON.parse(localStorage.getItem("amount"))
    document.getElementById("wallet").innerText = avail.total
}

function changepage(){
    window.location.href = "movies.html"
}

