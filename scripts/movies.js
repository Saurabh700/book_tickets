// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let avail = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText = avail.total

let movies_div = document.getElementById("movies")

async function searchMovies(){
    try{
        const query = document.getElementById("search").value

        const url = `https://omdbapi.com/?s=${query}&page=1&apikey=fc1fef96`

        let res = await fetch(url)

        let data = await res.json()
        console.log(data)
        const movies = data.Search
        return movies
            // appendMovies(data.Search)
    }
    catch(err){
            console.log(err)
        }
}

function appendMovies(data){
    // if(data==undefined){
    //     return false
    // }

    movies_div.innerHTML = null

    data.forEach(function(el){
        let box = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.Poster
        let p = document.createElement("p")
        p.innerText = el.Title
        let btn = document.createElement("button")
        btn.innerText = "Book Now"
        btn.setAttribute("class","book_now")
        // btn.onclick = window.location.href("checkout.html")

        box.append(img,p,btn)

        movies_div.append(box)
        })
}

async function main(){
    let data = await  searchMovies()
    console.log(data)
    if(data===undefined){
        return false
    }
    appendMovies(data)
}

let id;

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}