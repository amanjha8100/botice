const puppeteer = require('puppeteer');

async function scrapeNotice(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://jgec.ac.in/allnotice.php');

    //1st Notice

    //Title
    const [el2] = await page.$x('/html/body/div[4]/p[1]');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    //Date
    const [el3] = await page.$x('/html/body/div[4]/text()[1]');
    const txtD = await el3.getProperty('textContent');
    const rawTxtDate = await txtD.jsonValue();

    //Link
    const [el] = await page.$x('/html/body/div[4]/p[2]/a');
    const src = await el.getProperty('href');
    const srcTxt = await src.jsonValue();

    //2nd Notice

    //Title
    const [el4] = await page.$x('/html/body/div[4]/p[4]');
    const txt1 = await el4.getProperty('textContent');
    const rawTxt1 = await txt1.jsonValue();

    //Date
    const [el5] = await page.$x('/html/body/div[4]/text()[2]');
    const txtD1 = await el5.getProperty('textContent');
    const rawTxtDate1 = await txtD1.jsonValue();

    //link
    const [el6] = await page.$x('/html/body/div[4]/p[5]/a');
    const src1 = await el6.getProperty('href');
    const srcTxt1 = await src1.jsonValue();




    console.log({rawTxt, rawTxtDate, srcTxt});
    console.log({rawTxt1, rawTxtDate1, srcTxt1});
    browser.close();
}

scrapeNotice();