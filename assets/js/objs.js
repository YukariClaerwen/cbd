function User(Id,Email,Matkhau,Hoten, SoDT, diem){
    this.id=Id;
    this.email = Email;
    this.matkhau = Matkhau;
    this.hoten = Hoten;
    this.SoDT = SoDT;
    this.diem = diem;
}

function SanPham(Id, ten, giaS, giaG, img){
    this.id = Id;
    this.ten = ten;
    this.giaS = giaS;
    this.giaG = giaG;
    this.img = img;
}

function SP(stt, ten, gia, img, soluong, topping){
    this.stt = stt;
    this.ten = ten;
    this.gia = gia;
    this.img = img;
    this.soluong = soluong;
    this.topping = topping;
}
