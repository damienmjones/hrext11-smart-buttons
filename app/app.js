/* sample data - remove for production */
const demo_user = "damien"
var demo_id = "gJZzNn_HHmO3cogsCTnBy_"
const demo_url = "http://192.168.1.20:8080/jsfs.html"
const demo_list = '<select id="button_demo_list"><option value="">or choose one from the list</option><option value="hrext11_orange">orange</option><option value="hrext11_dim_white" >dim/yellow</option><option value="hrext11_bright_white" >bright white</option><option value="hrext11_pink" >pink</option><option value="hrext11_red" >red</option><option value="hrext11_green_fade" >green fade</option><option value="hrext11_blue_blink" >blue blinking</option><option value="hrext11_disco" >disco</option></select>'

$(function() {
  displayData();

  $('#button_create').click(function() {
    createButton($(this).val());
  })

  $('#button_demo_list').click(function() {
    createButton($(this).val(), $(this).children('option:selected').text());$(this).val('');
  })

}) // end of document.ready

const createButton = function(id, val) {
    if (get(id) !== null) {
      alert('trigger already exists');return;
    }
    create(id, val||id);
    displayData();
    // then open the edit part
}

const displayData = function() {
  console.log('displayData')

  $('section#buttons').html('');

  for (var i = 0; i < count(); i++) {
    let key = getKey(i), val=get(key);
    if (key == "ifttt_id") {
      $('#ifttt').val(val);
    } else {
      $('section#buttons').append(
        `<div id="${getKey(i)}"><button class="automate">${get(getKey(i))}</button> <a class="top" href="#">↥ top</a> <a class="delete" href="#">✘ delete</a> <a class="edit" href="#">✎ edit</a></div>`
      );
    }

  }
  bindButtonEvents();
}

const bindButtonEvents = function() {
  console.log('bindButtonEvents')
  $('a.edit').click(function() {
    editButton( $(this).parent() );
  })
  $('a.delete').click(function() {
    deleteButton( $(this).parent() );
  })
  $('a.top').click(function() {
    topButton( $(this).parent() );
  })
  $('button.automate').click(function() {
    automateButton( $(this).parent() );
  })
}

const topButton = function($div) {
  const id = $div.attr('id');
  console.log('topButton(' + id +')');
}

const editButton = function($div) {
  const id = $div.attr('id');
  console.log('editButton(' + id +')');
}


const deleteButton = function($div) {
  const id = $div.attr('id');
  console.log('deleteButton(' + id +')');
  remove(id);
  displayData();
}

const automateButton = function($div) {
  //makerKey = get('ifttt)
    const makerAutomation = $div.attr('id')
    const makerKey = 'gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b';
    const makerURL = `https://maker.ifttt.com/trigger/${makerAutomation}/with/key/${makerKey}`;
    //console.log('ajax: '+makerURL);
    console.log($.ajax({url: makerURL}));
}



// Look into: Access to XMLHttpRequest at 'https://maker.ifttt.com/trigger/hrext11_disco/with/key/gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource