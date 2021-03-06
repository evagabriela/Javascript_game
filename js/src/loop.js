"use strict";

var game = game || {};

game.loop = function(spec){
    var that = {};
    var context = spec.context;
    var path = spec.path;
    var entities = spec.entities;

    that.run = function(window) {
            function gameLoop() {
                context.clearRect(0, 0, 800, 600);
                path.draw();
                for (var i = 0; i < entities.length; i++) {
                    entities[i].update();
                    entities[i].draw();
                }
            }

            var framesPerSecond = 1000 / 60;
            window.setInterval(gameLoop, framesPerSecond);
    };

    return that;
};