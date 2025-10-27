function xoa(){
    document.getElementById("sokm").value="";
    document.getElementById("tien").value="";
}
function tinhTien(){
    var sokm=parseFloat(document.getElementById("sokm").value);
    var tien=0;
    if(sokm<=0||isNaN(sokm)){
        alert("Nhập số km hợp lệ");
        return;
    }
    if(sokm<=10){
        tien=sokm*15000; 

    }
    else if(sokm<=50){
        tien=150000+(sokm-10)*12000;
    }
    else {
        tien=150000+40*12000+(tien- 50)*9000;
    }
    document.getElementById("tien").value=tien.toLocaleString("vi-VN")+"VNĐ";
}