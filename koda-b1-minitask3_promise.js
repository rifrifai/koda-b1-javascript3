function nama(nama, waktu) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validName = ["john", "ed", "jane"]
            if (validName.includes(nama)) {
                resolve(nama);
            } else {
                reject(new Error("invalid name!"))
            }
        }, waktu);
    });
}

nama("jane", 500)
    .then((result) => {
        console.log(result);
        return nama("john", 1500);
    })
    .then((result) => {
        console.log(result);
        return nama("ed", 2000);
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

async function getNamaDanWaktu() {
    try {
        const jane = await nama("jane", 500);
        console.log(jane);
        const john = await nama("john", 1500);
        console.log(john);
        const ed = await nama("ed", 2000);
        console.log(ed);
    } catch (error) {
        console.log(error);
    }
}
getNamaDanWaktu();
