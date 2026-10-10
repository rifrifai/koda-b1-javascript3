console.log("hello");
setTimeout(() => {
    console.log("haiy")
}, 2000);
console.log("haallo");

function pesanKopi(callback){
    setTimeout(() => {
        console.log("kopi dipesan agar tidak mengatuk")
        callback();
    }, 1500)
}

function seduhKopi(callback){
    setTimeout(() => {
        console.log("kopi sedang diseduh!")
        callback();
    }, 3000)
}

function antarKopi(){
    setTimeout(() => {
        console.log("kopi sedang diantarkan ke  meja!")
    }, 1000)
}

pesanKopi(() => {
    seduhKopi(() => {
        antarKopi();
    })
})

function main(callback) {
    console.log("hello")
    setTimeout(() => {
        console.log("selamat malam")
        callback();
    }, 1500)
}

function another() {
    console.log("another");
}

main(() => {
    console.log("hi dari callback main");
    const hasil = 10 + 9;
    console.log(`hasil kalkulasi 10 + 9 = ${hasil}`);
})
another();

function wait(second, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(text);
        reject(text);
        }, second * 2000);
    });
}
console.log("sebelum memanggil wait!");
const proses = wait(1, 5)
    .then((result) => {
        console.log("ini dari wait then");
        return result;
    })
    .then((result) => {
        console.log(`ini dari wait then kedua`);
        return result;
    })
    .catch((err) => console.log(`Error: ${err}`));

console.log("setelah menjadi async");
setTimeout(() => console.log("nilai yang dikembalikan", proses), 2000);

function pesanKopiPromise(bijiKopi) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (bijiKopi) {
            resolve("kopi dipesan!");
        } else {
            reject("maaf, biji kopi habis!");
        }
        }, 2000);
    });
}

function seduhKopiPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("kopi sedang diseduh!"), 2000);
    });
}

pesanKopiPromise(true).then((pesan) => {
    console.log(pesan);
    return seduhKopiPromise();
}).then((proses) => {
    console.log(proses);
    console.log("kopi sedang diantarkan!")
}).catch((err) => {
    console.log(`Error: ${err}`);
})
