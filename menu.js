let fontSizeInput= document.querySelector(".font_size_input");
let fontFamilyInput= document.querySelector(".font_family_input");
let boldIcon=document.querySelector(".fa-bold");
let italicIcon=document.querySelector(".fa-italic");
let underlineIcon=document.querySelector(".fa-underline");
let alignmentContainer=document.querySelector(".alignment_container");

let textColor=document.querySelector(".fa-droplet");
let textHColor=document.querySelector(".text_color");
let bgColor=document.querySelector(".fa-fill-drip");
let bgHColor=document.querySelector(".bg_color");


let left=document.querySelector(".left");
let right=document.querySelector(".right");
let center=document.querySelector(".center");
let justify=document.querySelector(".justify");

textColor.addEventListener("click",function (e) {
    textHColor.click();
})

textHColor.addEventListener("change",function (e) {
    let color=textHColor.value;
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    tobeChangedCell.style.color=color;
    db[ridcidObj.rid][ridcidObj.cid].color=color;
})

bgColor.addEventListener("click",function (e) {
    bgHColor.click();
})

bgHColor.addEventListener("change",function (e) {
    let color=bgHColor.value;
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    tobeChangedCell.style.backgroundColor=color;
    db[ridcidObj.rid][ridcidObj.cid].bgColor=color;
})



fontSizeInput.addEventListener("change", function(){
    let fontSize=fontSizeInput.value;
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    tobeChangedCell.style.fontSize=fontSize+"px";
    db[ridcidObj.rid][ridcidObj.cid].fontSize=fontSize;
});

fontFamilyInput.addEventListener("change", function(){
    let fontFamily=fontFamilyInput.value;
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    tobeChangedCell.style.fontFamily=fontFamily;
    db[ridcidObj.rid][ridcidObj.cid].fontFamily=fontFamily;
})

boldIcon.addEventListener("click",function(){
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    let bold=db[ridcidObj.rid][ridcidObj.cid].bold;
    if(bold==="normal"){
        tobeChangedCell.style.fontWeight="bold";
        boldIcon.classList.add("selected");
        db[ridcidObj.rid][ridcidObj.cid].bold="bold";
    }
    else{
        tobeChangedCell.style.fontWeight="normal";
        boldIcon.classList.remove("selected");
        db[ridcidObj.rid][ridcidObj.cid].bold="normal";
    }
});

underlineIcon.addEventListener("click",function(){
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    
    let underline=db[ridcidObj.rid][ridcidObj.cid].underline;
    if(underline==="none"){
        tobeChangedCell.style.textDecoration="underline";
        underlineIcon.classList.add("selected");
        db[ridcidObj.rid][ridcidObj.cid].underline="underline";
    }
    else{
        tobeChangedCell.style.textDecoration="none";
        underlineIcon.classList.remove("selected");
        db[ridcidObj.rid][ridcidObj.cid].underline="none";
    }
});

italicIcon.addEventListener("click",function(){
    let address= addressInput.value;
    let ridcidObj= getRidCidFromAddress(address);
    let tobeChangedCell= document
    .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
    
    let italic=db[ridcidObj.rid][ridcidObj.cid].italic;
    if(italic==="normal"){
        tobeChangedCell.style.fontStyle="italic";
        italicIcon.classList.add("selected");
        db[ridcidObj.rid][ridcidObj.cid].italic="italic";
    }
    else{
        tobeChangedCell.style.fontStyle="normal";
        italicIcon.classList.remove("selected");
        db[ridcidObj.rid][ridcidObj.cid].italic="normal";
    }
});

alignmentContainer.addEventListener("click",function(e){
    if(e.target!=alignmentContainer){
        classArr= e.target.classList;
        let hAlignment=classArr[classArr.length-1];
        if(hAlignment=="selected"){
            hAlignment=classArr[classArr.length-2];
        }
        let address= addressInput.value;
        let ridcidObj= getRidCidFromAddress(address);
        let tobeChangedCell= document.querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        let halign=db[ridcidObj.rid][ridcidObj.cid].halign;

        
        if(halign==="left"){
            left.classList.remove("selected");
        }
        else if(halign==="right"){
            right.classList.remove("selected");
        }
        else if(halign==="center"){
            center.classList.remove("selected");
        }
        else{
            justify.classList.remove("selected");
        }

        
        tobeChangedCell.style.textAlign=hAlignment;
        if(hAlignment==="left"){
            left.classList.add("selected");
            db[ridcidObj.rid][ridcidObj.cid].halign="left";
        }
        else if(hAlignment==="right"){
            right.classList.add("selected");
            db[ridcidObj.rid][ridcidObj.cid].halign="right";
        }
        else if(hAlignment==="center"){
            center.classList.add("selected");
            db[ridcidObj.rid][ridcidObj.cid].halign="center";
        }
        else{
            tobeChangedCell.style.textJustify="inter-word";
            justify.classList.add("selected");
            db[ridcidObj.rid][ridcidObj.cid].halign="justify"
        }
    
    }
})