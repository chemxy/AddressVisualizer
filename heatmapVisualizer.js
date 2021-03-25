var fs = require("fs"); //nodejs file server

AMapLoader.load({ //首次调用 load
    key: '5ca8dd800c739457ccb43c4cf5b900e4',//首次load key为必填
    version: '1.4.15',
    Loca: {
        version: '1.3.2',
    }
}).then((AMap) => {
    map = new AMap.Map('heatMap', {
        zoom: 11,
        mapStyle: 'amap://styles/grey',
        center: [104.773447, 29.352765],//中心点坐标
        resizeEnable: true
    });

    // read and parse a Json data file
    var geodata = require("./geodata.json");
    // console.log(geodata);

    /* heat map layer */
    var layer = new Loca.HeatmapLayer({
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


    layer.setData(heatMapList, {
        lnglat: 'lnglat',
        value: 'count'
    });

    layer.setOptions({
        style: {
            radius: 10,
            // color: {
            //     0.5: '#2c7bb6',
            //     0.65: '#abd9e9',
            //     0.7: '#ffffbf',
            //     0.9: '#fde468',
            //     1.0: '#d7191c'
            // }
            color: {
                0.1: '#ffffcc',
                0.2: '#ffeda0',
                0.3: '#fed976',
                0.4: '#feb24c',
                0.5: '#fd8d3c',
                0.6: '#fc4e2a',
                0.7: '#e31a1c',
                0.8: '#bd0026',
                0.9: '#800026'

            }
        }
    });

    layer.render();
}).catch((e) => {
    console.log(e);
});