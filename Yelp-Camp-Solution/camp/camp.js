const insertCampImages = () => {
    let campList = [
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Buloy Springs.jpg',
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Calagus Islands.jpg',
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Latik Riverside.jpg',
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Mount Ulap.png',
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Onay Beach.jpg',
    '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg'
];
let map = '/Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/Assets/Map.png';
let maincontent = document.getElementsByClassName("main-content");
let section = document.createElement("div");
// section.className = "top";
let mapId = document.createElement("div");
// mapId.className = "map"
let mp = document.createElement('img');
let image = document.createElement('img');
for(let camp of campList){
    mp.src = map;
    mapId.appendChild(mp);
    image.src = camp;
    section.appendChild(image);
    maincontent.appendChild(mapId)
    maincontent.appendChild(section)
}
}