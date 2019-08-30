const demo_user = "Damien";
const demo_id = "gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b";
const demo_list = `
<select id="button_demo_list">
<option value="">or choose one from the list (demo)</option>
<option value="hrext11_orange">Orange</option>
<option value="hrext11_dim_white" >Dim</option>
<option value="hrext11_bright_white" >Bright White</option>
<option value="hrext11_pink" >Pink</option>
<option value="hrext11_red" >Red</option>
<option value="hrext11_Green_Fade" >green fade</option>
<option value="hrext11_blue_blink" >Blue Blinking</option>
<option value="hrext11_disco" >Disco</option>
</select>`

$(function() {
  $('section#data_entry').append(demo_list);
  $('#button_demo_list').change(function() {
    new Button($(this).val(),$(this).children('option:selected').text()) ;
    $(this).val(''); // reset the select box
  })
})
