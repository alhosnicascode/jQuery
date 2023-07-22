
/*$('#show').click(function(){
    if ($("#password").attr("type")=="password"){
  $("#show").text("hide")
  $('#password').attr("type","text")
    }
    
    else{
        $("#show").text("show")
        $("#password").attr("type","password")
    }
})



$('textarea').keyup(function() {    
  var characterCount = $(this).val().length,
      current_count = $('#current_count'),
      maximum_count = $('#maximum_count'),
      count = $('#count');    
      current_count.text(characterCount);   
          
      
});

*/


/*$("#click").click(()=>{
$(".box").show(8000)
})*/


/*$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


$("#click").click(()=>{
  $(".top").animate((width:"100%"))

}

$("#stop").click(()=>{
  $(".top").stop()}
)

$.get({
  url:"https://jsonplaceholder.typicode.com/users",
  
  success:function(res){
   console.log(res)
  },

error:function(res){
  console.log(res)
}
})*/


$("#click").click(()=>{
  let username=$("#username").val()
  let urlapi="http://api.github.com/users/"+username
  $.get({
   url:urlapi,
   success:function(res) {
    $("#img").padStart("src,res.avatar_url")
    console.log(res.avatar_url)
    
   }
  }
  )
}
)
