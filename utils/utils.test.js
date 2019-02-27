const expect = require('expect');

const utils = require('./utils.js');

it('should add two numbers', () => {
    var res = utils.add(33,11);

    expect(res).toBeA('number').toBe(44);

    // if (res !== 44) {
    //   throw new Error(`Value not correct. Expected 44, got ${res}`);
    // }

});

it('should async add two number', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBeA('number').toBe(7);
    done();
  });
});

it('should square two numbers', () => {
  var res = utils.square(8);

  expect(res).toBeA('number').toBe(64);
});

it('should square two numbers', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBeA('number').toBe(9);
    done();
  });
});

// should verify first and last names are set
// assert it includes first name and last name with proper values
it('should have first and last names set', () => {
  var userObj = { location:'Denver', age: 32 };
  var testUser = utils.setName(userObj,'Jeffrey Kaplan');

  expect(testUser).toBeA('object').toInclude({
    firstName: 'Jeffrey',
    lastName: 'Kaplan'
  });
  // console.log(JSON.stringify(testUser, undefined, 2));
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2, 3, 4]).toInclude(2).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toInclude({
//     age: 23
//   });
// });
