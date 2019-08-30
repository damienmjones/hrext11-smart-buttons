const demo_user = "damien"
var demo_id = "gJZzNn_HHmO3cogsCTnBy_"
const demo_url = "http://192.168.1.20:8080/jsfs.html"
const demo_list = '<br><select id="button_demo_list"><option value="">or choose one from the list (demo)</option><option value="hrext11_orange">orange</option><option value="hrext11_dim_white" >dim/yellow</option><option value="hrext11_bright_white" >bright white</option><option value="hrext11_pink" >pink</option><option value="hrext11_red" >red</option><option value="hrext11_green_fade" >green fade</option><option value="hrext11_blue_blink" >blue blinking</option><option value="hrext11_disco" >disco</option></select>'

$(function() {
  $('#button_demo_list').change(function() {
    new Button($(this).val(),$(this).children('option:selected').text()) ;
    $(this).val(''); // reset the select box
  })
})
