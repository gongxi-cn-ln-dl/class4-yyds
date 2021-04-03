'use strict'
function check(){
    let teacherName = document.getElementById("teacher_name")
    let studentName = document.getElementById("student_name")
    let studentBirthday = document.getElementById("student_birthday")

    let tNV = teacherName.value
    let sNV = studentName.value
    let sBV = studentBirthday.value

    if(!tNV || !sNV || !sBV){
        alert("有未填完的项目")
    }
    let reg = /\d{6}/g
    if(!reg.test(sBV)){
        studentBirthday.value = ""
        alert("需要格式为YYMMDD的六位数！")
        return false
    }

    let text = tNV + sNV + sBV
    let token = md5(text)

    let classmatesMd5 = ["e837a7b5d8117b6f60bc4702fba92805","f1b223b89321402d274873963b08cf1a","cf5a504b426feb5475da20561089bff9"]

    let canBeFound_bool = false

    classmatesMd5.forEach(function(value){if(value === token){canBeFound_bool = true}})

    if(canBeFound_bool){
        alert("登陆成功！")
        document.cookie = `token = `
        document.cookie = `deletetoken = `
        document.cookie = `studentName = `
        setCookies(sNV,token)
        return true
    }else{
        alert("登陆失败")
        return false
    }
}
function setCookies(sNV,token) {
    let d = new Date()
    let timestamp = d.getTime()
    let token_new = md5(token+timestamp).split('').reverse().join('')+timestamp
    document.cookie = `token = ${token_new}`
    document.cookie = `deletetoken = T${token}T`
    document.cookie = `studentName = ${encodeURIComponent(sNV)}`
}