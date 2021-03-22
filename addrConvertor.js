// read & store a json 
const fetch = require('node-fetch');
const fs = require('fs');
const xlsx = require('xlsx');

//declare const variable
const key = '53dce28e8ef3eb2bd7bc1f281742937d';
const url = new URL('https://restapi.amap.com/v3/geocode/geo?');


//read excel file and extract addresses
var workbook = xlsx.readFile('address.xlsx');
var sheets = workbook.SheetNames;
var xlsxData = xlsx.utils.sheet_to_json(workbook.Sheets[sheets[0]]);
// console.log(xlsxData);

// var newData = {
//     "lnglat": [],
//     "name": "",
//     "style": 2
// }

var datalist = [];

for (i in xlsxData) {
    var item = xlsxData[i];
    // console.log(item);
    // console.log(item.address);
    var params = {
        'key': key,
        'address': item.address
    }
    // console.log("params:--------------");
    // console.log(params);

    // convert the plain text data to geographical data using map api - geocoder
    // var req = url + new URLSearchParams(params);
    // console.log(req);

    fetch(url + new URLSearchParams(params))
        .then(function (promise) {
            console.log("requesting promise.json from geocoder map api----------");
            // console.log(promise);
            return promise.json();
        })
        .then(function (promiseJson) {
            console.log("promise.json requested from geocoder map api------------");
            // console.log(promiseJson);
            // console.log(promiseJson.geocodes[0].formatted_address);
            // console.log(promiseJson.geocodes[0].location);
            var newDataName = promiseJson.geocodes[0].formatted_address;
            var newDataLnglat = promiseJson.geocodes[0].location;
            // console.log("\n\ndata json-----------")
            // console.log(newData);

            var newData = {
                "lnglat": newDataLnglat,
                "name": newDataName,

            }

            //write data into json file
            datalist.push(newData); //convert it back to json
            // return data;
        })
        .then(function () {
            console.log(datalist);
            var updatedData = JSON.stringify(datalist, "\t"); //convert it back to json
            fs.writeFile("geodata.json", updatedData, function (err) {
                if (err) {
                    throw err;
                }
                console.log("data saved/updated");
            }); // write all data to json file

        })
        .catch(function (error) {
            console.log(error);
        });

}










