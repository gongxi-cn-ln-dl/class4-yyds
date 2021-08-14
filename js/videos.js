let WindowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

let WindowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

let mainC_Style = document.getElementById("main-area").style;
let videoC_Style = document.getElementById("video-container").style;
let videoIframe_Style = document.getElementById("video-container").getElementsByTagName("iframe")[0].style;
let menuC_Style = document.getElementById("menu-container").style;
let BiliRadio_Style = document.getElementsByTagName("input")[0];
let YoukuRadio_Style = document.getElementsByTagName("input")[1];
let firstVideoButton = document.getElementsByClassName("firstP")[0];



let isHorizontal;
let baseVideoUrl;

let isPC;
isPC = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/);


if (WindowWidth > WindowHeight || isPC) {
    let sV_Style = document.getElementById("selectV").style;
    isHorizontal = true;
    baseVideoUrl = "//player.bilibili.com/player.html?";
    mainC_Style.flexDirection = "row";
    videoC_Style.width = "75vw";
    videoC_Style.height = "42.1825vw";
    videoC_Style.margin = "";
    videoIframe_Style.width = "75vw";
    videoIframe_Style.height = "42.1825vw";
    menuC_Style.width = "20vw";
    sV_Style.visibility = "visible";
    BiliRadio_Style.checked = false;
    YoukuRadio_Style.checked = true;
} else{
    isHorizontal = false;
    baseVideoUrl = "//www.bilibili.com/blackboard/html5mobileplayer.html?"
    mainC_Style.flexDirection = "column";
    videoC_Style.width = "80vw";
    videoC_Style.height = "45vw";
    videoC_Style.margin = "0 auto";
    videoIframe_Style.width = "80vw";
    videoIframe_Style.height = "45vw";
    menuC_Style.width = "80vw";
    BiliRadio_Style.checked = true;
    YoukuRadio_Style.checked = false;
}
let BiliBiliVideoLinks;

BiliBiliVideoLinks = {
    'd2': "1",
    'DSCN0250': "2",
    'DSCN0249': "3",
    'DSCN0251': "4",
    'DSCN0252': "5",
    'DSCN0256': "6",
    'DSCN0253': "7",
    'DSCN0254': "8",
    'DSCN0255': "9",
    'DSCN0257': "10",
    'DSCN0258': "11",
    'DSCN0804': "12",
    'DSCN0805': "13",
    'DSCN0806': "14",
    'DSCN0807': "15",
    'DSCN0811': "16",
    'DSCN0813': "17",
    'DSCN0818': "18",
    'DSCN0820': "19",
    'DSCN0821': "20",
    'DSCN0826': "21",
    'DSCN0831': "22",
    'DSCN0835': "23",
    'DSCN0871': "24",
    'DSCN0875': "25",
    'DSCN0957': "26",
    'DSCN1028': "27",
    'DSCN1036': "28",
    'DSCN1048': "29",
    'DSCN1049': "30",
    'DSCN1053': "31",
    'DSCN1084': "32",
    'DSCN1085': "33",
    'DSCN1189': "34",
    'DSCN1205': "35",
    'DSCN1207': "36",
    'DSCN1246': "37",
    'DSCN1251': "38",
    'DSCN1254': "39",
    'DSCN1257': "40",
    'DSCN1261': "41",
    'DSCN1264': "42",
    'DSCN1520': "43",
    'DSCN1521': "44",
    'DSCN1540': "45",
    'DSCN1697': "46",
    'DSCN1701': "47",
    'DSCN1702': "48",
    'ZY4': "49",
    '努力学习4': "52",
    '博曹1': "50",
    '四_陈梓盈_曹瀚允': "53",
    '尹航_刘艾佳2组': "55",
    '张博宁张斯秦_3_雨我无瓜': "56",
    '李心雨，慕春博1': "51",
    '杨竹1': "54"
}
YoukuVideoLinks = {
    "ZY4": "XNTE5MzM1NDcwNA==",
    "博曹1": "XNTE5MzM1NDkyMA==",
    "DSCN1521": "XNTE5MzA5MTgyMA==",
    "DSCN1540": "XNTE5MzA5NzIxNg==",
    "DSCN1264": "XNTE5MzA5MTAxNg==",
    "DSCN1261": "XNTE5MzA3OTY2MA==",
    "DSCN1257": "XNTE5MzA3OTIwNA==",
    "DSCN1246": "XNTE5MzA3MzU0MA==",
    "DSCN1251": "XNTE5MzA3MzU2NA==",
    "DSCN1205": "XNTE5MzA3MzMzMg==",
    "DSCN1207": "XNTE5MzA3MzMzNg==",
    "DSCN1189": "XNTE5MzA3MzMyOA==",
    "DSCN1084": "XNTE5Mjc4NjAyMA==",
    "DSCN1085": "XNTE5Mjc4NjU3Mg==",
    "DSCN1053": "XNTE5Mjc4NTc2MA==",
    "DSCN1049": "XNTE5Mjc4NTU2OA==",
    "DSCN1048": "XNTE5Mjc4NDA4MA==",
    "DSCN1036": "XNTE5Mjc4Mzk1Ng==",
    "DSCN0957": "XNTE5Mjc4Mzg0MA==",
    "DSCN0875": "XNTE5Mjc4Mzc0MA==",
    "DSCN0871": "XNTE5Mjc4MzMxNg==",
    "DSCN0835": "XNTE5Mjc3MjYyMA==",
    "DSCN0831": "XNTE5Mjc3MjU4NA==",
    "DSCN0820": "XNTE5Mjc3MjUyNA==",
    "DSCN0826": "XNTE5Mjc3MjUxNg==",
    "DSCN0821": "XNTE5Mjc3MjUxMg==",
    "DSCN0805": "XNTE5MTAyOTUzMg==",
    "DSCN0818": "XNTE5MTAzMDAzMg==",
    "DSCN0813": "XNTE5MTAyOTkxMg==",
    "DSCN0811": "XNTE5MTAyOTgwMA==",
    "DSCN0806": "XNTE5MTAyOTYxNg==",
    "DSCN0807": "XNTE5MTAyOTc2MA==",
    "DSCN0804": "XNTE5MTAyOTQzNg==",
    "DSCN0258": "XNTE5MTAyODM0NA==",
    "DSCN0257": "XNTE5MTAyODIwMA==",
    "DSCN0256": "XNTE5MTAyMDIxMg==",
    "DSCN0255": "XNTE5MDgwMTU4OA==",
    "DSCN0254": "XNTE5MDgwMTMzMg==",
    "DSCN0253": "XNTE5MDgwMDkyMA==",
    "DSCN0252": "XNTE5MDgwMDg4MA==",
    "DSCN0251": "XNTE5MDgwMDUzNg==",
    "DSCN0250": "XNTE5MDgwMDM2NA==",
    "DSCN0249": "XNTE5MDgwMDE4NA==",
    "d2": "XNTE5MDc5OTcwNA=="
}

function BV(title) {
    let iframeObject = document.getElementsByTagName("iframe")[0];
    iframeObject.src = baseVideoUrl + "aid=759654271&page=" + BiliBiliVideoLinks[title];
}
function YV(title) {
    let iframeObject = document.getElementsByTagName("iframe")[0];
    iframeObject.src = "https://player.youku.com/embed/"+YoukuVideoLinks[title];
}
function PlayVideo(title) {
    let BiliBiliRadio = document.getElementsByTagName("input")[0];
    if (BiliBiliRadio.checked === true) {
        BV(title);
        console.log(title, BiliBiliRadio.checked);
    }else{
        YV(title);
    }
}

PlayVideo(firstVideoButton.innerHTML)