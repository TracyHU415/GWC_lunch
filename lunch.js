document.addEventListener('DOMContentLoaded', function (e) {
    console.log("ITS LOADED");

// ---------------Monday Image Switch----------------------------------

    var image1 = document.getElementById('mondayImage');

    image1.addEventListener('click', function imageClick1 (e) {
        // console.log("i m clicked on the sandwich image");
        // console.log(image1.src);
        
        if (image1.src === "file:///C:/Users/GWC04/Documents/whack/sandwiches.jpg") {
            image1.src = "file:///C:/Users/GWC04/Documents/whack/sand.jpg";
        } else if (image1.src === "file:///C:/Users/GWC04/Documents/whack/sand.jpg") {
            image1.src = "file:///C:/Users/GWC04/Documents/whack/sandwiches.jpg";
        }
    })

//--------------------Tuesday Image Switch----------------------------------------------

    var image2 = document.getElementById('tuesdayImage');

    image2.addEventListener('click', function imageClick2 (e) {
        // console.log("i m clicked on the taco image");
        // console.log(image2.src);
            
        if (image2.src === "file:///C:/Users/GWC04/Documents/whack/taco.jpg") {
            image2.src = "file:///C:/Users/GWC04/Documents/whack/taco2.jpg";
        } else if (image2.src === "file:///C:/Users/GWC04/Documents/whack/taco2.jpg") {
            image2.src = "file:///C:/Users/GWC04/Documents/whack/taco.jpg";
        }
    })

//---------------------Wednesday Image Switch-----------------------------------------------------------------
    var image3 = document.getElementById('wednesdayImage');

    image3.addEventListener('click', function imageClick3 (e) {
        // console.log("i m clicked on the pasta image");
        // console.log(image3.src);
                
        if (image3.src === "file:///C:/Users/GWC04/Documents/whack/pasta.jpg") {
            image3.src = "file:///C:/Users/GWC04/Documents/whack/ita.jpg";
        } else if (image3.src === "file:///C:/Users/GWC04/Documents/whack/ita.jpg") {
            image3.src = "file:///C:/Users/GWC04/Documents/whack/pasta.jpg";
        }
    })

//---------------------Thursday Image Switch-----------------------------------------------------------------

    var image4 = document.getElementById('thursdayImage');

    image4.addEventListener('click', function imageClick4 (e) {
        // console.log("i m clicked on the pizza image");
        // console.log(image4.src);
                    
        if (image4.src === "file:///C:/Users/GWC04/Documents/whack/pizza.jpg") {
            image4.src = "file:///C:/Users/GWC04/Documents/whack/piz.jpg";
        } else if (image4.src === "file:///C:/Users/GWC04/Documents/whack/piz.jpg") {
            image4.src = "file:///C:/Users/GWC04/Documents/whack/pizza.jpg";
        }
    })

//---------------------Friday Image Switch-----------------------------------------------------------------

    var image5 = document.getElementById('fridayImage');

    image5.addEventListener('click', function imageClick5 (e) {
        // console.log("i m clicked on the surprise image");
        // console.log(image5.src);
                        
        if (image5.src === "file:///C:/Users/GWC04/Documents/whack/surprise.jpg") {
        image5.src = "file:///C:/Users/GWC04/Documents/whack/sur.jpg";
        } else if (image5.src === "file:///C:/Users/GWC04/Documents/whack/sur.jpg") {
            image5.src = "file:///C:/Users/GWC04/Documents/whack/surprise.jpg";
        }
    })
        
    

}) 
