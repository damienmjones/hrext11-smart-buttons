$(function() {

  refreshButtons();
  $('#button_create').click(function() {
    new Button($('#button_trigger').val());
  })

  $('#button_save').click(function() {
    const id = $(this).parent().parent().attr('id');
       //put the form fields back
       const $edit = $('#edit');
       $('#button_edit_field_template').append($edit);
    setProp('buttons', id, 'name', $('#button_name').val())
    setProp('buttons', id, 'style', $('#button_style').val())
    refreshButtons();
  })

  $('#clear').click(function() {
    alert('clear')
    LS.clear();
    refreshButtons();
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
    if(button) {
        $('section#buttons').prepend(
          `<div id="${button.id}"><button class="automate ${button.style}">${button.name}</button> <a class="top" href="#">↥ top</a> <a class="delete" href="#">✘ delete</a> <a class="edit" href="#">✎ edit</a></div>`
        );
    }
  })
  bindButtonEvents();
}

const bindButtonEvents = function() {
  console.log('bindButtonEvents')
  $('a.edit').click(function() {
    console.log('edit');
    $div = $(this).parent() // get the enclosing element for the button block
    const id = $div.attr('id'); // get the id of that block
    const $edit = $('#edit'); // find the editor window, wherever it is
    $(this).parent().append($edit); // and move it to right after this edit the user just clicked on
    let name = getProp('buttons',id,'name'); // get the current button's name
    console.log(name)
    $('#button_name').val(name); // write it to the name edit boc
    let style = getProp('buttons',id,'style'); // get the current button's style
    console.log(style)
    if (style) {$('#button_style').val(style)} // write it to the style select box
  })
  $('a.delete').click(function() {
     deleteObj('buttons',$(this).parent().attr('id'));
  })
  $('a.top').click(function() {
        topObj('buttons',$(this).parent().attr('id'));
  })
  $('button.automate').click(function() {
    automateButton( $(this).parent() );
  })
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