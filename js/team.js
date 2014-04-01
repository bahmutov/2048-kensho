(function initTeam(vein) {
  'use strict';

  var names = ['daniel', 'pete', 'adam', 'martin', 'nicolai',
    'taylor', 'howe', 'joseph', 'goral', 'gleb', 'neal',
    'doug', 'barr', 'lynn', 'alec', 'kim', 'kate',
    'bo', 'chase', 'bruno', 'andre', 'angela', 'brandon',
    'john', 'courtney'];

  function randomly() { return 0.5 - Math.random(); }
  names.sort(randomly);

  function formUrl(name) {
    if (typeof name !== 'string' || !name) {
      throw new Error('need name string, got ' + name);
    }
    // + name.jpg gives full url
    var url = 'http://dm6vfd9rrksh7.cloudfront.net/bio-';
    return url + name + '.jpg';
  }

  // tiles have classes tile-2, tile-4, etc
  var k = 0, power = 2;
  for (; power < 4096; power = power * 2, k += 1) {
    var name = names[k];
    vein.inject('.tile-' + power, {
      'background-image': 'url(' + formUrl(name) + ')',
      'background-position': 'center',
      'background-size': 'cover'
    });
  }

}(window.vein));
