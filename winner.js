var Game_Winner = (S) => 
{
  let countOne=0;
  let countTwo=0;
  for(let i=0;i<S.length; i++){
    if(S.charAt(i)=='A'){
     countOne+=1; 
    }
    else{
      countTwo+=1;
    }}
  
  if(countOne>countTwo){
    return ('Aditya');
  }
  else if(countOne<countTwo){
    return ('Danish');
    
  }
  else{
    return ('Draw');
  }  
}