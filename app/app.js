var ifttt_id = "gJZzNn_HHmO3cogsCTnBy_"

$(function() {

  displayData();



  $('.create').click(createAutomation)

  $('#ifttt').change(function() {
    console.log('ifttt_id')
    create('ifttt_id',  $(this).val() );
    console.log(get('ifttt_id'))
  })


}) // end of document.ready

const createAutomation = function() {
    var key = $('#key').val();
    var value = $('#value').val();

    if (get(key) !== null) {
      alert('key already exists');
    } else {
      create(key, value);
      displayData();
    }
}

const displayData = function() {
  console.log('displayData')
  $('section#buttons').html('');

  for (var i = 0; i < count(); i++) {
    $('section#buttons').append(
    `<div id="${getKey(i)}"><button class="automate">${get(getKey(i))}</button> <a class="favorite" href="#">↥ favorite</a> <a class="delete" href="#">✘ delete</a> <a class="edit" href="#">✎ edit</a></div>`
    )
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
  $('button.automate').click(function() {
    automateButton( $(this).parent() );
  })
}

// pass parent div cause we're going to be working with the whole thing a lot
const editButton = function($div) {
  const id = $div.attr('id');
  console.log('editButton(' + id +')');

  // var key = $('#key').val();
  // var value = $('#value').val();
}

// pass parent div cause we're going to be working with the whole thing a lot
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