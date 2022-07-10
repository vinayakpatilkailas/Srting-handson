var Count_Vowels= (S) => 
{
    let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  }
  return count;
};

var Count_Consonants= (S) => 
{
  let cons_list = 'aeiouAEIOU';
  let count1 = 0;
  
  for(let j = 0; j < S.length ; j++)
  {
    if (cons_list.indexOf(S[j]) == -1)
    {
      count1++;
    }
  }
  return count1;

       
};
 