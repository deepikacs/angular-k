import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
 $(document).ready(function(){
  $("#hide").hide();
  $("#hi").click(function(){
    $("#hide").hide();
    $("#show").show();
  });
  $("#hello").click(function(){
    $("#show").hide();
    $("#hide").show();
  });
  $("#hide1").hide();
  $(".parent").click(function(){
    $("#show1").hide();
    $("#hide1").show();
  });
  $(".parent1").click(function(){
    $("#show1").show();
    $("#hide1").hide();
  });
  $("#hide2").hide();
  $(".hi").click(function(){
    $("#show2").hide();
    $("#hide2").show();
  });
  $(".hello").click(function(){
    $("#hide2").hide();
    $("#show2").show();
  });
  $("#hide3").hide();
  $(".hi1").click(function(){
    $("#show3").hide();
    $("#hide3").show();
  });
  $(".hello1").click(function(){
    $("#hide3").hide();
    $("#show3").show();
  });
  $("#hide4").hide();
  $(".hi2").click(function(){
    $("#show4").hide();
    $("#hide4").show();
  });
  $(".hello2").click(function(){
    $("#hide4").hide();
    $("#show4").show();
  });
  $("#hide5").hide();
  $(".hi3").click(function(){
    $("#show5").hide();
    $("#hide5").show();
  });
  $(".hello3").click(function(){
    $("#hide5").hide();
    $("#show5").show();
  });
  $("#hide6").hide();
  $(".hi4").click(function(){
    $("#show6").hide();
    $("#hide6").show();
  });
  $(".hello4").click(function(){
    $("#hide6").hide();
    $("#show6").show();
  });
  $("#hide7").hide();
  $(".hi5").click(function(){
    $("#show7").hide();
    $("#hide7").show();
  });
  $(".hello5").click(function(){
    $("#hide7").hide();
    $("#show7").show();
  });
  $("#hide8").hide();
  $(".hi6").click(function(){
    $("#show8").hide();
    $("#hide8").show();
  });
  $(".hello6").click(function(){
    $("#hide8").hide();
    $("#show8").show();
  });
  $("#hide9").hide();
  $(".hi7").click(function(){
    $("#show9").hide();
    $("#hide9").show();
  });
  $(".hello7").click(function(){
    $("#hide9").hide();
    $("#show9").show();
  });
  $("#hide10").hide();
  $(".hi8").click(function(){
    $("#show10").hide();
    $("#hide10").show();
  });
  $(".hello8").click(function(){
    $("#hide10").hide();
    $("#show10").show();
  });
  $("#hide11").hide();
  $(".hi9").click(function(){
    $("#show11").hide();
    $("#hide11").show();

  });
  $(".hello9").click(function(){
    $("#hide11").hide();
    $("#show11").show();
  });
  $("#hide12").hide();
  $(".hi10").click(function(){
    $("#show12").hide();
    $("#hide12").show();

  });
  $(".hello10").click(function(){
    $("#hide12").hide();
    $("#show12").show();
  });
  $("#hide13").hide();
  $(".hi11").click(function(){
    $("#show13").hide();
    $("#hide13").show();

  });
  $(".hello11").click(function(){
    $("#hide13").hide();
    $("#show13").show();
  });
  $("#hide14").hide();
  $(".hi12").click(function(){
    $("#show14").hide();
    $("#hide14").show();
  });
  $(".hello12").click(function(){
    $("#hide14").hide();
    $("#show14").show();
  });
  var cacheDom = "";
  $('.parent').click(function(){
    cacheDom = $('.test');
    $('.test').remove();
  });
  $('.cal').click(function(){
    $('.test3').append(cacheDom);
    $('#b-btm1').removeClass('b-btm1');
    $('#b-btm2').removeClass('b-btm2');
    $('#b-btm2').addClass('b-btm1');
    $('#b-btm1').addClass('b-btm2');
    $('.parent1').click(function(){
      var cacheDom = $('.test');
      $('.test').remove();
    });
  });
  $('.cal1').click(function(){
    $('.test4').append(cacheDom);
    $('#b-btm1').addClass('b-btm1');
    $('#b-btm2').addClass('b-btm2');
    $('#b-btm2').removeClass('b-btm1');
    $('#b-btm1').removeClass('b-btm2');
  });
});

  }
}



