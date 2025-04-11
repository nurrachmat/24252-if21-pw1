// akses API desa kelurahan
fetch("https://24252-if21-pw1-omega.vercel.app/javascript/wilayah.json")
.then( response => response.json() )
.then( data => {
    console.log(data);
    data.forEach( (item) => {
        document.getElementById("list-desa").innerHTML += `<li class="list-group-item" onclick='detail("${item.kode}")'> ${item.kode} ${item.nama } </li>`
    })
} )

gempaterkini();
listgempa();


function detail(kode) {
    console.log(kode);
    // clear element 
    document.getElementById("list-cuaca").innerHTML = "";
    // akses API cuaca BMKG berdasarkan kode wilayah desa/kelurahan
    fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${kode}`)
    .then( response => response.json() )
    .then( data => {
        console.log(data);
        document.getElementById('desa').innerHTML = data.lokasi.desa;
        document.getElementById('kecamatan').innerHTML = data.lokasi.kecamatan;

        data.data[0].cuaca.forEach( (item) => {
            console.log(item);
            item.forEach( (cuaca) => {
                document.getElementById("list-cuaca").innerHTML += `
                <div class='col-lg-3 p-2'>
                <div class="card">
                <img src="${cuaca.image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cuaca.weather_desc}</h5>
                    <p class="card-text">${cuaca.utc_datetime}</p>
                </div>
                </div>
                </div>
                `
            })
        } )
    } )
}

function listgempa() {
    fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
    .then( response => response.json()) // ubah jadi format JSON
    .then( data => {
        data.Infogempa.gempa.forEach( (gempa) => {
            document.getElementById("list-gempa").innerHTML += `
                <div class='col-lg-6 p-2'>
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${gempa.Wilayah}</h5>
                    <p class="card-text">${gempa.Potensi}</p>
                    <div class="row">
                        <div class="col">${gempa.Tanggal}</div>
                        <div class="col">${gempa.Jam}</div>
                    </div>
                    <p class="card-text">Magnitude : ${gempa.Magnitude}</p>
                    <p class="card-text"></p>
                </div>
                </div>
                </div>
                `
        })
    })
}

function gempaterkini(){
    fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
    .then( response => response.json()) // ubah jadi format JSON
    .then( data => {
        // console.log(data);
        console.log(data.Infogempa.gempa);
            document.getElementById('gempa-terkini').innerHTML += `
            <div class="card">
                <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap} " class="card-img-top p-2" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.Infogempa.gempa.Wilayah}</h5>
                    <p class="card-text">${data.Infogempa.gempa.Potensi} </p>
                    <div class="row">
                        <div class="col"> ${data.Infogempa.gempa.Tanggal}</div>
                        <div class="col">${data.Infogempa.gempa.Jam}</div>
                    </div>
                </div>
            </div>

                       
            `
    })
}