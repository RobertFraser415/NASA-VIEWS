console.log("Hello")

let imageButton1 = document.querySelector('#apod')
let image1 = document.querySelector('#img1')

let date =  document.querySelector('#todaysDate')
let explanation = document.querySelector('#explanation')
let earthDate = document.querySelector('#earthDate')

let roverButton = document.querySelector('#rover')
let roverArray = document.querySelector('#roverArray')

const getImage = (e) => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=IGTBnP3AWXNIQbvrUiY6bIEjzIyFIAqUcm8RI6qg')
    .then(function(response){
        return response.json()
    })
    .then(function(parsedData){
        let imageSource = parsedData.hdurl
        image1.setAttribute('src', imageSource)
        let dateText = parsedData.date
        date.innerHTML = dateText
        let explanationText = parsedData.explanation
        explanation.innerHTML = explanationText
    })
    .catch('Error')
}
const getMASTPics = (e) => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IGTBnP3AWXNIQbvrUiY6bIEjzIyFIAqUcm8RI6qg')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < 49; i++){
            let url = data.photos[i].img_src
            let img = document.createElement('img')
            img.setAttribute('src', url)
            img.setAttribute('class', 'picture')
            
            let dateText = data.photos[i].earth_date
            earthDate.innerHTML = dateText

            let target = document.getElementById('pictures')
            target.appendChild(img) 
        }
        alert('SCROLL DOWN FOR PIX\nAND THANX FOR VISITING!')
    })
}



imageButton1.addEventListener('click', getImage)
roverButton.addEventListener('click', getMASTPics)

// const getAstronauts = (e) => {
//     fetch('http://api.open-notify.org/astros.json')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(issData){
//         //console.log(issData)
        
        
//         for(let j = 0; j < count; j++){
//             let name = issData.people[j].name
//             let craft = issData.people[j].craft
//             console.log(name)

            // let count = issData.number
            // let number = document.createElement('p')
            // let countDest = document.getElementById('count')
            // countDest.appendChild(number)
//         }
//     })

// }


// Butiion to search by date for APOD
// butttons left qand right to change between them