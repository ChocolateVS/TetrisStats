let countArr = [0, 0, 0, 0, 0, 0, 0];
let pArr = [0, 0, 0, 0, 0, 0, 0];
let peices = 0;
function peice(val) {
    peices++;
    countArr[val]++;
    for (i = 0; i < countArr.length; i++){
        pArr[i] = Math.round((countArr[i]/peices)*100);
        document.getElementById("output" + i).innerHTML = pArr[i] + "% <br> Count: " + countArr[i];
    }
}