"use strict";jQuery(document).ready(function(){var e,t;!function(){$("a.logo");var e=$(".page-navigation"),t=$(".page-navigation ul li a"),a=window.pageYOffset;t.each(function(){$(this).click(function(e){e.preventDefault();var t=$(this).attr("pagesection");$("html, body").animate({scrollTop:$(t).offset().top-50+"px"},1e3),$("body").css({overflowY:"auto"})}),$(this).mouseenter(function(e){var t=$(this).attr("pagetranslate"),a=$(this).attr("linkwidht");$(".li-hover").css({left:t+"px",height:"1.8px",width:a+"px"}),$(".li-hover-after").css({left:t+"px",height:"1.8px",width:a+"px"})})}),e.mouseleave(function(e){$(".li-hover").css("height","0"),$(".li-hover-after").css("height","0")}),$(document).ready(function(){$(window).scroll(function(){var e=window.pageYOffset;0===e?$("header").removeClass("active"):a-e<0?($("header").removeClass("active"),$("header").addClass("hiden"),$(".page-navigation").removeClass("active")):0<a-e&&($("header").addClass("active"),$("header").removeClass("hiden"),$(".page-navigation").removeClass("active"),$(".logo").removeClass("menu-shown")),a=e})})}(),e=$("#about-me"),$(document).ready(function(){$(window).scroll(function(){200<window.pageYOffset&&e.find($(".custom-title-low")).addClass("active"),450<window.pageYOffset&&(e.find($(".about-me-img")).addClass("active"),e.find($(".about-me-text p")).addClass("animate-text"))})}),$(window).scroll(function(){1050<this.window.pageYOffset&&($("#experience .custom-title-low").addClass("active"),console.log(window.pageYOffset)),1099<window.pageYOffset&&$(".education-list li:nth-child(1)").addClass("active"),1199<window.pageYOffset&&$(".education-list li:nth-child(2)").addClass("active"),1349<window.pageYOffset&&$(".education-list li:nth-child(3)").addClass("active"),1599<window.pageYOffset&&$(".education-list li:nth-child(4)").addClass("active"),1799<window.pageYOffset&&$(".education-list li:nth-child(5)").addClass("active"),1999<window.pageYOffset&&$(".education-list li:nth-child(6)").addClass("active"),2189<window.pageYOffset&&$(".education-list li:nth-child(7)").addClass("active")}),t=parseInt($("#page-number span").attr("page-id")),$("#page-number span").text("0"+t),$(document).ready(function(){$(window).scroll(function(){window.pageYOffset<39&&$("#page-number span").text("0"+t),250<window.pageYOffset&&window.pageYOffset<=799&&$("#page-number span").text("0"+parseInt(t+1)),1e3<window.pageYOffset&&window.pageYOffset<=2449&&$("#page-number span").text("0"+parseInt(t+2)),2450<window.pageYOffset&&window.pageYOffset<=3149&&$("#page-number span").text("0"+parseInt(t+3)),3150<window.pageYOffset&&window.pageYOffset<=3899&&$("#page-number span").text("0"+parseInt(t+4)),4e3<window.pageYOffset&&$("#page-number span").text("0"+parseInt(t+5))})}),$(document).ready(function(){var e=$("#skills"),t=$(".skill-card");t.find($(".btn")).click(function(e){e.preventDefault(),$(this).parent().parent().removeClass("shown").addClass("active"),$(this).parent().parent().find($(".skill-more")).addClass("active"),$(".close-btn").mouseenter(function(){$(".close-path").attr("d","M11.64051 11.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z")}),$(".close-btn").mouseleave(function(){$(".close-path").attr("d","M6.64051 6.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z")}),$(".close-btn").click(function(e){$(this).parent().removeClass("active"),$(this).parent().parent().removeClass("active").addClass("shown")}),t.mouseleave(function(){$(this).find(".skill-card-content").removeClass("shown")})}),$(window).scroll(function(){2500<window.pageYOffset&&e.find($(".custom-title-low")).addClass("active"),2550<window.pageYOffset&&e.find($(".skill-card")).addClass("active")})}),jQuery(document).ready(function(){}),$(document).ready(function(){$(window).scroll(function(){2900<window.pageYOffset&&$("#portfolio").find(".custom-title-low").addClass("active"),3100<window.pageYOffset&&$("#portfolio").find(".work:nth-child(1), .work:nth-child(2), .work:nth-child(3)").addClass("active"),3650<window.pageYOffset&&$("#portfolio").find(".work:nth-child(4), .work:nth-child(5), .work:nth-child(6)").addClass("active")})}),$(document).ready(function(){$(window).scroll(function(){3850<window.pageYOffset&&$("#in-touch").find(".custom-title-low").addClass("active"),4050<window.pageYOffset&&$("#in-touch").find(".section-container ").addClass("active")})}),$(document).ready(function(){$(window).width()<639&&($(".logo").click(function(e){e.preventDefault(),$(this).addClass("menu-shown"),setTimeout(function(){$(".page-navigation ").addClass("active"),$(".page-navigation").hasClass("active")&&$("body").css({overflowY:"hidden"})},600)}),$(".page-navigation ul").find(".close-btn").click(function(e){e.preventDefault(),$(".page-navigation ").removeClass("active"),$(".logo").removeClass("menu-shown"),$(".page-navigation").hasClass("active")||$("body").css({overflowY:"auto"})}))})}),$(document).ready(function(){$(window).scroll(function(){$("body").addClass("scrolling"),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$("body").removeClass("scrolling")},1200))})});
//# sourceMappingURL=maps/app.js.map
