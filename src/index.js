module.exports = function check(str, bracketsConfig) {
    let string = [];
    for (let i of bracketsConfig) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            string[j] = bracketsConfig[j][0] + bracketsConfig[j][1];
        }
        for (let z = 0; z < string.length; z++) {
            if (str.includes(string[z])) {
                str = str.replace(string[z], "");
                z = -1;
            }
        }
    }
    
   return str === "";
}
