$(function () {

    
    $(document).on("click", ".card", function () {
     
        var queryUrl = "https://tarot.howlcode.com/api/v1/cards";
  
        // send ajax request for tarot cards
        $.ajax({
          url: queryUrl,
          method: "GET",
        }).then(function (data) {
          // console.log(data[0].image);
          // Log the tarot card data in the console
        });
      });
    $(document).on("click", ".card-image", function () {
     
        // send ajax request for tarot cards
        $.ajax({
          type: 'POST',
          url: 'https://aztro.sameerkumar.website?sign=aries&day=today',
          success: function (data) {
              // console.log(data);
          }
      });
      });
    $(document).on("click", ".card-content", function () {
        var apiKey = "Jhso00dGJXyVhe33ctHvhvmbXAf2BnacGdVgSpbO"
        var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  
        // send ajax request for tarot cards
        $.ajax({
          url: queryUrl,
          method: "GET",
        }).then(function (data) {
          console.log(data);
          // Log the tarot card data in the console
        });
      });
      


    // Local storage functions
    render();
    var birthday;
    //Re-directs to page two and saves submitted birthday
    $('#submit-btn').on('click', function(event){
        event.preventDefault();
        if($('#dob-input').val() === ""){
          $('#invalid').text('*Please enter a valid birth date to proceed')
        } else {
          localStorage.setItem('birthday', $('#dob-input').val());
          window.location.href = "https://christopher-cruzcosa.github.io/life-reading-app/fortune.html"
        };


       
    })

    //The birthday will whow up here, you can use it to determine what horoscope is displayed
    function render(){
        if (localStorage.getItem('birthday') !== null){
            birthday = localStorage.getItem('birthday');
            // console.log(birthday);
        }
    }
});