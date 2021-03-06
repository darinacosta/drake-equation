app.controller('homeCtrl', ['$scope','drakeCalculator', homeCtrl]);

function homeCtrl($scope, drakeCalculator) {
  String.prototype.repeat = function( num ) {
      return new Array( num + 1 ).join( this );
  };
	var s = $scope;
  s.r = 0;
  $scope.$watchCollection('[r, fp, ne, fl, fi, fc, l]', function(newValues){
    var calculation = drakeCalculator.n(s.r, s.fp, s.ne, s.fl, s.fi, s.fc, s.l);
    s.n = isNaN(calculation) ? 'Awaiting inputs.' : '<img src="assets/i/space_invader_a_v1.png"> '.repeat(calculation);
  });
}

/*
r: rate at which stars form 
fp: fraction of stars that have planetary systems
ne: number of planets, per planetary system, that are suitable for life
fl: fraction of planets suitable for life on which life actually arises 
fi: fraction of life-bearing planets where intelligence develops   
fc: fraction of planets with intelligent life that develop a technological
phase during which there is capability for and interest in interstellar
communication
l: average lifetime of communicable civilizations
n: number of communicable civilizations in our galaxy
*/