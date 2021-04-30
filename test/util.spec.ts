import { averageOddPositiveIntegers } from '../src/util';
/*
describe('Test Suite Name/ Description', (function to implement suite) () => {
 
  test("Test Title", Function to implement suite) {
      it - test alias
      https://jestjs.io/docs/api
      https://jestjs.io/docs/expect
      --Expect for comparison - actual result -> expected result
  });
});
*/

describe('Average Odd Positive Test Suite', () => {
    
    test("Mixed Array", () => {
        
        const input = [1,2,3,4,5];
        const result = averageOddPositiveIntegers(input);

        expect(result).toBe(3);
        
    });
    test("Empty Array", () => {
        
        const input : number [] = [];
        const result = averageOddPositiveIntegers(input);

        expect(result).toBe(0);
        
    });
    test("Only Even Array", () => {
        
        const input = [2,4,6];
        const result = averageOddPositiveIntegers(input);

        expect(result).toBe(0);
        
    });
    test("Only Negative Array", () => {
        
        const input = [-1,-2,-3,-4,-5];
        const result = averageOddPositiveIntegers(input);

        expect(result).toBe(0);
        
    });

});


