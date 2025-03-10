/*
import fs from "fs";
import pg from "pg";

// const fs = require("fs");
// const pg = require("pg");
 
const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.BD_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
};
*/

import fs from "fs";
import pg from "pg";
import url from "url"

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port:  process.env.PORT,
    database: process.env.BD_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUDuokcf16Y/gwIFC+WbLCpem5T74wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMTk4YWM0NTgtMTUzZi00ODVhLWE4NjUtMzc1ZDQ3MDEy
ZThiIFByb2plY3QgQ0EwHhcNMjQxMTA2MTczMjAyWhcNMzQxMTA0MTczMjAyWjA6
MTgwNgYDVQQDDC8xOThhYzQ1OC0xNTNmLTQ4NWEtYTg2NS0zNzVkNDcwMTJlOGIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJZQ+hFT
c+StcgelVR0AzhiIZgfb3DrX2kIzsQgm9GgA33fEX6UNy5gXfNHmncqO9r4Ikwd5
9rcmYNiLOjrhj6srZA11w12Fe/tbQwuQpNpPPHjnqr0kKYWKt0LOwc5P6Zup1rLP
3Uc4JXqkJBUFDvnKofwqedW3XpqAz9WTJhGq5IKVC5mVrvBEI+6/j99VDtNQDlNb
quXVkIR0KJGSVvAMWoCbIfjZbHKrlNY5ZFWlr5fq3SOGuO9XCBASi5EvzQK90es2
dIvAj9xsWWAV+/XCPWSkgbVOMhzoD6ESVuHcUE6N20yHVzIBYQMke+z8p2I0ANo0
Z0HAXbmFmGH0cmD72+PKqa/YpLBBokq4IQ3gAcB7YRzTb+prIQ5Azcl9xAni9udZ
ZGRFm+gS6DZHZnzMsINorQRj7Jntl8msOR5p4EoB7YmAJ3ZN5fS4q0e8p/JlhhHc
tLNO0H3kFU9KEjtIRUS3c5Vm7z9HgQdz9qboNwgKeT4HKGOdq1h/YBumawIDAQAB
oz8wPTAdBgNVHQ4EFgQUJ7DKTmy39ZSRFfFLsXXMSANnHlgwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGeO431mnzE4FgU0
Y+poLqx/1++yHIGYy8/QXfvunDH4pKLhGoetfl9hmJxZMZx0iSAI6GjBj1a/7QC3
nRumYij8WFgSi+Gug1Ss+QctniR3cozxl7nDJejeHI2TzAB/pG/kwjI2qGW5t7bT
791wu5emMZ1q9y+ZREKe5R4kW037Ca000c1BtdJLI5/nz8ngUBBSG5LAfOAS4wrT
iXdFtvB4gUQ55fAhRsV8NXDkkdIuH0h5qRCrXRF20v6dh7vyiLmirXl0LgC4W04A
65qOmwJfFKLX582xSh+qvJ977HtCUSVDmWS2QxWg4LBZ0bdKy2AR5h8ywhi/yy3M
L1lSc/z1P3xtjMyZeSnkILgviW9+PHNXBHcTyRhriLT9D8j5kgaE/vAs6aMW/FY8
KRz2Xn58ZJDX+SaODKznkKWBnGWpfbLqGJuhcMpEVkTkO6krQzu0tY66MaxTb2Ns
+JJJRl5aHf+EEEhg8crTnb3tKkxitlFeeXOa1yUs6gSkQFYF1g==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});

const connectDB = async () => {
  const client = new pg.Client(config);
  await client.connect();
  return client;
}

export default connectDB;

/* Default exporta en forma de modulo la conexion a la base de datos */
// export default client.connect();