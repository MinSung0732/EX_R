// 텍스트 영역
var t; // 메인
var t2; // 전투스크린
var t3; // 정보창
var t4; // 던전 정보
var t5; // 인벤토리

var str = "";
var str2 = "";
var str3 = "";
var str4 = "";
var str5 = "";
var save = "";

var elf = new character(1,"🧚‍♀️엘프",200,200,17,5,40,0,200,0);
var turncount = 1;
var turn_ee = "턴: "+turncount;
var itturn;

var roomA = new Room("숲 동부","동부쪽 숲이다, 깊어보이진 않는다.",1000,1001,0,0,0,0,0,"N");
var roomB = new Room("숲 안쪽","안쪽으로 좀더 들어왔다. 오크들이 나온다는 소문이...",1001,1002,1000,0,0,0,0,"S");
var roomC = new Room("숲 깊은곳","우거진 숲이 시야를 가리고있다.",1002,1007,1001,1004,1003,1005,1006,"S");
var roomD = new Room("트롤 주거지","여기저기서 트롤들의 노랫소리가 들려온다.",1003,0,0,1002,0,0,0,"S");
var roomE = new Room("덩쿨 주의보","빼곡하게 차있는 나무들 사이사이 덩쿨들을 조심해야겠어.",1004,0,0,0,1002,0,0,"S");
var roomF = new Room("곧게 뻗은 나무","나무를 타고 올라오니 넓은 숲이 땅을 감싸고 있습니다.",1005,0,0,0,0,0,1002,"N");
var roomG = new Room("지하동굴","숲 아래에 보이지않던 동굴을 찾아냈습니다.",1006,0,0,0,0,1002,0,"N");
var roomH = new Room("🏞️정령 샘","맑고 청아한 물이 담겨져있는 샘을 발견했습니다.",1007,0,1002,0,0,0,0,"H");
var currentRoomId = 1000;
var roomArray = [
    new Room("숲 동부","동부쪽 숲이다, 깊어보이진 않는다.",1000,1001,0,0,0,0,0,"N"),
    new Room("숲 안쪽","안쪽으로 좀더 들어왔다. 오크들이 나온다는 소문이...",1001,1002,1000,0,0,0,0,"S"),
    new Room("숲 깊은곳","우거진 숲이 시야를 가리고있다.",1002,1007,1001,1004,1003,1005,1006,"S"),
    new Room("트롤 주거지","여기저기서 트롤들의 노랫소리가 들려온다.",1003,0,0,1002,0,0,0,"S"),
    new Room("덩쿨 주의보","빼곡하게 차있는 나무들 사이사이 덩쿨들을 조심해야겠어.",1004,0,0,0,1002,0,0,"S"),
    new Room("곧게 뻗은 나무","나무를 타고 올라오니 넓은 숲이 땅을 감싸고 있습니다.",1005,0,0,0,0,0,1002,"N"),
    new Room("지하동굴","숲 아래에 보이지않던 동굴을 찾아냈습니다.",1006,0,0,0,0,1002,0,"N"),
    new Room("🏞️정령 샘","맑고 청아한 물이 담겨져있는 샘을 발견했습니다.\n잠시 쉬어가거나 💖치유를 할 수 있을것 같다.",1007,0,1002,0,0,0,0,"H")
];
var level = Math.floor(Math.random()*10) + 1;
var monsterArray = [
    mon = new monster(level,"👹오크",level*50,level*50,level*2,0,0.5,100+(level*20),100+(level*50),1001),
    mon = new monster(level,"🌲거목뿌리",level*75,level*75,level*4,8,50,150+(level*40),100+(level*75),1002),
    mon = new monster(level,"🧟‍♂️트롤",level*100,level*100,level*10,-3,30,50+(level*100),70+(level*100),1003),
    mon = new monster(level,"🧟‍♂️트롤",level*100,level*100,level*10,-3,30,50+(level*100),70+(level*100),1003),
    mon = new monster(level,"🌿덩쿨뿌리",level*100,level*100,level*10,-3,30,50+(level*100),70+(level*100),1004),
    mon = new monster(level,"🧚🏻‍♀️이빨요정",level*100,level*100,level*10,-3,30,50+(level*100),70+(level*100),1004)
];


window.onload = function(){
    t = document.getElementById("a");
    t2 = document.getElementById("b");
    t3 = document.getElementById("c");
    t4 = document.getElementById("d");
    t5 = document.getElementById("f");
    itturn = document.getElementById("turnbtn")

    elf.status2();
    displayRoomInfo();
   
    isSeeaEnabled = false;
    background.style.backgroundImage = "url(forest_1.jpg)";
    background.style.backgroundSize = "cover";
    seea.disabled = true;
    healing.disabled = true;

    const newItem = new Item("힐링 포션", "체력을 회복합니다.","사용 가능");
    elf.inventory.addItem(newItem);
    elf.showInventory();

}

