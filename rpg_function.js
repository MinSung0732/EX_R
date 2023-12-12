
// 자신과 적군 정보
function dsci(){
    tv("=======================================================================================\n", t);
    elf.info();
    mon.info();
    tv("\n=======================================================================================", t);
}
// 보상 획득
function getReward(){
    elf.gold = elf.gold + mon.gold;
    tv("💰"+Math.floor(mon.gold) + " G를 획득하셨습니다.\n", t);
}
// 레벨업 트리거
function levelup(){
    tv("\nLEVEL UP !!!", t);
    tv("\n💗최대체력 + "+Math.floor((20+(elf.lvl*5))), t);
    tv("\n🔪공격력 + "+(1+(elf.lvl*0.08)).toFixed(1), t);
    tv("\n🛡️방어력 + 0.2", t);
    tv("\n💥치명율 + 0.1%", t);
    tv("\n🔋최대 경험치량 + "+Math.floor((10+(elf.lvl*30))), t);

    elf.maxhp = elf.maxhp + (20+(elf.lvl*5));
    elf.hp = elf.maxhp;
    elf.atk = elf.atk + (1+(elf.lvl*0.08));
    elf.def = elf.def + 0.2;
    elf.cri = elf.cri + 0.1;
    elf.exp = elf.exp - elf.maxexp;
    elf.maxexp = elf.maxexp + (10+(elf.lvl*30));
    elf.lvl = elf.lvl + 1;
    tvclear(t3);
    elf.status2();
}
// 회복하기
function heal(){
    if(elf.hp < elf.maxhp){
        if(elf.gold >=(100+(Math.floor(elf.maxhp/70))+(elf.lvl*35))){
            elf.gold = elf.gold - (100+(Math.floor(elf.maxhp/70))+(elf.lvl*35));
            elf.hp = elf.maxhp;
            document.getElementById("mee").src = "me.png";
            tv("\n💰"+(100+((Math.floor(elf.maxhp/70))+(elf.lvl*35)))+" G 만큼 지불하고 💕체력을 회복했습니다.\n", t);
            tvclear(t3);
            elf.status2();
        }else{
            tv("\n💰금액이 모자랍니다. "+ (100+(Math.floor(elf.maxhp/70))+(elf.lvl*35)) +"G 만큼 필요합니다.\n", t);
        }
    }else{
        tv("\n💗체력이 가득 차있습니다.\n", t);
    }
}
// 공격력값 랜덤 트리거
function rd(atk){
    var random = Math.floor(Math.random()*(atk*0.5));
    return random;
}
// 현재 위치 id를 가지면 해당 방 객체를 가져온다.
function getCurrentRoomObject(){
    for(let i=0; i<roomArray.length;i++){
        if(roomArray[i].id == currentRoomId){
            return roomArray[i];
        }
    }
}
function useee(){
    useItem();
}

///////////////////////////////////////////////
// 몬스터 room id 가 맞을시 배열로 추가
function getCurrentRoomMonsters(){
    var currentRoomMonsters = new Array();
    for(let i=0; i<monsterArray.length; i++){
        if(monsterArray[i].room == currentRoomId){
            currentRoomMonsters.push(monsterArray[i]);
        }
    }
    return currentRoomMonsters;
}
function getCurrentRoom(roomArray) {
    var currentRoom = new Array();
    for (let i = 0; i < roomArray.length; i++) {
        if (roomArray[i].id == currentRoomId) {
            currentRoom.push(roomArray[i]);
        }
    }
    return currentRoom;
}


// 키보드 단축키 기능
document.addEventListener('keydown', function(event){
    switch (event.key){
        case 'w':
            if(document.getElementById("north").disabled == false){
                move("북");
            }
            break;
        case 'a':
            if(document.getElementById("west").disabled == false){
                move("서");
            }
            break;
        case 's':
            if(document.getElementById("south").disabled == false){
                move("남");
            }
            break;
        case 'd':
            if(document.getElementById("east").disabled == false){
                move("동");
            }
            break;
        case 'z':
            if(document.getElementById("up").disabled == false){
                move("위");
            }
            break;
        case 'c':
            if(document.getElementById("down").disabled == false){
                move("밑");
            }
            break;
        case 'q':
            if(document.getElementById("atk_btn").disabled == false){
                atk_turn();
            }
            break;
        case 'e':
            if(document.getElementById("guard_btn").disabled == false){
                guard_turn();
            }
            break;
        case 'r':
            if(document.getElementById("run_btn").disabled == false){
                runtoyou();
            }
            break;
        case 'f':
            if(document.getElementById("seea").disabled == false){
                search();
            }
            break;
        case 'h':
            if(document.getElementById("healing").disabled == false){
                heal();
            }
            break;
    }
});

// 초기화 버튼
function clear2() {
    location.reload();
}