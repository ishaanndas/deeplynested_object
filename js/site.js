const obj1 = {
    name: "Character1",
    age: 12,
    gender: "Male",
    m: 30,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "Friends, and love it what people dont realize is that public enemy already had this cult of skateboarders that loved them. they already had those formerly punk rock white boys loving them, largely because the beastie boys would play that tape for all their friends. it was the record we.",
};
const obj2 = {
    name: "",
    age: 12,
    gender: "feamel",
    m: 1,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "Nobody stands in between me and my man its me and mr. jones what kind of fuckery is this? you made me miss the slick rick gig and thought i didnt love you when i did cant believe you played me out like that no, you aint worth guest list.",
};
const objs = [obj1, obj2];
const randomObj = objs[Math.floor(Math.random() * objs.length)];
document.getElementById("name").textContent = randomObj.name;
document.getElementById("age").textContent = randomObj.age.toString();
document.getElementById("gender").textContent = randomObj.gender;
document.getElementById("m").style.width = "".concat((randomObj.m / 100) * 232, "px");
document.getElementById("h").style.width = "".concat((randomObj.h / 100) * 232, "px");
document.getElementById("d").style.width = "".concat((randomObj.d / 100) * 232, "px");
document.getElementById("title").textContent = randomObj.title;
document.getElementById("desc").textContent = randomObj.desc;
