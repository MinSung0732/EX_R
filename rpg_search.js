var moveButtons = document.getElementsByClassName("move_btn");
var mov = 0;

// 탐색
function search(){
    if(currentMode == "탐색"){
        let simbol_in_count = Math.floor(Math.random()*100);
        tvclear(t);

        switch(mov){
            case 0:
                tv("주변의 흔적을 찾는중입니다.\n", t);
                mov++;
                break;
            case 1:
                tv("\n바람소리를 듣는중입니다...\n", t);
                mov++;
                break;
            case 2:
                tv("\n\n주위를 둘러보는중입니다....\n", t);
                mov = 0;
                break;
        }
        
        if(simbol_in_count<=30){
            tv("\n\n\n>>>>>>❗몬스터 출현❗<<<<<<\n", t);
            monster_re();
            dsci();
            turncount = 1;
            currentMode = "전투";
            tvclear(t3);
            elf.status2();
            atk_btn.disabled = false;
            run_btn.disabled = false;
            guard_btn.disabled = false;
            seea.disabled = true;
            for (let i = 0; i < moveButtons.length; i++) {
                moveButtons[i].disabled = true;
            }
            } else{
                tv("\n특별한것은 보이지 않는다.\n", t);
            }
    } else if(currentMode == "전투 불능"){
        tvclear(t);
        tv("\n지금은 전투가 불가능합니다.", t);
    } else if(currentMode == "대기"){
        tvclear(t);
        tv("\n탐색할게 없어보인다.", t);
    }
    
}
// 몬스터 출현
function monster_re(){
    let level;
    let monster_value;
    switch(currentRoomId){
        case 1001:
            level = Math.floor(Math.random()*5) + 1;
            mon = new monster(level,"👹[일반] 오크",level*35,level*35,level*2,0,0.5,100+(level*20),30+(level*20),0);
            // document.getElementById("enemy").src = "orc.png";
            break;
        case 1002:
            level = Math.floor(Math.random()*5) + 3;
            mon = new monster(level,"🌲[일반] 거목뿌리",level*45,level*45,level*4,8,50,150+(level*40),40+(level*35),0);
            break;
        case 1003:
            monster_value = Math.floor(Math.random()*8) + 1;
            if(monster_value == 1){
                level = Math.floor(Math.random()*5) + 20;
                mon = new monster(level,"🧟‍♀️[엘리트] 트롤",200+(level*70),200+(level*70),30+(level*7),level*1,17.3,1000+(level*50),800+(level*50),0);
                // document.getElementById("enemy").src = "elite_troll.png";
            }else{
                level = Math.floor(Math.random()*5) + 10;
                mon = new monster(level,"🧟‍♂️[일반] 트롤",level*50,level*50,10+(level*5),-3,30,50+(level*100),60+(level*35),0);
                // document.getElementById("enemy").src = "troll.png";
            }
            break;
        case 1004:
            monster_value = Math.floor(Math.random()*3) + 1;
            if(monster_value == 1){
                level = Math.floor(Math.random()*3) + 1;
                mon = new monster(level,"🌿[일반] 덩쿨뿌리",level*30,level*30,level*3,-10,0,20+(level*5),4+(level*3),0);
            }else if(monster_value == 2){
                level = Math.floor(Math.random()*5) + 5;
                mon = new monster(level,"🧚🏻‍♀️[일반] 이빨요정",level*50,level*50,level*8,3,25,70+(level*50),25+(level*20),0);
            }else if(monster_value == 3){
                level = Math.floor(Math.random()*6) + 9;
                mon = new monster(level,"🧚🏾‍♀️[견습] 이빨요정",level*65,level*65,10+(level*3),5,35,110+(level*60),70+(level*30),0);
            }
            break;
        default:
            end();
            break;
    }
}