const API_KEY = "kt4dLggVI8v5XGn4sRUIsonqsvMC0J9BwgQ2Y4I2"
const rootElement = document.querySelector("#root")

const fetchApod = async function() {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  //console.log(response)

  if (response.status === 200) {
    //console.log("fetch was successfull")

    const messageDiv = document.createElement("div")
    messageDiv.innerText = "fetch was successfull"
    rootElement.appendChild(messageDiv)

    const apodData = await response.json()
    console.log(apodData)
  }else {
    //console.log("fetch was unsuccessfull")

    const messageDiv = document.createElement("div")
    messageDiv.innerText = "fetch was unsuccessfull"
    rootElement.appendChild(messageDiv)

  }
}

  fetchApod()

console.log("loaded");

/* Ez a legrövidebb végső vált.

/*const API_KEY = 'nJSclvl9V2lsof5b7URGHrdEVzMeMvbQ7tYpT57w'
const API_DATE = '2023-02-28'
const rootElement = document.querySelector('#root')

I. variáció async függv. és await 

const fetchApod = async function(url) {
  const response = await fetch(url)
  const apodData = await response.json() 
  return apodData
}

II. variáció async függv. és .then callback függv.-ek

const fetchApod2 = async function(url) {
  return fetch(url)
          .then((response) => response.json())
          .then((apodData) => apodData)
}

const createApodElement = function(title, url) {
  const h1 = document.createElement('h1')
  h1.innerText = title

  const img = document.createElement('img')
  img.src = url

  rootElement.append(h1, img)
}

const init = async function() {
  const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
  createApodElement(apodData.title, apodData.url)
}

init()*/

