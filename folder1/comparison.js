// console.log("Cheeen tapaaak dum dum");
console.log("2" > 1);
// Operator	    Description	                Comparing	Returns	
// ==	        equal to	                x == 8	    false	
//                                          x == 5	    true	
//                                          x == "5"	true	
// ===	    equal value and equal type	    x === 5	    true	
//                                          x === "5"	false	
// !=	        not equal	                x != 8	    true	
// !==	 not equal value or not equal type	x !== 5	    false	
//                                          x !== "5"	true	
//                                          x !== 8	    true	
// >	        greater than	            x > 8	    false	
// <	        less than	                x < 8	    true	
// >=	    greater than or equal to	    x >= 8	    false	
// <=	    less than or equal to	        x <= 8	    true

console.log(null > 0);//false
console.log(null==0);//false
console.log(null <= 0);//true
console.log(null>=0);//true
/*
comparison(<,>,>=,<=) operator converts null into a number treating as 0 and thus
null<=0 --> true
strict conversion "===" check for the data type and value together

*/
