/**
 * @jest-environment allure-jest/node
 * */

jest.retryTimes(1);

it('broken test', () => {
  allure.epic('some epic');

  expect(false).toBeTruthy();
});
