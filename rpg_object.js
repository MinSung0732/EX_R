var currentMode = "대기";

function character(lvl,name,maxhp,hp,atk,def,cri,exp,maxexp,gold){
    this.lvl = lvl;
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.cri = cri;
    this.exp = exp;
    this.maxexp = maxexp;
    this.gold = gold;
    this.info = function(){
        
        tv("[이름: "+this.name+"]\n", t);
        tv("[💗체력:"+Math.floor(this.hp)+"/"+Math.floor(this.maxhp)+"]\n\n\n", t);

    }
    this.status2 = function(){
        
        tv("[캐릭터: "+this.name+"]", t3);
        tv("\n[Lv: "+this.lvl+"]", t3);
        tv("\n[💗체력: "+Math.floor(this.hp)+"/"+Math.floor(this.maxhp)+"]", t3);
        tv("\n[🔋경험치: "+Math.floor(this.exp)+"/"+this.maxexp+"]", t3);
        tv("\n[💰골드: "+Math.floor(this.gold)+" G]", t3);
        tv("\n\n[🔪공격력: "+this.atk.toFixed(1)+"]", t3);
        tv("\n[🛡️방어력: "+this.def.toFixed(1)+"]", t3);
        tv("\n[💥치명율: "+this.cri.toFixed(1)+"%]", t3);
        tv("\n\n[현재 상태: "+currentMode+"]", t3);

        this.inventory = new Inventory();

        this.showInventory = function() {
            const items = this.inventory.checkInventory();
            tv("\n[인벤토리]>\n\n", t5);
            for (const item of items) {
                tv(`- ${item.name}: ${item.description} (${item.usability})\n`, t5);
            }
        }
    }
}

function monster(lvl,name,maxhp,hp,atk,def,cri,exp,gold,room){
    this.lvl = lvl;
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.cri = cri;
    this.exp = exp;
    this.gold = gold;
    this.room = room;
    this.info = function(){

        tv("[이름: "+this.name+"]\n", t);
        tv("[Lv: "+this.lvl+"]\n", t);
        tv("[💗체력:"+Math.floor(this.hp)+"/"+Math.floor(this.maxhp)+"]\n", t);
        tv("[🔪공격력: "+this.atk+"]\n", t);
        tv("[🛡️방어력: "+this.def+"]\n", t);
        tv("[💥치명율: "+this.cri+"%]", t);
    }
    this.getInfo = function(){
        return "\n[출현 몬스터]\n[이름: "+this.name+"]";
    }
}