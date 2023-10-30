const obj1 = {
    name: "Wasteland Survivor",
    age: 28,
    gender: "Female",
    m: 20,
    h: 3,
    d: 7,
    title: "The Last Hope",
    desc: "In a world ravaged by nuclear fallout, Wasteland Survivor is a beacon of hope. Her mental stability, physical health, and unwavering defense skills are unmatched. She roams the desolate landscape, leading those who dare to dream of a better future."
};

const obj2 = {
    name: "The Lone Nomad",
    age: 32,
    gender: "Non-binary",
    m: 15,
    h: 1,
    d: 5,
    title: "Echoes of a Broken World",
    desc: "In the desolation of a post-apocalyptic world, The Lone Nomad wanders alone, haunted by memories of the past. Their mental stability is tested daily, health is frail, and their defense mechanisms are a mere shield against the harsh reality. The story reveals their journey to find meaning amid the ruins."
};

const obj3 = {
    name: "Cyberpunk Survivor",
    age: 25,
    gender: "Male",
    m: 40,
    h: 4,
    d: 8,
    title: "Rise of the Machines",
    desc: "In a dystopian future where machines rule, Cyberpunk Survivor is the ultimate resistance. His unshakable mental stability, unparalleled health, and impenetrable defense make him a legend. The story unfolds as he battles the mechanical overlords to reclaim a shattered world."
};

const obj4 = {
    name: "The Forgotten Hero",
    age: 35,
    gender: "Female",
    m: 10,
    h: 2,
    d: 3,
    title: "A World Unraveled",
    desc: "Once celebrated, now forgotten - The Forgotten Hero navigates a world torn apart by cataclysm. Her mental stability wanes, health deteriorates, and defense mechanisms fail. The story explores her quest for survival and redemption in a world that's lost all hope."
};


const objs = [obj1, obj2, obj3, obj4];
const randomObj = objs[Math.floor(Math.random() * objs.length)];
document.getElementById("name").textContent = randomObj.name;
document.getElementById("age").textContent = randomObj.age.toString();
document.getElementById("gender").textContent = randomObj.gender;
document.getElementById("m").style.width = "".concat((randomObj.m / 100) * 232, "px");
document.getElementById("h").style.width = "".concat((randomObj.h / 100) * 232, "px");
document.getElementById("d").style.width = "".concat((randomObj.d / 100) * 232, "px");
document.getElementById("title").textContent = randomObj.title;
document.getElementById("desc").textContent = randomObj.desc;
