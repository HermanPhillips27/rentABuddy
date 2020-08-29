const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/buddies4rent", {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

const buddiesSeed = [{name: "Pete", price: 20.00, imgURL: "https://pbs.twimg.com/profile_images/1277041926487920645/cY4m60rL_400x400.jpg"}, 
{name: "TimtheTatman", price: 35.00, imgURL:"https://vignette.wikia.nocookie.net/youtube/images/f/f0/TimthetatmanFace.jpg/revision/latest/scale-to-width-down/350?cb=20190613064031"}, 
{name: "Drlupo", price:25.00, imgURL: "https://techcrunch.com/wp-content/uploads/2019/01/GettyImages-1054462370.jpg"}, {name: "JohnnySins", price: 20.00, imgURL: "https://vignette.wikia.nocookie.net/berlin-united-2/images/a/a0/Namnl%C3%B6st-3.png/revision/latest?cb=20200106114012"}, 
{name: "Eric Andre", price: 30.00, imgURL: "https://pyxis.nymag.com/v1/imgs/55f/b09/eeb9ce58c124f0f24896b75fb91867d3dc-08-eric-andre.rsquare.w700.jpg"}, 
{name: "Mellow Mike", price: 15.00, imgURL: "https://i.redd.it/c0lubv1l0oo21.jpg"}, 
{name: "Chazz", price: 15.00, imgURL: "https://lh4.googleusercontent.com/5_dx5vRX1hs_T3atBMsO1ktvCrmOLDZjZHw1d45DmqSqNAsGne-HAhoqlQw_aT0bhE7GiyTYCBX2uDg082l0_qkaTlyliQhbdPPPTMxoi_HJZNPmLD3fOqXlHxvTn5wLKw=s412"}, 
{name: "Borat Sagdiyev", price: 12.00, imgURL: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/21/13/borat.jpg?w968h681"}, 
{name: "White Goodman", price: 20.00, imgURL: "https://vignette.wikia.nocookie.net/villains/images/d/d9/Wgoodman.jpg/revision/latest/top-crop/width/360/height/450?cb=20110326004743"}, 
{name: "Ricky Bobby", price: 35.00, imgURL: "https://vignette.wikia.nocookie.net/villains/images/d/d9/Wgoodman.jpg/revision/latest/top-crop/width/360/height/450?cb=20110326004743"}, 
{name: "Lebron James", price: 100.00, imgURL: "https://cdn.vox-cdn.com/thumbor/n8g7ylNisjEX43zM4QcKtAwX-U8=/0x0:5568x3712/1200x800/filters:focal(2602x973:3492x1863)/cdn.vox-cdn.com/uploads/chorus_image/image/66085365/usa_today_13894911.0.jpg"}, {name: "Batman", price: 40.00, imgURL: "https://sm.ign.com/t/ign_za/feature/b/batman-ran/batman-ranking-the-movie-batsuits_zpfa.1200.jpg"}, 
{name: "John Cena", price: 25.00, imgURL: "https://dzone.com/storage/temp/12876949-pic-field-in-fall.jpg"}]

const senseisSeed = [{name: "Jim Dhima", price: 27, imgURL: "https://i.imgflip.com/2e8syk.jpg"}, 
{name: "Shroud", price: 40, imgURL: "https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/uncut_gems_0521881-e1577287301198.jpg"}, 
{name: "Mrs. Lippy", price: 15, imgURL: "https://i.redd.it/3hnvqk71pma11.jpg"}, 
{name: "Veronica Vaughn", price: 30, imgURL: "https://i.pinimg.com/originals/a5/21/24/a52124d6f1994dc54ab8d1957d429913.jpg"}, 
{name: "Dumbledore", price: 25, imgURL: "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest/top-crop/width/360/height/450?cb=20170109115706"},
{name: "Professor X", price: 30, imgURL: "https://sciencefiction.com/wp-content/uploads/2018/04/patrick-stewart-professor-x-770x560.jpg"}, 
{name: "Dewey Finn", price: 20, imgURL: "https://vignette.wikia.nocookie.net/schoolofrock/images/4/4f/Dewey-finn.jpg/revision/latest/scale-to-width-down/340?cb=20090330021401"}, 
{name: "Elizabeth Halsey", price: 20, imgURL: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2011/B005JU5JEI_BadTeacher_UXSY1._V145020191_SX1080_.jpg"}, 
{name: "Saul Silver", price: 25, imgURL: "https://i.pinimg.com/474x/6c/73/d2/6c73d2b9736f7f9086d9554db006fd53.jpg"}, {name: "Mclovin", price: 23, imgURL: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1225,w_1817,x_0,y_0/v1570743222/shape/mentalfloss/602919-sonypictureshomeent.jpg?itok=SFNzrm1R"}, 
{name: "Dale Doback", price: 15, imgURL: "https://pbs.twimg.com/profile_images/1575740248/Night_Hawk_400x400.jpg"}, 
{name: "Taika Waititi", price: 20, imgURL: "https://static01.nyt.com/images/2017/10/22/magazine/22waititi1/22waititi1-superJumbo.jpg"}, 
{name: "Macgruber", price: 25, imgURL: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/05/21142336/MacGruber_Anniversary1.jpg"}, 
{name: "Mr. Fox", price: 15, imgURL: "https://cinemayward.com/wp-content/uploads/2018/03/fantastic-mr-fox.jpg"}, 
{name: "Gene Spimoni", price: 20, imgURL: "https://compote.slate.com/images/88cab8c1-5c20-4593-8005-d308b6b9b123.jpg"}, {name: "Isla Fisher", price: 30, imgURL: "https://c8.alamy.com/comp/RGRMP5/isla-fisher-tag-2018-RGRMP5.jpg"}, 
{name: "Gary Johnston", price: 35, imgURL: "https://vignette.wikia.nocookie.net/teamamerica/images/d/d4/Garyjohnston.png/revision/latest/top-crop/width/360/height/450?cb=20141107103548"}, 
{name: "Regina George", price: 20, imgURL: "https://www.collegefashion.net/wp-content/uploads/2019/02/screen-shot-2019-01-01-at-114050-am.png"}, 
{name: "Ron Burgandy", price: 45, imgURL: "https://www.rollingstone.com/wp-content/uploads/2018/06/shutterstock_1563197a-661fa87d-8b0c-4e77-a052-73071a1759c9.jpg?w=1024"}, 
{name: "Ray Bruges", price: 20, imgURL: "https://images.csmonitor.com/csmarchives/2008/02/LBRUGES_P1.jpg?alias=standard_900x600nc"}]

db.Buddy
  .remove({})
  .then(() => db.buddies.collection.insertMany(buddiesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Teacher
  .remove({})
  .then(() => db.teachers.collection.insertMany(senseisSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  