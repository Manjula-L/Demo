//finding duplicate element in an array
let array=[1,3,2,5,6,1,2,1]
for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length;j++)
    {
        if(i!=j)
        {
        if(array[i]==array[j])
        {
            console.log(i+1," position has duplicate element",array[i]);
            break
        }
    }
    }
}