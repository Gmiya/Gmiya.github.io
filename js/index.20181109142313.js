(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/polygon-copy-9-356.png' : 'images/polygon-copy-9-178.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-780.png' : 'images/group-390.png');
$('.js-3').attr('src', (dpi>1) ? 'images/1738059378-196.png' : 'images/1738059378-98.png');
$('.js-4').attr('src', (dpi>1) ? 'images/group-3-6.png' : 'images/group-3-3.png');
$('.js-5').attr('src', (dpi>1) ? 'images/2016-2018-don-t-let-200.png' : 'images/2016-2018-don-t-let-100.png');
$('.js-6').attr('src', (dpi>1) ? 'images/group-4-1126.png' : 'images/group-4-563.png');
$('.js-7').attr('src', (dpi>1) ? 'images/group-8-708.png' : 'images/group-8-354.png');
$('.js-8').attr('src', (dpi>1) ? 'images/group-2-762.png' : 'images/group-2-381.png');
$('.js-9').attr('src', (dpi>1) ? 'images/group-7-1104.png' : 'images/group-7-552.png');
$('.js-10').attr('src', (dpi>1) ? 'images/group-6-1008.png' : 'images/group-6-504.png');
$('.js-11').attr('src', (dpi>1) ? 'images/group-5-814.png' : 'images/group-5-407.png');
$('.js-12').attr('src', (dpi>1) ? 'images/rectangle-4-1920.png' : 'images/rectangle-4-960.png');};
if(!window.HTMLPictureElement){r();}

});