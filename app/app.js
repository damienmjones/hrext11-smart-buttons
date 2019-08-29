




$(function() {
  displayData();

  $('#button_create').click(function() {
    createButton($(this).val());
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
    if (key.indexOf("ifttt")) {
      $('section#buttons').prepend(
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

const colorpicker=`<select>
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
    `<input class="name" value="button name">${colorpicker}`
  );
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