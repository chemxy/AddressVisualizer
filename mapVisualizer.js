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
        resizeEnable: true,
        viewMode: '2D'
    });

    // read and parse a Json data file
    var geodata = require("./geodata.json");
    // console.log(geodata);

    /* heat map layer */
    var heatMapLayer = new Loca.HeatmapLayer({
        map: map,
    });

    var heatMapList = [];
    var i = -1, length = geodata.length;
    while (++i < length) {
        var item = geodata[i];
        heatMapList.push({
            lnglat: item.lnglat,
            count: item.count
        })
    }


    heatMapLayer.setData(heatMapList, {
        lnglat: 'lnglat',
        value: 'count'
    });

    heatMapLayer.setOptions({
        style: {
            radius: 15,
            color: {
                0.2: '#2c7bb6',
                0.4: '#abd9e9',
                0.6: '#ffffbf',
                0.8: '#fde468',
                1.0: '#d7191c'
            }
        }
    });

    /* massive scatter points layer */
    var ScatterPntMapLayer = new Loca.ScatterPointLayer({
        map: map,
        eventSupport: true,
    });

    /* load event listner */
    ScatterPntMapLayer.on('mousemove', function (ev) {
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

    ScatterPntMapLayer.on('mouseleave', function (ev) {
        closeInfoWin();
    });

    ScatterPntMapLayer.setData(geodata, {
        lnglat: 'lnglat'   // 指定坐标数据的来源，数据格式: 经度在前，纬度在后，数组格式。
    });

    // 配置样式
    ScatterPntMapLayer.setOptions({
        unit: 'px',
        style: {
            radius: 3,     // 圆形半径，单位像素
            color: '#14B4C9', // 填充颜色
            borderWidth: 1,   // 边框宽度
            borderColor: '#14B4C9',  // 边框颜色
            opacity: '0.8'

        }
    });

    ScatterPntMapLayer.render();
    heatMapLayer.render();

    ScatterPntMapLayer.hide();
    heatMapLayer.hide();

    var showPntMap = document.getElementById('showPntMap');
    var showHeatMap = document.getElementById('showHeatMap');
    var hideAllMap = document.getElementById('hideAllMap');
    var PntMapHidden = false;
    var heatMapHidden = false;

    showPntMap.onclick = function () {
        if (PntMapHidden == true) {
            console.log("show pnt map");
            ScatterPntMapLayer.show();
            PntMapHidden = false;
        }
        else {
            console.log("hide pnt map");
            ScatterPntMapLayer.hide();
            PntMapHidden = true;
        }
    }

    showHeatMap.onclick = function () {
        if (heatMapHidden == true) {
            console.log("show heat map");
            heatMapLayer.show();
            heatMapHidden = false;
        }
        else {
            console.log("hide pnt map");
            heatMapLayer.hide();
            heatMapHidden = true;
        }
    }
    hideAllMap.onclick = function () {
        console.log("hide all map");
        heatMapLayer.hide();
        ScatterPntMapLayer.hide();
        PntMapHidden = true;
        heatMapHidden = true;
    }
}).catch((e) => {
    console.log(e);
});