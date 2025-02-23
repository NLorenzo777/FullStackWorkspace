/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

var anErrorOccured;

function createImage(answers) {
    const url = answers.URL;
    var qrObject = qr.image(url, {type: 'png'});
    qrObject.pipe(fs.createWriteStream("resultQR.png"));
    anErrorOccured = false;
}

inquirer.prompt([
    {message: "Type URL to convert:",
        name: "URL"
    },
])
.then((answers) => {
    createImage(answers);
})
.catch((error) => {
    anErrorOccured = true;
})
.finally(
    (anErrorOccured) => {
        if (anErrorOccured) {
            console.log("An error occured... Unsuccessfull conversion");
        } else {
            console.log("Process Complete!")
        }
    }
);

