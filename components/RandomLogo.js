import React, {  useEffect, useRef, useState } from 'react';

export default function RandomLogo() {

    const width = {
        width: '100%'
    }

    const ref = useRef(null);

  const [sketchWidth, setSketchWidth] = useState(0)
  const [sketchHeight, setSketchHeight] = useState(0)

  const renderLogo = () => {
    useEffect(() => {
      const Sketch = require("p5")
      const {Vector} = require("p5")
      const s = ( Sketch ) => {
        var vehicles = [];

        setSketchWidth(ref.current ? ref.current.offsetWidth : 0)
        setSketchHeight(ref.current ? ref.current.offsetWidth : 0)

        const w = sketchWidth,
              h = sketchHeight,
              wa = 0.333*w,
              wb = 0.5*w,
              wc = 0.666*w,
              bsa = 0.15*w,
              bsb = 0.108*w,
              bsc = 0.058*w;

        Sketch.setup = () => {
          Sketch.createCanvas(w, h);
        };

        var la = new Vehicle(wa, wa, bsa);
        var lb = new Vehicle(wa, wb, bsb);
        var lc = new Vehicle(wa, wc, bsa);
        var ma = new Vehicle(wb, wa, bsb);
        var mb = new Vehicle(wb, wb, bsa);
        var mc = new Vehicle(wb, wc, bsc);
        var ra = new Vehicle(wc, wa, bsa);
        var rb = new Vehicle(wc, wb, bsc);
        var rc = new Vehicle(wc, wc, bsb);
        vehicles.push(la);
        vehicles.push(lb);
        vehicles.push(lc);
        vehicles.push(ma);
        vehicles.push(mb);
        vehicles.push(mc);
        vehicles.push(ra);
        vehicles.push(rb);
        vehicles.push(rc);

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
          this.r = 5;
          this.rad = d;
          this.maxspeed = 3;
          this.maxforce = 2;
      }
    
    Vehicle.prototype.behaviors = function() {
          var mouse = Sketch.createVector(Sketch.mouseX, Sketch.mouseY);
          var littlnoise = Sketch.createVector(0, 0);
          var arrive = this.arrive(this.target);
          var vibe = this.vibe(littlnoise);
          var flee = this.flee(mouse);
          this.applyForce(flee);
          this.applyForce(vibe);
          this.applyForce(arrive);
        }
    
    Vehicle.prototype.applyForce = function(f) {
          this.acc.add(f);
        }
    
    Vehicle.prototype.update = function() {
          this.pos.add(this.vel);
          this.vel.add(this.acc);
          this.acc.mult(0.1);
        }
    
    Vehicle.prototype.show = function() {
          var r = r++;
          Sketch.push();
            Sketch.ellipseMode(Sketch.CENTER);
            Sketch.fill(0);
            Sketch.translate(this.pos.x, this.pos.y);
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
          if (d < bsb) {
            speed = Sketch.map(d, 0, 5, 0, this.maxspeed);
          }
          desired.setMag(speed);
          var steer = Vector.sub(desired, this.vel);
          steer.limit(this.maxforce);
          return steer;
        }
    
    Vehicle.prototype.flee = function(target) {
          var desired = Vector.sub(target, this.pos);
           var d = desired.mag();
           var run = wa;
           if (d < run) {
             desired.setMag(this.maxspeed);
             desired.mult(-1);
             var steer = Vector.sub(desired, this.vel);
             //steer.limit(this.maxforce);
             return steer;
           } else {
             return Sketch.createVector(0, 0);
           }
        }
    
    Vehicle.prototype.vibe = function(target) {
          var desired = Vector.sub(target, this.pos);
           var d = desired.mag();
           var run = wa;
           if (d < run) {
             desired.setMag(this.maxspeed);
             desired.mult(-1);
             var steer = Vector.sub(desired, this.vel);
             steer.limit(this.maxforce);
             return steer;
           } else {
             return Sketch.createVector(0, 0);
             //this.rotate.mult(0);
           }
        }
    

      }
      let myp5 = new Sketch(s, 'logoInteract');
    }, [ref.current])
  }

  // const wrapperRef = useRef(null)
  renderLogo()
  

    return (
      <div style={width} ref={ref}>
        <div id="logoInteract"/>
      </div>
    )
  }