
test('zero', () => {
   const n = 0;
   expect(n).not.toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
});

test('object assignment', () => {
   const data = {one: 1};
   data['two'] = 2;
   expect(data).toEqual({one: 1, two: 2});
});

test('there is no I in team', () => {
   expect('team').not.toMatch(/I/);
});

const shoppingList = [
   'diapers',
   'kleenex',
   'trash bags',
   'paper towels',
   'beer'
];
test('购物清单（shoppingList）里面有啤酒（beer）', () => {
   expect(shoppingList).toContain('beer');
});

//Testing Asynchronous Code
var data = 'peanut butter';
var fetchData = (cb) => {
   setTimeout(() => {
      cb(data);
   }, 1500);
};
test('the data is peanut butter', done => {
   var callback = (data) => {
      expect(data).toBe('peanut butter');
      done();
   };
   fetchData(callback);
});

var data1 = 'test promise';
var mypromise = new Promise((resolve, reject) => {
   setTimeout( () => {
      resolve(data1);
   }, 1000);
});

test('the data1 is test promise', () => {
   return mypromise.then( data => {
      expect(data).toBe('test promise');
   });
});