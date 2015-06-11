function solve(params) {
    var valuesCount = parseInt(params[0]);
    var htmlCount = parseInt(params[valuesCount + 1]);
    var values = {};
    var i, valName, arrName, res, other,
        cur,
        result = '',
        sections = {};
    for (i = 1; i <= valuesCount; i += 1) {
        cur = params[i];
        cur = cur.split(":");
        if (cur[1] === "true") {
            cur[1] = true;
        } else if (cur[1] === "false") {
            cur[1] = false;
        } else if (cur[1].indexOf("," > -1)) {
            cur[1] = cur[1].split(",");
        }
        values[cur[0]] = cur[1];
    }
    i = valuesCount + 2;

    while (i <= htmlCount + valuesCount + 1) {
        if (params[i].indexOf("@section ") > -1) {

            var sName = params[i].match(/\s([A-Za-z]+)\s/g);
            sName = sName[0].trim();
            sections[sName] = '';
            i += 1;

            while (params[i].indexOf("}") < 0) {
                other = params[i].match(/@([A-Za-z]+)/g);
                if (other) {
                    other = other[0];
                    other = other.substring(1, other.length);
                    if (values[other]) {
                        params[i] = params[i].replace("@" + other, values[other]);
                        result += params[i] + '\n';
                    }

                }
                sections[sName] += params[i] + '\n';
                i += 1;

            }

        } else if (params[i].match(/[{}]/g) === null && params[i].match(/@/g) == null) {
            result += params[i] + '\n';

        } else if (params[i].indexOf("@@") > -1) {
            result += params[i] + '\n';
        } else if (params[i].indexOf("@") > -1) {


            if (params[i].indexOf("@if") > -1) {


                valName = params[i].match(/\(([A-Za-z]+)\)/g);
                valName = valName[0];
                valName = valName.substring(1, valName.length - 1);

                i += 1;
                while (params[i].indexOf("}") < 0) {
                    if (values[valName] === true) {
                        other = params[i].match(/@([A-Za-z]+)/g);
                        if (other) {
                            other = other[0];
                            other = other.substring(1, other.length);
                            if (values[other]) {
                                params[i] = params[i].replace("@" + other, values[other]);
                                result += params[i] + '\n';
                            }

                        }
                        result += params[i] + '\n';
                    }
                    i += 1;
                }

            } else if (params[i].indexOf("@renderSection") > -1) {
                valName = params[i].match(/\(['"]([A-Za-z]+)['"]\)/g);
                valName = valName[0];
                valName = valName.substring(2, valName.length - 2);
                result += sections[valName] + '\n';
            } else if (params[i].indexOf("@foreach") > -1) {


                valName = params[i].match(/var\s([A-Za-z]+)\s/g);
                valName = valName[0];
                valName = valName.substring(4, valName.length - 1);
                arrName = params[i].match(/in\s([A-Za-z]+)/g);
                arrName = arrName[0];
                arrName = arrName.substring(3, arrName.length);

                i += 1;
                var j = i;

                for (k = 0; k < values[arrName].length; k++) {
                    i = j;

                    while (params[i].indexOf("}") < 0) {

                        res = params[i].replace("@" + valName, values[arrName][k]);

                        other = params[i].match(/@([A-Za-z]+)/g);
                        if (other) {

                            other = other[0];
                            other = other.substring(1, other.length);
                            if (values[other]) {
                                res = params[i].replace("@" + other, values[other]);
                            }

                        }

                        result += res + '\n';
                        i += 1;
                    }
                }

            } else {
                other = params[i].match(/@([A-Za-z]+)/g);
                if (other) {
                    other = other[0];
                    other = other.substring(1, other.length);
                    if (values[other]) {
                        params[i] = params[i].replace("@" + other, values[other]);
                        result += params[i] + '\n';
                    }

                }
            }
        } else {
            result += params[i] + '\n';
        }
        i += 1;
    }

    //result = result.replace(/^\s*\n/gm, "")
    console.log(result);

}

var input = "6\n\
title:Telerik Academy\n\
showSubtitle:true\n\
subTitle:Free training\n\
showMarks:false\n\
marks:3,4,5,6\n\
students:Pesho,Gosho,Ivan\n\
42\n\
@section menu {\n\
<ul id='menu'>\n\
    <li>Home</li>\n\
    <li>About us</li>\n\
    </ul>\n\
}\n\
@section footer {\n\
<footer>\n\
    Copyright Telerik Academy 2014\n\
    </footer>\n\
}\n\
<!DOCTYPE html>\n\
<html>\n\
<head>\n\
<title>Telerik Academy</title>\n\
</head>\n\
<body>\n\
@renderSection('menu')\n\
\n\
<h1>@title</h1>\n\
@if (showSubtitle) {\n\
<h2>@subTitle</h2>\n\
    <div>@@JustNormalTextWithDoubleKliomba ;)</div>\n\
}\n\
\n\
<ul>\n\
@foreach (var student in students) {\n\
<li>\n\
                @student\n\
    </li>\n\
    <li>Multiline @title</li>\n\
}\n\
</ul>\n\
@if (showMarks) {\n\
<div>\n\
            @marks\n\
    </div>\n\
}\n\
\n\
@renderSection('footer')\n\
</body>\n\
</html>";

var params = input.split("\n");

solve(params);