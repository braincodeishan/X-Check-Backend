const title=document.getElementsByClassName("specs-phone-name-title");
const myName=title[0].innerText;
console.log(myName);
const specs = document.getElementById('specs-list');
console.log(specs);
let a = [];
let i = 0, index = 0, j=0;
const tables = specs.getElementsByTagName('table');
console.log(tables)
let tdElement, dataElement, thelement;
for(j=0;j<tables.length;j++)
{
    thelement = tables[j].getElementsByTagName('th');
    tdElement = tables[j].getElementsByClassName('ttl');
    dataElement = tables[j].getElementsByClassName('nfo');
    for (i = 0; i < tdElement.length; i++) {
        if (dataElement[i].innerText.includes("IP68")) {
            a[index] = thelement[0].innerText + "-" + "Protection" + "%%% " + dataElement[i].innerText;
            index++;
        } else if (thelement[0].innerText === "MAIN CAMERA") {
            if (tdElement[i].innerText === "Features") {
                a[index] = thelement[0].innerText + "-" + tdElement[i].innerText + "%%% " + dataElement[i].innerText;
                index++;
            } else if (tdElement[i].innerText === "Video") {
                a[index] = thelement[0].innerText + "-" + tdElement[i].innerText + "%%% " + dataElement[i].innerText;
                index++;
            } else {
                a[index] = thelement[0].innerText + "-" + "Module" + "%%% " + dataElement[i].innerText;
                index++;
            }

        }else if (thelement[0].innerText === "SELFIE CAMERA") {
            if (tdElement[i].innerText === "Features") {
                a[index] = thelement[0].innerText + "-" + tdElement[i].innerText + "%%% " + dataElement[i].innerText;
                index++;
            } else if (tdElement[i].innerText === "Video") {
                a[index] = thelement[0].innerText + "-" + tdElement[i].innerText + "%%% " + dataElement[i].innerText;
                index++;
            } else {
                a[index] = thelement[0].innerText + "-" + "Module" + "%%% " + dataElement[i].innerText;
                index++;
            }

        }else {
            a[index] = thelement[0].innerText + "-" + tdElement[i].innerText + "%%% " + dataElement[i].innerText;
            index++;
        }
    }

};

// console.log(a);

fetch('http://localhost:3001/updateMobile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        a,
        myName
    })
})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

