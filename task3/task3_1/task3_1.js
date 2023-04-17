import fs from 'fs';
import data from './input.json' assert {type: "json"};
let outputData = []

function minWeightForRecord(recordWeight) {
    const kgWeights = [0.5, 1, 2.5, 5, 10, 15, 20, 25]
    const lbWeights = [10, 25, 35, 45]
    const barWeight = 20
    const maxDiscs = 12
    let bestWeight

    for (let i = 0; i <= maxDiscs; i++) {
        for (let j = 0; j <= maxDiscs; j++) {
            for (let kg = 0; kg < kgWeights.length; kg++) {
                for (let lb = 0; lb < lbWeights.length; lb++) {
                    const weight = barWeight + i * kgWeights[kg] + j * lbWeights[lb] * 0.453592
                    if (weight > recordWeight && weight < bestWeight) {
                        bestWeight = weight
                    }
                }
            }
        }
    }

  outputData.push(bestWeight);
}

let task3_1 = () => {
    data.forEach(item => {
        minWeightForRecord(item)
    })
    fs.writeFileSync('./task3/task3_1/output.json', JSON.stringify(outputData))
}

export default task3_1