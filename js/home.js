/**
 * Created by Adrian on 6/7/2015.
 */
$(function() {

    $('div#banner_wrapper p').mouseenter(function(){
        var $table_number = $(this).attr('rel');
        var $table = $('div#banner_wrapper table[id='+$table_number+']');
        var $height = $table.height();

        if($height == 0){

            $table.css({
                height: '190'
            });

        }else{

            $table.css({
                height: '0'
            });
        }

    });

    $('div#hours p').on('click', function(){

        var $btn_clicked = $(this).attr('id');
        var $table = $('table#summer_hours');
        var $active = $('div#hours p[class = "active"]');

        if($btn_clicked == 'winter_hrs'){
            $active.removeClass('active');
            $table.css({"margin-top":'-210px'});
            $(this).addClass('active');

        }else if($btn_clicked == 'summer_hrs'){
            $active.removeClass('active');
            $table.css({"margin-top":'0'});
            $(this).addClass('active');
        }
    });
});
