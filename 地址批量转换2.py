# pip install requests

import requests
import pandas as pd
import time
import sys

reload(sys)
sys.setdefaultencoding("utf-8")


def parse():
        datas = []
        totalListData = pd.read_csv('locs.csv')
        totalListDict = totalListData.to_dict('index')
        for i in range(0, len(totalListDict)):
                datas.append(
                    str(totalListDict[i]['centroidx']) + ',' + str(totalListDict[i]['centroidy']))
        return datas


def transform(location):
        parameters = {'coordsys': 'gps', 'locations': location,
            'key': '7ec25a9c6716bb26f0d25e9fdfa012b8'}
        base = 'http://restapi.amap.com/v3/assistant/coordinate/convert'
        response = requests.get(base, parameters)
        answer = response.json()
        return answer['locations']


def geocode(location):
        parameters = {'location': location,
            'key': '7ec25a9c6716bb26f0d25e9fdfa012b8'}
        base = 'http://restapi.amap.com/v3/geocode/regeo'
        response = requests.get(base, parameters)
        answer = response.json()
        return answer['regeocode']['addressComponent']['district'].encode('gbk', 'replace'), answer['regeocode']['formatted_address'].encode('gbk', 'replace')


if __name__ == '__main__':
               i = 0
               count = 0
               df = pd.DataFrame(columns=['location', 'detail'])
               # locations = parse(item)
               locations = parse()
               for location in locations:
                           dist, detail = geocode(transform(location))
                           df.loc[i] = [dist, detail]
                           i = i + 1
                df.to_csv('locdetail.csv', index =False)
