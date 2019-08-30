const demo_user = "Damien (demo)";
const demo_id = "gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b";
const demo_list = `
<select id="button_demo_list">
<option value="">Demo automations</option>
<option value="hrext11_off">Off</option>
<option value="hrext11_orange">Orange</option>
<option value="hrext11_dim_white" >Dim</option>
<option value="hrext11_bright_white" >Bright White</option>
<option value="hrext11_pink" >Pink</option>
<option value="hrext11_red" >Red</option>
<option value="hrext11_Green_Fade" >Green Fade</option>
<option value="hrext11_blue_blink" >Blue Blinking</option>
<option value="hrext11_disco" >Disco</option>
</select>`

$(function() {
  $('#button_trigger').before(demo_list);
  $('#button_demo_list').change(function() {
    //new Button($(this).val(),$(this).children('option:selected').text()) ;
    $('#button_trigger').val( $(this).val() );
    enableCreateButton();
    $(this).val(''); // reset the select box
  })

})
