let mainContainerEl=document.getElementById("itemAdded");
let pendingContainerEl=document.getElementById("pendingItem")
let userEnteredTitleEl=document.getElementById("userTitle");
let userEnteredDescriptionEl=document.getElementById("userDescription");
let completedItemEl=document.getElementById("compeletedItem");
let savebuttonEl=document.getElementById("buttonEl");
savebuttonEl.classList.toggle("d-none");
let updatebuttonEl=document.getElementById("updateButton");
let specialCount=0;
let list_item=null;
let editContaineEl=null;
let ediTitleEl=null;
let editDescriptionEl=null
let count=0;

function editingExitcitedData(editContainer,editTitle,editDescription){
    if(specialCount===1){
        ediTitleEl.textContent=userEnteredTitleEl.value;
        editDescriptionEl.textContent=userEnteredDescriptionEl.value;
        userEnteredTitleEl.value="";
        userEnteredDescriptionEl.value="";
        savebuttonEl.classList.toggle("d-none");
        updatebuttonEl.classList.toggle("d-none");
        specialCount-=1
    }
    else{
        editContaineEl=document.getElementById(editContainer);
        ediTitleEl=document.getElementById(editTitle);
        editDescriptionEl=document.getElementById(editDescription);
        savebuttonEl.classList.toggle("d-none");
        updatebuttonEl.classList.toggle("d-none");
    
        userEnteredTitleEl.value=ediTitleEl.textContent;
        userEnteredDescriptionEl.value=editDescriptionEl.textContent;
        specialCount+=1
    }
}

function deletingItem(deleteContainerEl){
    let deleteEl=document.getElementById(deleteContainerEl);
    pendingContainerEl.removeChild(deleteEl);
}

function completedItem(recevingContainerEl,recevingcheckboxid){
    if (document.getElementById(recevingcheckboxid).checked===true){
        let addingTocompletedItem=document.getElementById(recevingContainerEl)
        completedItemEl.appendChild(addingTocompletedItem);
        pendingContainerEl.removeChild(recevingContainerEl);
    }
}
function addingItem(){
    let ListElementId="Item"+JSON.stringify(count);
    let checkBoxId="checkbox"+JSON.stringify(count);
    let titleElId="title"+JSON.stringify(count);
    let descriptiveElId="description"+JSON.stringify(count);

    let mainItemContainer=document.createElement("div");
    mainItemContainer.classList.add("main-Item-Container");
    mainItemContainer.id=ListElementId;
    pendingContainerEl.appendChild(mainItemContainer)

    let checkboxEl=document.createElement("input");
    checkboxEl.type="checkbox";
    checkboxEl.id=checkBoxId;
    checkboxEl.classList.add("check-box-styling");
    checkboxEl.onclick=function(){
            completedItem(ListElementId,checkBoxId)
    }
    mainItemContainer.appendChild(checkboxEl);

    let itemContainerEl=document.createElement("div");
    itemContainerEl.classList.add("ItemContainerStyling");
    mainItemContainer.appendChild(itemContainerEl);

    let titleEl=document.createElement("h1");
    titleEl.textContent=userEnteredTitleEl.value;
    titleEl.id=titleElId;
    titleEl.classList.add("Title-El-Styling")
    itemContainerEl.appendChild(titleEl);

    let DescriptiveEl=document.createElement("p");
    DescriptiveEl.textContent=userEnteredDescriptionEl.value;
    DescriptiveEl.classList.add("Descriptive-El-Styling");
    DescriptiveEl.id=descriptiveElId;
    itemContainerEl.appendChild(DescriptiveEl);

    let iconsContainer=document.createElement("div");
    itemContainerEl.appendChild(iconsContainer);

    let editingIcon=document.createElement("i");
    editingIcon.classList.add("fa-solid", "fa-pen-to-square", "icon-styling");
    editingIcon.onclick=function(){
        editingExitcitedData(ListElementId,titleElId,descriptiveElId)
    }
    iconsContainer.appendChild(editingIcon);


    let DeleteIcon=document.createElement("i")
    DeleteIcon.classList.add("fa-solid","fa-trash-can","icon-styling");
    DeleteIcon.onclick=function(){
        deletingItem(ListElementId);
    }
    iconsContainer.appendChild(DeleteIcon);


    userEnteredDescriptionEl.value="";
    userEnteredTitleEl.value="";

    count=count+1
}
