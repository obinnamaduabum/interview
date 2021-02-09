function addUpTo(n) {
    return n * (n + 1) / 2;
}

function sumOfNumberOfStrings(str) {

    let obj = {};

    for(let i = 0; i < str.length; i++) {

        let value = str[i];
        if(value !== " " && value !== undefined ) {
            let lowerCaseValue = value.toLowerCase();

            if (obj[lowerCaseValue] > 0) {
                obj[lowerCaseValue] += 1;
            } else {
                obj[lowerCaseValue] = 1;
            }
        }
    }

    return obj;

}

console.log(sumOfNumberOfStrings("Hower lokking into going oooo oh yeah"));
