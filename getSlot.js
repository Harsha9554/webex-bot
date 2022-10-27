var d =  new Date();
var slot = 0;
date = {
    h: d.getHours()%12,
    m: d.getMinutes()
}
if(date.h==8||(date.h==9 && date.m <=20))
    slot = 2;
else if((date.h==10)||(date.h==11 && date.m <=20))
    slot = 3;
else if((date.h==2)||(date.h==3 && date.m <=20))
    slot = 5;
else if((date.h==4)||(date.h==5 && date.m <=20))
    slot = 6;
else if((date.h==6)||(date.h==7 && date.m <=20))
    slot = 7;

WScript.StdOut.WriteLine(slot);
