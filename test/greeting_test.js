var chai = require('chai')
var expect = chai.expect

var greeting = require('./../lib/greeting')

describe('Bot', function(){
  it('should include linked techtalk channel in greeting',function(){
    expect(greeting).to.include('<#C02AA0ARR|techtalk>')
  });

  it('should include linked new_members channel in greeting',function(){
    expect(greeting).to.include('<#C02G8J689|new_members>')
  })
  
  it('should include linked random channel in greeting',function(){
    expect(greeting).to.include('<#C0285CSUH|random>')
  })

  it('should include link to our code of conduct',function(){
    expect(greeting).to.include('<https://github.com/AgileVentures/AgileVentures/blob/master/CODE_OF_CONDUCT.md|code of conduct>')
  })
});