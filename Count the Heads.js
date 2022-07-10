var Count_Occ = (s) => 
{
 let res = "";
  const uniqueSet = new Set(s.split(''));
  let arr = [];
  for(const element of uniqueSet){
    arr.push(element);
  }
  arr.sort();
  for(let i in arr){
    let count = 0;
    for(let j in s){
      if(arr[i] === s[j]){
        count++;
      }
    }
    if(count > 1){
      res +=arr[i]+count;
    }
  }
  return res;   
};
 

