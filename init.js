let topRow = document.querySelector(".top_row");
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div);
}
let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
}

let grid = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
    let row=document.createElement("div");
    row.setAttribute("class","row");
    for (let j = 0; j < 26; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent= i+", "+j;
        div.setAttribute("rID",i);
        div.setAttribute("cID",j);
        div.setAttribute("contentEditable","true");
        row.appendChild(div);
    }
    grid.append(row);
}


let db=[];
for(let i=0;i<100;i++){
    let rowArr=[];
    for(let j=0;j<26;j++){
        let cellObject={
            fontFamily:"Courier New",
            fontSize:14,
            
            bold:"normal",
            italic:"normal",
            underline:"none",

            halign:"center",

            color:"black",
            bgColor:"white",

            value:""

        }
        rowArr.push(cellObject);
    }
    db.push(rowArr);
}




// if I click on any cell -> then I will 
// get the address on the address bar

let allGridCells=document.querySelectorAll(".grid .cell");
let addressInput=document.querySelector(".address_input");
for(let i=0;i< allGridCells.length;i++){
    allGridCells[i].addEventListener("click",function(e){
        let prevAddress =addressInput.value;
        if(prevAddress!=""){
            let ridcidObj=getRidCidFromAddress(prevAddress);

            let prevCell=document
                .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
            prevCell.style.border="0.2px solid rgb(201, 194, 194)";
            prevCell.style.borderRight="none";
            prevCell.style.borderBottom="none"

        }

        let rid=allGridCells[i].getAttribute("rID");
        let cid=allGridCells[i].getAttribute("cID");
        // get always returns in string
        rid=Number(rid);
        numCid=Number(cid);
        cid=String.fromCharCode(65+ Number(cid));

        addressInput.value=cid+(rid+1);
        // alert( cid+" "+(Number(rid)+1))
        let cCell=document
            .querySelector(`.grid .cell[rid='${rid}'][cid='${numCid}']`)
        cCell.style.border= "2px solid green";

        let fontSize=db[rid][numCid].fontSize;
        let fontFamily=db[rid][numCid].fontFamily;
        let color=db[rid][numCid].color;
        let bgColor=db[rid][numCid].bgColor;
        let bold=db[rid][numCid].bold;
        let underline=db[rid][numCid].underline;
        let italic=db[rid][numCid].italic;

        let halign=db[rid][numCid].halign;

        fontSizeInput.value=fontSize;
        fontFamilyInput.value=fontFamily;
        
        if(bold=="normal"){
            boldIcon.classList.remove("selected");
        }
        else if(bold=="bold"){
            boldIcon.classList.add("selected");
        }

        if(underline=="none" ){
            underlineIcon.classList.remove("selected");
        }
        else if(underline=="underline" ){
            underlineIcon.classList.add("selected");
        }

        if(italic=="normal"){
            italicIcon.classList.remove("selected");
        }
        else if(italic=="italic"){
            italicIcon.classList.add("selected");
        }

        left.classList.remove("selected");
        right.classList.remove("selected");
        center.classList.remove("selected");
        justify.classList.remove("selected");
        if(halign==="left"){
            left.classList.add("selected");
        }
        else if(halign==="right"){
            right.classList.add("selected");
        }
        else if(halign==="center"){
            center.classList.add("selected");
        }
        else{
            justify.classList.add("selected");
        }

    })
}

// get first element
let firstCell=document.querySelector(".grid .cell[rid='0'][cid='0']");
firstCell.click();
firstCell.style.border="2px solid green";

center.classList.add("selected");

function getRidCidFromAddress(address){
    let asciiValue= address.charCodeAt(0);
    let cid= asciiValue-65;
    let rid= Number(address.substring(1))-1;
    return {
        rid:rid, cid:cid
    }
}