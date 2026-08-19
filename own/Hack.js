
// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...
// let r1 = Math.floor(Math.random() * 7) + 1;
// function Initializing() {
//     setInterval(() => {
//         document.querySelector('.box').innerText += 'Initializing Hacking';
//         for (let index = 0; index < 3; index++) {
//             setTimeout(() => {
//                 document.querySelector('.box').innerText += '. ';
//             }, r1 * 300);
//         }
//     }, r1 * 1000);
//     }
// Initializing();




const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {


    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {

            last.innerHTML = last.innerHTML + "."
        }

    }, 100);


    let text = [">>>Initialized Hacking now reading your data",
        ">>>Reading your Files",
        ">>>Password files Detected",
        ">>>Sending all passwords and personal files to server",
        ">>>Cleaning up"]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)

}
function Inf() {
    let delay = 2000; // Delay between each update (in milliseconds)

    const updateText = () => {
        document.body.innerHTML += "@#$%&^%^&^*^*^%$#@@%^^(*&*^&*^&%%^$%#%$@#%^%$%^$^%$^$\nHacked!<br>";
    };

    let timer = setInterval(() => {
        updateText();
    }, delay);
}
main()
Inf()
