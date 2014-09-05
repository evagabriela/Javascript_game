"use strict";

var game = game || {};

game.entityFactory = function(spec){
    var that = {};

    var context = spec.context;

    that.createAlien = function() {
        return game.entity2d({
            position: game.vector2d({x: 800, y: 0}),
            velocity: game.vector2d({x: -4, y: 0.1}),
            acceleration: game.vector2d({x: 0.01, y: 0}),
            sprite: game.sprite({
                context: context,
                imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
            })
        });
    };

    that.createSpaceship = function() {
        return game.entity2d({
            position: game.vector2d({x: -100, y: 0}),
            velocity: game.vector2d({x: 4, y: 0.1}),
            acceleration: game.vector2d({x: -0.01, y: 0}),
            sprite: game.sprite({
                context: context,
                imageSource: 'https://cdn0.iconfinder.com/data/icons/retinaicon-set-space-icons/49/Space_015-32.png'
            })
        });
    };

    return that;
};