/* #getAllUsernames
 *
 * Takes in an object and returns an array of all usernames.
 *
 * @param {Object}
 * @return {Array}
 */

var getAllUsernames = function(obj) {
  // console.log(obj);
  //create a new array that contains the result
  var newArr = [];
//Variable users is able to reach all the usernames
  var users = obj.data.id;
  //for (var i in users)  is used for objects as opposed to arrays
   for (var i in users) {
     //pushes the result into the array, newArr[]
     newArr.push(users[i].username);
   }
   return newArr;
};

/* #hometownCity
 *
 * Takes in an array and returns a string of the users hometown city.
 *
 * @param {Array}
 * @return {String}
 */

var hometownCity = function(arr){
//console.log(arr[i].hometown); just to check the console log
for (var i = 0; i < arr.length; i++){
  return arr[i].hometown.state.montana.city;
}


}
/* #usersCurrentState
 *
 * Takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var usersCurrentState = function(data, usernames){
  var obj = {};
  for(var i =0;i < data.length; i++){
      obj[usernames[i]] = data[i][1].currentLocation.state;
    
  }
return obj;

}

/* #findAdmin
 *
 * Takes in an object and returns the username of the admin.
 *
 * @param {Object}
 * @return {String}
 */

var findAdmin = function(obj){
  //console.log(obj.data.id)
  var userAdmin = obj.data.id;

    for(var i in userAdmin){
      //finds out if a profile is admin or not and finds the username for admins
      if (userAdmin[i].admin === true){
        return userAdmin[i].username;
      }
    }

}

/* #addNewMovie
 *
 * Takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.
 *
 * @param {Object}
 * @param {Number} id
 * @param {String} movie to add to array
 * @return {Array}
 */

var addNewMovie = function(data, id, newMovie){
 //console.log(data.data.id[id]);
var arr = [];
var favMovie = data.data.id[id].favoriteMovies;

favMovie.push(newMovie);
return favMovie



}

/* #favoriteBooks
 *
 * Takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.
 *
 * @param {Object}
 * @return {Array}
 */

var favoriteBooks = function(obj){
  var users = obj.data.id;
  var arr = [];
  var obj = {};
  for(let i in users){
  obj[users[i].favoriteBook.author] = users[i].favoriteBook.title;
}
arr.push(obj);
return arr;

}

/* #countTracks
 *
 * Takes in an object and returns the number amount of tracks offered.
 *
 * @param {Object}
 * @return {Number}
 */

var countTracks = function(obj){
  var num = 0;

  var tracks = Object.keys(obj.devLeague.tracks).length;
  num += tracks

  return num;
}

/* #fullTimeStatus
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var fullTimeStatus;

/* #newTrack
 *
 * Takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.
 *
 * @param {Object}
 * @param {Array}
 * @param {String}
 * @return {Object}
 */

var newTrack;

/* #studentCount
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var studentCount;

module.exports = {
  getAllUsernames: getAllUsernames,
  hometownCity: hometownCity,
  usersCurrentState: usersCurrentState,
  findAdmin: findAdmin,
  addNewMovie: addNewMovie,
  favoriteBooks: favoriteBooks,
  countTracks: countTracks,
  newTrack: null,
  fullTimeStatus: null,
  studentCount: null
};
