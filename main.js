

let img = document.getElementById("imgBox");
let imgContain = document.getElementById("imgContainer");

function zoomIn(){
     let theBoxwidth = imgContain.clientWidth;
     let theBoxheight = imgContain.clientHeight;

     let originwidth = img.clientWidth;
     let originheight = img.clientHeight;
    

     imgContain.style.width = (theBoxwidth + 50) + "px"
     imgContain.style.height = (theBoxheight + 50) + "px"

     img.style.width = (originwidth + 50) + "px"
     img.style.height = (originheight + 50) + "px" 
     
}


function zoomOut(){
    let theBoxwidth = imgContain.clientWidth;
    let theBoxheight = imgContain.clientHeight;

    let originwidth = img.clientWidth;
     let originheight = img.clientHeight;
    

     imgContain.style.width = (theBoxwidth - 50) + "px"
     imgContain.style.height = (theBoxheight - 50) + "px"

     img.style.width = (originwidth - 50) + "px"
     img.style.height = (originheight - 50) + "px" 
     
     
}


