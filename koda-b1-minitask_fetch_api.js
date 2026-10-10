const url = "https://jsonplaceholder.typicode.com/users";

function toManualLowerCase(str) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let hasil = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const index = upper.indexOf(char);
        
        if(index !== -1){
            hasil += lower[index];
        } else {
            hasil += char;
        }
    }
    return hasil;
}

fetch(url).then((res) => {
    if (!res.ok) throw new Error(`HTTP error status: ${res.status}`);
    return res.json();
}).then((data) => {
    const emails = data.map((item) => toManualLowerCase(item.email));
    console.log(emails);
}).catch((err) => console.error(`error: ${err.message}`));

async function getEmails() {
    try {
        const res = await fetch(url);
        if(!res.ok) throw new Error(`HTTP error status: ${res.status}`);

        const data = await res.json();
        const emails = data.map((item) => item.email.toLowerCase());
        console.log(emails);
    } catch (error) {
        console.error(`error: ${error.message}`);
    }
}

getEmails();
