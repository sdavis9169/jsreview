// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]


function subsets(name) {
    let arrName= name.split('');
    let arrCombine=[];
    for (let i in arrName) {
    arrCombine.push(arrName[i]);
    }
    for (let i = 0; i < arrName.length-1; i++) {
    for (let j = i+1; j < arrName.length; j++) {
    let temp= arrName[i]+arrName[j];
    arrCombine.push(temp);
    }
    }
    console.log(arrCombine);
    }
    subsets('hello');



