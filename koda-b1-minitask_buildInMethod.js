// manual merge two or more array
const siswa1 = ["budi", "joko", "alvin", "hartonoo"];
const siswa2 = ["alex", "roberto", "carlosss", "messi"];
const combineSiswa = [...siswa1, ...siswa2];
// console.log(combineSiswa[7]);

// after menggunakan builtin method javascript
const presiden = ["soekarno", "soeharto", "bj habibie", "megawati", "gus dur"];
const rakyat = ["alvin", "durrohman", "ghaziy", "zhafran", "faizal"];
const indonesia = presiden.concat(rakyat);
// console.log(indonesia);

// manual implementasi isi array
for (let i = 0; i < rakyat.length; i++) {
    console.log(rakyat[i]);
}

// after menggunakan foreach
rakyat.forEach((rakyat) => console.log(rakyat));