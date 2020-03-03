const express = require("express");

const bodyParser = require("body-parser");

const List = require("./lib/List");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * Route to request next available id.
 */
app.get("/id", async (req, res, next) => {
  try {
    // await scraper.scrapeAndSave();
    // res.status(200).send('Fresh data scraped!');
    const list = new List();
    const id = list.getId();

    res.status(200).send(id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

/**
 * Route telling api that id has been used and should no longer be provided
 */
app.post("/id", async (req, res, next) => {
  try {
    // const globalPackage = await scraper.init();
    // globalPage = globalPackage.page;
    // globalBrowser = globalPackage.browser;
    // await scraper.authReq(globalPage);
    // res.status(200).send();
  } catch (err) {
    // console.log('Auth error. Auth may not be necessary.');
    // res.status(201).send('You are authenticated.');
    // await globalBrowser.close();
  }
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(
    `AWS Summit Dubai ID API running on port http://localhost:${port}`
  );
});
