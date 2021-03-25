var fs = require("fs"); //nodejs file server

AMapLoader.load({ //首次调用 load
    key: '5ca8dd800c739457ccb43c4cf5b900e4',//首次load key为必填
    version: '1.4.15',
    Loca: {
        version: '1.3.2',
    }
}).then((AMap) => {
    map = new AMap.Map('scatterPntsMap', {
        zoom: 11,
        mapStyle: 'amap://styles/grey',
        center: [104.773447, 29.352765],//中心点坐标
        resizeEnable: true
    });

    // read and parse a Json data file
    var geodata = require("./geodata.json");
    // console.log(geodata);

    /* convertor a single address to a point on the map */
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
    /* end convertion */


    /* massive scatter points layer */
    const layer = new Loca.ScatterPointLayer({
        map: map,
        eventSupport: true,
    });

    /* load event listner */
    layer.on('mousemove', function (ev) {
        // 事件类型
        var type = ev.type;
        // 当前元素的原始数据
        var rawData = ev.rawData;
        // 原始鼠标事件
        var originalEvent = ev.originalEvent;

        openInfoWin(map, originalEvent, {
            '名称': rawData.name,
            '位置': rawData.lnglat,
            '个数': rawData.count
        });
    });

    layer.on('mouseleave', function (ev) {
        closeInfoWin();
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
            borderColor: '#14B4C9',  // 边框颜色
            opacity: '0.8'

        }
    });

    layer.render();
}).catch((e) => {
    console.log(e);
});