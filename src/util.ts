/**
 * Function which calculates the average of only odd positive numbers.
 */

//js reduce? -- cool functions

export function averageOddPositiveIntegers(input: number[]): number {
  var sum = 0;
  var counter = 0;
  for (var i = 0; i < input.length; i++ )
  {
    if (input[i] > 0 && input[i] % 2 == 1)
    {
      sum += input[i];
      counter++;
      
    }
  }

  return (counter == 0 ? 0 : sum/counter)

}
