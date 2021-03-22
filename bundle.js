(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require("fs"); //nodejs file server

AMapLoader.load({ //首次调用 load
    key: '5ca8dd800c739457ccb43c4cf5b900e4',//首次load key为必填
    version: '1.4.15',
    Loca: {
        version: '1.3.2',
    }
}).then((AMap) => {
    map = new AMap.Map('container', {
        zoom: 11,
        mapStyle: 'amap://styles/grey',
        center: [104.773447, 29.352765],//中心点坐标
        resizeEnable: true
    });

    // read and parse a Json data file
    var geodata = require("./geodata.json");
    // console.log(geodata);

    /* address convertor */
    // var marker = new AMap.Marker();
    // AMap.plugin('AMap.Geocoder', function () {
    //     var geocoder = new AMap.Geocoder({
    //         // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
    //         city: "全国",
    //         batch: "true"
    //     });

    //     geocoder.getLocation('四川省自贡市自流井区高笋塘小区17栋1单元28号', function (status, result) {
    //         if (status === 'complete' && result.info === 'OK') {
    //             // result中对应详细地理坐标信息
    //             var lnglat = result.geocodes[0].location
    //             marker.setPosition(lnglat);
    //             map.add(marker);
    //             // map.setFitView(marker);
    //         }
    //     });

    // });
    /* end */

    /* massive pointes */
    // var mass = new AMap.MassMarks(citys, {
    //     opacity: 0.8,
    //     zIndex: 111,
    //     cursor: 'pointer',
    //     style: {
    //         url: 'https://webapi.amap.com/images/mass/mass0.png',
    //         anchor: new AMap.Pixel(3, 3),
    //         size: new AMap.Size(3, 3),
    //         zIndex: 3,
    //     }
    // });
    // var marker = new AMap.Marker({ content: ' ', map: map });
    // mass.setMap(map);
    /* end */


    /* massive pointes on Loca */
    const layer = new Loca.ScatterPointLayer({
        map: map
    });

    layer.setData(geodata, {
        lnglat: 'lnglat'   // 指定坐标数据的来源，数据格式: 经度在前，纬度在后，数组格式。
    });

    // 配置样式
    layer.setOptions({
        unit: 'px',
        style: {
            radius: 5,     // 圆形半径，单位像素
            color: '#14B4C9', // 填充颜色
            borderWidth: 0.5,   // 边框宽度
            borderColor: '#14B4C9'  // 边框颜色
        }
    });

    layer.render();

    /* end */
}).catch((e) => {
    console.log(e);
});
},{"./geodata.json":3,"fs":1}],3:[function(require,module,exports){
module.exports=[
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.776399,29.336914",
        "name": "四川省自贡市自流井区银桦小区"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.798725,29.348169",
        "name": "四川省自贡市自流井区鸿鹤路|43号"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.753558,29.327674",
        "name": "四川省自贡市大安区西林街"
    },
    {
        "lnglat": "104.783054,29.329956",
        "name": "四川省自贡市自流井区高笋塘小区|17栋"
    }
]
},{}]},{},[2]);
