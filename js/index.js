$(document).ready(function(){
	$(".panel").hover(function(){
   		$(this).css("background-color", "yellow");
   		$(this).css("width","60%");
   		var q = $(this).attr("id");
   		if(q=="S"){
   			$(this).html("<a href=''>Servicio</a>");
   		}
   		else if(q=="A"){
   			$(this).html("<a href=''>Asistencia</a>");
   		} 
   		else if(q=="E"){
   			$(this).html("<a href=''>Emergencia</a>");
   		} 
   		else if(q=="R"){
   			$(this).html("<a href=''>Rescate</a>");
   		} 
    }, function(){
    	var q = $(this).attr("id");
       	$(this).css("background-color", "white");
       	$(this).css("width","9%");
       	if(q=="S"){
   			$(this).html("<a href=''>S</a>");
   		}
   		else if(q=="A"){
   			$(this).html( "<a href=''>A</a>"  );
   		} 
   		else if(q=="E"){
   			$(this).html("<a href=''>E</a>");
   		} 
   		else if(q=="R"){
   			$(this).html("<a href=''>R</a>");
   		} 
	});
 
});