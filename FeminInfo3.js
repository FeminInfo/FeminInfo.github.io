
$(document).ready(function() 
{    $("#nresults").click(function() {                

	if (!$("input[@name=n1]:checked").val() ||            
	!$("input[@name=n2]:checked").val() ||            
	!$("input[@name=n3]:checked").val()                                     
	) {            
	alert("You're not done yet!");        
	}        

	else {            
	var cat1name = "1";            
	var cat2name = "2";            
	var cat3name = "3";                                   
	var cat11name = "None";            


	var cat1 = ($("input[@name=n1]:checked").val() != "a"); 

	var cat2 = ($("input[@name=n2]:checked").val() != "b");  

	var cat3 = ($("input[@name=n3]:checked").val() != "c");  



	var cat11 = (!cat1 && !cat2 && !cat3); var categories = [];                        

	if (cat1) { categories.push(cat1name) };            
	if (cat2) { categories.push(cat2name) };            
	if (cat3) { categories.push(cat3name) };                                 
	if (cat11) { categories.push(cat11name) };                        

	var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
	$("#ncategorylist").text(catStr);                        
	$("#ncategorylist").show("slow");            

	if (cat1) { $("#ncategory1").show("slow"); };            
	if (cat2) { $("#ncategory2").show("slow"); };            
	if (cat3) { $("#ncategory3").show("slow"); };                                  
	if (cat11) { $("#ncategory11").show("slow"); };
	{ $("#closing").show("slow"); };
	}
	});}

    
);
    
    
