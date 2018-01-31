var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  return delete object.key
<<<<<<< HEAD
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
=======
}
>>>>>>> 4c9ac4037fb257b46bba9d64a6c6d15cb15ef971
