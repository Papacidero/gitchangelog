import fs from 'fs';

var output = fs.readFileSync('icheck-changelog.txt', 'utf8');

let getRadar = (item)=> {
    return item.match(/\[bug\]|\[enhancement\]|\[task\]|\(tag:/gi);
}

output = output.split('\n')
    .filter((item) => {
        return getRadar(item);
    })
    .map((item) => {
        if (item.match(/\(tag:/gi)) {
            return 'TAG: ======================== '+ item;
        }
        else {
            return item;
        }
    });
;

console.log(output);