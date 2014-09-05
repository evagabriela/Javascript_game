"use strict";

var game = game || {};

game.entity2d = function(spec) {
    var that = {};
    var step = 5;
    var position = spec.position;
    var velocity = spec.velocity;
    var acceleration = spec.acceleration;
    var sprite = spec.sprite;

    that.update = function() {
        if (position.getX() > 800) {
            console.log("position greater than 800");
            velocity.setX(-4);
        }
        velocity.add(acceleration);
        position.add(velocity);
    };
    
    that.draw = function() {
        sprite.draw(position);
    };
    
    that.getX = function() {
        return position.getX();
    };
    
    that.getY = function() {
        return position.getY();
    };
    
    that.moveLeft = function() {
        return position.addX(-step);
    };
    
    that.moveRight = function() {
        return position.addX(step);
    };
    
    that.moveUp = function() {
        return position.addY(-step);
    };
    
    that.moveDown = function() {
        return position.addY(step);
    };
    
    return that;    
}