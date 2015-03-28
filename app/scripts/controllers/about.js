'use strict';

/**
 * @ngdoc function
 * @name jikoshokaiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jikoshokaiApp
 */
angular.module('jikoshokaiApp')
  .controller('AboutCtrl', function ($scope) {

//    for(var i = 0; i < 14; i++) {
      $scope.showBall = function() {
      var ball = $("#ball")
      ,bh = ball.offsetHeight
      ,bw = ball.offsetWidth
      ,left = ( window.innerWidth / 2 ) - ( bw / 2 )
      ,top = -ball.offsetHeight
      ,ground = ( window.innerHeight / 2 ) - ( bh / 2 );
      ball.style.left = left + "px";
      ball.style.top = top + "px";
      var y = top
      ,b = ground
      ,v = 0
      ,R = 0.48;
      var g = setInterval(gravity, 10);
    };
//   }
    var gravity = function() {
      y += v++;
      if( y >= b ) {
        y = b;
        v *= -R;
        if ( !~~v ) {
          clearInterval(g)
        }
      }
      document.getElementById("ball").style.top = y + "px";
    };

    $scope.showName = function(){
      $scope.name = 'Koji Nishikiori';
      //$('#name').remove();
    };

    $scope.work = function(){
      $scope.work = 'MERY (http://mery.jp)';
      //$('#work').remove();
    };

    $scope.univ = function(){
      $scope.univ = 'Waseda Univ';
      //$('#univ').remove();
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
