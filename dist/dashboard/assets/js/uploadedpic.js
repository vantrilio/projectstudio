
$.ajax({
  url:'http://localhost/projectstudio/dist/dashboard/uploads/image.jpg',
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
