//localStorage abstraction
const LS = window.localStorage;

// make this into an object later

// const automation(id, name, color, ) {
//   this.id
// }

const get = function(key) {return LS.getItem(key);}
const create = function(key, value) {return LS.setItem(key, value);}
const update = function(key, value) {return LS.setItem(key, value);}
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
        <td>${get(getKey(i))}</td>
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