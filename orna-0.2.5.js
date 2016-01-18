//https://github.com/OrnaOrg/OrnaJS
//------------------reverse-background-----------------------------
//reversebackground('id', 'url1', 'url2');
//id = #id, .class, tag;
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
    //reverseclass('id', 'classname1', 'classname2', listen);
    //listen = true or false
    //id = #id, .class, tag;
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
    //heightadaptive('id', screenwidth, heightmain, heightnew);
    //id = #id, .class, tag;
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
    //widthadaptive('id', screenwidth, widthmain, widthnew);
function widthadaptive(id, screenwidth, widthmain, widthnew) {
        setInterval(function() {
            if (screen.width < screenwidth || document.body.clientWidth < screenwidth) {
                $(id).css('width', widthnew + 'px');
            } else {
                $(id).css('width', widthmain + 'px');
            }
        }, 0);
    }
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
    //id = #id, .class, tag;
function time(id) {
        setInterval(function() {
            var now = new Date();
            var sec = now.getSeconds();
            var min = now.getMinutes();
            var hr = now.getHours();
            var field = $(id);
            if (field) {
                field.val(hr + ":" + min + ":" + sec);
            }
        }, 1000);
    }
    //-----------------------------progress-y----------------------------------------------
    //progressy('id', limit, step, speed);
    //id = #id, .class, tag;
var yon = false;

function progressy(id, limit, step, speed) {
        if (yon == false) {
            yon = true;

            function progress(id, limit, step, speed) {
                var risebar = $(id);
                var currentheight = risebar.height();
                var i = 0;
                var moveup = setInterval(function() {
                    if (risebar) {
                        i += step;
                        risebar.height(currentheight + i);
                        if (i >= limit) {
                            clearInterval(moveup);
                            var movedown = setInterval(function() {
                                i -= step;
                                risebar.height(currentheight + i);
                                if (currentheight + i <= currentheight) {
                                    clearInterval(movedown);
                                    progress(id, limit, step, speed);
                                }
                            }, speed);
                        }
                    }
                }, speed);
            }
            progress(id, limit, step, speed);
        }
    }
    //-----------------------------progress-x----------------------------------------------
    //progressx('id', limit, step, speed);
    //id = #id, .class, tag;
var xon = false;

function progressx(id, limit, step, speed) {
        if (xon == false) {
            xon = true;

            function progress(id, limit, step, speed) {
                var risebar = $(id);
                var currentwidth = risebar.width();
                var i = 0;
                var moveup = setInterval(function() {
                    if (risebar) {
                        i += step;
                        risebar.width(currentwidth + i);
                        if (i >= limit) {
                            clearInterval(moveup);
                            var movedown = setInterval(function() {
                                i -= step;
                                risebar.width(currentwidth + i);
                                if (currentwidth + i <= currentwidth) {
                                    clearInterval(movedown);
                                    progress(id, limit, step, speed);
                                }
                            }, speed);
                        }
                    }
                }, speed);
            }
            progress(id, limit, step, speed);
        }
    }
    //-----------------------------create-atom----------------------------------------------
    //createatom();
$(document).ready(function() {
    createatom();
});

function createatom(current) {
    var tag = ['div', 'body', 'p', 'form', 'button', 'img', 'input', 'a', 'ul', 'ol', 'li', 'select', 'option', 'span', 'table', 'main', 'nav', 'menu', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'textarea', 'fieldset', 'header', 'footer', 'code', 'video', 'audio', 'aside', 'article', 'address', 'blockquote', 'label'];
    for (var i = 0; i !== tag.length; i++) {
        var tagsize = $(tag[i]).size();
        toall(tag[i], tagsize);
    }

    function toall(tag, tagsize) {
        for (var i = 0; i !== tagsize; i++) {
            var istag = $(tag).is(tag);
            if (istag == true) {
                var current = tag + ":eq(" + i + ")";
                stylefilter(current);
            }
        }
    }

    function stylefilter(current) {
        var attr = $(current).attr('class');
        var style;
        if (attr !== undefined) {
            style = attr.split(' ');
            for (var i = 0; i !== style.length; i++) {
                var part = style[i].split('_');
                var prop = part[0];
                var val = part[1];

                function extrastyle(part) {
                        $(current).css(part[0], part[1]);
                    }
                    /*---------Abbreviated-name----------------*/
                if (part[0] == "hideatom") {
                    break;
                } else if (part[0] == "rotate") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                } else if (part[0] == "scale") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                } else if (part[0] == "skew") {
                    if (val !== undefined) {
                        part[1] = part[0] + '(' + part[1] + ')';
                        part[0] = 'transform'
                        addstyle(part, val);
                    }
                }
                /*---------Molecules-scan------------------*/
                else if (part[0] == "box-shadow" || part[0] == "shadow") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class shadow or box-shadow need five value: shadow_0_0_20px_10px_black");
                        }
                        part[0] = "box-shadow";
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "text-shadow") {
                    if (val !== undefined) {
                        part[1] = part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class border need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-left") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class border-left need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-right") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class border-right need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-top") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class border-top need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-bottom") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hi! I'm Orna! Atomic class border-bottom need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "outline" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] == undefined || part[3] == undefined) {
                            alert("Hello! I'm Orna! Atomic class outline need three value: width, color, style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        addstyle(part, val);
                    }
                } else if (part[0] == "bg") {
                    if (val !== undefined) {
                        part[0] = 'background';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgc") {
                    if (val !== undefined) {
                        part[0] = 'background-color';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgp") {
                    if (val !== undefined) {
                        part[0] = 'background-position';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgr") {
                    if (val !== undefined) {
                        part[0] = 'background-repeat';
                        addstyle(part, val);
                    }
                } else if (part[0] == "bgi") {
                    if (val !== undefined) {
                        part[0] = 'background-image';
                        addstyle(part, val);
                    }
                } else if (part[0] == "transition") {
                    if (part[2] == undefined || part[3] == undefined || part[4] == undefined) {
                        alert("Hello! Atomic class transition need four value, like it: transition_all_0.5s_ease_2s");
                    }
                    if (val !== undefined) {
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4];
                        addstyle(part, val);
                    }
                }
                /*--------------Special-classes-------------------*/
                if (val == undefined) {
                    if (part[0] == "Arial" || part[0] == "arial") {
                        part[0] = 'font-family';
                        part[1] = 'Arial, sans-serif';
                        extrastyle(part);
                    } else if (part[0] == "Times" || part[0] == "TimesNewRoman") {
                        part[0] = 'font-family';
                        part[1] = '"Times New Roman", serif';
                        extrastyle(part);
                    } else if (part[0] == "center") {
                        part[0] = 'margin';
                        part[1] = 'auto';
                        extrastyle(part);
                    } else if (part[0] == "textincenter") {
                        part[0] = 'text-align';
                        part[1] = 'center';
                        extrastyle(part);
                    } else if (part[0] == "uppercase") {
                        part[0] = 'text-transform';
                        part[1] = 'uppercase';
                        extrastyle(part);
                    } else if (part[0] == "lowercase") {
                        part[0] = 'text-transform';
                        part[1] = 'lowercase';
                        extrastyle(part);
                    } else if (part[0] == "capitalize") {
                        part[0] = 'text-transform';
                        part[1] = 'capitalize';
                        extrastyle(part);
                    } else if (part[0] == "inlineblock") {
                        part[0] = 'display';
                        part[1] = 'inline-block';
                        extrastyle(part);
                    } else if (part[0] == "inline") {
                        part[0] = 'display';
                        part[1] = 'inline';
                        extrastyle(part);
                    } else if (part[0] == "block") {
                        part[0] = 'display';
                        part[1] = 'block';
                        extrastyle(part);
                    }
                }

                function addstyle(part, val) {
                    if (val !== undefined) {
                        if (part[2] == 'mouseover') {
                            $(current).on('mouseenter', function() {
                                $(current).css(part[0], part[1]);
                            });
                        } else if (part[2] == 'mouseout') {
                            $(current).on('mouseleave', function() {
                                $(current).css(part[0], part[1]);
                            });
                        } else if (part[2] == 'focus') {
                            $(current).on('focusin', function() {
                                $(current).css(part[0], part[1]);
                            });
                        } else if (part[2] == 'blur') {
                            $(current).on('focusout', function() {
                                $(current).css(part[0], part[1]);
                            });
                        } else if (part[2] == 'click') {
                            $(current).click(function() {
                                $(current).css(part[0], part[1]);
                            });
                        } else {
                            $(current).css(part[0], part[1]);
                        }
                    }
                }
                addstyle(part, val);
            }
        }
    }
}