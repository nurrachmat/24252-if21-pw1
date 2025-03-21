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
nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
        <td> ${data.nama} </td>
        <td> ${data.nilai} </td>
    </tr>`;
})

// Public API data gempa BMKG
fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
.then( response => response.json()) // ubah jadi format JSON
.then( data => {
    // console.log(data);
    console.log(data.Infogempa.gempa);
    data.Infogempa.gempa.forEach( (data) => {
        document.getElementById('gempa').innerHTML += `<li>
            ${data.Wilayah} ${data.Tanggal} ${data.Jam} ${data.Potensi}      
        </li>`
    } )
})