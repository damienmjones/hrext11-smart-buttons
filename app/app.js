/*
 ### Basic Reqs
- [x] Where to store data? (localstorage)
- [x] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)
*/

//localStorage abstraction
var get = function(key) {
  return window.localStorage.getItem(key);
}

var create = function(key, value) {
  return window.localStorage.setItem(key, value);
}

var update = function(key, value) {
  return window.localStorage.setItem(key, value);
}

var remove = function(key) {
  return window.localStorage.removeItem(key);
}

var clear = function() {
  return window.localStorage.clear();
}

var getItemCount = function() {
  return window.localStorage.length;
}

var getKey = function(index) {
  return window.localStorage.key(index);
}

var displayData = function() {
  //figure out how many items are in local storage
  //loop through all items in localstorage
  $('tbody').html('');
  for (var i = 0; i < getItemCount(); i++) {
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

	addSquare();

  $('.add-squares').click(addSquare)

  $('.randomize').click(function() {
  		$('.box').css( "background-color", generateRandomColorValue);
  })

  function addSquare() {
		var $box = $('<div class="box"></div>');
		$box.css( "background-color", generateRandomColorValue);
		$box.appendTo($('.container'));
  }

});
