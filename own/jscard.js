function createCard(title, cName, views, monthsOld, duration){
    let t=document.querySelector(".title");
    t.innerText=title;
    let c=document.querySelector(".chanel");
    c.innerText=cName;
    let v=document.querySelector(".views");
    v.innerText=views+" views";
    let m=document.querySelector(".month");
    m.innerText=monthsOld+" months ago";
    let d=document.querySelector(".time");
    d.innerText=duration;
}
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry","1.5K","2","15:30");