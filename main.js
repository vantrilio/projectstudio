var file1;
var file2;
var control;

file1 = "webcamImage/0.jpg";
file2 = "webcamImage/1.jpg";

// $('#file1').on('change',function(){
//     file1 = this.files[0];
// });
//
// $('#file2').on('change',function(){
//    file2 = this.files[0];
// });



$( document ).ready(function multiStep() {
  // do some work here
  $("#take_snapshots").click();

  control = resemble(file1).compareTo(file2).onComplete(onComplete);



  var newtime = 7500;

    setTimeout(multiStep, newtime);
});




function onComplete(data) {
    var time = Date.now();
    var diffImage = new Image();
    diffImage.src = data.getImageDataUrl();
    console.log(data.misMatchPercentage);

    $("#image-diff").html(diffImage);

    $(diffImage).click(function() {
        var w = window.open("about:blank", "_blank");
        var html = w.document.documentElement;
        var body = w.document.body;

        html.style.margin = 0;
        html.style.padding = 0;
        body.style.margin = 0;
        body.style.padding = 0;

        var img = w.document.createElement("img");
        img.src = diffImage.src;
        img.alt = "image diff";
        img.style.maxWidth = "100%";
        img.addEventListener("click", function() {
            this.style.maxWidth =
                this.style.maxWidth === "100%" ? "" : "100%";
        });
        body.appendChild(img);
    });

    $(".buttons").show();

    if (data.misMatchPercentage == 0) {
        $("#thesame").show();
        $("#diff-results").hide();
    } else {
        $("#mismatch").text(data.misMatchPercentage);
        if (!data.isSameDimensions) {
            $("#differentdimensions").show();
        } else {
            $("#differentdimensions").hide();
        }
        $("#diff-results").show();
        $("#thesame").hide();
    }
}

    var resembleControl;
    var buttons = $(".buttons button");



    $('#igl').on('click',function(){
      control.ignoreLess();
    });

    $('#igc').on('click',function(){
      control.ignoreColors();
    });

    $('#iganti').on('click',function(){
      control.ignoreAntialiasing();
    });

    $('#igalpha').on('click',function(){
      control.ignoreAlpha();
    });



    $('#image_id').error(function() {
      $('#notification').hide();
    });
