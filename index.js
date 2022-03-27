const puppeteer = require('puppeteer');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const locationurl = process.env.LOCATIONURL;
const loginurl = process.env.LOGINURL;
const latitude = parseFloat(process.env.LATITUDE);
const longitude = parseFloat(process.env.LONGITUDE);


(async () => {

    await new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 3000)));
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20
    });

    const context = browser.defaultBrowserContext()
    await context.overridePermissions(locationurl, ['geolocation'])
    const page = await browser.newPage();
    await page.setGeolocation({ latitude, longitude })

    await page.goto(loginurl);
    const usernameinput = await page.$('#username');
    await usernameinput.type(username);
    const passwordElement = await page.$('#password');
    await passwordElement.type(password);

    let loginbtn = await page.$('#fm1 > div.loginMouth > button');
    await Promise.all([
        loginbtn.click(),
        page.waitForNavigation()
    ]);

    try {
        const btn = await page.waitForSelector('#app > div > div.css-1dbjc4n.r-105ug2t > div > div > div > div:nth-child(2) > div > div', { timeout: 5000 });
        await btn.click();
    } catch (e) {
    }

    const tempbtn = await page.$('#TW1 > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div');
    const localbtn = await page.$('#HQDW > div:nth-child(2) > div:nth-child(2) > div');
    const atschoolbtn = await page.$('#JRSFZX > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(1)');
    // await Promise.all([tempbtn.click(), localbtn.click(), atschoolbtn.click()]);
    try {
        await tempbtn.click();
        await localbtn.click();
        const btn = await page.waitForSelector('#app > div > div.css-1dbjc4n.r-105ug2t > div > div > div > div:nth-child(2) > div', { timeout: 10000 });
        await btn.click();
        await atschoolbtn.click();
        const submitbtn = await page.$('#BT_CLICK > div:nth-child(2) > div:nth-child(2) > div');
        await Promise.all([
            submitbtn.click(),
            page.waitForNavigation()
        ]);

    } catch (e) {
        console.log(e)
    }

    console.log('done');
    await browser.close();

})();
