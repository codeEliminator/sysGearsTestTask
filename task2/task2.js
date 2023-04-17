import fs from 'fs';
import data from './input.json' assert {type: "json"};
let outputData = []
let task2 = () => {
    data.forEach(arr => {
        let countItems = {};    
        let result = {
            arr: arr,
            repeatNumOfArray: []
        }
        for (let i = 0; i < arr.length; i++) {
            if (countItems[arr[i]] !== undefined) {
                result.repeatNumOfArray.push(arr[i]);
            } else {
                countItems[arr[i]] = i;
            }
        }
        
        outputData.push(result)
    })

    fs.writeFileSync('./task2/output.json', JSON.stringify(outputData))
}

export default task2