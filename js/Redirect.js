let BaiduFilesLink;
let BaiduFileLinkPassword;
let AliFilesLink;
BaiduFilesLink = {
    "陈梓盈": "https://pan.baidu.com/s/1tiXscio0meA-_fWL-zgnKw",
    "张博宁": "https://pan.baidu.com/s/1xLPVw9AiNZ9GEOU0KHdXXg",
    "王路扬": "https://pan.baidu.com/s/1xI1AxHq7XseaFPrvvbWiFQ",
    "王承忠": "https://pan.baidu.com/s/1osQbHBkodVf0zZyzQmFtEA",
    "韩昊阳": "https://pan.baidu.com/s/1ZlLC4uqUPSn9jqlnuYrTcQ",
    "曹雪慧": "https://pan.baidu.com/s/1hNSeeFyQY0THcjuOoc43GA",
    "李心雨": "https://pan.baidu.com/s/1Tzms9glgcwrXnTR9N3D5XA",
    "赵琛东": "https://pan.baidu.com/s/1ZZXIfHzssr0DCsG9GUcSTg",
    "王瑞": "https://pan.baidu.com/s/1Xxj1QEvSGcPLeI6uA-Iejg",
    "金涵": "https://pan.baidu.com/s/15KWx5IIOUwUzmSkrGpplgQ",
    "考研": "https://pan.baidu.com/s/1iXgA6ArwkBiVQ4Goj-Uqog",
    "尹航": "https://pan.baidu.com/s/1YBmLDjHArLrKQqzxCej_Ig",
    "王圣果": "https://pan.baidu.com/s/1yv_Auk-G_K54muWSve-jQA",
    "赵悦竹": "https://pan.baidu.com/s/1ovvzGhqkszs-vw1ScQN3SQ",
    "未分类": "https://pan.baidu.com/s/1jW2Gvx6jdO24kWib0ZDiLQ"
};
BaiduFileLinkPassword = {
    "陈梓盈": "gtqk",
    "张博宁": "fxqe",
    "王路扬": "867n",
    "王承忠": "s5pw",
    "韩昊阳": "gqcg",
    "曹雪慧": "jsxz",
    "李心雨": "vhay",
    "赵琛东": "zmvf",
    "王瑞": "f2se",
    "金涵": "fr97",
    "考研": "yhx1",
    "尹航": "cvya",
    "王圣果": "im96",
    "赵悦竹": "7wa2",
    "未分类": "8ur9"
}
AliFilesLink = {
    "陈梓盈": "https://www.aliyundrive.com/s/xDvFWufVvBC",
    "张博宁": "https://www.aliyundrive.com/s/79F2Esq571w",
    "王路扬": "https://www.aliyundrive.com/s/mVTSj18DU6D",
    "王承忠": "https://www.aliyundrive.com/s/EK1fKaCYFZy",
    "韩昊阳": "https://www.aliyundrive.com/s/oMK5xt9HJZv",
    "曹雪慧": "https://www.aliyundrive.com/s/7f7BpM6rjwi",
    "李心雨": "https://www.aliyundrive.com/s/3oni6yCzVPP",
    "赵琛东": "https://www.aliyundrive.com/s/Sfn1koMcgu5",
    "王瑞": "https://www.aliyundrive.com/s/aoJDnpAqUgw",
    "金涵": "https://www.aliyundrive.com/s/jj4VqbbLye3",
    "考研": "https://www.aliyundrive.com/s/K8S4NkpyxqG",
    "尹航": "https://www.aliyundrive.com/s/eQtQGS8eKBp",
    "王圣果": "https://www.aliyundrive.com/s/XXZYz66KDmW",
    "赵悦竹": "https://www.aliyundrive.com/s/1ArpBpGEMTQ",
    "未分类": "https://www.aliyundrive.com/s/RCeQgj42ft5"
};

function Redirect(ID,BOA) {
    if(BOA==="百度"){
        alert("提取码："+BaiduFileLinkPassword[ID])
        window.open(BaiduFilesLink[ID])
    }else if(BOA==="阿里"){
        window.open(AliFilesLink[ID])
    }
}