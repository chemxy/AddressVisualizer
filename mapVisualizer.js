(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports=[{"lnglat":"104.777191,29.337430","name":"四川省自贡市自流井区","count":2},{"lnglat":"104.751569,29.347227","name":"四川省自贡市自流井区塘湾","count":1},{"lnglat":"104.795348,29.350397","name":"四川省自贡市大安区金胜","count":1},{"lnglat":"104.753398,29.324150","name":"四川省自贡市自流井区上书房","count":1},{"lnglat":"104.755343,29.348601","name":"四川省自贡市自流井区牛石山","count":1},{"lnglat":"104.359689,29.438876","name":"四川省自贡市荣县石碓窝村","count":1},{"lnglat":"104.679823,29.316018","name":"四川省自贡市自流井区白果","count":1},{"lnglat":"104.898939,29.117778","name":"四川省自贡市富顺县巨元村","count":1},{"lnglat":"104.592244,29.362521","name":"四川省自贡市贡井区旭东村","count":1},{"lnglat":"104.775768,29.340954","name":"四川省自贡市自流井区丹桂街道","count":1},{"lnglat":"104.874682,29.067347","name":"四川省自贡市富顺县彭庙镇","count":1},{"lnglat":"104.790037,29.170673","name":"四川省自贡市沿滩区八一村","count":1},{"lnglat":"105.145041,29.214531","name":"四川省自贡市富顺县新华街|103号","count":1},{"lnglat":"104.764511,29.344444","name":"四川省自贡市自流井区富台山路|18号","count":1},{"lnglat":"104.779136,29.375056","name":"四川省自贡市大安区大高路","count":1},{"lnglat":"104.773346,29.357885","name":"四川省自贡市自流井区豆芽湾|12栋","count":1},{"lnglat":"104.715117,29.345546","name":"四川省自贡市贡井区","count":1},{"lnglat":"104.763802,29.341360","name":"四川省自贡市自流井区泽利大厦","count":1},{"lnglat":"104.781631,29.362319","name":"四川省自贡市大安区邮政所","count":1},{"lnglat":"104.783054,29.329956","name":"四川省自贡市自流井区高笋塘小区|17栋","count":1},{"lnglat":"104.778414,29.335664","name":"四川省自贡市自流井区丹桂大街|541","count":3},{"lnglat":"104.760789,29.168721","name":"四川省自贡市沿滩区新和村","count":1},{"lnglat":"104.773968,29.363634","name":"四川省自贡市大安区","count":1},{"lnglat":"104.716674,29.346244","name":"四川省自贡市贡井区筱溪街","count":1},{"lnglat":"104.777597,29.341769","name":"四川省自贡市自流井区恒大名都","count":1},{"lnglat":"104.431501,29.457244","name":"四川省自贡市荣县望佛街|6|附4号","count":1},{"lnglat":"104.988851,29.214101","name":"四川省自贡市富顺县跃进村","count":1},{"lnglat":"105.025832,29.373871","name":"四川省自贡市大安区牛佛镇新街","count":1},{"lnglat":"104.770766,29.361775","name":"四川省自贡市自流井区黄桷坪路|2号","count":1},{"lnglat":"104.877087,29.272546","name":"四川省自贡市贡井区广场路|1栋","count":1},{"lnglat":"104.769665,29.362308","name":"四川省自贡市自流井区黄桷坪路|150号","count":1},{"lnglat":"104.599593,29.364084","name":"四川省自贡市贡井区建设村","count":1},{"lnglat":"104.767994,29.357550","name":"四川省自贡市自流井区珍珠寺路|372号","count":1},{"lnglat":"104.998192,29.184746","name":"四川省自贡市富顺县罗浮洞新村","count":1},{"lnglat":"104.783473,29.370118","name":"四川省自贡市大安区大安街|121号","count":1},{"lnglat":"104.785454,29.343967","name":"四川省自贡市自流井区伍家坝路","count":1},{"lnglat":"104.774708,29.350714","name":"四川省自贡市自流井区兴隆坳","count":1},{"lnglat":"104.772389,29.363911","name":"四川省自贡市大安区华光里|5栋","count":2},{"lnglat":"104.770486,29.334049","name":"四川省自贡市自流井区中昊黑元化工研究设计院有限公司","count":1},{"lnglat":"104.776399,29.336914","name":"四川省自贡市自流井区银桦小区","count":1},{"lnglat":"104.764279,29.357948","name":"四川省自贡市自流井区天花井路","count":1},{"lnglat":"104.776212,29.345437","name":"四川省自贡市自流井区海关后门","count":1}]
},{}],3:[function(require,module,exports){
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
},{"./geodata.json":2,"fs":1}]},{},[3]);
