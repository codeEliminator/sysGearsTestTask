import fs from 'fs';
import data from './input.json' assert {type: "json"};
let tShirtsSizes = {
    S: {
        quantity: 0,
    },  
    M:{
        quantity: 0,
    },
    L: {
        quantity: 0,
    },
    XL:{
        quantity: 0,
    },
    XXL:{
        quantity: 0,
    },
    XXXL:{
        quantity: 0,
    }
};
let outputData = []
let n = 0
let task3_2 = () => {
    let currItem = 0
    data.forEach(item => {
        currItem+=1
        n = item[0].n
        Object.keys(item[1]).forEach(el => {
            tShirtsSizes[el].quantity = item[1][el]
        })
        for(let i = 1; i < n + 1; i += 1){
            Array.isArray(item[0][i].preferedSize) ?  item[0][i].preferedSize.forEach(el => {
                tShirtsSizes[el].count += 1
            }) : tShirtsSizes[item[0][i].preferedSize].count += 1
        }
        let arr = []
        for(let i = 1; i < n + 1; i += 1){
            if(Array.isArray(item[0][i].preferedSize)){
                item[0][i].preferedSize.forEach(el=>{
                    let res = {}
                    if(tShirtsSizes[el].quantity != 0){
                        tShirtsSizes[el].quantity -= 1
                        res[i] = {gift: el, isPossible: true}
                        arr.push(res)
                    }
                    else{
                        let res = {}
                        res[i] = {isPossible: false}
                        arr.push(res)
                    }
                        
                })
            }
            else{
                if(tShirtsSizes[item[0][i].preferedSize].quantity != 0){
                    let res = {}
                    tShirtsSizes[item[0][i].preferedSize].quantity -= 1
                    res[i] = {gift: item[0][i].preferedSize, isPossible: true}
                    arr.push(res)
                }
                else{
                    let res = {}
                    res[i] = {isPossible: false}
                    arr.push(res)
                }   
            }
        }
        outputData.push(arr)
    })
    outputData = outputData.map((arr) => {
        return arr.filter((obj) => {
            return Object.values(obj).some((val) => {
              return val.isPossible === true;
            });
          });
    })
    outputData.forEach(item=>{
        let keys = item.reduce((acc, obj) => {
            return acc.concat(Object.keys(obj));
        }, []);
        Array.from({length: n}, (_, i) => i + 1).every(num => keys.includes(num.toString())) ? fs.writeFileSync('task3/task3_2/output.json', JSON.stringify({isPossible: true, values: item})) : null 
    })
}
export default task3_2