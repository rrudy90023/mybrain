$(document).ready(function(){







        $.ajax({
            url: "http://api.tumblr.com/v2/blog/rrudy90023.tumblr.com/posts?api_key=hdTlQ7XSADs3ufoJR0NhzpQdqCA1XtaVnLW4Q21OOydB26T7m0",
            dataType: 'jsonp',
            success: function (result) {



                console.log(result);

                $.each(result, function (key, val) {

                    var firstItem = result.response.posts;

                    var counter = 0;



                    $.each(firstItem, function(key, val){

                        $("<div/>").appendTo("#container");

                        //var randomnumber = Math.floor(Math.random() * firstItem.length);

                        var li = $("#container div").eq(counter);

                         counter++;

                        var tags = val.tags[0];

                        console.log(counter);

                        var src = val.photos[0].alt_sizes[3].url;

                        $("<img />").attr("src", src).appendTo(li);

                        li.addClass(tags).addClass('item');
                 
                        $('#celloader').click(function(){

                            $('#celloader').remove();
                            $('.splash').remove();
                            var tiles = 0;
                            var scatter = setInterval(function() {

                                shines();
                                tiles++;
                                console.log("fade")
                            },900);

                            function shines(){
                                    
                                    //var randomnumber = Math.floor(Math.random() * $('#container').children().length);
                                    $('#container > div:eq(' + tiles + ')').addClass('appear');


                                    $('#container > div:eq(' + tiles + ')').on(
                                        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
                                        function() {
                                            //$(this).delay(6000).queue(function() {  // Wait for 1 second.
                                                $(this).removeClass("appear").dequeue();
                                                $(this).css('opacity','1.0');
                                            //});
                                        }
                                    );

                                    if($('#container > div').last().css('opacity') == 1){
                                        //alert("hello");
                                        clearInterval(scatter);
                                    } else {

                                        return false;
                                    }

                            };

                        });

                    });

                    return false;
                        
                });



            }


        });








});