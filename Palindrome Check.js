var Palin_Check = (str) =>
{
	  let length=str.length;
	 for(let i=0;i<length/2;i++){
	   if(str[i]!==str[length-1-i])
	   {
	     return ("False");
	   }
	 }
	 return ("True");	
}

