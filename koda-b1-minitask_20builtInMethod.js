// 20 built-in method

// Array
// concat digunakan untuk menggabungkan 2 array atau lebih!
const arr1 = ["j", "o", "k"];
const arr2 = ["o", "w", "i"];
const combineArr = arr1.concat(arr2);
console.log(combineArr);

// join digunakan untuk menggabungkan sesuatu pada setiap value di array
console.log(arr1.join("-"));

// key digunakan untuk mengambil index pada array
const iteror = arr1.keys();
for(const key of iteror) { console.log(key) }

// lastIndexOf digunakan untuk mencari letak value tersebut pada index berapa, jika tidak ditemukan akan mengembalikan -1
console.log(arr1.lastIndexOf("x"));

// map digunakan untuk membuat array baru dari hasil array yang akan di ubah dengan perintah tambahan
console.log(arr1.map(x => x + " map"));

// pop digunakan untuk menghapus elemen terakhir pada array serta mengembalikan elemen tersebut, method ini mengubah panjang array
console.log(arr1.pop());
console.log(arr1);

// push digunakan untuk menambahkan elemen baru pada index terakhir array serta mengembalikan panjang baru array
console.log(arr1.push("o"));
console.log(arr1);

// reverse digunakan untuk membalik sebuah array dan hati hati karena ini mengubah array originalnya
const reversed = arr1.reverse();
console.log(reversed);
console.log(arr1);

// shift digunakan untuk menghapus index awal pada array dan mengembalikan element yang dihapus tersebut, serta method ini mengubah panjang array
const firstElement = arr1.shift();
console.log(firstElement);
console.log(arr1);

// ushift digunakan untuk menambahkan nilai pada index awal array dan method ini mengubah panjang array
console.log(arr1.unshift("o", "w"))
console.log(arr1);

// Date
// getDate mengembalikan tanggal menurut waktu lokal
const today = new Date();
console.log(today.getDate())

// getDay mengembalikan hari dengan index 0 = minggu
console.log(today.getDay());

// getFullYear mengembalikan tahun menurut waktu lokal
console.log(today.getFullYear());

// getHours mengembalikan jam menurut waktu lokal
console.log(today.getHours());

// getMilliseconds mengembalikan milisec menurut waktu lokal
console.log(today.getMilliseconds());

// getMinutes mengembalikan menit menurut waktu lokal
console.log(today.getMinutes());

// getMonth mengembalikan bulan dengan 0 - 11 dengan 0 dimulai dari januari
console.log(today.getMonth());

// getTime mengembalikan milisec dari detik ini sampai epoch (1 Jan 1970)
console.log(today.getTime());

// Math
// abs mengembalikan absolute nilai tersebut, jika negatif maka akan mengembalikan menjadi positif
console.log(Math.abs(3 - 5));
console.log(Math.abs(-30));
console.log(Math.abs(-0));

// max mengembalikan nilai tertingga pada input paramaternya
const arrNum = [2, 4, 6, 99, 9, 101, 1]
console.log(Math.max(...arrNum));


// Function
// toString untuk mencetak isi dari function tersebut
const sum = (a, b) => a + b;
function sum2(a, b) {
    return a + b
}
console.log(sum.toString());
console.log(sum2.toString());

// length untuk mencetak parameter yang berada di function
console.log(sum2.length);

// name untuk mencetak nama function 
console.log(sum2.name);

// call untuk memanggil function dengan value "this" 
function Product(nama, harga){
    this.nama = nama;
    this.harga = harga;
}
function Makanan(nama, harga){
    Product.call(this, nama, harga)
    this.kategori = "makanan";
}
console.log(new Makanan("nasi goreng", 10000).nama);



