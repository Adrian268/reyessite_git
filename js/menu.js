/**
 * Created by Adrian on 6/7/2015.
 */


$(function(){
    var tables = [
        ["", 0, 0],
        ["salads", 0, 1],
        ["apps", - 910, 2],
        ["soups", -1820, 3],
        ["cold_subs", -2730, 4],
        ["hot_subs", -3640, 5],
        ["cheese_steaks", -4550, 6],
        ["wraps", -5460, 7],
        ["burgers", -6370, 8],
        ["pizza", -7280, 9],
        ["baked_dishes", -8190, 10],
        ["pasta_dishes", -9100, 11],
        ["specialpasta_dishes", -10010, 12],
        ["entrees", -10920, 13],
        ["seafood_entre", -11830, 14],
        ["calzone", -12740, 15],
        ["others", -13650, 17]
    ];
    var speed = 500;
    var current_tbl = 1;

    var $container = $('div#menu_full_container');
    var $button = $container.find('div.buttons div p');
    var $slider = $container.find('div#menu_container');
    var $tables = $slider.find('div.menu_tables');

    var width = $container.find('div#menu_wrapper').width();

    $('ul#menu_selector li').on('click', function(){

        var $current_table = $('ul#menu_selector li[class="active"]').attr('rel');
        var $table_to_show =  $(this).attr('rel');

        if( $current_table != $table_to_show){

            setActiveLink($table_to_show);
            setBgImg($('div.menu_tables'), $table_to_show);
            setHeight($table_to_show);

            for(var x = 0 ; x <= tables.length ; x++)
            {
                if(tables[x][0] == $table_to_show){
                    $slider.animate({"margin-left": tables[x][1]}, speed);
                    current_tbl = tables[x][2];
                }

            }
        }

    });

    $button.on('click', function(){

        if ($(this).attr('id') == 'right_btn') {
            current_tbl++;

            if (current_tbl >= $tables.length + 1) {
                current_tbl = 1;
                $slider.animate({"margin-left": 0}, speed);
            } else {
                $slider.animate({"margin-left": '-=' + width}, speed);
            }

        } else if ($(this).attr('id') == 'left_btn') {
            current_tbl--;

            if (current_tbl < 1) {
                current_tbl = $tables.length;
                $slider.animate({"margin-left": -13650}, speed);
            } else {
                $slider.animate({"margin-left": '+=' + width}, speed);
            }
        }
        setHeight(tables[current_tbl][0]);
        setBgImg($('div.menu_tables'), tables[current_tbl][0]);
        setActiveLink(tables[current_tbl][0]);

    });//end menu slider handle



    function setHeight(table){

        $container.css({height: document.getElementById(table).offsetHeight + 10});
    }

    function setBgImg(div, table){

        div.css({"background": 'linear-gradient(0deg, rgba(4, 4, 4, 0.30), rgba(0, 0, 0, 0.30)), url(images/'+table+'_img.jpg) no-repeat', "background-size":'cover'});
    }

    function setActiveLink(table){

        var $previous_link = $('ul#menu_selector li[class="active"]');
        var $new_link = $('ul#menu_selector li[rel='+table+']');

        $new_link.addClass('active');

        $previous_link.removeClass('active');
    }

});


