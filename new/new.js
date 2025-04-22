function tinhtoan(n)
{
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);
    var ketqua =null;
    var tb =null ;
    if(n==0)
    {
        document.getElementById("so1").value = "";
        document.getElementById("so2").value ="";
        document.getElementById("tb").innerText = "";
        document.getElementById("ketqua").innerText = "";
        return;
    }
    if(isFinite(so1))
    {
        if(isFinite(so2))
        {
            if(n==1)
            {
                ketqua=so1+so2;
                document.getElementById("tb").innerText = "";
            }
            if(n==2)
            {
                ketqua=so1-so2;
                document.getElementById("tb").innerText = "";
            }
            if(n==3)
            {
                ketqua=so1*so2;
                document.getElementById("tb").innerText = "";
            }
            if(n==4)
            {
                if(so2!=0)
                {
                    ketqua=so1/so2;
                    document.getElementById("tb").innerText = "";
                }
                else
                {
                    document.getElementById("tb").innerText = "mẫu số không thể bằng 0";
                }
            }
        }
        else
        {
            document.getElementById("tb").innerText = "số thứ hai không hợp lệ";
        }
    }
    else
    {
        document.getElementById("tb").innerText = "số thứ nhất không hợp lệ";
    }
    document.getElementById("ketqua").innerText = ketqua;
}
