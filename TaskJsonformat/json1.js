// var json = {
//    jsonData : {
//       one: [32,33,45,67,],
//       Two: [12,14,16,18,20],
//       three:[42,42]
//    }
// };

// for(var Key in json.jsonData) {
//    for(var key1 in json.jsonData[key]){
//       console.log(json.jsonData[key] [key1])
//    }
// }

//  json.Keys(jsonData).forEach(funcation(key)){
  // console.log(key +""+ jsonData[Key]);

     
   
// });

// for of 

var json = {
   "name": "suriya",
   "age": "25",
   "city": "gudalur"
};
for(let [key, value] of Object.entries(json)){
   console.log(typeof[key]);
}



