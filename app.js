var uniquePhoto;
var albumCount = 0;
var albumName;
var albumNameDiv;
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
        $('section').append(albumDivs(albumName));
        $('aside').append(albumButtons(albumName));
        _.each(el,function(thirdelement){
            uniquePhoto = thirdelement;
            albumNameDiv = "#" + albumName;
            $(albumNameDiv).append(photoImages(uniquePhoto));
        });
        $('aside button').on('click',function(event){
          event.preventDefault();
          var clickedSelection = "#" + $(this).attr('rel');
          console.log(clickedSelection);
          var siblings = $('clickedSelection').siblings('section');
          var children = $('section').children();
          console.log(siblings);
          $(clickedSelection).children().css({"display":"block", "width":"100%"});
          $(clickedSelection).css({"display":"block  ", "width":"100%"});
          $(clickedSelection).siblings().css({"display":"none  ", "width":"100%"});

        });
        $('section .albumDiv').on('click',function(event){
          var clickedSelection = "#" + $(this).attr('rel');
          var siblings = $(this).siblings();
          console.log(siblings);
          console.log(clickedSelection);
          event.preventDefault();
          $('aside button').css({"display":"block"});
          $(siblings).css({"display":"none"});
          $(clickedSelection).css({"width":"800px"});
          $(clickedSelection).children().css({"display":"inline-block","width": "30%"});
          $(clickedSelection).children().children().css({"width":"40%","display":"inline-block"});

      });
      });
  });

});
