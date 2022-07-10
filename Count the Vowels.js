var Count_Vowels= (S) => 
{
  let theString = S.toLowerCase(),
  letter,
  vowels_list = "aeiouAEIOU",
  count = 0;
  
  for ( let i = 0; i < S.length; i++ )
  {
    letter = theString.charAt(i);
    if (vowels_list.indexOf(letter) > -1)
    {
      count++;
    }
  }
  return count;        
};
 
