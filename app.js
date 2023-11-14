// Write a JavaScript conditional statement to find the sign of the product of three numbers.Display an alert box with the specified sign.

// Sample numbers: 3, -7, 2
// Output: The sign is - (show + or -)



function productOfThreeNums(nums) {
    let result = 1
    for (let i = 0; i < nums.length; i++) {
        result = result * nums[i]
    }
    if (result > 0) {
        console.log(`The sign is : "+"`);
    } else if (result < 0) {
        console.log(`The sign is : "-"`);
    } else {
        console.log(`The sign is : none`);
    }
}

const nums = [3, -7, 2]
productOfThreeNums(nums)