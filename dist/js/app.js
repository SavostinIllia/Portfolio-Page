"use strict";jQuery(document).ready(function(){var e,t,a;e=document.querySelector("#preloader"),$("body").css({overflowY:"hidden"}),e.addEventListener("animationend",function(){setTimeout(function(){e.classList.add("hide"),$("body").css({overflowY:"auto"})},1e3)}),function(){$(".page-navigation");var e=$(".page-navigation ul li a"),t=window.pageYOffset;e.each(function(){$(this).click(function(e){e.preventDefault();var t=$(this).attr("pagesection");$("html, body").animate({scrollTop:$(t).offset().top-50+"px"},1e3)})}),$(document).ready(function(){$(window).scroll(function(){var e=window.pageYOffset;0===e?$("header").removeClass("active"):t-e<0?(console.log("Down"),$("header").removeClass("active"),$("header").addClass("hiden")):0<t-e&&(console.log("Up"),$("header").addClass("active"),$("header").removeClass("hiden")),t=e})})}(),t=$("#about-me"),$(document).ready(function(){$(window).scroll(function(){200<window.pageYOffset&&t.find($(".custom-title-low")).addClass("active"),450<window.pageYOffset&&(t.find($(".about-me-img")).addClass("active"),t.find($(".about-me-text p")).addClass("animate-text"))})}),$(window).scroll(function(){1050<this.window.pageYOffset&&($("#education .custom-title-low").addClass("active"),console.log(window.pageYOffset)),1099<window.pageYOffset&&$(".education-list li:nth-child(1)").addClass("active"),1200<window.pageYOffset&&$(".education-list li:nth-child(2)").addClass("active"),1320<window.pageYOffset&&$(".education-list li:nth-child(3)").addClass("active"),1440<window.pageYOffset&&$(".education-list li:nth-child(4)").addClass("active"),1600<window.pageYOffset&&$(".education-list li:nth-child(5)").addClass("active"),1750<window.pageYOffset&&$(".education-list li:nth-child(6)").addClass("active"),1950<window.pageYOffset&&$(".education-list li:nth-child(7)").addClass("active")}),a=parseInt($("#page-number span").attr("page-id")),$("#page-number span").text("0"+a),$(document).ready(function(){$(window).scroll(function(){window.pageYOffset<39&&$("#page-number span").text("0"+a),250<window.pageYOffset&&window.pageYOffset<=799&&$("#page-number span").text("0"+parseInt(a+1)),1e3<window.pageYOffset&&window.pageYOffset<=2449&&$("#page-number span").text("0"+parseInt(a+2)),2600<window.pageYOffset&&$("#page-number span").text("0"+parseInt(a+3))})}),$(document).ready(function(){var e=$("#skills"),t=$(".skill-card");t.find($(".btn")).click(function(e){e.preventDefault(),$(this).parent().parent().removeClass("shown").addClass("active"),$(this).parent().parent().find($(".skill-more")).addClass("active"),$(".close-btn").mouseenter(function(){$(".close-path").attr("d","M11.64051 11.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z")}),$(".close-btn").mouseleave(function(){$(".close-path").attr("d","M6.64051 6.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z")}),$(".close-btn").click(function(e){$(this).parent().removeClass("active"),$(this).parent().parent().removeClass("active").addClass("shown")}),t.mouseleave(function(){$(this).find(".skill-card-content").removeClass("shown")})}),$(window).scroll(function(){2500<window.pageYOffset&&e.find($(".custom-title-low")).addClass("active"),2550<window.pageYOffset&&e.find($(".skill-card")).addClass("active")})}),jQuery(document).ready(function(){}),$(document).ready(function(){$(window).scroll(function(){2900<window.pageYOffset&&$("#portfolio").find(".custom-title-low").addClass("active"),3100<window.pageYOffset&&$("#portfolio").find(".work:nth-child(1), .work:nth-child(2), .work:nth-child(3)").addClass("active"),3650<window.pageYOffset&&$("#portfolio").find(".work:nth-child(4), .work:nth-child(5), .work:nth-child(6)").addClass("active")})}),$(document).ready(function(){$(window).scroll(function(){3850<window.pageYOffset&&$("#in-touch").find(".custom-title-low").addClass("active"),4050<window.pageYOffset&&$("#in-touch").find(".section-container ").addClass("active")})})}),$(document).ready(function(){$(window).scroll(function(){$("body").addClass("scrolling"),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$("body").removeClass("scrolling")},1200))})});
//# sourceMappingURL=maps/app.js.map
