$(document).ready(function(){
	$(".panel").hover(function(){
   		
   		$(this).css("width","initial");
   		var q = $(this).attr("id");
   		if(q=="S"){
   			$(this).html("<a href='#!servicio'>Servicio</a>");
   		}
   		else if(q=="A"){
   			$(this).html("<a href='#!asistencia'>Asistencia</a>");
   		} 
   		else if(q=="E"){
   			$(this).html("<a href='#!emergencia'>Emergencia</a>");
   		} 
   		else if(q=="R"){
   			$(this).html("<a href='#!rescate'>Rescate</a>");
   		} 
    }, 
    function(){
    	var q = $(this).attr("id");
       	
       	$(this).css("width","inherit");
       	if(q=="S"){
   			$(this).html("<a href='#!servicio'>S</a>");
   		}
   		else if(q=="A"){
   			$(this).html( "<a href='#!asistencia'>A</a>"  );
   		} 
   		else if(q=="E"){
   			$(this).html("<a href='#!emergencia'>E</a>");
   		} 
   		else if(q=="R"){
   			$(this).html("<a href='#!rescate'>R</a>");
   		} 
	});
 
});