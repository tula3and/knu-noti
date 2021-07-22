const floatingIcon = document.querySelector("#linkStack");
const updateButton = document.querySelector("#addButton");

const LINK = "link";
let linkList = [];
const listObj = {link:"", linkName:""};

function linkLenCheck() {
    if (linkList.length >= 3) {
        updateButton.classList.add("hidden");
    }
}

function saveLink() {
    localStorage.setItem(LINK, JSON.stringify(linkList));
}

function addLink() {
    const newLink = prompt("추가하고 싶은 링크를 넣어주세요!", "http://www.knu.ac.kr/wbbs/");    
    if(newLink!=null){
        newLinkName = prompt("링크 이름은 뭘로 정할까요?", "경북대학교");
        if(newLinkName!=null){
            const buttonLink = document.createElement("a");
            const newButton = document.createElement("button");
            buttonLink.href = newLink;
            newButton.innerText = newLinkName;
            buttonLink.appendChild(newButton);
            floatingIcon.appendChild(buttonLink);
            linkList.push({"linkName": newLinkName, "link": newLink});
            saveLink();
            linkLenCheck();
        }else return;
    }else return;
}

function paintList(listObj) {
    const buttonLink = document.createElement("a");
    const newButton = document.createElement("button");
    buttonLink.href = listObj["link"]
    newButton.innerText = listObj["linkName"];
    buttonLink.appendChild(newButton);
    floatingIcon.appendChild(buttonLink);
}

updateButton.addEventListener("click", addLink);

const savedLink = localStorage.getItem(LINK);

if (savedLink !== null) {
    const parsedLink = JSON.parse(savedLink);
    linkList = parsedLink;
    parsedLink.forEach(paintList);
    linkLenCheck();
}