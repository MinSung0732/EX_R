document.getElementById("atk_btn");
document.getElementById("run_btn");
document.getElementById("guard_btn");
document.getElementById("seea");
document.getElementById("turnbtn");
document.getElementById("background");
document.getElementById("healing");
var run_failed = 0;
var de = 0;

// 텍스트 화면 출력
function tv(s, targetElement) {
    if (targetElement) {
        targetElement.value += s;
        scscrolltop(targetElement);
    }
}
function updateScreen(s, targetElement) {
    tv(s, targetElement);
}
// 현재 위치의 나오는 몬스터 보여주기
function disNowRoomMonsterInfo(){
    var currentRoomMonsterArray = getCurrentRoomMonsters();
    var monsterString = "";
    for(let i=0; i<currentRoomMonsterArray.length; i++){
        console.log(currentRoomMonsterArray[i].name);
        monsterString = monsterString + currentRoomMonsterArray[i].getInfo();
    }
    tv(monsterString, t4);
}
// 위치 정보창
function displayRoomInfo(){
    getCurrentRoomObject().disroominfo();
    disNowRoomMonsterInfo();
}
// 화면 지우개
function tvclear(targetElement) {
    targetElement.value = "";
}
// 스크롤 위치 변경
function scscrolltop(element) {
    element.scrollTop = element.scrollHeight;
}