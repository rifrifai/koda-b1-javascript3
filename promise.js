function nama(nama, waktu) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validName = ["john", "ed", "jane"];
            if (validName.includes(nama)) {
                resolve(nama);
            } else {
                reject(new Error("invalid input!"));
            }
        }, waktu);
    });
}



async function getNamaDanWaktu() {
    try {
        // const jane = await nama("jane", 500);
        // console.log(jane);
        // const john = await nama("john", 1500);
        // console.log(john);
        // const ed = await nama("ed", 2000);
        // console.log(ed);
        const hasil = await Promise.all([
            nama("jane", 500),
            nama("ed", 2000),
            nama("john", 1500)
        ]);
        console.log(`paralel semua selesai dalam 2 detik ${hasil}`);
    } catch (error) {
        console.error(error.message);
    }
}
getNamaDanWaktu();
