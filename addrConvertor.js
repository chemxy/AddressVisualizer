// read & store a json 
const fetch = require('node-fetch');
const fs = require('fs');
const xlsx = require('xlsx');

//declare const variable
const key = '53dce28e8ef3eb2bd7bc1f281742937d';
const url = new URL('https://restapi.amap.com/v3/geocode/geo?');
const xlsxFile = '地址样本.xlsx';
var datalist = [];
var newData = {};
var recordCount = 0;

//read excel file and extract addresses
var workbook = xlsx.readFile(xlsxFile);
var sheets = workbook.SheetNames;
var xlsxData = xlsx.utils.sheet_to_json(workbook.Sheets[sheets[0]]);



for (i in xlsxData) {
    var eachRecord = xlsxData[i];
    // console.log(eachRecord);
    // console.log(eachRecord.address);
    var requestParams = {
        'key': key,
        'address': eachRecord.地址
    }

    fetch(url + new URLSearchParams(requestParams))
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
            var convertedDataName = promiseJson.geocodes[0].formatted_address;
            var convertedDataLnglat = promiseJson.geocodes[0].location;
            var count = 1;
            // console.log("\n\ndata json-----------")
            // console.log(newData);
            newData = {
                "lnglat": convertedDataLnglat,
                "name": convertedDataName,
                "count": count
            }
            //if the data list is initially empty, then write data into the list

            for (i in datalist) {
                var item = datalist[i];
                // console.log(item)
                // console.log(item.lnglat);
                // console.log(newData.lnglat);
                if (item.lnglat == newData.lnglat) {
                    console.log("data already exists. add count by 1.");
                    item.count += 1;
                    recordCount++;
                    return;
                }
            }
            datalist.push(newData);
            recordCount++;

        })
        .then(function () {
            // console.log(datalist);
            var updatedData = JSON.stringify(datalist, "\t"); //convert it back to json
            fs.writeFile("geodata.json", updatedData, function (err) {
                if (err) {
                    throw err;
                }
                console.log("data saved/updated");
            }); // write all data to json file

        })
        .then(function () {
            console.log("total record: " + recordCount);
        })
        .catch(function (error) {
            console.log(error);
        });

}










