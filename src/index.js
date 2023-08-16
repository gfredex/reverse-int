module.exports = function reverse(n) {

    let newNum = '';
    let strNum = String(Math.abs(n));
    for (i = strNum.length - 1; i >= 0; i--) {
        newNum += strNum[i];
    }

    return +newNum;
}
