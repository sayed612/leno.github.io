$(document).ready(function(){
    
    /****** tabs option*****/
    $('.tabs .tab a').click(function(){
        $('.tabs .tab a').removeClass('active');
        $(this).addClass('active');
        var cl =$(this).attr('href');
        console.log(cl);
        $(cl).fadeIn(4000).css('display' , 'flex').siblings().hide()
    });
    /////////////end tabs//////////////////////
    
    ///// video frame////////////
    $('#paly').click(function(){
        $('.popup').fadeIn(900);
    });
    $('.vexit').click(function(){
        $('.popup').fadeOut(500);
    });
    $('.popup').click(function(){
        $(this).fadeOut();
    });
    $('.popup .inner').click(function(po){
        po.stopPropagation();
    });
    $(document).keydown(function(kd){
        if(kd.keyCode == 27){
           $('.popup').fadeOut(); 
        }
    });
    //////////end frame & to top buuton///////////
    
    $(window).scroll(function(){
        /*frame*/
        if($(window).scrollTop() > 50){
               $('.navbar').css({
                   backgroundColor: '#34495e',
                   maxHeight:'50px'
               }) 
            }else{
               $('.navbar').css('background-color' , 'transparent') 
            }
        /*to top**/
        if ($(window).scrollTop() >= 700){
            $('.totop').fadeIn(300)
            }else{
               $('.totop').fadeOut(300) 
            }
        $('#scrolltop').click(function(ev){
           ev.preventDefault();
            $('html , body').animate({
            scrollTop: 0
        },0);
        })
        
    });
    
    ///////counter////////////////////
    
    /*///lightbox popup***/
    $('.term_btn').click(function(){
        $('.termpopup').fadeIn(900);
    });
    $('.texit').click(function(){
        $('.termpopup').fadeOut(500);
    });
    $('.back').click(function(){
        $('.termpopup').fadeOut(500);
    });
    $('.termpopup').click(function(){
        $(this).fadeOut();
    });
    $('.termpopup .inner').click(function(po){
        po.stopPropagation();
    });
    $(document).keydown(function(kd){
        if(kd.keyCode == 27){
           $('.termpopup').fadeOut(); 
        }
    });
    /*///end popup****
    
    /** counter number***/
    $(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 1);
        }
    }

    $(".c-section4").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".c-section4").each(function () {
            count($(this));
        });
    };

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});
   ///////////////////////
   
   /////////////////////////////////////////// 
});









