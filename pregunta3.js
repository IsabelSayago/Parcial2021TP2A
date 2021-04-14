// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const array = [1,2,4,5]

const greater3 = nums => {
    
    nums.sort()
    console.log(nums)
    let mayor;
    if(nums.length >= 3){
        mayor = 1;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i+1]){
                i++;
            } else{
                mayor++;
            }
            if(mayor === 2){
                console.log(nums[i+2])
                return nums[i+2]
                
            }

        }
        
    } 
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);
console.log(greater3([1,1,2,5]) === 5);
