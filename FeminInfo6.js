
$(document).ready(function() 
{    $("#hresults").click(function() {                

	if (!$("input[@name=h1]:checked").val() ||            
	!$("input[@name=h2]:checked").val() ||            
	!$("input[@name=h3]:checked").val()                                     
	) {            
	alert("You're not done yet!");        
	}        

	else {            
	var cat1name = "1";            
	var cat2name = "2";            
	var cat3name = "3";                                   
	var cat11name = "None";            


	var cat1 = ($("input[@name=h1]:checked").val() != "a"); 

	var cat2 = ($("input[@name=h2]:checked").val() != "b");  

	var cat3 = ($("input[@name=h3]:checked").val() != "c");  



	var cat11 = (!cat1 && !cat2 && !cat3); var categories = [];                        

	if (cat1) { categories.push(cat1name) };            
	if (cat2) { categories.push(cat2name) };            
	if (cat3) { categories.push(cat3name) };                                 
	if (cat11) { categories.push(cat11name) };                        

	var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
	$("#hcategorylist").text(catStr);                        
	$("#hcategorylist").show("slow");            

	if (cat1) { $("#hcategory1").show("slow"); };            
	if (cat2) { $("#hcategory2").show("slow"); };            
	if (cat3) { $("#hcategory3").show("slow"); };                                  
	if (cat11) { $("#hcategory11").show("slow"); };
	{ $("#hclosing").show("slow"); };
	}
	});}

    
);
    
    
