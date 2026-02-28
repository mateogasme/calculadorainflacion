// This script will serve as the base to download the official historical series
// It will pull from infra.datos.gob.ar
const https = require('https');
const fs = require('fs');

const url = "https://infra.datos.gob.ar/catalog/sspm/dataset/145/distribution/145.3/download/indice-precios-al-consumidor-nivel-general-base-diciembre-2016-mensual.csv";

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => fs.writeFileSync('official_ipc_1943.csv', data));
});
