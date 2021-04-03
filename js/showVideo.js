'use strict'

function showVideoElement(realUrl) {
    document.getElementById('bigImg').style.visibility = "visible"
    let container = document.getElementById('showImg')
    let videoElement = document.createElement("video")
    // let picO = document.createElement('img')
    //
    // picO.src = "res/close.png"
    // picO.alt = '0'
    // picO.id = 'closes'
    // picO.addEventListener('click',hideVideoElement)

    videoElement.src = realUrl
    videoElement.controls = true
    videoElement.id = 'Video-showing'
    videoElement.autoplay = true
    videoElement.style.width = '80%'
    videoElement.style.height = 'auto'
    container.appendChild(videoElement)
    // container.appendChild(picO)
    document.getElementById('bigImg').addEventListener('click', hideVideoElement)
    document.getElementById('Video-showing').addEventListener('click', hideVideoElement)
}

function hideVideoElement() {
    document.getElementById('bigImg').style.visibility = "hidden"
    let imgParentObj = document.getElementById("showImg")
    let imgObj = document.getElementById("Video-showing")
    // let X = document.getElementById("closes")
    imgParentObj.removeChild(imgObj)
    // imgParentObj.removeChild(X)
}

function PTSL(url) {
    $.ajax({
        url: 'https://service-93nrd30p-1258885549.bj.apigw.tencentcs.com:443',
        type: "GET",
        headers: {
            "url": url,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (result) {
            showVideoElement(result);
        }
    })
}
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}

function playV(filename) {
    filename = encodeUtf8(filename).join('X')
    let Xs = $('input[name=0]:checked').val().toString().toUpperCase()
    $.ajax({
        url: 'https://service-374ans0f-1258885549.bj.apigw.tencentcs.com:443',
        type: "GET",
        headers: {
            "videoname": filename,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (result) {
            let J = JSON.parse(result)
            console.log(Xs)
            PTSL(J[Xs][0])
        }
    })
}
