javascript: (function ()% 7Bconst title % 3Ddocument.getElementsByClassName("specs-phone-name-title") % 3Bconst myName % 3Dtitle[0].innerText % 3Bconst specs % 3D document.getElementById('specs-list') % 3Bconsole.log(specs) % 3Blet a % 3D % 5B % 5D % 3Blet i % 3D 0 % 2C index % 3D 0 % 3Bconst tables % 3D specs.getElementsByTagName('table') % 3Blet tdElement % 2C dataElement % 2C thelement % 3Btables.forEach((table) % 3D > % 7Bthelement % 3D table.getElementsByTagName('th') % 3BtdElement % 3D table.getElementsByClassName('ttl') % 3BdataElement % 3D table.getElementsByClassName('nfo') % 3Bfor(i % 3D 0 % 3B i < tdElement.length % 3B i % 2B % 2B) % 7Bif(dataElement % 5Bi % 5D.innerText.includes("IP68")) % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B "Protection" % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D else if (thelement % 5B0 % 5D.innerText % 3D % 3D % 3D "MAIN CAMERA") % 7Bif(tdElement % 5Bi % 5D.innerText % 3D % 3D % 3D "Features") % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B tdElement % 5Bi % 5D.innerText % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D else if (tdElement % 5Bi % 5D.innerText % 3D % 3D % 3D "Video") % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B tdElement % 5Bi % 5D.innerText % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D else % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B "Module" % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D % 7Delse if (thelement % 5B0 % 5D.innerText % 3D % 3D % 3D "SELFIE CAMERA") % 7Bif(tdElement % 5Bi % 5D.innerText % 3D % 3D % 3D "Features") % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B tdElement % 5Bi % 5D.innerText % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D else if (tdElement % 5Bi % 5D.innerText % 3D % 3D % 3D "Video") % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B tdElement % 5Bi % 5D.innerText % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D else % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B "Module" % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D % 7Delse % 7Ba % 5Bindex % 5D % 3D thelement % 5B0 % 5D.innerText % 2B "-" % 2B tdElement % 5Bi % 5D.innerText % 2B "%25%25%25 " % 2B dataElement % 5Bi % 5D.innerText % 3Bindex % 2B % 2B % 3B % 7D % 7D % 7D)% 3Bconsole.log(a) % 3Bfetch('http%3A%2F%2Flocalhost%3A3001%2F' % 2C % 7Bmethod % 3A 'POST' % 2Cheaders % 3A % 7B'Content-Type' % 3A 'application%2Fjson' % 7D % 2Cbody % 3A JSON.stringify(% 7Ba % 2CmyName % 7D) % 7D).then((res) % 3D > % 7Bconsole.log(res) % 3B % 7D).catch((err) % 3D > % 7Bconsole.log(err) % 3B % 7D) % 7D) ()