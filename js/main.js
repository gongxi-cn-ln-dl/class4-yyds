'use strict'
function newNav(){
    let basicElement = document.getElementsByTagName('body')
    let navElement = document.getElementById('nav')
    let exitElement = document.getElementById('exit')

    let innerHtml_nav = '<a href="/class4-yyds/index.html">\n' +
        '        <div class="navs fl" id="nav-1">首页</div>\n' +
        '    </a>\n' +
        '    <a href="/class4-yyds/classmates.html">\n' +
        '        <div class="navs fl" id="nav-2">个人</div>\n' +
        '    </a>\n' +
        '    <a href="#">\n' +
        '        <div class="navs fl" id="nav-3">班级</div>\n' +
        '    </a>\n' +
        '    <a href="/class4-yyds/albums_homepage.html">\n' +
        '        <div class="navs fl" id="nav-4">相册</div>\n' +
        '    </a>\n' +
        '    <div class="navs" id="nav-5">未登录</div>'
    let innerHtml_exit = '<img alt="退出" height="64" src="/class4-yyds/res/exit.png" width="64">'
    navElement.innerHTML = innerHtml_nav
    exitElement.innerHTML = innerHtml_exit

}
function checkCookies() {
    let cookieBasic = document.cookie

    if(cookieBasic === '') {reLogin("错误cookie");return false}
    if(cookieBasic ==="token=; deletetoken=; studentName=") {reLogin("错误cookie");return false}

    let reg_token = /[a-z0-9]{45}/g
    let reg_old_token = /(T[a-z0-9]{32}T)/g
    let reg_studentName = /(%[A-Z0-9]{2}){6,9}/g

    let token = cookieBasic.match(reg_token)[0]
    let old_token = cookieBasic.match(reg_old_token)[0].slice(1,-1)
    let timestamp = token.slice(-13)
    let studentName = decodeURIComponent(cookieBasic.match(reg_studentName)[0])

    let new_token = md5(old_token+timestamp).split("").reverse().join('')+timestamp

    if(new_token !== token){
        reLogin("错误cookie")
        return false
    }

    if(studentName.length!==3){
        studentName=studentName[0]+"&emsp;"+studentName[1]
    }
    document.getElementById("nav-5").innerHTML=studentName
}
function reLogin(mode) {
    let text;
    if(mode==="错误cookie"){
        text="校验未通过"
    }else if(mode==="退出登录"){
        text="退出成功"
    }
    alert(text)
    window.location.href = "login.html"
    document.cookie = `token = `
    document.cookie = `deletetoken = `
    document.cookie = `studentName = `
}
newNav()
checkCookies()