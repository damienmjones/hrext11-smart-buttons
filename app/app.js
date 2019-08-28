
$(function() {
  // BUTTON TO MAKE TEST USER/DATA
  var $samplebutton = $('<a href="#" id="createSampleUser">Create Sample User</a>');
  $samplebutton.insertAfter("#saveUser");

  $('#createSampleUser').click(function() {
    var sampleUser = new User("gJZzNn_HHmO3cogsCTnBy_", "Damien Jones")
  })

  const sampleAutomations = [
  'hrext11_bright_white',
  'hrext11_off',
  'hrext11_dim_white',
  'hrext11_pink',
  'hrext11_red',
  'hrext11_orange',
  'hrext11_green_fade',
  'hrext11_blue_blink',
  'hrext11_disco' ]
})


const sampleAutomationName = "Red Mood";
const sampleAutomationNaID = "hrext11_red";

/*  */

// localStorage abstraction
const LS = window.localStorage;

const create = function(key, value) {return LS.setItem(key, value);}

const update = function(key, value) {
  if (typeof value=="object") {
    value = JSON.stringify(value)
  }
  return LS.setItem(key, value);
}

const get = function(key) {
  let keyValue = LS.getItem(key)
  try {keyValue = JSON.parse(keyValue);} catch(err) {}
  return keyValue;
}

// USER STUFF
const User = function (id, name) {
  this.id = id;
  this.name = name;
  this.update()
};

User.prototype.update = function() {
  $('#currentUserID').val(this.id);
  $('#currentUserName').val(this.name);
}



//AUTOMATION STUFF
const Automation = function (id, name, description, style) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.style = style;
};

const init = function() {
  // loadUser();
  // loadAutomations();

  refresh()
}

const refresh = function (){

}

// Repaint the screen with new data



$(function() { // do on load

  init();

})











// make this into an object later

// const automation(id, name, color, ) {
//   this.id
// }


const remove = function(key) {return LS.removeItem(key);}
const count = function(key) {return LS.length;}
const getKey = function(index) {return LS.key(index)}
const clear = function(key) {LS.clear();displayData();}

const  displayData = function() {
  //loop through all items in localstorage
  $('tbody').html('');
  for (var i = 0; i < count(); i++) {
    $('tbody').append(
      `<tr>
        <td>${getKey(i)}</td>
        <td>${JSON.stringify(get(getKey(i)))}</td>
      </tr>`
    )
  }
    //add a row to the table with the key value information (probably want to use a template literal)
}

$(function() {
  displayData();

  $('.create').click(function() {
    var key = $('#key').val();
    var value = $('#value').val();

    if (get(key) !== null) {
      alert('key already exists');
    } else {
      console.log(create(key, value));
      displayData();
    }
  })

  $('.update').click(function() {
    var key = $('#key').val();
    var value = $('#value').val();

    if (get(key) === null) {
      alert('key does not exist');
    } else {
      console.log(update(key, value));
      displayData();
    }
  })

  $('.delete').click(function() {
    var key = $('#key').val();

    if (get(key) === null) {
      alert('key does not exist');
    } else {
      console.log(remove(key));
      displayData();
    }
  })


/* end document.ready */

})





// Utility functions

const generateRandomColorValue = () => {
  let redValue = Math.floor((Math.random() * 256));
  let greenValue = Math.floor((Math.random() * 256));
  let blueValue = Math.floor((Math.random() * 256));
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
};

$(document).ready(function(){

  addSquare()

  $('.add-squares').click(addSquare)
  $('button.clear-all').click(clear)

  $('button.edit').click(function() {
      console.log('edit')
      $(this).siblings('section.edit').toggle();
  })


  $('.save').click(function() {
    console.log('save')
    $(this).parent().hide();
})

});


function addSquare() {
  let $newform = $('.box:first').clone()
  $newform.css( "background-color", generateRandomColorValue);
  // initialize the form and give it event listeners

  $newform.insertAfter(".box:first");
  initSquare();
}

function initSquare() {
  /* $(".box:first").hide(); */

  $('.box').click(function() {
    /* $(this).css( "background-color", generateRandomColorValue); */

  })
  $(".box:not(:first)").show();

  $('button.automate').click(function() {
    const makerKey = 'gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b';
    const makerEvent = 'hrext11_red';
    const makerURL = `https://maker.ifttt.com/trigger/${makerEvent}/with/key/${makerKey}`;
    console.log('ajax: '+makerURL);
    //console.log($.ajax({url: makerURL}));
})



}