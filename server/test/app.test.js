const expect = require('expect')

const {isCoffeeHotEnough} = require('../src/app');

const HOT_ENOUGH_COFFEE = {
  degree: 1000000
}
const BARELY_HOT_ENOUGH_COFFEE = {
  degree: 25
}
const NOT_BARELY_HOT_ENOUGH_COFFEE = {
  degree: 24
}
const NOT_HOT_ENOUGH_COFFEE = {
  degree: 0
}

describe('isCoffeeHotEnough', () => {
  it('should return correct answer for hot enough coffee', () => {
    var answer = isCoffeeHotEnough(BARELY_HOT_ENOUGH_COFFEE)
    expect(answer).toBeDefined()
    expect(answer).toBe(true)
  })
  it('should return correct answer for not hot enough coffee', () => {
    var answer = isCoffeeHotEnough(NOT_BARELY_HOT_ENOUGH_COFFEE)
    expect(answer).toBeDefined()
    expect(answer).toBe(false)
  })
  it('should return correct answer for very hot coffee', () => {
    var answer = isCoffeeHotEnough(HOT_ENOUGH_COFFEE)
    expect(answer).toBeDefined()
    expect(answer).toBe(true)
  })
  it('should return correct answer for very cold enough coffee', () => {
    var answer = isCoffeeHotEnough(NOT_HOT_ENOUGH_COFFEE)
    expect(answer).toBeDefined()
    expect(answer).toBe(false)
  })
})
