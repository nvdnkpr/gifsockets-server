# gifsockets-server changelog
0.36.0 - Moved to `gifsockets-middleware` node module

0.35.1 - Updated README with `gifsockets` dependency

0.35.0 - Moved to `gifsockets` node module

0.34.1 - Updated package.json description

0.34.0 - Updated README with module information and more documentation

0.33.0 - Moved to commander for CLI

0.32.0 - Moved to proper open/close via gif-canvas for connections

0.31.0 - Cleaned up TODOs and relocated string decoding into gif-canvas

0.30.1 - Updated installation documentation

0.30.0 - Moved to `phantomjs-pixel-server` and `gif-encoder` node modules

0.29.0 - Added tests, close route, and updated /image/raw to /image/json

0.28.0 - Added background image prompt

0.27.0 - Updated input sizing at lower widths

0.26.0 - Fixed up placeholder CSS

0.25.0 - Added key binding for (ctrl/meta)+enter in textarea

0.24.0 - Added ability to customize fonts and colors

0.23.0 - Added client side maxlength

0.22.0 - Implemented multiline text

0.21.0 - Moved to Bootstrap width GIF and added another media query for heading

0.20.0 - Added media query styling and GitHub ribbon

0.19.2 - Removed dev console.logs

0.19.1 - Tweaking README

0.19.0 - Open sourced repository and purged deploy keys

0.18.2 - Removed unnecessary pkill from deploy script

0.18.1 - Brought back patch from 0.17.0

0.18.0 - Moved to separate services for phantomjs server and main server

0.17.0 - Fix for multi-line strings and quotes

0.16.1 - Fix for pkill in deploy script

0.16.0 - Moved to phantomjs server over phantomjs child process

0.15.0 - Removed intermediate image data parsing

0.14.1 - Fix for Google Analytics on drag and drop

0.14.0 - Moved to string as transport for image data

0.13.0 - Added drag and drop support

0.12.0 - Added Google Analytics tracking to webpage

0.11.0 - Moved to express and hosting webpage

0.10.0 - Relocated and broke down gif-server into server folder

0.9.1 - Added more timings but did not find any low hanging fruit

0.9.0 - Broke down GIFEncoder and making efficient buffering happen

0.8.0 - Moved to single frame compile for performance boost

0.7.0 - Implemented GET/POST server for posting arbitrary strings

0.6.0 - Created a repl interface, meeting parity of the original gifsockets

0.5.0 - Implemented GifDuplex which allows for read/write of frames

0.4.0 - One more performance squeeze for reduced memory collection

0.3.0 - Moved to series over parallel image data collection

0.2.0 - Removed unnecessary excess memory and thinned out memory model

0.1.0 - Touched up server and deployed working gif to servers

0.0.13 - Moved output from image to text

0.0.12 - Completed server which is streaming out parts of gif slowly

0.0.11 - Created server to output gif from disk

0.0.10 - Streaming out gif to disk

0.0.9 - Moved to classical inheritance model for GifEncoder

0.0.8 - Writing gif as a buffer to disk (over uint8array)

0.0.7 - Writing text to canvas

0.0.6 - Moved on to eval based canvas

0.0.5 - Generating a looping animated GIF

0.0.4 - Generating a GIF from image via phantomjs canvas

0.0.3 - Generating a GIF from browser data

0.0.2 - Detecting FPS of ansi-canvas. Seems to be 10FPS maximum.

0.0.1 - Got keypress events working in terminal
