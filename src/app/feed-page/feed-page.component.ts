import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
 //  	$(document).ready( function() {
	// $('.btn-file :file').on('fileselect', function(event, label) {
	// 	var input = $(this).parents('.input-group').find(':text'),
	// 	log = label;
	// 	if( input.length ) {
	// 		input.val(log);
	// 	} else {
	// 		if( log ) alert(log);
	// 	}
	// });

	// function readURL(input) {
	// 	if (input.files && input.files[0]) {
	// 		var reader = new FileReader();

	// 		reader.onload = function (e) {
	// 			$('#img-upload').attr('src', e.target.result);
	// 		}

	// 		reader.readAsDataURL(input.files[0]);
	// 	}
	// }

	// $("#imgInp").change(function(){ 
	// 	readURL(this);
	// });
	

// 	$('#hit').click(function() {
//     $("#displaysubs").show();
//     var text = $('#searchinput').val();
//     var basestring= $('#img-upload').attr('src')
//     var text2 = $("#bpost").val();

//     var image = `<img src="${basestring}" width="160px" height="120px">`;
//     var mtitle = '<h4 >'+ text + '</h4>';
//     var mpost = '<h6>' + text2 + '</h4>';
//     var script = "<script type='text/javascript'> 	$('#like').click(function(){$(this).css('background','#008B8B');}); </script>"
//     $('#displaysubs').append('<div class="row"><div class="col-sm-2 col-md-2 col-lg-2 col-xs-2"><img src="./images/33.jpeg" class="img-circle tpimg" height="40px" width="50px" alt="error" id="pimg"/></div><div class="col-sm-7 col-md-7 col-lg-7 col-xs-6" style="padding-left:35px"><h4 class="media-heading allshow">Varginias Paterson</h4><h6>Designation/Status</h6>' + mtitle + mpost + image + '</div><div class="col-sm-2 col-md-2 col-lg-2 col-xs-2 txtright">2hr</div><div class="col-sm-1 col-md-1 col-lg-1 col-xs-2 allshow1 txtright">:</div></div><div class="row"><div class="col-sm-4 col-md-4 col-lg-4 col-xs-4"><img src="./images/chat.png" class="fontsize chat" ><span class="number">325</span></div><div class="col-sm-8 col-md-8 col-lg-8 col-xs-8" style="text-align:right;"><img id="like" src="./images/3.png" class="fontsize chat"><span class="number">225</span></div><hr/>'+script);
// 	});
// 	$("#like1").click(function(){
// 	 $(this).css('background', '#008B8B');
// 	});
// 	$("#like2").click(function(){
// 	 $(this).css('background', '#008B8B');
// 	});
// 	$("#like3").click(function(){
// 	 $(this).css('background', '#008B8B');
// 	});
// 	$("#like4").click(function(){
// 	 $(this).css('background', '#008B8B');
// 	});
// 	$("#searchclear").click(function(){
//     $("#searchinput").val('');
// 	});
// });
}
}
