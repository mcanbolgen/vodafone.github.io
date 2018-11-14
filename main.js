// JavaScript source code

$(document).ready(function() {

    });

$(function()
{
    $('.slider').on('input change', function(){
       // $(this).next($('.slider_label')).html(this.value);
        $(this).next($('#textInput')).val(this.value);
    });
    $('#textInput').each(function(){
        var value = $(this).prev().attr('value');
        $(this).val(value);
    });


})
$(function () {
	
	 $(".calculate").click(function () {
		$(".text").html("");
		var video = $(".video").val();
		var music = $(".music").val();
		var social = $(".social").val();

		// alert(music);

		var numVideo = Number(video);
		var numMusic = Number(music);
		var numSocial = Number(social);

		var maxVal = Math.max(numVideo, numMusic, numSocial);

		var txt = "";

		if (numVideo === maxVal) {
			$("input").val("0");
			$("output").html("");
			$(".text").append("<div class='text'>Size en uygun paketimiz <u>Video Pass</u></div>");
			$(".calculate").text("TEKRAR HESAPLA");
		}
		if (numMusic === maxVal) {
			$("input").val("0");
			$("output").html("");
			$(".text").append("<div class='text'>Size en uygun paketimiz <u>Müzik Pass</u></div>");
			$(".calculate").text("TEKRAR HESAPLA");
		}
		if (numSocial === maxVal) {
			$("input").val("0");
			$("output").html("");
			$(".text").append("<div class='text'>Size en uygun paketimiz <u>Soyal Pass</u></div>");
			$(".calculate").text("TEKRAR HESAPLA");
		}

		

		//if ((numVideo > numMusic) && (numVideo > numSocial)) {
		//    alert("video");
		//}
		//else if ((numMusic > numVideo) && (numMusic > numSocial)) {
		//    alert("music");
		//}
		//else if ((numSocial > numMusic) && (numSocial > numVideo)) {
		//    alert("social");
		//}
		//else {
		//    alert("eq");
		//}

	});
	
	
	
	
	
	
   
})
