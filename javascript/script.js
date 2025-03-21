// mengubah konten HTML
document.getElementById('judul').innerHTML = "<h1>Javascript</h1>";

// variabel
let nama = "Sanjaya";
let umur = 17;
document.getElementById('nama').innerHTML = "Nama saya : " + nama;
document.getElementById('umur').innerHTML = `Umur saya : ${umur} tahun`;

let mahasiswa = ["Christian", "Kolin", "Savero"];
console.log(mahasiswa);
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} )

let nilai = [
    {nama: "Kelvin", nilai: "A"},
    {nama: "Ernest", nilai: "A"},
    {nama: "Michael", nilai: "A-"}
];
