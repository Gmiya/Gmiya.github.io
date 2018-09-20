(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/2-1000.jpg' : 'images/2-500.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/1-1000.jpg' : 'images/1-500.jpg');


var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/3-1000.jpg' : 'images/3-500.jpg');};
if(!window.HTMLPictureElement){r();}
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 500,dots: false,arrows: true,infinite: true});
});