function t690_onSuccess(t690_form){var t690_inputsWrapper=t690_form.find('.t-form__inputsbox');var t690_inputsHeight=t690_inputsWrapper.height();var t690_inputsOffset=t690_inputsWrapper.offset().top;var t690_inputsBottom=t690_inputsHeight+t690_inputsOffset;var t690_targetOffset=t690_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t690_target=t690_targetOffset-200}else{var t690_target=t690_targetOffset-100}
if(t690_targetOffset>$(window).scrollTop()||($(document).height()-t690_inputsBottom)<($(window).height()-100)){t690_inputsWrapper.addClass('t690__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t690_target},400);setTimeout(function(){t690_inputsWrapper.addClass('t690__inputsbox_hidden')},400)}
var successurl=t690_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t706_onSuccessCallback(t706_form){$(".t706__cartwin-products").slideUp(10,function(){});$(".t706__cartwin-bottom").slideUp(10,function(){});$(".t706 .t-form__inputsbox").slideUp(700,function(){});try{tcart__unlockScroll()}catch(e){}}
function t754__init(recid){setTimeout(function(){t_prod__init(recid);t754__hoverZoom_init(recid);t754_initPopup(recid);t754__updateLazyLoad(recid);t754__alignButtons_init(recid)},500)}
function t754__alignButtons_init(recid){var rec=$('#rec'+recid);if(rec.find('[data-buttons-v-align]')[0]){try{t754__alignButtons(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&$isMobile){return}
t754__alignButtons(recid)},200));$('.t754').bind('displayChanged',function(){t754__alignButtons(recid)});if($isMobile){$(window).on('orientationchange',function(){t754__alignButtons(recid)})}}catch(e){console.log('buttons-v-align error: '+e.message)}}}
function t754__alignButtons(recid){var rec=$('#rec'+recid);var wrappers=rec.find('.t754__textwrapper');var maxHeight=0;var itemsInRow=rec.find('.t-container').attr('data-blocks-per-row')*1;var mobileView=$(window).width()<=480;var tableView=$(window).width()<=960&&$(window).width()>480;var mobileOneRow=$(window).width()<=960&&rec.find('.t754__container_mobile-flex')[0]?!0:!1;var mobileTwoItemsInRow=$(window).width()<=480&&rec.find('.t754 .mobile-two-columns')[0]?!0:!1;if(mobileView){itemsInRow=1}
if(tableView){itemsInRow=2}
if(mobileTwoItemsInRow){itemsInRow=2}
if(mobileOneRow){itemsInRow=999999}
var i=1;var wrappersInRow=[];$.each(wrappers,function(key,element){element.style.height='auto';if(itemsInRow===1){element.style.height='auto'}else{wrappersInRow.push(element);if(element.offsetHeight>maxHeight){maxHeight=element.offsetHeight}
$.each(wrappersInRow,function(key,wrapper){wrapper.style.height=maxHeight+'px'});if(i===itemsInRow){i=0;maxHeight=0;wrappersInRow=[]}
i++}})}
function t754__hoverZoom_init(recid){if(isMobile){return}
var rec=$('#rec'+recid);try{if(rec.find('[data-hover-zoom]')[0]){if(!jQuery.cachedZoomScript){jQuery.cachedZoomScript=function(url){var options={dataType:'script',cache:!0,url:url};return jQuery.ajax(options)}}
$.cachedZoomScript('https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js').done(function(script,textStatus){if(textStatus=='success'){setTimeout(function(){t_hoverZoom_init(recid,".t-slds__container")},500)}else{console.log('Upload script error: '+textStatus)}})}}catch(e){console.log('Zoom image init error: '+e.message)}}
function t754__updateLazyLoad(recid){var scrollContainer=$("#rec"+recid+" .t754__container_mobile-flex");var curMode=$(".t-records").attr("data-tilda-mode");if(scrollContainer.length&&curMode!="edit"&&curMode!="preview"){scrollContainer.bind('scroll',t_throttle(function(){t_lazyload_update()},500))}}
function t754_initPopup(recid){var rec=$('#rec'+recid);rec.find('[href^="#prodpopup"]').one("click",function(e){e.preventDefault();var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');t_sldsInit(recid+' #t754__product-'+lid_prod+'')});rec.find('[href^="#prodpopup"]').click(function(e){e.preventDefault();t754_showPopup(recid);var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');el_popup.find('.js-product').css('display','none');var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');el_fullprod.css('display','block');var analitics=el_popup.attr('data-track-popup');if(analitics>''){var virtTitle=el_fullprod.find('.js-product-name').text();if(!virtTitle){virtTitle='prod'+lid_prod}
Tilda.sendEventToStatistics(analitics,virtTitle)}
var curUrl=window.location.href;if(curUrl.indexOf('#!/tproduct/')<0&&curUrl.indexOf('%23!/tproduct/')<0&&curUrl.indexOf('#%21%2Ftproduct%2F')<0){if(typeof history.replaceState!='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod)}}
t754_updateSlider(recid+' #t754__product-'+lid_prod+'');if(window.lazy=='y'){t_lazyload_update()}});if($('#record'+recid).length==0){t754_checkUrl(recid)}
t754_copyTypography(recid)}
function t754_checkUrl(recid){var curUrl=window.location.href;var tprodIndex=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&tprodIndex<0){tprodIndex=curUrl.indexOf('%23!/tproduct/');if(tprodIndex<0){tprodIndex=curUrl.indexOf('#%21%2Ftproduct%2F')}}
if(tprodIndex>=0){var curUrl=curUrl.substring(tprodIndex,curUrl.length);var curProdLid=curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);var rec=$('#rec'+recid);if(curUrl.indexOf(recid)>=0&&rec.find('[data-product-lid='+curProdLid+']').length){rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click')}}}
function t754_updateSlider(recid){var el=$('#rec'+recid);t_slds_SliderWidth(recid);var sliderWrapper=el.find('.t-slds__items-wrapper');var sliderWidth=el.find('.t-slds__container').width();var pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_slds_UpdateSliderHeight(recid);t_slds_UpdateSliderArrowsHeight(recid)}
function t754_showPopup(recid){var el=$('#rec'+recid);var popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');if(window.lazy=='y'){t_lazyload_update()}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').mousedown(function(e){var windowWidth=$(window).width();var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(e.clientX>windowWithoutScrollBar){return}
if(e.target==this){t754_closePopup()}});el.find('.t-popup__close, .t754__close-text').click(function(e){t754_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t754_closePopup()}})}
function t754_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');var curUrl=window.location.href;var indexToRemove=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=curUrl.indexOf('%23!/tproduct/');if(indexToRemove<0){indexToRemove=curUrl.indexOf('#%21%2Ftproduct%2F')}}
curUrl=curUrl.substring(0,indexToRemove);setTimeout(function(){$(".t-popup").scrollTop(0);$('.t-popup').not('.t-popup_show').css('display','none');if(typeof history.replaceState!='undefined'){window.history.replaceState('','',curUrl)}},300)}
function t754_removeSizeStyles(styleStr){if(typeof styleStr!="undefined"&&(styleStr.indexOf('font-size')>=0||styleStr.indexOf('padding-top')>=0||styleStr.indexOf('padding-bottom')>=0)){var styleStrSplitted=styleStr.split(';');styleStr="";for(var i=0;i<styleStrSplitted.length;i++){if(styleStrSplitted[i].indexOf('font-size')>=0||styleStrSplitted[i].indexOf('padding-top')>=0||styleStrSplitted[i].indexOf('padding-bottom')>=0){styleStrSplitted.splice(i,1);i--;continue}
if(styleStrSplitted[i]==""){continue}
styleStr+=styleStrSplitted[i]+";"}}
return styleStr}
function t754_copyTypography(recid){var rec=$('#rec'+recid);var titleStyle=rec.find('.t754__title').attr('style');var descrStyle=rec.find('.t754__descr').attr('style');rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle))}