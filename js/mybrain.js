$(function(){




        $.ajax({
            url: "http://api.tumblr.com/v2/blog/rrudy90023.tumblr.com/posts?api_key=hdTlQ7XSADs3ufoJR0NhzpQdqCA1XtaVnLW4Q21OOydB26T7m0",
            dataType: 'jsonp',
            success: function (result) {

                console.log(result);

                $.each(result, function (key, val) {

                    var firstItem = result.response.posts;

                    var counter = 0;








                        // var tiles = 0;
                        // var empty = 0;
                        // var group = $("#container > div");
                        // var mom = $("container");
                        var scatter = setInterval(function() {
                            shines();
                            counter++;
                        },3000);


                        // function shines(){
                        //     if(group.length === 1){
                        //         clearInterval(scatter);
                        //     } else {
                                
                        //         var randomnumber = Math.floor(Math.random() * $('#container').children().length);
                        //         $('#container > div:eq(' + randomnumber + ')').fadeOut().remove();
                                
                        //         //console.log(mom);
                        //     }
                        // };



                function shines() {

                    $.each(firstItem, function(key, val){

                        $("<div/>").appendTo("#container");

                        var randomnumber = Math.floor(Math.random() * firstItem.length);

                        var li = $("#container div").eq(counter);

                        var tags = val.tags[0];

                        console.log(counter);

                        var src = val.photos[0].alt_sizes[3].url;

                        $("<img />").attr("src", src).appendTo(li);

                        li.addClass(tags).addClass('item');
     
                        return false;
                      

                    });


                    return false;

                };


                    return false;
                        
                });



                // var i = $(this).index();

                // var group = $("#container > div");

                // if(group.hasClass("home")){

                //     $('.home').fadeOut();

                //     console.log("im here")
                
                // };



            }


        });








});