#!/usr/bin/env node

/*

this is just a simple script to sync the data from the index.html 
in the root-directory into all the index.html's in all languages.

currently only mediacoverage will be synced.

after running this script commit the changes.

use it like that in all the index.html's:

<table>
  <thead>
  	<tr>
  		<th>Medium</th>
  		<th>Date</th>
  		<th>Title</th>
  		<th>Language</th>
  	</tr>
  </thead>
  <!-- @MEDIACOVERAGE-START -->
    everything here will be replaced with the media-coverage from
    the root index.html
  <!-- @MEDIACOVERAGE-END -->
</table>

*/

var fs = require('fs')
var path = require('path')

var pathRoot = __dirname
var pathMain = path.resolve(pathRoot,'index.html')
var files = []
var dirs = ['cz','de','en','es','fr','it','pl','sk','sq']
dirs.forEach(function(dir){files.push(path.resolve(pathRoot,dir,'index.html'))})

var dataMain = fs.readFileSync(pathMain,'utf-8')
var re = /<!-- @MEDIACOVERAGE-START -->[\S\s]*<!-- @MEDIACOVERAGE-END -->/gm
var reExec = re.exec(dataMain)
if (!reExec) return console.log('did not find pattern in root-index.html: '+pathMain)
var mediaCoverage = reExec[0]

files.forEach(function(file){
  var data = fs.readFileSync(file,'utf-8')
  fs.writeFileSync(file,data.replace(re,mediaCoverage))
  console.log('did sync '+file)
})

