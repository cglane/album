var uniquePhoto;
var albumCount = 0;
var albumName;
var albumNameDiv;
var photoNumber = 1;
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
            $(albumNameDiv).append(photoImages(uniquePhoto,photoNumber));
            photoNumber ++;
        });
        //set background image of album div

        $('aside button').on('click',function(event){
          event.preventDefault();
          var clickedSelection = "#" + $(this).attr('rel');
          var clickedSelectionP = "#" + $(this).attr('rel')+ " " + "p";

          console.log(clickedSelection);
          var siblings = $('clickedSelection').siblings('section');
          var children = $('section').children();
          console.log(siblings);
          $(clickedSelection).children().css({"display":"inline-block", "width":"30%"});
          $(clickedSelectionP).css({"width": "50%", "margin-left":"35%"});
          $(clickedSelection).css({"display":"inline-block ", "width":"100%"});
          $(clickedSelection).siblings().css({"display":"none  ", "width":"100%"});

        });
        $('section .albumDiv p').on('click',function(event){
          var clickedSelection = $(this).closest("div");
          console.log(clickedSelection);
          var siblings = clickedSelection.siblings();
          var clickedSelectionP = $(this);
          console.log(clickedSelectionP);
          event.preventDefault();
          $('aside button').css({"display":"block"});
          $(siblings).css({"display":"none"});
          $(clickedSelection).css({"width":"800px"});
          $(clickedSelection).children().css({"display":"inline-block","width": "30%"});
          $(clickedSelectionP).css({"width": "70%", "margin-left":"35%"});
          $(clickedSelection).children().children().css({"width":"100%","display":"inline-block"});

      });
        $('section .albumDiv .photoDiv').on('click',function(event){
            var clickedSelection = $(this).attr('id');
            var photoIdNumber = "#" + clickedSelection;
            $(photoIdNumber).css({"display": "block", "width": "100%"});
            $(photoIdNumber).siblings().css({"display":"none", "width": "50"});
            console.log(photoIdNumber);
        });
      });
  });

});
