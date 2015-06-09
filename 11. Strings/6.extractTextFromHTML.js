"use strict";

/**
 * ### Problem 6. Extract text from HTML
 *	Write a function that extracts the content of a html page given as text.
 *	The function should return anything that is in a tag, without the tags.
 */

var extractText = function(str){
    str = str.replace(/(<[a-zA-Z]+>|<\/[a-zA-Z]+>)/gm,"");
    str = str.replace(/(\r\n|\n|\r|\s\s+)/gm,"");
    console.log(str);
};

var str = "	<html>\
                <head>\
                    <title>Sample site</title>\
                </head>\
                <body>\
                    <div>text\
                        <div>more text</div>\
                        and more...\
                    </div>\
                    in body\
                </body>\
            </html>";

extractText(str);