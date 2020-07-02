var listUser = new UserList();

function addUser(email,password,fullname,phone){
    //kiểm tra đã có dữ liệu hay chưa, nếu có rồi, xét DS bằng với dữ liệu đã có, không thì trả mảng rỗng
    listUser.DS = getDataFromLocal("localUserList");
    //Lây dữ liệu từ form
    var id = listUser.DS.length + 1;
    var diem = 0;
    // var password = $('#txtMK').val();
    // password = md5(password);
    // var fullname = $('#txtHT').val();
    // var email = $('#txtEmail').val();
    // var phone = $('#txtPhone').val();
    // console.log(password);
    //tạo đối tượng user mới
    var user = new User(id,email,password,fullname,phone,diem);
    //add user vào mảng DS
    listUser.AddUser(user);
    //Lưu mảng DSND vào localstorage
    SaveLocalStorage(listUser.DS, "localUserList");
    //Gỉa sử hàm nhâp đúng
    // $('input').val(null);
    // $('.input-dang-ky').removeClass('input--filled');
    // swal({
    //     type: 'success',
    //     title: 'add Successfully',
    //     showConfirmButton: false,
    //     timer: 5000000
    // })
}
function editMK(id, mk){
    listUser.DS = getDataFromLocal("localUserList");
    listUser.EditMK(id, mk);
    SaveLocalStorage(listUser.DS, "localUserList");
}
function editUser(user) {
    listUser.DS = getDataFromLocal("localUserList");
    listUser.EditUser(user);
    SaveLocalStorage(listUser.DS, "localUserList");
}

var listSP = new SanPhamList();
function addSP(id, ten, giaS, giaG, img) {
    var sp = new SanPham(id,ten,giaS,giaG,img);
    listSP.AddSP(sp);
}
addSP("sp1", "Mr.Oreo", 39000, 55000, "001");
addSP("sp2", "Creme bruleez", 55000, 0, "002");
addSP("sp3", "Cheezcat", 55000, 0, "003");
addSP("sp4", "Caramel", 39000, 55000, "004");
addSP("topping1","Chip Chocolate", 7000, 0, null);
addSP("topping2","Chip mintchoco", 7000, 0, null);
addSP("topping3","Kem vanilla", 9000, 0, null);
addSP("topping4","Kem trà xanh", 9000, 0, null);
addSP("topping5","Kem chocolate", 9000, 0, null);
addSP("topping6","Trân châu trắng", 10000, 0, null);
addSP("topping7","Matcha Jelly", 7000, 0, null);

var GioHang = new GioHang();

function addGH(ten, gia, img, soluong, topping) {
    GioHang.GH = getDataFromLocal("localGioHang");
    var stt = GioHang.GH.length + 1;
    var sp = new SP(stt, ten, gia, img, soluong, topping);
    GioHang.AddSP(sp);
    SaveLocalStorage(GioHang.GH, "localGioHang");
}