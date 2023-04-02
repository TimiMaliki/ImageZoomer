

const img = document.getElementById("imgBox");
const imgContain = document.getElementById("imgContainer");

function zoomIn(){
     const theBoxwidth = imgContain.clientWidth;
     const theBoxheight = imgContain.clientHeight;

     const originwidth = img.clientWidth;
     const originheight = img.clientHeight;
    

     imgContain.style.width =   `${theBoxwidth + 50}px`
     imgContain.style.height =   `${theBoxheight + 50}px`

     img.style.width =  `${originwidth + 50}px`
     img.style.height = `${originheight + 50}px` 
     
}


function zoomOut(){
    const theBoxwidth = imgContain.clientWidth;
    const theBoxheight = imgContain.clientHeight;

    const originwidth = img.clientWidth;
     const originheight = img.clientHeight;
    

     imgContain.style.width = (theBoxwidth - 50) + "px"
     imgContain.style.height = (theBoxheight - 50) + "px"

     img.style.width = (originwidth - 50) + "px"
     img.style.height = (originheight - 50) + "px" 
     
     
}


