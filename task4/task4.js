import fs from 'fs'
import data from './input.json' assert {type: "json"};
function findGoodPlaces(scene) {
    const places = [];
    let positions = 0;
  
    for (let i = 0; i < scene.length; i++) {
      for (let j = 0; j < scene[i].length; j++) {
        if (!scene[i][j]) {
          for (let k = 0; k < scene[i].length; k++) {
            if (scene[i][k] && k < j) {
              places.push({ x: i, y: j, direction: 'left' });
              k = j;
              continue;
            }
            if (scene[i][k] && k > j) {
              places.push({ x: i, y: j, direction: 'right' });
              break;
            }
          }
  
          for (let d = 0; d < scene.length; d++) {
            if (scene[d][j] && d < i) {
              places.push({ x: i, y: j, direction: 'top' });
              d = i;
              continue;
            }
            if (scene[d][j] && d > i) {
              places.push({ x: i, y: j, direction: 'bottom' });
              break;
            }
          }
        }
      }
    }
  
    fs.writeFileSync('./task4/output.json', JSON.stringify({ places, positions: places.length }));
}
  
let task4 = () => {
    findGoodPlaces(data)
}
export default task4
  