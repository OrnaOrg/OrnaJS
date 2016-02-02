//https://github.com/OrnaOrg/OrnaJS
    //-----------------------------create-atom----------------------------------------------
    //createatom();
$(document).ready(function() {
    createatom();
});

function createatom(id) {
    if (id === undefined) {
        var tag = ['div', 'body', 'p', 'form', 'button', 'img', 'input', 'a', 'ul', 'ol', 'li', 'select', 'option', 'span', 'table', 'td', 'tr', 'main', 'nav', 'menu', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'textarea', 'fieldset', 'header', 'footer', 'code', 'video', 'audio', 'aside', 'article', 'address', 'blockquote', 'label'];

        function toall(tag, tagsize) {
            for (var i = 0; i !== tagsize; i++) {
                var istag = $(tag).is(tag);
                if (istag === true) {
                    var current = tag + ":eq(" + i + ")";
                    stylefilter(current);
                }
            }
        }
        for (var i = 0; i !== tag.length; i++) {
            var tagsize = $(tag[i]).size();
            toall(tag[i], tagsize);
        }
    } else {
        stylefilter(id);
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

                function addstyle(part, val) {
                    if (val !== undefined) {
                        if (part[2] === undefined) {
                            $(current).css(part[0], part[1]);
                        } else if (part[2] !== undefined && part[3] === undefined) {
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
                                $(current + ' ' + part[2]).css(part[0], part[1]);
                            }
                        } else if (part[2] !== undefined && part[3] !== undefined) {
                            if (part[2] == 'mouseover') {
                                $(current + ' ' + part[3]).on('mouseenter', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'mouseout') {
                                $(current + ' ' + part[3]).on('mouseleave', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'focus') {
                                $(current + ' ' + part[3]).on('focusin', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'blur') {
                                $(current + ' ' + part[3]).on('focusout', function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            } else if (part[2] == 'click') {
                                $(current + ' ' + part[3]).click(function() {
                                    $(current + ' ' + part[3]).css(part[0], part[1]);
                                });
                            }
                        }
                    }
                }
                if (part[0] == "hideatom") {
                    break;
                }
                /*---------Abbreviated-name-&-Molecules-scan--------*/
                else if (part[0] == "rotate") {
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
                } else if (part[0] == "box-shadow" || part[0] == "shadow") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class shadow or box-shadow need five value: shadow_0_0_20px_10px_black");
                        }
                        part[0] = "box-shadow";
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        if (part[6] !== undefined) {
                            part[2] = part[6];
                            if (part[7] !== undefined) {
                                part[3] = part[7];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        delete part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "text-shadow") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class text-shadow need five value: text-shadow_0_0_20px_10px_black");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5];
                        if (part[6] !== undefined) {
                            part[2] = part[6];
                            if (part[7] !== undefined) {
                                part[3] = part[7];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        delete part[5];
                        addstyle(part, val);
                    }
                } else if (part[0] == "border" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-left") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-left need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-right") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-right need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-top") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-top need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "border-bottom") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hi! I'm Orna! Atomic class border-bottom need three value width, color and style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        if (part[4] !== undefined) {
                            part[2] = part[4];
                            if (part[5] !== undefined) {
                                part[3] = part[5];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        addstyle(part, val);
                    }
                } else if (part[0] == "outline" && val !== "none") {
                    if (val !== undefined) {
                        if (part[2] === undefined || part[3] === undefined) {
                            alert("Hello! I'm Orna! Atomic class outline need three value: width, color, style");
                        }
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3];
                        delete part[2];
                        delete part[3];
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
                } else if (part[0] == "bgr") {
                    if (val !== undefined) {
                        part[0] = 'background-repeat';
                        addstyle(part, val);
                    }
                } else if (part[0] == "transition" || part[0] == "tran") {
                    if (part[2] === undefined || part[3] === undefined || part[4] === undefined) {
                        alert("Hello! Atomic class transition need four value, like it: transition_all_1s_ease_0.5s");
                    }
                    if (val !== undefined) {
                        part[0] = 'transition';
                        part[1] = part[1] + ' ' + part[2] + ' ' + part[3] + ' ' + part[4];
                        if (part[5] !== undefined) {
                            part[2] = part[5];
                            if (part[6] !== undefined) {
                                part[3] = part[6];
                            } else {
                                delete part[3];
                            }
                        } else {
                            delete part[2];
                        }
                        delete part[4];
                        addstyle(part, val);
                    }
                } else {
                    addstyle(part, val);
                }
                /*------------------Special-classes---------------*/
                if (part[0] == "Arial" || part[0] == "arial") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'font-family';
                    part[1] = 'Arial, sans-serif';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "Times" || part[0] == "TimesNewRoman") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'font-family';
                    part[1] = '"Times New Roman", serif';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "center") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'margin';
                    part[1] = 'auto';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "textincenter") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-align';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "uppercase") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'uppercase';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "lowercase") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'lowercase';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "capitalize") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'text-transform';
                    part[1] = 'capitalize';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "inlineblock") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'inline-block';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "inline") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'inline';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "block") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'block';
                    val = part[1];
                    addstyle(part, val);
                }
                /*---flexbox---*/
                else if (part[0] == "flexstart-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'flex-start';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexcenter-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexend-") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'flex-end';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "spacebetween") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'space-between';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "spacearound") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'justify-content';
                    part[1] = 'space-around';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexstart|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'flex-start';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexcenter|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'center';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "flexend|") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'flex-end';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "baseline") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'baseline';
                    val = part[1];
                    addstyle(part, val);
                } else if (part[0] == "stretch") {
                    if (part[1] !== undefined) {
                        if (part[2] !== undefined) {
                            part[3] = part[2];
                            part[2] = part[1];
                        } else {
                            part[2] = part[1];
                        }
                    }
                    part[0] = 'display';
                    part[1] = 'flex';
                    val = part[1];
                    addstyle(part, val);
                    part[0] = 'align-items';
                    part[1] = 'stretch';
                    val = part[1];
                    addstyle(part, val);
                }
            }
        }
    }
}