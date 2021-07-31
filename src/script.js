const puppeteer = require('puppeteer');

async function scrapeNotice(){
    const chromeOptions = {
        headless: true,
        defaultViewport: null,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
    };
    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto('https://jgec.ac.in/allnotice.php');


    //Even Semester
    //1st Notice

    //Title
    const [el2] = await page.$x('/html/body/div[4]/p[1]');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    //Link
    const [el] = await page.$x('/html/body/div[4]/p[2]/a');
    const src = await el.getProperty('href');
    const srcTxt = await src.jsonValue();

    //2nd Notice

    //Title
    const [el4] = await page.$x('/html/body/div[4]/p[4]');
    const txt1 = await el4.getProperty('textContent');
    const rawTxt1 = await txt1.jsonValue();

    //link
    const [el6] = await page.$x('/html/body/div[4]/p[5]/a');
    const src1 = await el6.getProperty('href');
    const srcTxt1 = await src1.jsonValue();


    //Odd Semester
    //Title
    const [el3] = await page.$x('/html/body/div[3]/p[1]');
    const txt2 = await el3.getProperty('textContent');
    const rawTxt2 = await txt2.jsonValue();

    //Link
    const [el7] = await page.$x('/html/body/div[3]/p[2]/a');
    const src2 = await el7.getProperty('href');
    const srcTxt2 = await src2.jsonValue();

    //Title
    const [el8] = await page.$x('/html/body/div[3]/p[4]/text()');
    const txt3 = await el8.getProperty('textContent');
    const rawTxt3 = await txt3.jsonValue();

    //Link
    const [el9] = await page.$x('/html/body/div[3]/p[5]/a');
    const src3 = await el9.getProperty('href');
    const srcTxt3 = await src3.jsonValue();


    // console.log("Even Sem")
    // console.log({rawTxt, srcTxt});
    // console.log({rawTxt1, srcTxt1});
    // console.log("ODD sem")
    // console.log({rawTxt2, srcTxt2});
    // console.log({rawTxt3, srcTxt3});

    browser.close();

    return (
        {
            rawTxt,
            srcTxt,
            rawTxt1,
            srcTxt1,
            rawTxt2,
            srcTxt2,
            rawTxt3,
            srcTxt3
        }
    );
    
}

module.exports = {
    notice:scrapeNotice()
};
// scrapeNotice();