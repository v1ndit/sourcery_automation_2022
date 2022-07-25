// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'
]


data.forEach(version => {
  /*
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 together should result in a sum of 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });

  test.describe(version + ': Add negatives', () => {
    test('Adding -1 to -1 should result in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
    });
  });

  test.describe(version + ': Adding a negative to a positive', () => {
    test('Adding -1 to 1 should result in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });

  test.describe(version + ': Adding rational numbers', () => {
    test('Adding 1.1 to 1.1 should result in 2.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.1');
      await page.locator('#number2Field').type('1.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#integerSelect').uncheck();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2.2');
    });
  });

  test.describe(version + ': Adding rational numbers to get integer numbers', () => {
    test('Adding 1.1 to 1.1 should result in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.1');
      await page.locator('#number2Field').type('1.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });

  test.describe(version + ': Subtract', () => {
    test('Subtracting 3 and 1 should result in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });

  test.describe(version + ': Subtracting negatives', () => {
    test('Subtracting -2 and -2 should result in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });

  test.describe(version + ': Subtracting a negative and a positive', () => {
    test('Subtracting -2 and 2 should result in -4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-4');
    });
  });

  test.describe(version + ': Subtracting rationals', () => {
    test('Subtracting 2.5 and 1.1 should result in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('1.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#integerSelect').uncheck();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.4');
    });
  });

  test.describe(version + ': Subtracting rationals to get integers', () => {
    test('Subtracting 2.5 and 1.1 should result in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('1.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });

  test.describe(version + ': Multiply', () => {
    test('Multiplying 5 and 4 should result in 20', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('20');
    });
  });

  test.describe(version + ': Multiplying two negatives', () => {
    test('Multiplying -5 and -4 should result in 20', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-5');
      await page.locator('#number2Field').type('-4');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('20');
    });
  });

  test.describe(version + ': Multiplying a negative and a positive', () => {
    test('Multiplying 5 and -4 should result in -20', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('-4');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-20');
    });
  });

  test.describe(version + ': Multiplying rationals', () => {
    test('Multiplying 1.2 and 1.2 should result in 1.44', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.2');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#integerSelect').uncheck();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.44');
    });
  });

  test.describe(version + ': Multiplying rationals to get an integer', () => {
    test('Multiplying 1.2 and 1.2 should result in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.2');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });

  test.describe(version + ': Divide', () => {
    test('Dividing 20 and 4 should result in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('20');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });

  test.describe(version + ': Dividing two negatives', () => {
    test('Dividing -20 and -4 should result in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-20');
      await page.locator('#number2Field').type('-4');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });

  test.describe(version + ': Divide a negative and a positive', () => {
    test('Dividing -20 and 4 should result in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-20');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
    });
  });

  test.describe(version + ': Dividing rationals', () => {
    test('Dividing 2.5 and 1.2 should result in 2.0833333333333335', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#integerSelect').uncheck();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2.0833333333333335');
    });
  });

  test.describe(version + ': Divide rationals to get integer', () => {
    test('Dividing 2.5 and 1.2 should result in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });
*/
  test.describe(version + ': Concatinate', () => {
    test('Concatinating 10 and 20 should result in 1020', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('20');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1020');
    });
  });

  test.describe(version + ': Concantinating two negatives', () => {
    test('Concatinating -10 and -20 should result in -10-20', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('-20');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-10-20');
    });
  });

  test.describe(version + ': Concatinating a negative and a positive', () => {
    test('Concatinating -10 and 20 should result in 1020', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('20');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1020');
    });
  });

  test.describe(version + ': Concatinating rationals', () => {
    test('Concatinating 10.1 and 20.1 should result in 10.120.1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10.1');
      await page.locator('#number2Field').type('20.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('10.120.1');
    });
  });

  test.describe(version + ': Concatinating a rational and an integer', () => {
    test('Concatinating 10.1 and 20 should result in 10.120', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10.1');
      await page.locator('#number2Field').type('20');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('10.120');
    });
  });
});