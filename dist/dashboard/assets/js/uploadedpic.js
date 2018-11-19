
$.ajax({
  url:'https://vantrilio.4-co.nl/projects/dashboard/uploads/image.jpg',
  type:'HEAD',
  error: function()
  {
     $('.uploaded').hide();
  },
  success: function()
  {
    console.log('exists');
  }
});
