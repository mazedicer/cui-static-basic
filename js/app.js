/*****
* CONFIGURATION
*/
//Main navigation
$.navigation = $('nav > ul.nav');

$.panelIconOpened = 'icon-arrow-up';
$.panelIconClosed = 'icon-arrow-down';

//Default colours
$.brandPrimary =  '#20a8d8';
$.brandSuccess =  '#4dbd74';
$.brandInfo =     '#63c2de';
$.brandWarning =  '#f8cb00';
$.brandDanger =   '#f86c6b';

$.grayDark =      '#2a2c36';
$.gray =          '#55595c';
$.grayLight =     '#818a91';
$.grayLighter =   '#d1d4d7';
$.grayLightest =  '#f8f9fa';

'use strict';

/****
* MAIN NAVIGATION
*/

$(document).ready(function($){
    /*
    $(window).scroll(function() {
        if ($(this).scrollTop()>100){
            $('.navbar-brand').fadeOut();
        }else{
            $('.navbar-brand').fadeIn();
        }
    });
    */
    $( window ).resize(function() {
        rightAlign("#navbarResponsive");
    });
    // Add class .active to current link
    $.navigation.find('a').each(function(){

        var cUrl = String(window.location).split('?')[0];

        if (cUrl.substr(cUrl.length - 1) == '#') {
            cUrl = cUrl.slice(0,-1);
        }

        if ($($(this))[0].href==cUrl) {
            $(this).addClass('active');

            $(this).parents('ul').add(this).each(function(){
                $(this).parent().addClass('open');
            });
        }
    });

    // Dropdown Menu
    $.navigation.on('click', 'a', function(e){

        if ($.ajaxLoad) {
            e.preventDefault();
        }

        if ($(this).hasClass('nav-dropdown-toggle')) {
            $(this).parent().toggleClass('open');
            resizeBroadcast();
        }

    });

    function resizeBroadcast() {

        var timesRun = 0;
        var interval = setInterval(function(){
            timesRun += 1;
            if(timesRun === 5){
                clearInterval(interval);
            }
            window.dispatchEvent(new Event('resize'));
        }, 62.5);
    }

    /* ---------- Main Menu Open/Close, Min/Full ---------- */
    $('.navbar-toggler').click(function(){

        if ($(this).hasClass('sidebar-toggler')) {
            $('body').toggleClass('sidebar-hidden');
            resizeBroadcast();
        }

        if ($(this).hasClass('sidebar-minimizer')) {
            $('body').toggleClass('sidebar-hidden');
            resizeBroadcast();
        }

        if ($(this).hasClass('aside-menu-toggler')) {
            $('body').toggleClass('aside-menu-hidden');
            resizeBroadcast();
        }

        if ($(this).hasClass('mobile-sidebar-toggler')) {
            $('body').toggleClass('sidebar-mobile-show');
            resizeBroadcast();
        }

    });

    $('.sidebar-close').click(function(){
        $('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
    });

    /* ---------- Disable moving to top ---------- */
    $('a[href="#"][data-top!=true]').click(function(e){
        e.preventDefault();
    });

    /* load sections */
    fetch("sidebar.html")
        .then((resp)=>resp.text())
        .then(function(data){
        $(".sidebar").html(data);
        /* section related functions
        homepage dropdown menu
        $('.dropdown-item').on('click', function (e) {
            openSubMenu($(".dropdown-item").index(this));
            e.stopPropagation();
        });
        $('.nav-link.nav-dropdown-toggle').on('click', function(){
            $('.nav-item.nav-dropdown').toggleClass('open');
        });
        */
    })
        .catch(function(error){
        alert(error); 
    });
    fetch("splash.html")
        .then((resp)=>resp.text())
        .then(function(data){
        $("#splash").html(data);
        /* section related functions
        homepage dropdown menu
        $('.dropdown-item').on('click', function (e) {
            openSubMenu($(".dropdown-item").index(this));
            e.stopPropagation();
        });
        */
        $(".slogan-icon.bounce.fa.fa-chevron-down").css("cursor","pointer").on("click", function(){
            scrollerFunction(this);
        });
    })
        .catch(function(error){
        alert(error); 
    });
    fetch("section1.html")
        .then((resp)=>resp.text())
        .then(function(data){
        $("#section1").html(data);
        /* section related functions
        homepage dropdown menu
        $('.dropdown-item').on('click', function (e) {
            openSubMenu($(".dropdown-item").index(this));
            e.stopPropagation();
        });*/
    })
        .catch(function(error){
        alert(error); 
    });
    //section 2
    fetch("section2.html")
        .then((resp)=>resp.text())
        .then(function(data){
        $("#section2").html(data);
        /* section related functions*/
        //fixes
        $(window).on('resize', function(){
            /* hideFix();
            logoFix();
            sizeFix();*/
        });
        /*
        hideFix();
        logoFix();
        sizeFix();*/
    })
        .catch(function(error){
        alert(error); 
    });
    //section 3
    fetch("section3.html")
        .then((resp)=>resp.text())
        .then(function(data){
        $("#section3").html(data);
        /* section related functions*/
        $(".mk-button-white").css("cursor","pointer").on("click", function(){
            scrollerFunction(this);
        });
    })
        .catch(function(error){
        alert(error); 
    });
    //section 4
    fetch("section4.html")
        .then((resp)=>resp.text())
        .then(function(data){
        /* section related functions
        passing content to the template
        var replace = ["{img_source}","{t_name}","{t_description}"];
        var replace_with = ["Mario", "John", "Dan"];
        var my_card_template = data.replaceArray(replace, replace_with);
        $("#section4").html(my_card_template);*/
        $("#section4").html(data);
    })
        .catch(function(error) {
        alert(error);
    }); 
    //section 5
    fetch("section5.html")
        .then((resp)=>resp.text())
        .then(function(data){
        /* section related functions*/
        $("#section5").html(data);
        $(".section5-button").css("cursor","pointer").on("click", function(){
            scrollerFunction(this);
        });
    })
        .catch(function(error) {
        alert(error);
    }); 
    //section 6
    fetch("section6.html")
        .then((resp)=>resp.text())
        .then(function(data){
        /* section related functions*/
        $("#section6").html(data);
        $(".section6-button").css("cursor","pointer").on("click", function(){
            scrollerFunction(this);
        });
    })
        .catch(function(error) {
        alert(error);
    }); 
    //section 7
    fetch("section7.html")
        .then((resp)=>resp.text())
        .then(function(data){
        /* section related functions*/
        $("#section7").html(data);
    })
        .catch(function(error) {
        alert(error);
    }); 

});

/****
* CARDS ACTIONS
*/

$(document).on('click', '.card-actions a', function(e){
    e.preventDefault();

    if ($(this).hasClass('btn-close')) {
        $(this).parent().parent().parent().fadeOut();
    } else if ($(this).hasClass('btn-minimize')) {
        var $target = $(this).parent().parent().next('.card-block');
        if (!$(this).hasClass('collapsed')) {
            $('i',$(this)).removeClass($.panelIconOpened).addClass($.panelIconClosed);
        } else {
            $('i',$(this)).removeClass($.panelIconClosed).addClass($.panelIconOpened);
        }

    } else if ($(this).hasClass('btn-setting')) {
        $('#myModal').modal('show');
    }

});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function init(url) {

    /* ---------- Tooltip ---------- */
    $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});

    /* ---------- Popover ---------- */
    $('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

}
function scrollerFunction(elem){
    //event.preventDefault();
    var currentID = $(elem).attr('id');
    //console.log(currentID);
    var destination = $(elem).attr('anchor');
    //console.log(destination);
    var p = $('#' + destination);
    var position = p.position();
    $('body,html').animate({
        scrollTop:position.top-70
    }, 1000);
}
function rightAlign(elem){
    var elem_width = $(elem).width();
    var screen_width = $(document).width();
    var difference = screen_width - elem_width;
    $(elem).offset({left:difference-50});
}
rightAlign("#navbarResponsive");