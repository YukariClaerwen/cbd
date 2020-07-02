function UserList(){
    this.DS = [];
    this.AddUser = function(user){
        this.DS.push(user);
    }
    this.DeleteUser = function(account){
        var index = this.SearchUserByAccount(account);
        console.log(index)
        this.DS.splice(index,1);
    }
    this.EditUser = function(editUser){
        var index = this.SearchUserById(editUser.id);
        this.DS[index].Hoten = editUser.hoten;
        this.DS[index].Email = editUser.email;
        this.DS[index].SoDT = editUser.SoDT;
    }
    this.EditDiem = function(user, diem){
        var index = this.SearchUserById(user.id);
        this.DS[index].diem = diem;
    }
    this.EditMK = function(id, mk){
        var index = this.SearchUserById(id);
        this.DS[index].matkhau = mk;
    }
    this.SearchUser = function(fullname){
        var _searchUserList = new UserList();
        var searchName = fullname.trim().toLowerCase();
       
        for(var i =0 ; i<this.DS.length;i++){
            if(this.DS[i].Hoten.trim().toLowerCase().search(searchName) !== -1){
                _searchUserList.DS.push(this.DS[i]);
            }
        }
        return _searchUserList.DS;
    }
    this.SearchUserById = function(account){
        for(var i = 0 ; i< this.DS.length;i++){
            if(account === this.DS[i].id){
                console.log(i);
                return i;
            }
        }
        
    }
}

function SanPhamList(){
    this.DS = [];
    this.AddSP = function(sp){
        this.DS.push(sp);
    }
    this.DeleteSP = function(id){
        var index = this.SearchSPById(id);
        this.DS.splice(index,1);
    }
    this.SearchSPById = function(id){
        for(var i = 0 ; i< this.DS.length;i++){
            if(id === this.DS[i].id){
                return i;
            }
        }
    }
}
function GioHang(){
    this.GH = [];
    this.AddSP = function(sp){
        this.GH.push(sp);
    }
}