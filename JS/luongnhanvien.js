function xoa(){
    document.getElementById("ten").value = "";
    document.getElementById("ngaycong").value = "";
    document.getElementById("luongngay").value = "";
    document.getElementById("luongthang").value = "";
    document.getElementById("xeploai").value = "";
    document.getElementById("thuong").value = "";
    document.getElementById("thuclinh").value = "";
}
function tinh()
{
    var ngaycong=parseFloat(document.getElementById("ngaycong").value);
    var gio=8, tienh=20000, thuong=0, xeploai;
    if(ngaycong<0||isNaN(ngaycong)||ngaycong>30)
    {
        alert("Nhập số ngày công hợp lệ");
        return;
    }
    if(ngaycong>25)
    {
        thuong=500000;
        xeploai="A";
    }
    else if(ngaycong>=20 && ngaycong<=25)
    {
        xeploai="B";
        thuong=300000;
    }
    else xeploai="C";
    document.getElementById("thuong").value=thuong;
    document.getElementById("xeploai").value=xeploai;
    var thuclinh=gio*tienh*30+thuong;
    var luongngay=gio*tienh;
    var luongthang=gio*tienh*30;
    document.getElementById("luongngay").value=luongngay.toLocaleString("vi-VN")+"VNĐ";
    document.getElementById("luongthang").value=luongthang.toLocaleString("vi-VN")+"VNĐ";
    document.getElementById("thuclinh").value=thuclinh.toLocaleString("vi-VN")+"VNĐ";

}