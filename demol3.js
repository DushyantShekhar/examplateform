function f1()
{
	var count =0;
	var rd1 = document.getElementById("rd1");
	var rd2 = document.getElementById("rd2");
	var rd3 = document.getElementById("rd3");
	var rd4 = document.getElementById("rd4");
	var rd5 = document.getElementById("rd5");
	var rd6 = document.getElementById("rd6");
	var rd7 = document.getElementById("rd7");
	var rd8 = document.getElementById("rd8");
	var rd9 = document.getElementById("rd9");
	var rd10 = document.getElementById("rd10");
	var rd11 = document.getElementById("rd11");
	var rd12 = document.getElementById("rd12");
	var rd13 = document.getElementById("rd13");
	var rd14 = document.getElementById("rd14");
	var rd15= document.getElementById("rd15");
	if(rd3.checked==true)
	count++;
	if(rd6.checked==true)
	count++;
    if(rd8.checked==true)
	count++;
    if(rd10.checked==true)
	count++;
    if(rd13.checked==true)
	count++;
	
	document.write("<h2>your score is " +count+"</h2>");
	
	
}
