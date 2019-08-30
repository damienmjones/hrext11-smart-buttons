$(function() {
  refreshButtons();

  $('#button_create').click(function() {
    alert($('#button_trigger').val());
    new Button($('#button_trigger').val());
  })



}) // end of document.ready

const createButton = function(id, val) {
  alert(id);
    if (get(id) !== null) {
      alert('trigger already exists');return;
    }
    create(id, val||id);
    refreshButtons();
    // then open the edit part
}

const refreshButtons = function() {   console.log('refreshButtons')
  var buttonList = get('buttons') || [];
  $('section#buttons').html('');
  buttonList.forEach(function(button) {
    $('section#buttons').prepend(
      `<div id="${button.id}"><button class="automate ${button.style}">${button.name}</button> <a class="top" href="#">↥ top</a> <a class="delete" href="#">✘ delete</a> <a class="edit" href="#">✎ edit</a></div>`
    );
  })
  bindButtonEvents();
}

const bindButtonEvents = function() {
  console.log('bindButtonEvents')
  $('a.edit').click(function() {
    editButton( $(this).parent() );
  })
  $('.button_name').change(function() {
    setProp('button', $(this).parent().attr('id'), 'name', $(this).val())
  })
  $('.button_style').click(function() {
    setProp('style', $(this).parent().attr('id'), 'name', $(this).val())
  })
  $('a.delete').click(function() {
     deleteObj('buttons',$(this).parent().attr('id'));
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

const colorpicker=`<select class="button_style">
<option class="white" value="white">Select a button color...</option>
<option class="yellow" value="yellow">Yellow</option>
<option class="orange" value="orange">Orange</option>
<option class="red" value="red">Red</option>
<option class="pink" value="pink">Pink</option>
<option class="green" value="green">Green</option>
<option class="blue" value="blue">Blue</option>
<option class="rainbow" value="rainbow">Rainbow</option>
</select>`

const editButton = function($div) {
  const id = $div.attr('id');
  console.log('editButton(' + id +')');

  $div.append(
    `<input class="button_name" value="${getProp('buttons',id,'name')}">${colorpicker}`
  );
}

const deleteButton = function($div) {
  const id = $div.attr('id');
  console.log('deleteButton(' + id +')');
  remove(id);
  refreshButtons();
}

const automateButton = function($div) {
  //makerKey = get('ifttt)
    const makerAutomation = $div.attr('id')
    const makerKey = 'gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b';
    const makerURL = `https://maker.ifttt.com/trigger/${makerAutomation}/with/key/${makerKey}`;
    //console.log('ajax: '+makerURL);
    console.log($.ajax({url: makerURL}));
}


// FUTURE: Look into: Access to XMLHttpRequest at 'https://maker.ifttt.com/trigger/hrext11_disco/with/key/gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource