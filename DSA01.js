//Checking sum zero - Problem 1
//[-5,-4,-3,-2,-1,0,1,2,3,4] -> input
//[-4,4] -> output

function getSumPairZero(array){
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if(number + array[j] === 0){
                return [number, array[j]];
            }
        }
    }
}

const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4])
// console.log(result)

//Optimised solution

function getSumZero(array){

    let left = 0
    let right = array.length -1

    while(left<right){
        sum = array[left]+array[right]

        if(sum === 0){
            return [array[left], array[right]]
        }else if (sum > 0){
            right--
        }else{
            left++
        }
    }
}

const data = getSumZero([-5,-4,-3,-2,-1,0,1,2,3,4])
// console.log(data)
