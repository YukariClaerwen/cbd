
/* --------------------------------------------------ĐĂNG KÝ----------------------------------------------------------------- */	
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
		else
			alert("Bạn đã đăng ký thành công");
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
	function User(Email,Matkhau,Hoten){
		this.email=Email;
		this.matkhau=Matkhau;
		this.hoten=Hoten;
	}
	var listusers=[new User("user1@gmail.com","123456","user1"),
					new User("user2@gmail.com","456789","user2")
				  ];

	$("#btnDangNhap").click(function () {
		var found=false;
		for (var i = 0; i < listusers.length; i++) {
			if($("#EmailLogin").val()==listusers[i].email && $("#PasswordLogin").val()==listusers[i].matkhau){
				found=true;
				break;
			}
		}
		if(found==false)
			alert("Email/Mật khẩu chưa đúng");
		else
			alert("Bạn đã đăng nhập thành công");
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
