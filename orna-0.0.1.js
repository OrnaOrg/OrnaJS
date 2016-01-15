
//alert("TEST OK!");
//------------------reverse-background-----------------------------
//reversebackground('id', 'url1', 'url2');
var backgroundstatus = 0;

function reversebackground(id, url1, url2) {
		if (backgroundstatus == 0) {
			$(id).css("background-image", 'url("' + url1 + '")');
			backgroundstatus = 1;
			return;
		}
		if (backgroundstatus == 1) {
			$(id).css("background-image", 'url("' + url2 + '")');
			backgroundstatus = 0;
		}
	}
	//--------------------reverseclass---------------------------
var classstatus = 0;

function reverseclass(id, classname1, classname2, listen) {
		if (listen) {
			if (classstatus == 0) {
				$(id).removeClass(classname1);
				$(id).addClass(classname2);
				classstatus = 1;
				createatom();
			} else if (classstatus == 1) {
				$(id).removeClass(classname2);
				$(id).addClass(classname1);
				classstatus = 0;
				createatom();
			}
		} else {
			$(id).removeClass(classname1);
			$(id).addClass(classname2);
			createatom();
		}
	}
	//--------------------------height-adaptive-------------------------------------
	//heightadaptive('id', screenwidth, heightmain, heightnew)
function heightadaptive(id, screenwidth, heightmain, heightnew) {
		setInterval(function() {
			if (screen.width < screenwidth || document.body.clientWidth < screenwidth) {
				$(id).css('height', heightnew + 'px');
			} else {
				$(id).css('height', heightmain + 'px');
			}
		}, 0);
	}
	//--------------------------width-adaptive-------------------------------------
	//heightadaptive('id', screenwidth, widthmain, widthnew)
function heightadaptive(id, screenwidth, widthmain, widthnew) {
		setInterval(function() {
			if (screen.width < screenwidth || document.body.clientWidth < screenwidth) {
				$(id).css('width', widthnew + 'px');
			} else {
				$(id).css('width', widthmain + 'px');
			}
		}, 0);
	}
	//alert("TEST OK!");
	//--------------------------timer-in-title--------------------------------------
	//titletimer();
function titletimer() {
		var hour = 0;
		var minute = 0;
		var second = 0;
		setInterval(function() {
			second++;
			if (second == 60) {
				minute++;
				second = 0;
			}
			if (minute == 60) {
				hour++;
				minute = 0;
			}
			document.title = hour + ":" + minute + ":" + second;
		}, 1000);
	}
	//--------------------------time-in-field-------------------------------------
	//time('id');
function time(id) {
		setInterval(function() {
			var now = new Date();
			var sec = now.getSeconds();
			var min = now.getMinutes();
			var hr = now.getHours();
			var field = document.getElementById(id);
			if (field) {
				document.getElementById(id).value = hr + ":" + min + ":" + sec;
			}
		}, 1000);
	}
	//-----------------------------progress-y----------------------------------------------
	//progressy('id', limitmin, limitmax, step, speed);
function progressy(id, limitmin, limitmax, step, speed) {
		var i = limitmin;
		var moveup = setInterval(function() {
			i += step;
			var risebar = document.getElementById(id);
			if (risebar) {
				risebar.style.height = +i + "px";
				if (i >= limitmax) {
					clearInterval(moveup);
					var movedown = setInterval(function() {
						i -= step;
						risebar.style.height = i + "px";
						if (i <= limitmin) {
							clearInterval(movedown);
							progressy(id, limitmin, limitmax, step, speed);
						}
					}, speed);
				}
			}
		}, speed);
	}
	//alert("TEST OK!");
	//-----------------------------progress-x----------------------------------------------
	//progressx('id', limitmin, limitmax, step, speed);
function progressx(id, limitmin, limitmax, step, speed) {
		var i = limitmin;
		var moveup = setInterval(function() {
			i += step;
			var risebar = document.getElementById(id);
			if (risebar) {
				risebar.style.width = +i + "px";
				if (i >= limitmax) {
					clearInterval(moveup);
					var movedown = setInterval(function() {
						i -= step;
						risebar.style.width = i + "px";
						if (i <= limitmin) {
							clearInterval(movedown);
							progressx(id, limitmin, limitmax, step, speed);
						}
					}, speed);
				}
			}
		}, speed);
	}
	//-----------------------livetext------------------------
	//livetext(['Hello World.', 'Live Text', 'Made with Love.'],'livetext',['tomato','rebeccapurple','lightblue']);
function livetext(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		var visible = true;
		var con = document.getElementById('console');
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id)
		target.setAttribute('style', 'color:' + colors[0])
		window.setInterval(function() {
			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerHTML = words[0].substring(0, letterCount)
				window.setTimeout(function() {
					var usedColor = colors.shift();
					colors.push(usedColor);
					var usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					target.setAttribute('style', 'color:' + colors[0])
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;
				window.setTimeout(function() {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount)
				letterCount += x;
			}
		}, 120)
	}
	//-----------------------------create-atom----------------------------------------------
	//createatom();
$(document).ready(function(){
createatom();    
});
function createatom() {
		var tag = [ 'div', 'body', 'form', 'p', 'button', 'img', 'input', 'a', 'ul', 'ol', 'li', 'select', 'option', 'span', 'table', 'main', 'nav', 'menu'];
		for (var i = 0; i !== tag.length; i++) {
			var tagsize = $(tag[i]).size();
			toall(tag[i], tagsize);
		}
		//------------------------------------  
		function toall(tag, tagsize) {
				for (var i = 0; i !== tagsize; i++) {
					var current = tag + ":eq(" + i + ")";
					addstyle(current);
				}
			}
			//---------------------------------    
		function addstyle(current) {
				var attr = $(current).attr('class').split(' ');
				for (var i = 0; i !== attr.length; i++) {
					var part = attr[i].split('_');
					$(current).css(part[0], part[1]);
				}
			}
			//---------------------------------    
	}
	//alert("TEST OK!");