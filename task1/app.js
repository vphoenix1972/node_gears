const fs = require('fs');

const MAP_FILE_PATH = 'map.data';
const RESULT_FILE_PATH = 'result.json';

// Run

const dataStr = fs.readFileSync(MAP_FILE_PATH, 'utf8');

const jsonStartIndex = dataStr.indexOf('{');

const dataJson = dataStr.substring(jsonStartIndex);

const mapObj = JSON.parse(dataJson);

const result = mapObj.features.map((feature) => {
    const resultItem = {};

    resultItem.name = feature.properties.name;

    resultItem['hc-key'] = feature.properties['hc-key'];

    return resultItem;
});

const resultJson = JSON.stringify(result, null, 4);

fs.writeFileSync(RESULT_FILE_PATH, resultJson, { encoding: 'utf8' });