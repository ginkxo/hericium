'use strict';
/* invokes JS strict mode */
const fs = require('fs');
/* loads the 'fs' javascript module for file stuff */
const bc = require('bencode');

/*
const torrent = fs.readFileSync('puppy.torrent');
*/
/*
    fs.readFileSync returns a buffer not a string
    buffers are sequences of raw bytes
    if you want to read the buffer as a string you need to specify the .toString encoding
    utf-8 is one example
*/
const torrent = bc.decode(fs.readFileSync('puppy.torrent'));
console.log(torrent.announce.toString('utf8'));


