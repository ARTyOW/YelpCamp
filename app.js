/*jshint -W101 */
const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

let campgrounds = [
    {name: "Gorgeous Night Camp", image: "https://mtrosedrinks.com/wp-content/uploads/2016/06/camping.jpg"},
    {name: "Beast's Camp", image: "https://s3.amazonaws.com/socast-superdesk/media/20200525190536/6404f2f2-e5a6-47cb-bb7a-bf11c17f715b.jpg"},
    {name: "Camporeno Burrito", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/new-england-national-park/thungutti-campground/thunhgutti-campground-01.jpg"},
    {name: "Rust Wower Night Camp", image: "https://cdn.hiconsumption.com/wp-content/uploads/2019/07/Best-Affordable-Camping-Gear-000-Hero.jpg"},
    {name: "The Amusing Parsley Park", image: "https://globalnews.ca/wp-content/uploads/2017/06/camping-in-bc.jpg?quality=85&strip=all&w=1200"},
    {name: "River Forest Gamp", image: "https://cottagelife.com/wp-content/uploads/2018/05/shutterstock_1011182509.jpg"}
];

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds:campgrounds});
});

app.post('/campgrounds', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name:name, image:image};
    if(name.length > 1 && image.startsWith("https://")){
        campgrounds.push(newCampground);
        res.redirect('/campgrounds');
    } else {
        console.log("OOPS");
        res.redirect('/campgrounds/new');
    }
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => {
    console.log(`Server has started at http://localhost:${port}`);
});