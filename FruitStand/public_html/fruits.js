(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/apple.png", id:"apple"},
		{src:"images/banana.png", id:"banana"},
		{src:"images/broccoli.png", id:"broccoli"},
		{src:"images/carrot.png", id:"carrot"},
		{src:"images/cucumber.png", id:"cucumber"},
		{src:"images/grapes.png", id:"grapes"},
		{src:"images/mango.png", id:"mango"},
		{src:"images/onion.png", id:"onion"},
		{src:"images/orange.png", id:"orange"},
		{src:"images/potato.png", id:"potato"},
		{src:"images/pumpkin.png", id:"pumpkin"},
		{src:"images/strawberries.png", id:"strawberries"},
		{src:"images/tomato.png", id:"tomato"},
		{src:"images/watermelon.png", id:"watermelon"},
		{src:"images/yam.png", id:"yam"}
	]
};



// symbols:



(lib.apple = function() {
	this.initialize(img.apple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,299);


(lib.banana = function() {
	this.initialize(img.banana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,299);


(lib.broccoli = function() {
	this.initialize(img.broccoli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,299);


(lib.carrot = function() {
	this.initialize(img.carrot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,500);


(lib.cucumber = function() {
	this.initialize(img.cucumber);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,300);


(lib.grapes = function() {
	this.initialize(img.grapes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,297);


(lib.mango = function() {
	this.initialize(img.mango);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,388);


(lib.onion = function() {
	this.initialize(img.onion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,219);


(lib.orange = function() {
	this.initialize(img.orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,591);


(lib.potato = function() {
	this.initialize(img.potato);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,80);


(lib.pumpkin = function() {
	this.initialize(img.pumpkin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,255);


(lib.strawberries = function() {
	this.initialize(img.strawberries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3474,2742);


(lib.tomato = function() {
	this.initialize(img.tomato);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,240);


(lib.watermelon = function() {
	this.initialize(img.watermelon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.yam = function() {
	this.initialize(img.yam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,423);


// stage content:
(lib.fruitsFlash = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AopGjQmdg7lJiXQjyhviEiBQijihABjAIABggIACAIIAGANQAvBYDbBIQBrAkCVAgQIYBzL2AAQL0AAIXhzQCUggBsgkQDbhJAwhXIAEgIIAAAAQAHgTADgUIAAgNIAFAAQAFAjAAAkQAADYjNCvQh/BsjNBeQlICXmdA7QkEAlkmAAQklAAkEglg");
	this.shape.setTransform(276.7,277);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104));

	// yam
	this.instance = new lib.yam();
	this.instance.setTransform(301,277.4,0.123,0.159,-90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(99));

	// potato
	this.instance_1 = new lib.potato();
	this.instance_1.setTransform(292.8,186.1,0.587,0.587);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(93));

	// orange
	this.instance_2 = new lib.orange();
	this.instance_2.setTransform(171.8,232.9,0.075,0.075);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(87));

	// watermelon
	this.instance_3 = new lib.watermelon();
	this.instance_3.setTransform(144.1,179.8,0.317,0.317);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(81));

	// tomato
	this.instance_4 = new lib.tomato();
	this.instance_4.setTransform(244.8,193.2,0.337,0.337);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(75));

	// Layer 21
	this.instance_5 = new lib.strawberries();
	this.instance_5.setTransform(185.7,148.1,0.036,0.031);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).wait(69));

	// onion
	this.instance_6 = new lib.onion();
	this.instance_6.setTransform(318.2,180.2,0.342,0.39,-15);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).wait(63));

	// grapes
	this.instance_7 = new lib.grapes();
	this.instance_7.setTransform(190.3,195.9,0.25,0.25);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).wait(57));

	// broccoli
	this.instance_8 = new lib.broccoli();
	this.instance_8.setTransform(339,107.9,0.292,0.291,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({_off:false},0).wait(51));

	// carrot
	this.instance_9 = new lib.carrot();
	this.instance_9.setTransform(258.4,111.6,0.265,0.197,0,-23,-30);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).wait(45));

	// cucumber
	this.instance_10 = new lib.cucumber();
	this.instance_10.setTransform(261,95.7,0.404,0.313,15);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65).to({_off:false},0).wait(39));

	// apple
	this.instance_11 = new lib.apple();
	this.instance_11.setTransform(164.6,129.3,0.209,0.202);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71).to({_off:false},0).wait(33));

	// pumpkin
	this.instance_12 = new lib.pumpkin();
	this.instance_12.setTransform(212.2,107.9,0.219,0.276);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(77).to({_off:false},0).wait(27));

	// banana
	this.instance_13 = new lib.banana();
	this.instance_13.setTransform(131.6,137.8,0.309,0.318);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(83).to({_off:false},0).wait(21));

	// mango
	this.instance_14 = new lib.mango();
	this.instance_14.setTransform(144.1,165.6,0.142,0.122);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(89).to({_off:false},0).wait(15));

	// Layer 20
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("A0NFEQiVgghqgjQjbhJgwhYIgFgNQgEgJgCgKIgCgSIAAgLQAAhnCXhZQCGhND6hBQErhOFwgiIBBgFQEHgWEqAAQL2AAIXCLQEcBKCFBZQB3BPAABcIAAAPQgCATgIATIAAABIgDAHQgwBYjcBJQhrAjiUAgQoXBzr2AAQr0AAoZhzg");
	this.shape_1.setTransform(276,227.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(368,383.8,367.1,138.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;