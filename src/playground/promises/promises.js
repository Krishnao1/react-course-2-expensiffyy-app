const promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{

    //     resolve({name:'krish',age:21,
    // title:'this is my resole data'});

    reject('something went wrong')
       
   },3000) 
})

console.log('befor')

promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
  console.log('error',error)
});

console.log('after')


export default promise;