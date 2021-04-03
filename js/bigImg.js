'use strict'
document.getElementById('bigImg').style.visibility="hidden"

function showBigger(folderName,picName,width,height) {
    document.getElementById('bigImg').style.visibility="visible"

    let pageWidth = document.body.clientWidth * 0.7
    let pageHeight = document.body.clientHeight * 0.7

    let containerObj = document.getElementById("showImg")
    let imgObj = document.createElement("img")

    imgObj.src = `../../res/lighter_img/${folderName}/${picName}`
    imgObj.alt = picName
    imgObj.id = "Pic-showing"

    let imgWidth = width
    let imgHeight = height

    containerObj.appendChild(imgObj)
    // console.log(imgWidth,imgHeight)
    if(imgHeight <= pageHeight && imgWidth <= pageWidth){
        containerObj.appendChild(imgObj)
        // console.log("123")
    }else if(imgHeight > pageHeight || imgWidth > pageWidth){
        let small_time = imgHeight / pageHeight
        let nowImgWidth = imgWidth / small_time
        if(nowImgWidth>pageWidth){
            small_time = imgWidth / pageWidth
        }
        imgObj.width = imgWidth / small_time
        imgObj.height = imgHeight / small_time
        containerObj.appendChild(imgObj)

        imgObj.style.width = imgWidth / small_time
        imgObj.style.height = imgHeight / small_time
    }
    imgObj.addEventListener('click',hideBigger)
    console.log(pageHeight,pageWidth,imgHeight,imgWidth,imgObj.height,imgObj.width)
}
function hideBigger() {
    document.getElementById('bigImg').style.visibility="hidden"
    let imgParentObj = document.getElementById("showImg")
    let imgObj = document.getElementById("Pic-showing")
    imgParentObj.removeChild(imgObj)
}