var earthquakeData = [];
//load api data
//do I need to pass a param for the function? maybe earthquakeData?
function coordinatesList() {
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then((data) =>{
    console.log(data);
    //when () is needed?
    //earthquakeList =(data.features);
    var earthquakeList = data.features;
    
    for (i = 0 ; i < earthquakeList.length; i++)
    {
        //do I need to create so many variables?
        //let coordinates = 
        console.log([earthquakeList[i].geometry.coordinates[1],earthquakeList[i].geometry.coordinates[0]]);
        //console.log([earthquakeList[i].geometry.coordinates[1],earthquakeList[i].geometry.coordinates[2]])
        //console.log(data.features[i].geometry.coordinates[2]);
        //console.log(data.features[i].properties.place);
        //why do I need the 1st one?
        //let currentPlace = place[i];

        //perhaps it needs to read the geojson - day02? ex01
        //add feature and return
       earthquakeData.push(
        L.circle(
            [earthquakeList[i].geometry.coordinates[1],earthquakeList[i].geometry.coordinates[0]]
            //[39.3210, - 111.0937]
            
            ,{
                //the depth of the earthquake by color
                color: "red",
                fillColor: "red",
                //magnitude of the earthquake by their size
                //data.features[i].properties.mag,
                //perhaps need a function with if statement to be able to change it? day2
                radius: 20000,
                title: "Hey" // hoover
            }
            //popup
            ).bindPopup(`<h1> Mag: ${data.features[i].properties.mag} <br> Place: ${data.features[i].properties.place} <br>
            Lat:${data.features[i].geometry.coordinates[1]} <br> Lon: ${data.features[i].geometry.coordinates[0]} <br> Depth: ${data.features[i].geometry.coordinates[2]}<h1>`)
        ) //push parentesis
            //.addTo(myMap);

    }   
  
    
    })
    //)     
}

//cretating layer group to add all markers at once
var earthquakeLayer = L.layerGroup(earthquakeData)
//
var overlays = {
    cities: earthquakeLayer // togglable option that can show the markers or not

}

//create map coordinates
var myMap = L.map("map", 
{
    center: [39.3210, - 111.0937],
    zoom: 6,
    layers: [earthquakeLayer]
}
);

//add layer
//street =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//to be added to add greyscale
/*
var tiles ={
    street : street
}

*/


//toggle
L.control.layers({},overlays).addTo(myMap);


//legend

//==========================================================================
/*
//create map coordinates
var myMap = L.map("map", 
    {
        center: [39.3210, - 111.0937],
        zoom: 6,
        //layers: [street, earthquakes]
    }
);

//add layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//add marker

let marker = L.circle(
    [39.3210, - 111.0937],{
        color: "red",
        fillColor: "red",
        //radius:data.features[i].properties.mag,
        title: "Hey" // hoover
    }

).bindPopup("pop up")
.addTo(myMap);

//
/*L.polygon(
    [39.3210, - 111.0937],{
        color: "red",
        fillColor: "red",
        //radius:data.features[i].properties.mag,
        title: "Hey" // hoover
    })
*/

//marker.bindPopup("pop up"); // pop up


//call the functions
coordinatesList();


//Earthquake coordinates are inside [data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]]
//The depth of the earth can be found as the third coordinate for each earthquake
//radius = mag
//color = depth
//
