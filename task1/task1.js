import fs from 'fs';
import data from './input.json' assert {type: "json"};

let outputData = [];

let task1 = () => {
    data.forEach((item) =>{
        let result = {
            from: item.from,
            to: item.to,
            possible: false
        }
        if(item.from * 2 == item.to)
            result.possible = true
        else if (`${item.from}1` == item.to)
            result.possible = true
        
        outputData.push(result)
    });
    fs.writeFileSync("./task1/output.json", JSON.stringify(outputData), (err) => {
        if (err) throw err
    })
    
}
export default task1