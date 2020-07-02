
/* --------------------------------------------------ĐĂNG KÝ----------------------------------------------------------------- */	

var listusers = getDataFromLocal("localUserList");
$("#btnTaoTaiKhoan").click(function(){
		var blank = false;
		var err="";
		var len= $("#fDangKy").find('input').length;
		for (var i = 0; i <len; i++) {
			if($("#fDangKy input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
				blank=true;
				break;
			}
			else
				blank=false;
			}
		if(blank == true){
			err="Vui lòng điền đầy đủ thông tin.\n";
		}
		else{
			if(checkphone($("#Phonen").val()) ==false || $("#Phonen").val().length!=10 )
				err+="Số điện thoại sai/ chưa đủ số.\n"
			if (!checkEmail($ ("#EmailRegister").val()))
				err+="Sai định dạng email.Vui lòng nhập lại.\n";
			if(checkPass($("#PasswordRegister1").val())==false)
				err+="Mật khẩu phải ít nhất 6 ký tự.\n";
			if(checkpass($("#PasswordRegister1").val(),$("#PasswordRegister2").val()) == false)
				err+="Mật khẩu nhập lại chưa đúng.\n";					
		}

		if(err!="")
			alert(err);
		else {
			//Lây dữ liệu từ form
			var password = $('#PasswordRegister1').val();
			// password = md5(password);
			var fullname = $('#Fullname').val();
			var email = $('#EmailRegister').val();
			var phone = $('#Phonen').val();
			// console.log(password);
			addUser(email,password,fullname,phone);
			$("#loginModal").modal("hide");
			alert("Bạn đã đăng ký thành công\nVui lòng đăng nhập.");
			
			location.reload();
		}
	});

	function checkEmail(email) {
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	return filter.test(email);
	}
	function checkpass(pass1,pass2) {
		if(pass1 != pass2)
			return false;
		else 
			return true;
	}

	function checkPass (pass) {
		if(pass.length<6)
			return false;
		else
			return true;
	}
	function checkphone(phone) {
		var phonenum=phone.substring(1);
		var firstphonenum=phone.substring(0,1);
		var Phone=/^\d{9}/;
		if ( Phone.test(phonenum)==false || firstphonenum!=0){
			return false;
		}
		else
			return true;			
	}
/* --------------------------------------------------ĐĂNG NHẬP----------------------------------------------------------------- */		
	// function User(Id,Email,Matkhau,Hoten){
	// 	this.id=Id;
	// 	this.email=Email;
	// 	this.matkhau=Matkhau;
	// 	this.hoten=Hoten;
	// }
	// var listusers=[new User("1","user1@gmail.com","123456","user1"),
	// 				new User("2","user2@gmail.com","456789","user2")
	// 			  ];
	// function DangNhap(ID) {
	// 	this.id = ID;
	// }
	// console.log(listusers)
	// console.log(JSON.parse(localStorage.getItem("user")));
	
	$("#btnDangNhap").click(function () {
		var found=false;
		var user = new User();
		for (var i = 0; i < listusers.length; i++) {
			if($("#EmailLogin").val()==listusers[i].email && $("#PasswordLogin").val()==listusers[i].matkhau){
				found=true;
				user.id = listusers[i].id;
				user.email = listusers[i].email;
				user.matkhau = listusers[i].matkhau;
				user.hoten = listusers[i].hoten;
				user.SoDT = listusers[i].SoDT;
				user.diem = listusers[i].diem;
				break;
			}
		}
		$("#showTen").text(user.hoten);
		if(found==false)
			alert("Email/Mật khẩu chưa đúng");
		else{
			SaveLocalStorage(user, "user");
			// localStorage.setItem("user", JSON.stringify(user));
			// console.log(JSON.parse(localStorage.getItem("user")));
			$("#loginModal").modal("hide");
			$("#taikhoan").show();
			$("#loginDiv").hide();
			alert("Bạn đã đăng nhập thành công");

		}
	})

/* --------------------------------------------------GƯI GÓP Ý----------------------------------------------------------------- */	

$("#btnSend").click(function() {
	var err="";
	var len=$("#fContact").find('input').length;
	var found= false;
	for (var i = 0; i <len; i++) {
		if($("#fContact input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
			found=true;
			break;
		}
		else
			found=false;
	}
	if(found==true)
		err+="Vui lòng nhập đầy đủ thông tin";
	else{
		if(checkphone($("#SDTContact").val()) ==false || $("#SDTContact").val().length!=10 )
				err+="Số điện thoại sai/ chưa đủ số.\n"
		if (!checkEmail($ ("#EmailContact").val()))
				err+="Sai định dạng email.Vui lòng nhập lại.\n";
		if($("#tara-gop-y").val()=="")
			err+="Chưa nhập thông tin góp ý.\n ";	
	}
	if(err!="")
		alert(err);
	else
		alert("Cám ơn bạn đã đóng góp ý kiến");

})

/* --------------------------------------------------GƯI CV----------------------------------------------------------------- */
	$("#btnGuiCV").click(function(){
		var err="";
		var found=false;
		var len=$("#fRecruitment").find('input').length;
		for (var i = 0; i <len; i++) {
			if($("#fRecruitment input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
				found=true;
				break;
			}
			else
				found=false;
		}
		if(found==true)
			err+="Vui lòng nhập đầy đủ thông tin";
		else{
			if(checkphone($("#SDTTuyenDung").val()) ==false || $("#SDTTuyenDung").val().length!=10 )
				err+="Số điện thoại sai/ chưa đủ số.\n"
			if (!checkEmail($ ("#EmailTuyenDung").val()))
				err+="Sai định dạng email.Vui lòng nhập lại.\n";
		}
		if(err!="")
			alert(err);
		else
		alert("Bạn đã gửi CV thành công");
	})
/* --------------------------------------------------ĐỔI MẬT KHẨU----------------------------------------------------------------- */	
$("#btnDoiMatKhau").click(function () {
	var len=$("#fPassword").find("input").length;
	var err="";
	var found=false,check=false, checkTK = false;
	// var mail="user1@gmail.com";
	var user = getDataFromLocal("user");
	for (var i = 0; i <len; i++) {
			if($("#fPassword input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
				found=true;
				break;
			}
			else{
				found=false;
			}
		}
	if(found==true)
		err="Vui lòng nhập đầy đủ thông tin \n";
	else{
		for( var i=0; i<listusers.length;i++){
			if( listusers[i].email==user.email && $("#PasswordRecent").val() == listusers[i].matkhau){
				checkTK = true;
				break;
			}
		}
		if(checkTK == false) {
			err+="Mật khẩu cũ chưa đúng \n";
		}
		if(check==false){
			if(checkPass($("#NewPasswor1").val())==false)
				err+="Mật khẩu phải chứa ít nhất 6 ký tự \n"
			if(checkpass($("#NewPasswor1").val(),$("#NewPasswor2").val())==false)
				err+="Mật khẩu nhập lại chưa khớp \n";
		}
	}
	if(err=="") {
		alert("Đổi mật khẩu thành công");
		editMK(user.id, $("#NewPasswor2").val());
		user.matkhau = $("#NewPasswor2").val();
		SaveLocalStorage(user, "user");
		location.reload();
	}

	else
		alert(err);
})
/* --------------------------------------------------SỬA THÔNG TIN----------------------------------------------------------------- */
$("#btnSuaThongTin").click(function() {
	$("#Fullname-Pr").prop('readonly',false);
	$("#Phonen-Pr").prop('readonly',false);
	$("#Email-Pr").prop('readonly',false);
	$("#btnLuuThongTin").show();
	$(this).hide();
})
$("#btnLuuThongTin").click(function() {
	var len=$("#fProfile").find("input").length;
	var err="";
	var found=false,check=false;
	var user = getDataFromLocal("user");
	for (var i = 0; i <len; i++) {
			if($("#fProfile input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
				found=true;
				break;
			}
			else{
				found=false;
			}
		}
		// console.log(found);
	if(found==false)
		err="Vui lòng nhập thông tin đầy đủ";
	else{
		if(checkphone($("#Phonen-Pr").val()) ==false || $("#Phonen-Pr").val().length!=10 )
			err+="Số điện thoại sai/ chưa đủ số.\n"
		if (!checkEmail($ ("#Email-Pr").val()))
			err+="Sai định dạng email.Vui lòng nhập lại.\n";
	}
	if(err!="")
		alert(err);
	else{
		var confir = confirm("Bạn muốn lưu thông tin đã thay đổi?");
		if(confir==true){
			user.hoten = $("#Fullname-Pr").val();
			user.SoDT = $("#Phonen-Pr").val();
			user.email = $("#Email-Pr").val();
			editUser(user);
			SaveLocalStorage(user, "user");
			alert("Lưu thông tin thành công");
			$("#Fullname-Pr").prop('readonly',true);
			$("#Phonen-Pr").prop('readonly',true);
			$("#Email-Pr").prop('readonly',true);
			$("#btnLuuThongTin").hide();
			$("#btnSuaThongTin").show();
		}
	}		
})
/* --------------------------------------------------XÓA----------------------------------------------------------------- */
var len1=$("#tCTGH").find("tbody tr").length;
$("button[btn-name=xoa]").click(function () {
	$(this).closest("tr").remove();
	len1--;
	TotalPrice();
	if(len1 <1){
		$("#tCTGH").hide();
		$("#Giohangtrong").removeClass("d-none");
		deleteObj("localGioHang");
		$("#amount").attr("data-soluong", 0).text(0);
		$('.shopping-desc > p').show();
        $('.shopping-desc div').hide();
	}
})
/* --------------------------------------------------TIẾN HÀNH ĐẶT HÀNG----------------------------------------------------------------- */
$("#btnTienHanhDatHang").click(function () {
	if(parseFloat($("#f-total-price").attr("data-price"))<100000)
		$("#thongbao").modal('show');	
	else
		$("#btnTienHanhDatHang").find('a').attr("href","dathang.html");
})



/* --------------------------------------------------ĐẶT HÀNG----------------------------------------------------------------- */
$("#btnDatHang").click(function () {
	var len=$("#fTTGH").find("input").length;
	var err="";
	var found=false;
	for (var i = 0; i < len; i++) {
		if($("#fTTGH input").eq(i).val().replace(/^\s+|\s+$/g, "")==0){
				found=true;
				break;
			}
		}
	if(found==true)
		err="Vui lòng nhập đầy đủ thông tin";
	else{
		if(checkphone($("#Phonen-GH").val()) ==false || $("#Phonen-GH").val().length!=10 )
			err+="Số điện thoại sai/ chưa đủ số.\n"
	}
	if(err!="")
		alert(err);
	else
		alert("Đơn hàng đã được gửi về hệ thống.\n Vui lòng giữ điện thoại để xác nhận");
})
/*----------Tổng tiền----------*/
$(document).ready(function(){
	TotalPrice();
})
function TotalPrice() {
	var total=0;
	var myrow=$("#tCTGH").find("tbody tr");
	for (var i = 0; i < len1; i++) {
		//console.log(parseFloat($(myrow[i]).find('td[total-price=total]').find('.product-price').attr("data-price")));
		total+= parseFloat($(myrow[i]).find('td[total-price=total]').find('.product-price').attr("data-price"));
	}
	$("#f-total-price").html(PriceFormat(total,"VNĐ"));
	$("#f-total-price").attr("data-price",total);
	var Ftotal=parseFloat($("#f-total-price").attr("data-price"));
	var promotion= parseFloat($("#promotion").attr("data-promotion"));
	var Ltotal=Ftotal- Ftotal*promotion;
	$("#l-total-price").html(PriceFormat(Ltotal,"VNĐ"));
	$("#l-total-price").attr("data-price",Ltotal);
}
