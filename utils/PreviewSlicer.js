import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";




export default function PreviewSlicer(caption) {

    var yourString = caption; //replace with your string.
    var maxLength = 70 // maximum number of characters to extract
    
    //trim the string to the maximum length
    var trimmedString = yourString.substr(0, maxLength);
    
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

    if (trimmedString.length > 10) {

       return (trimmedString + ' ...')

    }
    return (trimmedString);

}