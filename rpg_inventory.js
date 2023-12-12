function Item(name, description, usability){
    this.name = name;
    this.description = description;
    this.usability = usability;

    this.useItem = function(character) {

    };
}

function Inventory(){
    this.items = [];

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1){
            this.items.splice(index, 1);
        }
    }

    this.useItem = function(item, character) {
        if(item.usability == "사용 가능"){
            item.useItem(character);
            this.removeItem(item);
        } else {
            tv(`\n[${item.name}]은(는) 사용할 수 없는 아이템입니다.\n`, t);
        }
    }

    this.checkInventory = function() {
        return this.items;
    }
}

function useItem() {
    const items = elf.inventory.checkInventory();
    if (items.length > 0) {
        tv("\n[인벤토리]\n\n", t5);
        for (let i =0; i < items.length; i++){
            tv(`${i + 1}. ${items[i].name}: ${items[i].description} (${items[i].usability})\n`, t5);
        }
        const selectedIndex = prompt("사용할 아이템을 선택하세요 (숫자 입력) ");
        const selectedIdx = parseInt(selectedIndex) - 1;
        const selectedItem = items[selectedIdx];
        if (selectedItem) {
            elf.inventory.useItem(selectedItem, elf);
        }
    } else{
        tv("\n[인벤토리가 비어있습니다.]\n", t5);
    }
}



