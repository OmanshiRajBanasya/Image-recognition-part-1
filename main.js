Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log(result);
document.getElementById("result_object_name").innerHTML = result[0].label;
document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);