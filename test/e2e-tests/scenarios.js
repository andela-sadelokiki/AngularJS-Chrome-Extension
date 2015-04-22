'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JXtnsion', function() {

  browser.get('index.html');

    it('display the current local date and time', function() {

    expect(element(by.id('dateToday')).isDisplayed()).toBe(true)
  });

  it('display the current local weather condition', function() {

    expect(element(by.id('temp')).isDisplayed()).toBe(true)
  });

  it('display the current city', function() {

    expect(element(by.id('currentCity')).isDisplayed()).toBe(true)
  });

   it('Be able to start,stop and log times on freckle', function() {
     expect(element(by.id('freckle')).isDisplayed()).toBe(true)
  });

});
