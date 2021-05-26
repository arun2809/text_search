
window.onload = ()=>{

let arr = [];
let arr2 = [];
document.getElementById("srchbtn").addEventListener("click", (event)=>{

    let text = document.getElementById("srch").value;
    let id = arr.length;
    arr.push({id, text})
    for(let i=0; i<arr.length; i++){
       if(arr2.indexOf(arr[i].text.trim())<0){
        arr2.push(arr[i].text)
       }       
    }
    document.getElementById("srchDisplay").value = arr2;
    
})
document.getElementById("del").addEventListener("click", (event)=>{

    let text = document.getElementById("srch").value;
    let arrIndex = arr2.indexOf(text);
    if(arrIndex > -1){
        arr2.splice(arrIndex, 1)
    }
    console.log("arrr", arr)
    document.getElementById("srchDisplay").value = arr2;
})

document.getElementById("srchDisplay").value = arr2;
}
