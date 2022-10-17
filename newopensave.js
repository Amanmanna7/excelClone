let saveBtn=document.querySelector('.fa-floppy-disk');
let openBtn=document.querySelector('.fa-envelope-open');
let openInput=document.querySelector('.open_input');


saveBtn.addEventListener("click",function(){
    let a =document.createElement("a");
    
    var stringCode=encodeURIComponent(JSON.stringify(db));
    var dataStr = "data:text/json;charset=utf-8,"+stringCode;
    a.href=dataStr;
    a.download="file.json";
    a.click();
})

openBtn.addEventListener("click",function(){
    openInput.click();
})

openInput.addEventListener("change",function (e){
    let filesArr= openInput.files;
    let file=filesArr[0];
    const reader=new FileReader();
    reader.readAsText(file);
    reader.addEventListener('load',(event)=>{
        let jsonData=JSON.parse(event.target.result);
        db=jsonData;
        setUI();
    })
})

function setUI(){
    for(let i=0;i<100;i++){
        for(let j=0;j<26;j++){
            let cellObject= db[i][j];
            let tobeChangedCell= document
            .querySelector(`.grid .cell[rid='${i}'][cid='${j}']`);
            tobeChangedCell.innerText=cellObject.value;
            tobeChangedCell.style.color=cellObject.color;
            tobeChangedCell.style.backgroundColor=cellObject.bgColor;
            tobeChangedCell.style.fontFamily=cellObject.fontFamily;
            tobeChangedCell.style.textDecoration=cellObject.underline;
            tobeChangedCell.style.fontStyle=cellObject.italic;
            tobeChangedCell.style.fontWeight=cellObject.bold;
            tobeChangedCell.style.fontSize=cellObject.fontSize+"px";
            if(cellObject.halign=="justify"){
                tobeChangedCell.style.textJustify="inter-word";
            }
            else{
                tobeChangedCell.style.textAlign=cellObject.halign;
            }
        }
    }
}