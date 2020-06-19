
$("input").each(function(){
    if ($(this).val().trim() != "") {
        $(this).addClass('has-val');
      } else {
        $(this).removeClass('has-val');
      }
    $(this).blur(function(){
        if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
          } else {
            $(this).removeClass('has-val');
          }
    })
})