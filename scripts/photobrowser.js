$(document).ready(function()
{
  var apiKey = '4d69b11fed2630a1c6d0e610c318310e';
  var searchQuery = 'CSS_Zen_Garden';
  var perPage = '25';

  var string ='http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key='+ apiKey +'&text='+ searchQuery +'&per_page='+ perPage;

  $.getJSON('http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key='+ apiKey +'&text='+ searchQuery +'&per_page='+ perPage +'&jsoncallback=?',
    function(data) 
    {
      $.each(data.photos.photo, function(i, rPhoto)
      {
        var basePhotoURL = 'http://farm'+ rPhoto.farm +'.static.flickr.com/'
            + rPhoto.server +'/'+ rPhoto.id +'_'+ rPhoto.secret;

        var thumbnailURL = basePhotoURL +'_s.jpg';
        var actualPhotoURL = basePhotoURL +'.jpg';

        var photostring = '<a title="'+ rPhoto.title +'" href="'+ actualPhotoURL +'"><img src="'
                           + thumbnailURL +'" alt="'+ rPhoto.title +'"/></a>;'

        $(photostring).appendTo("#flickr");
      });
    });
});