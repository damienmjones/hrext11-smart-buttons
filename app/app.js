/*
 ### Basic Reqs
- [x] Where to store data? (localstorage)
- [x] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)
*/

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
const clear = function(key) {return LS.clear();}

const  displayData = function() {
  //figure out how many items are in local storage
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

  $('.get').click(function() {
    var key = $('#key').val();
    console.log(get(key));
    displayData();
  })

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

  $('.clear').click(function() {
    if (getItemCount() === 0) {
      alert('nothing to clear');
    } else {
      console.log(clear());
      displayData();
    }
  })


$(".hrext11_red").click(function() {
  const makerKey = 'gJZzNn_HHmO3cogsCTnBy_-UNg1rOYaqo579Lepel7b';
  const makerEvent = 'hrext11_red';
  const makerURL = `https://maker.ifttt.com/trigger/${makerEvent}/with/key/${makerKey}`;
  console.log(makerURL);
  console.log($.ajax({url: makerURL}));
})


})





// Utility functions

const generateRandomColorValue = () => {
  let redValue = Math.floor((Math.random() * 256));
  let greenValue = Math.floor((Math.random() * 256));
  let blueValue = Math.floor((Math.random() * 256));
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
};
//
$(document).ready(function(){

  addSquare()

  $('.add-squares').click(addSquare)

  function addSquare() {
    let $newform = $('.box:first').clone()
    $newform.css( "background-color", generateRandomColorValue);
    // initialize the form and give it event listeners
    $newform.insertAfter(".box:first");
    initSquare();
  }

  function initSquare() {
    $(".box:first").hide();
    $('.box').click(function() {
  		$(this).css( "background-color", generateRandomColorValue);
    })
    $(".box:not(:first)").show();
  }


});
