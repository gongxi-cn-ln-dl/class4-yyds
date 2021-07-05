function changeStatus(){
    imgObj = document.getElementById("btnStatus")
    spanObj = document.getElementById("sort-btn-span")
    let Alt = imgObj.alt
    // parentObj = document.getElementById("sort-button")
    if(Alt==="未选中"){
        imgObj.src = "res/icon/单选-选中.png"
        imgObj.alt = "选中"
        spanObj.innerHTML = "<b>按小组</b>/按座位"
    }else if(Alt==="选中"){
        imgObj.src = "res/icon/单选-未选中.png"
        imgObj.alt = "未选中"
        spanObj.innerHTML = "按小组/<b>按座位</b>"
    }
}