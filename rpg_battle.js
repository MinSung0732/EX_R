var moveButtons = document.getElementsByClassName("move_btn");
document.getElementById("seea");




// 공격 (턴 진행)
function atk_turn() {
    tvclear(t3);
    elf.status2();
    if (currentMode == "전투") {
        atk_battle_turn();
        turncount++;
        turn_ee = "현재 턴: " + turncount;
        itturn.value = turn_ee;
    } else {
        turn_ee = "현재 턴: " + turncount;
        itturn.value = turn_ee;
    }
    if (elf.exp >= elf.maxexp) {
        levelup();
    }
}
// 전투 데미지 계산
function atk_battle_turn() {
    let playeratk = rd((elf.atk/2)) + elf.atk;
    let monsteratk = rd((mon.atk/2)) + mon.atk;
    let player_cri = Math.floor(Math.random() * 100);
    let monster_cri = Math.floor(Math.random() * 100);

    //체력 데미지 계산식
    if (run_failed == 1) {
        tv("\n================턴: " + turncount + " =================\n", t2);
        if (elf.def < monsteratk) {
            if (monster_cri <= mon.cri) {
                elf.hp = elf.hp - ((Math.floor(monsteratk * 1.5)) - elf.def);
                tv("[" + mon.name + "]: 🪓" + Math.floor(monsteratk * 1.5).toFixed(1) + " 만큼의 강력한 피해!💥", t2);
            } else {
                elf.hp = elf.hp - (monsteratk - elf.def);
                tv("[" + mon.name + "]: 🪓" + monsteratk.toFixed(1) + " 만큼의 피해❗를 가하였습니다.", t2);
            }
        } else if (elf.def >= monsteratk) {
            tv("[" + mon.name + "]: 공격이 막혔습니다.", t2);
        }
        tv("\n=======================================\n", t2);
        run_failed = 0;
        tvclear(t3);
        elf.status2();
    } else {
        tv("\n================턴: " + turncount + " =================\n", t2);
        if (mon.def < playeratk) {
            if (player_cri <= elf.cri) {
                mon.hp = mon.hp - ((Math.floor(playeratk * 1.5)) - mon.def);
                tv("[" + elf.name + "]: 🏹" + Math.floor(playeratk * 1.5).toFixed(1) + " 만큼의 강력한 피해!💥\n", t2);
            } else {
                mon.hp = mon.hp - (playeratk - mon.def);
                tv("[" + elf.name + "]: 🏹" + playeratk.toFixed(1) + " 만큼의 피해⚔️를 가하였습니다.\n", t2);
            }
        } else if (mon.def >= playeratk) {
            tv("[" + elf.name + "]: 공격이 막혔습니다.\n", t2);
        }
        if (elf.def < monsteratk) {
            if (monster_cri <= mon.cri) {
                elf.hp = elf.hp - ((Math.floor(monsteratk * 1.5)) - elf.def);
                tv("[" + mon.name + "]: 🪓" + Math.floor(monsteratk * 1.5).toFixed(1) + " 만큼의 강력한 피해!💥", t2);
            } else {
                elf.hp = elf.hp - (monsteratk - elf.def);
                tv("[" + mon.name + "]: 🪓" + monsteratk.toFixed(1) + " 만큼의 피해❗를 가하였습니다.", t2);
            }
        } else if (elf.def >= monsteratk) {
            tv("[" + mon.name + "]: 공격이 막혔습니다.", t2);
        }

        tv("\n=======================================\n", t2);
        tvclear(t3);
        elf.status2();
    }
    switch (de) {
        case 0:
            break;
        case 1:
            elf.def = elf.def - 10;
            de = 0;
            break;
        case 2:
            elf.def = elf.def - 50;
            de = 0;
            break;
    }
    //체력 검사
    if (elf.hp <= 0 || mon.hp <= 0) {
        end();
        return false;
    } else {
        tvclear(t);
        dsci();
        return true;
    }
}


// 이동 트리거
function move(direction) {
    var nowRoom = getCurrentRoomObject();
    var connectionRoomId = nowRoom.getIdByDirection(direction);

    if (connectionRoomId == 0) {
        tv("\n막혀있습니다.\n", t);
        return;
    } else {
        currentRoomId = connectionRoomId;
        console.log("현재 방번호:" + currentRoomId);
        var currentRoom = getCurrentRoom(roomArray);
        if (currentRoom.length > 0) {
        switch (currentRoom[0].relationship) {
            case "S":
                currentMode = "탐색";
                seea.disabled = false;
                healing.disabled = true;
                break;
            case "N":
                currentMode = "대기";
                seea.disabled = true;
                healing.disabled = true;
                break;
            case "H":
                currentMode = "대기";
                healing.disabled = false;
                healing.value = "💖치유(H)[💰 "+(100+(Math.floor(elf.maxhp/70))+(elf.lvl*35))+"]";
                break;
            default:
                currentMode = "대기";
                seea.disabled = true; // 기본값 처리
                break;
        }
        }else {
            console.error("현재 방 정보가 없습니다.");
        }
    }

    switch (direction) {
        case "동":
            tv("\n동쪽으로 이동했습니다.\n", t);
            break;
        case "서":
            tv("\n서쪽으로 이동했습니다.\n", t);
            break;
        case "남":
            tv("\n남쪽으로 이동했습니다.\n", t);
            break;
        case "북":
            tv("\n북쪽으로 이동했습니다.\n", t);
            break;
        case "위":
            tv("\n위쪽으로 이동했습니다.\n", t);
            break;
        case "밑":
            tv("\n아래쪽으로 이동했습니다.\n", t);
            break;
    }
    switch (currentRoomId){
        case 1000:
            background.style.backgroundImage = "url(forest_1.jpg)";
            background.style.backgroundSize = "cover";
            break;
        case 1001:
            background.style.backgroundImage = "url(forest_2.jpg)";
            break;
        case 1002:
            background.style.backgroundImage = "url(forest_3.jpg)";
            break;
        case 1003:
            background.style.backgroundImage = "url(troll_house.jpg)";
            background.style.backgroundSize = "cover";
            break;
        case 1004:
            background.style.backgroundImage = "url(forest_vine.jpg)";
            break;
        case 1005:
            background.style.backgroundImage = "url(forest_on_view.jpg)";
            break;
        case 1006:
            background.style.backgroundImage = "url(forest_underground_cave.jpg)";
            break;
        case 1007:
            background.style.backgroundImage = "url(forest_4.jpg)";
            break;
    }
    tvclear(t4);
    displayRoomInfo();
    tvclear(t3);
    elf.status2();
}

// 방어모드
function guard_turn() {
    var def_random = Math.floor(Math.random() * 10) + 1;

    switch (def_random) {
        case 1:
            tv("\n[" + elf.name + "]: ✨방어 대성공!", t2);
            de = 2;
            run_failed = 1;
            elf.def = elf.def + 50;
            tvclear(t3);
            elf.status2();
            atk_battle_turn();
            break;
        case 2:
            tv("\n[" + elf.name + "]: 💔방어 실패!", t2);
            run_failed = 1;
            tvclear(t3);
            elf.status2();
            atk_battle_turn();
            break;
        default:
            tv("\n[" + elf.name + "]: 🛡️방어", t2);
            de = 1;
            run_failed = 1;
            elf.def = elf.def + 10;
            tvclear(t3);
            elf.status2();
            atk_battle_turn();
            break;
    }
    turncount++;
    turn_ee = "현재 턴: " + turncount;
    itturn.value = turn_ee;
}
// 도망
function runtoyou() {
    if (mon.lvl > elf.lvl) {
        var run_random = Math.floor(Math.random() * 10) + 1;
        if (run_random <= 3) {
            currentMode = "탐색";
            tvclear(t);
            tv("\n[" + elf.name + "]: 💨도망치셨습니다.", t2);
            end();
        } else {
            run_failed = 1;
            tv("\n[" + elf.name + "]: 도주 실패!", t2);
            atk_battle_turn();
        }
    } else if (mon.lvl <= elf.lvl) {
        currentMode = "탐색";
        tvclear(t);
        tv("\n[" + elf.name + "]: 도망치셨습니다.", t2);
        end();
    }
    tvclear(t3);
    elf.status2();
}
// 전투 종료
function end() {

    turncount = 0;
    tv("\n\n>>>>🎉전투 종료🎉<<<<\n", t);
    if (mon.hp <= 0) {
        elf.exp = elf.exp + mon.exp;
        tv(mon.name + " 을(를) 처치하여 🔋" + Math.floor(mon.exp) + " 만큼 경험치를 획득하셨습니다.\n", t);
        getReward();
        currentMode = "탐색"; // 현재 모드를 비전투로 전환
        tvclear(t2);
    } else if (elf.hp <= 0) {
        tv(elf.name + " 님이 전투에서 패배\n💰" + Math.floor(elf.gold * 0.2) + " G와 🔋" + Math.floor(elf.exp * 0.1) + " 경험치를 잃어버렸습니다..", t);
        elf.hp = 1;
        currentMode = "전투 불능";
        document.getElementById("mee").src = "me_die.png";
        tvclear(t2);
        elf.gold = elf.gold * 0.8;
        elf.exp = elf.exp * 0.9;
    } else {

    }
    
    tvclear(t3);
    elf.status2();
    // document.getElementById("enemy").src = "enemy_basic.png";
    atk_btn.disabled = true;
    run_btn.disabled = true;
    guard_btn.disabled = true;
    seea.disabled = false;
    for (let i = 0; i < moveButtons.length; i++) {
        moveButtons[i].disabled = false;
    }
    mov = 0;
}