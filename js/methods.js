const playlist = {
    name: 'My super playlist',
    rating : 5,
    tracks : ['track-1', 'track-2','track-3'],
    trackCount : 3,
changeName(newName) {
console.log ('this inside changeName: ', this);
this.name = newName;

},

addTrack(track) {
this.tracks.push(track);
},

updateRating(newRating){
this.rating = newRating;
},
getTrackCount() {
    return this.tracks.length;
},

};

console.log(playlist.getTrackCount());

playlist.changeName ('New name');
console.log(playlist);

playlist.addTrack ('new track');
console.log(playlist);








// getName: function () {
//     console.log ('this is getname')
// }, 

// getName: () {
//     console.log ('this is getname');
// }, 