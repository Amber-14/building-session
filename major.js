function major(nums,n){
    let requiredfrequency = Math.floor(n/2)

    let store = {}

    for(let i=0;i<n;i++){

        if(store[nums[i]]!==undefined){
            store[nums[i]]++;
        }else{
            store[nums[i]]=1
        }
        if(store[nums[i]]>requiredfrequency){
            console.log(store)
            return nums[i]
        }
    }

}
let nums=[1,5,3,4,5,5,5,5]

console.log(major(nums,nums.length))