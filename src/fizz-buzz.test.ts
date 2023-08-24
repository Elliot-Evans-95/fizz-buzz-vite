import { FizzBuzz } from "./fizz-buzz.ts";

describe('Fizz Buzz', () => {
    test('returns null', () => {
        const fizzBuzz = FizzBuzz()

        expect(fizzBuzz).toBe(null)
    })
});
