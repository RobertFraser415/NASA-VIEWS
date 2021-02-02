console.log("Hello")

let imageButton1 = document.querySelector('#apod')
let image1 = document.querySelector('#img1')
let date =  document.querySelector('#date')
let explanation = document.querySelector('#explanation')

let roverButton = document.querySelector('#rover')
let roverImage = null;
let cameraName = document.querySelector('#whichCamera')


const getImage = (e) => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=IGTBnP3AWXNIQbvrUiY6bIEjzIyFIAqUcm8RI6qg')
    .then(function(response){
        return response.json()
    })
    .then(function(parsedData){
        // console.log(parsedData)
        let imageSource = parsedData.hdurl
        // console.log(imageSource)
        image1.innerHTML = imageSource
        image1.setAttribute('src', imageSource)
        let dateText = parsedData.date
        date.innerHTML = dateText
        //  console.log(date)
        let explanationText = parsedData.explanation
        explanation.innerHTML = explanationText
        //   console.log(explanationText)
        // date.innerText(parsedData.date)
        // explanation.innerText(parsedData.explanation)
        
        // image1.appendChild('ul')
    })
}
const getMASTPics = (e) => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IGTBnP3AWXNIQbvrUiY6bIEjzIyFIAqUcm8RI6qg')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let roverImages = [];
        let photoData = data.photos
        for (let i = 0; i < photoData.length; i++){
            let photoURL = photoData[i].img_src
            if( photoData[i] < 25 ){
                roverImages.push(photoURL)
                return roverImages


                // let cameraName = idNumber.camera.name
                // console.log(cameraName)
                // let roverImage = document.createElement('img')
                // roverImage.innerHTML = photoSource
                // roverImage.setAttribute('src', photoSource)
               
               
                // roverImages.push(roverImage)
                //console.log(roverImages)
                //cameraName.innerHTML = cameraName
             
            }
        }
    
    })
}

imageButton1.addEventListener('click', getImage)
roverButton.addEventListener('click', getMASTPics)


//ROVER URL 
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?max_sol&api_key=IGTBnP3AWXNIQbvrUiY6bIEjzIyFIAqUcm8RI6qg

