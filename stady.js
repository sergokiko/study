const  delay = (wait = 1000) => {
 const promise = new Promise((resolve,reject) => {
  setTimeout(() =>{
   resolve()
  },wait)
 })
 return promise
}

delay (2500)
    .then(() =>{
     console.log('After 2 second')
})
    .catch(err => console.error((err)))
    .finally(() =>console.log(('Finally')))
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')