
let qrText=document.getElementById("qrText");
let qrimg=document.getElementById("qrimg");
let btn=document.getElementById("btn");


function generateQr()
{
    
    if(qrText.value)
    {
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?data=${qrText.value}&amp;size=200x200`;
        qrText.value=""
    }
    else{}
}
generateQr();

btn.addEventListener('click',generateQr);






//https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=200x200