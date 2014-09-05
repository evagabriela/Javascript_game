"use strict";

var game = game || {};

game.runner = function(spec){
    var that = {};
    var document = spec.document;
    var canvas = document.getElementById('gameOne');
    var context = canvas.getContext('2d');
    var alien = game.entityFactory({context:context}).createAlien();
    var spaceship = game.entityFactory({context:context}).createSpaceship();
    var entities = [alien, spaceship];
    var path = game.path({context: context});

    that.go = game.loop({context:context, path:path, entities:entities}).run;
    $(document.body).on('keydown', game.keyPressEventHandler({entity:spaceship}).handle);
    canvas.addEventListener('click', game.clickEventHandler({canvas:canvas, path:path}).handle, false);
    return that;
};