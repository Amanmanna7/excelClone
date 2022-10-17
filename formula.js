 for(let i=0;i<allGridCells.length;i++){
    allGridCells[i].addEventListener("blur",function(){
        let content= allGridCells[i].textContent;
        let address= addressInput.value;
        let ridcidObj= getRidCidFromAddress(address);
        db[ridcidObj.rid][ridcidObj.cid].value=content;
    })
 }

//  let cellObject={
//     fontFamily:"Courier New",
//     fontSize:14,
    
//     bold:"normal",
//     italic:"normal",
//     underline:"none",

//     halign:"center",

//     color:"black",
//     bgColor:"white",

//     value:""
// }