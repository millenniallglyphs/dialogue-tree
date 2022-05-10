import React, {  useEffect, useRef, useState } from 'react';

export default function AnimantBackground() {

    const width = {
        width: '100vw',
        height: '100vh'
    }

    const ref = useRef(null);


  const [sketchWidth, setSketchWidth] = useState(0)
  const [sketchHeight, setSketchHeight] = useState(0)

  const renderBG = () => {
    useEffect(() => {
      const Sketch = require("p5")
      const {Vector} = require("p5")
      const s = ( Sketch ) => {
        var vehicles = [];

        setSketchWidth(ref.current ? ref.current.offsetWidth : 0)
        setSketchHeight(ref.current ? ref.current.offsetHeight : 0)

        const w = sketchWidth,
              h = sketchHeight,
              testw = w/2,
              testh = h/2,
              msx = Sketch.mouseX,
              msy = Sketch.mouseY,
              wa = 0.333*w,
              wb = 0.5*w,
              wc = 0.666*w,
              bsa = 0.15*w,
              bsb = 0.108*w,
              bsc = 0.058*w;

        Sketch.setup = () => {
          Sketch.createCanvas(w, h);
        };

        var la = new Vehicle(testw, testh, 420);
        vehicles.push(la);
       

        Sketch.draw = () => {
          Sketch.background(244);

          for (var i = 0; i < vehicles.length; i++) {
            var v = vehicles[i];
            v.behaviors();
            v.update();
            v.show();
          }
        }

        function Vehicle(x,y,d) {
          this.pos = Sketch.createVector(x, y);
          this.target = Sketch.createVector(x,y);
          this.vel = Sketch.createVector();
          this.acc = Sketch.createVector();
          this.r = 0;
          this.rad = d;
          this.maxspeed = 0.5;
          this.maxforce = 4;
      }
    
    Vehicle.prototype.behaviors = function() {
          var mouse = Sketch.createVector(Sketch.mouseX, Sketch.mouseY);
          var flee = this.flee(mouse);
          this.applyForce(flee);
        }
    
    Vehicle.prototype.applyForce = function(f) {
          this.acc.add(f);
        }
    
    Vehicle.prototype.update = function() {
          this.pos.add(this.vel);
          this.vel.add(this.acc);
          this.acc.mult(0);
        }
    
    Vehicle.prototype.show = function() {
          var r = r++;
          Sketch.push();
            Sketch.ellipseMode(Sketch.CENTER);
            Sketch.fill(223, 220, 255);
            Sketch.translate(this.pos.x, this.pos.y);
            Sketch.noStroke(); 
            let rSize = 16;
            var shapex = this.rad;
            var shapey = this.rad;
            Sketch.ellipse(10, 10, shapex, shapey);
          Sketch.pop();
        }
    
    Vehicle.prototype.arrive = function(target) {
          var desired = Vector.sub(target, this.pos);
          var d = desired.mag();
          var speed = this.maxspeed;
          if (d < 0) {
            speed = Sketch.map(0, 0, 0, 0, 0);
          }
          desired.setMag(speed/2);
          var steer = Vector.sub(desired, 0);
          steer.limit(0);
          return steer;
        }
    
    Vehicle.prototype.flee = function(target) {
          var desired = Vector.sub(target, this.pos);
           var d = desired.mag();
           var run = 2000;
           if (d < run && d > 8) {
             desired.setMag(this.maxspeed);
             desired.mult(12);
             var steer = Vector.sub(desired, this.vel);
             //steer.limit(this.maxforce);
             return steer;
           } else if (d < 8) { 
            desired.setMag(this.maxspeed);
            desired.mult(0);
            var steer = Vector.sub(desired, this.vel);
             //steer.limit(this.maxforce);
             return steer;
           } else {
             return Sketch.createVector(12, 12);
           }
        }
    
    Vehicle.prototype.vibe = function(target) {
          var desired = Vector.sub(target, this.pos);
           var d = desired.mag();
           var run = 20;
           if (d < run) {
             desired.setMag(this.maxspeed);
             desired.mult(4);
             var steer = Vector.sub(desired, this.vel);
             steer.limit(this.maxforce);
             return steer;
           } else {
             return Sketch.createVector(1, 1);
             //this.rotate.mult(0);
           }
        }
    

      }
      let myp5 = new Sketch(s, 'bgInteract');
    }, [ref.current])
  }

  // const wrapperRef = useRef(null)
  renderBG()
  

    return (
      <div style={width} ref={ref}>
        <div id="bgInteract"/>
      </div>
    )
  }