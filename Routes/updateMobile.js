const express = require('express');
const router = express.Router();
const mobilephone = require('../Modals/MobileData')
const starsSchema = require('../Modals/reviewsSchema')
const cors = require('cors');
router.use(cors());


router.post('/', async (req, res) => {


    try {
        let a = req.body.a;
        let myName = req.body.myName;
        console.log(myName);
        let data
            = [
                { sl: 0, name: "Technology", value: "" },
                { sl: 1, name: "Speed", value: "" },
                { sl: 2, name: 'Announced', value: "" },
                { sl: 3, name: 'Status', value: "" },
                { sl: 4, name: 'Dimensions', value: "" },
                { sl: 5, name: 'Weight', value: "" },
                { sl: 6, name: 'Build', value: "" },
                { sl: 7, name: 'Sim', value: "" },
                { sl: 8, name: 'Protection', value: "" },
                { sl: 9, name: 'Display Type', value: "" },
                { sl: 10, name: 'Display Size', value: "" },
                { sl: 11, name: 'Display Resolution', value: "" },
                { sl: 12, name: 'Display Protection', value: "" },
                { sl: 13, name: 'OS', value: "" },
                { sl: 14, name: 'Chipset', value: "" },
                { sl: 15, name: 'CPU', value: "" },
                { sl: 16, name: 'GPU', value: "" },
                { sl: 17, name: 'Card Slot', value: "" },
                { sl: 18, name: 'Internal', value: "" },
                { sl: 19, name: 'Primary Camera Modules', value: "" },
                { sl: 20, name: 'Primary Camera Features', value: "" },
                { sl: 21, name: 'Primary Camera Video', value: "" },
                { sl: 22, name: 'Secondary Camera Modules', value: "" },
                { sl: 23, name: 'Secondary Camera Features', value: "" },
                { sl: 24, name: 'Secondary Camera Video', value: "" },
                { sl: 25, name: 'Loud Speaker', value: "" },
                { sl: 26, name: 'Jack', value: "" },
                { sl: 27, name: 'WLAN', value: "" },
                { sl: 28, name: 'Bluetooth', value: "" },
                { sl: 29, name: 'GPS', value: "" },
                { sl: 30, name: 'NFC', value: "" },
                { sl: 31, name: 'Radio', value: "" },
                { sl: 32, name: 'USB', value: "" },
                { sl: 33, name: 'Sensors', value: "" },
                { sl: 34, name: 'Battery Type', value: "" },
                { sl: 35, name: 'Battery Charging', value: "" },
                { sl: 36, name: 'Battery Standby', value: "" },
                { sl: 37, name: 'battery Talktime', value: "" },
                { sl: 38, name: 'Colors', value: "" },
                { sl: 39, name: 'Models', value: "" },
                { sl: 40, name: 'SAR', value: "" },
                { sl: 41, name: 'SAR EU', value: "" },
                { sl: 42, name: 'Test Performance', value: "" },
                { sl: 43, name: 'Test Display', value: "" },
                { sl: 44, name: 'Test Loudspeaker', value: "" },
                { sl: 45, name: 'Test Battery', value: "" },
            ]
        let i = 0, b;
        for (i = 0; i < a.length; i++) {
            b = a[i].lastIndexOf('%%%') + 4;
            if (a[i].includes("NETWORK-Technology")) {
                data[0].value = a[i].slice(b);

            } else if (a[i].includes("NETWORK-Speed")) {
                data[1].value = a[i].slice(b);

            } else if (a[i].includes("LAUNCH-Announced")) {
                data[2].value = a[i].slice(b);

            } else if (a[i].includes("LAUNCH-Status")) {

                data[3].value = a[i].slice(b);
            } else if (a[i].includes("BODY-Dimensions")) {
                data[4].value = a[i].slice(b);

            } else if (a[i].includes("BODY-Weight")) {
                data[5].value = a[i].slice(b);

            } else if (a[i].includes("BODY-Build")) {
                data[6].value = a[i].slice(b);

            } else if (a[i].includes("BODY-SIM")) {
                data[7].value = a[i].slice(b);

            } else if (a[i].includes("BODY-Protection%%%")) {

                data[8].value = a[i].slice(b);
            } else if (a[i].includes("DISPLAY-Type")) {
                data[9].value = a[i].slice(b);

            } else if (a[i].includes("DISPLAY-Size")) {
                data[10].value = a[i].slice(b);

            } else if (a[i].includes("DISPLAY-Resolution")) {
                data[11].value = a[i].slice(b);

            } else if (a[i].includes("DISPLAY-Protection")) {

                data[12].value = a[i].slice(b);
            } else if (a[i].includes("PLATFORM-OS")) {
                data[13].value = a[i].slice(b);

            } else if (a[i].includes("PLATFORM-Chipset")) {
                data[14].value = a[i].slice(b);

            } else if (a[i].includes("PLATFORM-CPU")) {

                data[15].value = a[i].slice(b);
            } else if (a[i].includes("PLATFORM-GPU")) {
                data[16].value = a[i].slice(b);

            } else if (a[i].includes("MEMORY-Card slot")) {
                data[17].value = a[i].slice(b);

            } else if (a[i].includes("MEMORY-Internal")) {
                data[18].value = a[i].slice(b);

            } else if (a[i].includes("MAIN CAMERA-Module")) {
                data[19].value = a[i].slice(b);

            } else if (a[i].includes("MAIN CAMERA-Features")) {

                data[20].value = a[i].slice(b);
            } else if (a[i].includes("MAIN CAMERA-Video")) {
                data[21].value = a[i].slice(b);

            } else if (a[i].includes("SELFIE CAMERA-Module")) {
                data[22].value = a[i].slice(b);

            } else if (a[i].includes("SELFIE CAMERA-Features")) {
                data[23].value = a[i].slice(b);

            } else if (a[i].includes("SELFIE CAMERA-Video")) {
                data[24].value = a[i].slice(b);

            } else if (a[i].includes("SOUND-Loudspeaker")) {
                data[25].value = a[i].slice(b);

            } else if (a[i].includes("SOUND-3.5mm jack")) {
                data[26].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-WLAN")) {
                data[27].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-Bluetooth")) {
                data[28].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-GPS")) {
                data[29].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-NFC")) {
                data[30].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-Radio")) {
                data[31].value = a[i].slice(b);

            } else if (a[i].includes("COMMS-USB")) {
                data[32].value = a[i].slice(b);

            } else if (a[i].includes("FEATURES-Sensors")) {
                data[33].value = a[i].slice(b);

            } else if (a[i].includes("BATTERY-Type")) {
                data[34].value = a[i].slice(b);

            } else if (a[i].includes("BATTERY-Charging")) {
                data[35].value = a[i].slice(b);

            } else if (a[i].includes("BATTERY-Standby")) {
                data[36].value = a[i].slice(b);

            } else if (a[i].includes("BATTERY-Talktime")) {
                data[37].value = a[i].slice(b);

            } else if (a[i].includes("MISC-Colors")) {
                data[38].value = a[i].slice(b);

            } else if (a[i].includes("MISC-Models")) {
                data[39].value = a[i].slice(b);

            } else if (a[i].includes("MISC-SAR")) {

                data[40].value = a[i].slice(b);
            } else if (a[i].includes("MISC-SAR EU")) {

                data[41].value = a[i].slice(b);
            } else if (a[i].includes("TESTS-Performance")) {
                data[42].value = a[i].slice(b);

            } else if (a[i].includes("TESTS-Display")) {
                data[43].value = a[i].slice(b);

            } else if (a[i].includes("TESTS-Loudspeaker")) {
                data[44].value = a[i].slice(b);

            } else if (a[i].includes("TESTS-Battery life")) {

                data[45].value = a[i].slice(b);
            } else {

                // console.log(a[i])
            }

        }
        // console.log(data);
        const mobileData = {
            xCheckRating: -1,
            twoG: false,
            threeG: false,
            fourG: false,
            fiveG: false,
            announced: Date.now(),
            weight: -1,
            dualSim: false,
            ipxRating: null,
            displayType: null,
            displayHz: -1,
            displayResolutionHeight: -1,
            displayResolutionWidth: -1,
            os: null,
            cpuNoOfCores: -1,
            cpuHz: -1,
            cardSlot: false,
            pCamera: [
                {
                    name: null,
                    MP: -1,
                    fNumber: -1
                }

            ],
            pVideoResolution: {
                height: -1,
                width: -1
            },
            sCamera: [
                {
                    name: null,
                    MP: -1,
                    fNumber: -1
                }
            ],
            sVideoResolution: {
                height: -1,
                width: -1
            },
            nfc: false,
            batterymAh: -1,
            chargingWatt: -1,


        };
        let month, year;
        if (data[0].value.includes("GSM")) {
            mobileData.twoG = true;
        }
        if (data[0].value.includes("HSPA")) {
            mobileData.threeG = true;
        }
        if (data[0].value.includes("LTE")) {
            mobileData.fourG = true;
        }
        if (data[0].value.includes("5G")) {
            mobileData.fiveG = true;
        }
        if (data[3].value.includes("January")) {
            month = "January";
        } else if (data[3].value.includes("February")) {
            month = "February";
        } else if (data[3].value.includes("March")) {
            month = "March";
        } else if (data[3].value.includes("April")) {
            month = "April";
        } else if (data[3].value.includes("May")) {
            month = "May";
        } else if (data[3].value.includes("June")) {
            month = "June";
        } else if (data[3].value.includes("July")) {
            month = "July";
        } else if (data[3].value.includes("August")) {
            month = "August";
        } else if (data[3].value.includes("September")) {
            month = "September";
        } else if (data[3].value.includes("October")) {
            month = "October";
        } else if (data[3].value.includes("November")) {
            month = "November";
        } else if (data[3].value.includes("December")) {
            month = "December";
        }
        if (data[3].value.includes("2022")) {
            year = 2022;
        } else if (data[3].value.includes("2021")) {
            year = 2021;
        } else if (data[3].value.includes("2020")) {
            year = 2020;
        } else if (data[3].value.includes("2019")) {
            year = 2019;
        } else if (data[3].value.includes("2018")) {
            year = 2018;
        } else if (data[3].value.includes("2017")) {
            year = 2017;
        } else if (data[3].value.includes("2016")) {
            year = 2016;
        } else if (data[3].value.includes("2015")) {
            year = 2015;
        } else if (data[3].value.includes("2014")) {
            year = 2014;
        } else if (data[3].value.includes("2013")) {
            year = 2013;
        } else if (data[3].value.includes("2012")) {
            year = 2012;
        } else if (data[3].value.includes("2011")) {
            year = 2011;
        } else if (data[3].value.includes("2009")) {
            year = 2009;
        } else if (data[3].value.includes("2008")) {
            year = 2008;
        } else if (data[3].value.includes("2007")) {
            year = 2007;
        } else if (data[3].value.includes("2006")) {
            year = 2006;
        }

        let myDate = Date.parse(month + " 01," + year);
        mobileData.announced = myDate;

        if (data[7].value.includes("Dual Sim")) {
            mobileData.dualSim = true;
        }

        if (data[8].value.includes("IP68")) {
            mobileData.ipxRating = "IP68";
        } else if (data[8].value.includes("IP67")) {
            mobileData.ipxRating = "IP67";
        } else if (data[8].value.includes("IP66")) {
            mobileData.ipxRating = "IP66";
        } else if (data[8].value.includes("IP65")) {
            mobileData.ipxRating = "IP65";
        }



        const mobile = new mobilephone({
            name: myName,
            image: [],
            highlights: [],
            rating: 0,
            criticRating: 0,
            star: 0,
            price: 0,
            priceList: [],
            specification: data,
            photos: [],
            xCheckRating: mobileData.xCheckRating,
            twoG: mobileData.twoG,
            threeG: mobileData.threeG,
            fourG: mobileData.fourG,
            fiveG: mobileData.fiveG,
            announced: mobileData.announced,
            weight: mobileData.weight,
            dualSim: mobileData.dualSim,        //done
            ipxRating: mobileData.ipxRating,
            displayType: mobileData.displayType,
            displayHz: mobileData.displayHz,
            displayResolutionHeight: mobileData.displayResolutionHeight,
            displayResolutionWidth: mobileData.displayResolutionWidth,
            os: mobileData.os,
            cpuNoOfCores: mobileData.cpuNoOfCores,
            cpuHz: mobileData.cpuHz,
            cardSlot: mobileData.cardSlot,
            pCamera: mobileData.pCamera,
            pVideoResolution: mobileData.pVideoResolution,
            sCamera: mobileData.sCamera,
            sVideoResolution: mobileData.sVideoResolution,
            nfc: mobileData.nfc,
            batterymAh: mobileData.batterymAh,
            chargingWatt: mobileData.chargingWatt,
            isReviewed: false,
            reviewDate: Date.now()
        })

        const result = await mobile.save();
        if (result) {
            const stars = new starsSchema({
                phoneId: result._id
            })
            const resultStar = await stars.save();
            if (resultStar) {
                res.status(200).json('OK')
                console.log("Data Posted to DB");
            } else {
                console.log("Data not posted to DB");
                res.status(400).json(err);
            }

        } else {
            console.log("Data not posted to DB");
            res.status(400).json(err);
        }



    } catch (err) {
        res.status(401).json(err);
        console.log(err);
    }
    res.end();
})

module.exports = router;