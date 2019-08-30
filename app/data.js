const buttons= [];
const LS = window.localStorage;


const set = function(key, value) {
  LS.setItem(key, JSON.stringify(value));
}

const get = function(key) {
  let obj = LS.getItem(key)
  try {obj = JSON.parse(obj);} catch(err) {}
  return obj;
}

const saveObj = function(category, obj) {
  const arr = get(category) || [];
  arr.push(obj); // duplicates actually ok? this could be a problem
  set(category, arr);
  refreshObj(category)
}

const getObj = function(category,id) {
  const arr = get(category) || [];
  return arr.find(function(obj) {
    return (id==obj["id"])
  })
}

const deleteObj = function(category,id) {
  const arr = get(category) || [];
  set(category,arr.filter(function(obj){
    return (id!=obj["id"])
  }))
  refreshObj(category);
}

const topObj = function(category,id) {
  let arr = get(category) || [];
  const top = arr.find(function(obj){
    return (id==obj["id"])
  })
  arr = arr.filter(function(obj){
    return (id!=obj["id"])
  })
  arr.push(top);
  set(category,arr);
  refreshObj(category);
}

const setProp = function(category, id, prop, val) {
  console.log(category, id, prop, val);
  const arr = get(category) || [];
  var obj = arr.find(function(obj){
    return obj["id"]==id;
  })
  obj[prop] = val;
  set(category, arr);
}

const getProp = function(category, id, prop) {
  return getObj(category,id)[prop];
}

const refreshObj = function(category) {
    if(category==='buttons') { refreshButtons(); }
}

const updateButtonName = function(id, name) {
  getObj(id)["name"]=name;
  refreshButtons();
}

const updateButtonStyle = function(id, name) {
  getObj(id)["style"]=style;
  refreshButtons();

}


// BUTTON STUFF
const Button = function (id, name, style) {
  this.id = id;
  this.name = name || id;
  this.style = style || "";
  this.save()
};

Button.prototype.setName = function(name) {
  this.name = name || this.id;
  this.save()
}

Button.prototype.setStyle = function(style) {
  this.style = style || "";
  this.save()
}

Button.prototype.delete = function(id) {
  deleteObj('buttons',this);
  this.save()
}

Button.prototype.HTML = function() {
  return `<div id="${this.id}"><button class="automate ${this.style}">${this.name}</button> <a class="top" href="#">↥ top</a> <a class="delete" href="#">✘ delete</a> <a class="edit" href="#">✎ edit</a></div>`
}

Button.prototype.save = function() {
  saveObj('buttons',this);
}

//var b1 = new Button('hrext11_off', "Everything off")
//b1.update

