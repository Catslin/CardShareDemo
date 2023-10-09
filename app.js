const https = require('https');

const options = {
    hostname: 'api.szfx.top',
    path: '/bilibili/api.php?av=796872001',
    method: 'GET'
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();