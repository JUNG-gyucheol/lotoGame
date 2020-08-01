// var 후보군 = Array(45);
// var 필 = 후보군.fill();
// console.log(필);

var 맵 = Array(45).fill().map(function (요소, 인덱스) {
    return 인덱스 + 1;
});
console.log(맵);

var 셔플 = [];
while (맵.length > 0) {
    var 이동값 = 맵.slice(Math.floor(Math.random() * 맵.length), 1)[0];
    셔플.push(이동값);
}
console.log(셔플);
var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플.slice(0, 6);
//sort 뺀값이 0보다 크면 자리를 바꾼다.
console.log('당첨숫자들 : ' + 당첨숫자들.sort(function (p, c) {
    return p - c;
}) + '보너스 : ' + 보너스);

var 결과창 = document.getElementById('result');

for (var i =0 ; i<당첨숫자들.length; i += 1){
    var 공 = document.createElement('div');
    공.textContent = 당첨숫자들[i];
    결과창.appendChild(공);
}