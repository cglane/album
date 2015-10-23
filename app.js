var uniquePhoto;
var albumCount = 0;
var albumName;
$(document).ready(function(){
  var numAlbums = 0;
  var photoImages = _.template($('#photoImages').html());
  var albumDivs = _.template($('#albumDivs').html());
  var albumButtons = _.template($('#albumButtons').html());
  //three iterations through albums div,
  //second iteration: create album divs
  //third iteration adding creating photo div
  _.each(albums,function(item){
      _.each(item,function(el){
        albumCount ++;
        albumName = "album" + albumCount;
        console.log(albumName);
        $('section').append(albumDivs(albumName));
        $('aside').append(albumButtons(albumName));
        _.each(el,function(thirdelement){
            uniquePhoto = thirdelement;
            $('section').append(photoImages(uniquePhoto));
        });

      });
  });

});
