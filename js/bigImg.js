'use strict'
document.getElementById('bigImg').style.visibility="hidden"

function showBigger(folderName,picName,width,height,mode=0) {
    document.getElementById('bigImg').style.visibility="visible"

    let pageWidth = document.body.clientWidth * 0.5
    let pageHeight = document.body.clientHeight * 0.5

    let containerObj = document.getElementById("showImg")
    let imgObj = document.createElement("img")
    if(mode===0){
        imgObj.src = `https://cdn.jsdelivr.net/gh/gongxi-cn-ln-dl/repo-for-class4/lighter_img/${folderName}/${picName}`
    }else {
        imgObj.src = `res/${folderName}/${picName}`
    }
    imgObj.alt = picName
    imgObj.id = "Pic-showing"

    let imgWidth = width
    let imgHeight = height

    // containerObj.appendChild(imgObj)
    // // console.log(imgWidth,imgHeight)
    // console.log("222")
    // if(imgHeight <= pageHeight && imgWidth <= pageWidth){
    //     console.log("111")
    //     containerObj.appendChild(imgObj)
    //     // console.log("123")
    // }else if(imgHeight > pageHeight || imgWidth > pageWidth){
    //     console.log("000")
        // let small_time = imgHeight / pageHeight
        // let nowImgWidth = imgWidth / small_time
        // if(nowImgWidth>pageWidth){
        //     small_time = imgWidth / pageWidth
        // }
    if(imgHeight>imgWidth){
        imgObj.style.height = "60%";
        containerObj.appendChild(imgObj)
    }else{
        imgObj.style.width = "60%";
        containerObj.appendChild(imgObj)
    }
        // imgObj.width = imgWidth / small_time
        // imgObj.height = imgHeight / small_time

        // imgObj.style.width = imgWidth / small_time
        // imgObj.style.height = imgHeight / small_time

        // containerObj.appendChild(imgObj)
    // }
    imgObj.addEventListener('click',hideBigger)
    console.log(pageHeight,pageWidth,imgHeight,imgWidth,imgObj.height,imgObj.width)
}
function hideBigger() {
    document.getElementById('bigImg').style.visibility="hidden"
    let imgParentObj = document.getElementById("showImg")
    let imgObj = document.getElementById("Pic-showing")
    imgParentObj.removeChild(imgObj)
}