

function Room(roomName,desc,id,e,w,s,n,u,d,relationship){
    this.roomName = roomName;  // 방 이름
    this.desc = desc; // 방 설명
    this.id = id; // 방 id
    this.e = e; // 동쪽
    this.w = w; // 서쪽
    this.s = s; // 남쪽
    this.n = n; // 북쪽
    this.u = u; // 위
    this.d = d; // 아래
    this.relationship = relationship;

    this.disroominfo = function(){
        tv("[🧭현재 위치]: "+this.roomName+"\n", t4);
        tv("\n["+this.desc+"]\n", t4);
        tv(this.getRoomEnter()+"\n", t4);
    }

    this.getRoomEnter = function(){
        var enters = "\n출구: [";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        if(u != 0){
            enters = enters + " 위";
        }
        if(d != 0){
            enters = enters + " 밑";
        }
        enters = enters + " ]";
        return enters;
    }

    this.getIdByDirection = function(direction){
        switch(direction){
            case "동":
                return e;
            case "서":
                return w;
            case "남":
                return s;
            case "북":
                return n;
            case "위":
                return u;
            case "밑":
                return d;
        }
    }
}