$.vegas('slideshow',{delay:10000,backgrounds:[{src:'images/bg4.jpg',fade:1000},{src:'images/bg5.jpg',fade:1000},]});$(document).ready(function(){var offset=$(window).scrollTop();var owl_main_block=$('#owl-main-block');owl_main_block.owlCarousel({singleItem:true,autoPlay:3000,pagination:false,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[179,1],})
$('.step-2').css('display','block');});jQuery(window).load(function(){var offset=$(window).scrollTop();if(offset==0){disableScroll()
setTimeout(function(){$('#main-nav').addClass('animated fadeIn');$('.short-text').addClass('animated fadeIn');$('header .btn').addClass('animated fadeIn');$('body').removeClass('black-and-white-theme');enableScroll();},4000)}else{$('body').removeClass('black-and-white-theme')}})
if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement('style')
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
document.querySelector('head').appendChild(msViewportStyle)}$(document).ready(function(){$('.main-nav-list').onePageNav({changeHash:true,scrollSpeed:750,scrollThreshold:0.5,filter:':not(.external)'});var top=$('#main-nav').offset().top-parseFloat($('#main-nav').css('margin-top').replace(/auto/,0));$(window).scroll(function(event){var y=$(this).scrollTop();if(y>=top){$('#main-nav').addClass('fixed');}else{$('#main-nav').removeClass('fixed');}});});$(document).ready(function(){$('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click',function(e){e.preventDefault();var target=this.hash,$target=$(target);$('.main-navigation a[href="'+target+'"]').addClass('active');$('.main-navigation a:not([href="'+target+'"])').removeClass('active');$('html, body').stop().animate({'scrollTop':($target.offset())?$target.offset().top:0},900,'swing',function(){window.location.hash=target;});});});var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';$('a.scrollto').bind('click.smoothscroll',function(event){event.preventDefault();var target=this.hash;$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});});$("#").submit(function(e){e.preventDefault();var name=$("#name").val();var email=$("#email").val();var subject=$("#subject").val();var message=$("#message").val();var dataString='name='+name+'&email='+email+'&subject='+subject+'&message='+message;function isValidEmail(emailAddress){var pattern=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return pattern.test(emailAddress);};if(isValidEmail(email)&&(message.length>1)&&(name.length>1)){window.open("mailto:"+'amaze.stud@gmail.com'+"?subject="+subj);}else{$('.error').fadeIn(1000);$('.success').fadeOut(500);}return false;});$('.more a').on('click',function(event){event.preventDefault();});$(document).ready(function(){var $window=$(window);$('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){var $bgobj=$(this);$(window).scroll(function(){var yPos=-($window.scrollTop()/$bgobj.data('speed'));var coords='50% '+yPos+'px';$bgobj.css({backgroundPosition:coords});});});});$(function(){$(".skill1").knob({'max':100,'width':64,'readOnly':true,'inputColor':' #FFFFFF ','bgColor':' #222222 ','fgColor':' #e96656 '});$(".skill2").knob({'max':100,'width':64,'readOnly':true,'inputColor':' #FFFFFF ','bgColor':' #222222 ','fgColor':' #34d293 '});$(".skill3").knob({'max':100,'width':64,'readOnly':true,'inputColor':' #FFFFFF ','bgColor':' #222222 ','fgColor':' #3ab0e2 '});$(".skill4").knob({'max':100,'width':64,'readOnly':true,'inputColor':' #FFFFFF ','bgColor':' #222222 ','fgColor':' #E7AC44 '});});new WOW().init();var keys={37:1,38:1,39:1,40:1};function preventDefault(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false;}function preventDefaultForScrollKeys(e){if(keys[e.keyCode]){preventDefault(e);return false;}}function disableScroll(){if(window.addEventListener)window.addEventListener('DOMMouseScroll',preventDefault,false);window.onwheel=preventDefault;window.onmousewheel=document.onmousewheel=preventDefault;window.ontouchmove=preventDefault;document.onkeydown=preventDefaultForScrollKeys;}function enableScroll(){if(window.removeEventListener)window.removeEventListener('DOMMouseScroll',preventDefault,false);window.onmousewheel=document.onmousewheel=null;window.onwheel=null;window.ontouchmove=null;document.onkeydown=null;}