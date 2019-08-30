$(function() {

  loadUser();
  refreshButtons();
  $('#button_create').click(function() {
    new Button($('#button_trigger').val());
  })

  $('#button_cancel').click(function() {
    putEditFieldsBack();
  })

  $('#button_save').click(function() {
    const id = $(this).parent().parent().attr('id');
    putEditFieldsBack();
    setProp('buttons', id, 'name', $('#button_name').val())
    setProp('buttons', id, 'style', $('#button_style').val())
    refreshButtons();
  })

  $('#button_name').keydown(function() {
    $(this).parent().parent().children('.automate').text( $(this).val() );
  })

  $('#button_style').change(function() {

    $(this).parent().parent().children('.automate').removeClass('black').removeClass('white').removeClass('yellow').removeClass('orange').removeClass('red').removeClass('pink').removeClass('green').removeClass('blue').addClass( $(this).val() );
  })

  $('#clear').click(function() {
    LS.clear();
    refreshButtons();
  })

  $('#edituser').click(function() {
    $('#ifttt_user').val( get('ifttt_user') )
    $('#ifttt_id').val( get('ifttt_id') )
    $('#user_edit_fields').toggle();
  })

  $('#saveuser').click(function() {
    saveUser();
    $('#user_edit_fields').toggle();
  })
  $('#canceluser').click(function() {
    saveUser();
    $('#user_edit_fields').toggle();
  })

}) // end of document.ready

const loadUser = function(){
  let user = get('ifttt_user');
  let id = get('ifttt_id');
  if(id===null){
    set('ifttt_id',demo_id||"")
  }
  if(user===null){
    set('ifttt_user',demo_user||"New User")
  }
  $('#edituser').text(get('ifttt_user'));
  $('#ifttt_user').val( get('ifttt_user') )
  $('#ifttt_id').val( get('ifttt_id') )

}

const saveUser = function() {
  set('ifttt_id', $('#ifttt_id').val());
  set('ifttt_user', $('#ifttt_user').val());
  $('#edituser').text($('#ifttt_user').val());
}


const putEditFieldsBack = function() {
  const $edit = $('#edit');
  $('#button_edit_field_template').append($edit);
}

const createButton = function(id, val) {
    if (get(id) !== null) {
      alert('trigger already exists');return;
    }
    create(id, val||id);
    refreshButtons();
    // then open the edit part
}

const refreshButtons = function() {
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
    $('#button_name').val(name); // write it to the name edit box
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
  remove($div.attr('id'));
  refreshButtons();
}

const automateButton = function($div) {
    const makerAutomation = $div.attr('id')
    const makerKey =  get('ifttt_id');
    const makerURL = `https://maker.ifttt.com/trigger/${makerAutomation}/with/key/${makerKey}`;
    //console.log('ajax: '+makerURL);
    $.ajax({url: makerURL});
}


// FUTURE: Look into: Access to XMLHttpRequest at 'https://maker.ifttt.com/trigger/hrext11_disco/with/key/gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource