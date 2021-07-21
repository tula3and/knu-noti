const floatingIcon = document.querySelector("#linkStack");
const updateButton = document.querySelector("#addButton");

function addLink() {
    const newLink = prompt("추가하고 싶은 링크를 넣어주세요!", "http://www.knu.ac.kr/wbbs/");
    const newLinkName = prompt("링크 이름은 뭘로 정할까요?", "경북대학교");
    if (newLink === null || newLinkName === null) return;
    const buttonLink = document.createElement("a");
    const newButton = document.createElement("button");
    buttonLink.href = newLink;
    newButton.innerText = newLinkName;
    buttonLink.appendChild(newButton);
    floatingIcon.appendChild(buttonLink);
}

updateButton.addEventListener("click", addLink);