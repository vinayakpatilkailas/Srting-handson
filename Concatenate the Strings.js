const countCharacters = (S) => 
{
  let count = [0,0];
  for(let i=0; i<S.length; i++){
    if(S[i] === 'A'){
      count[0]++;
    }
    else if(S[i] === 'D'){
      count[1]++;
    }
  }
  return count;  
};
 
