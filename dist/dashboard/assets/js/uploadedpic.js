
$.ajax({
  url:'http://127.0.0.1:3000/dist/dashboard/uploads/image.jpg',
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
