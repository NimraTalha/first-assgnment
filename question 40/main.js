"use strict";
function make_album(artist, title, tracks) {
    // Create the album object with artist and title properties
    let album = { artist, title, tracks };
    // If tracks parameter is provided, add tracks property to the album object
    if (tracks) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
console.log(make_album("Artis one", "The first album"));
console.log(make_album("Artis Two", "The Second Album"));
console.log(make_album("Artis three", "The Third Album", 12));
