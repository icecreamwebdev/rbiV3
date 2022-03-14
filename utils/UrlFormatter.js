export default function URLFormatter(url) {

    const newURL = url.replace(/\s+/g, '-').toLowerCase()


    return newURL

}

export function urlResverseFormatter(url){

    const newURL = url.replace(/-/g, ' ');

    const anotherURL = newURL.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    return anotherURL
}

export function urlLowerFormatter(url){

    const newURL = url.replace(/-/g, ' ');
    
    return newURL.toLowerCase()

}


export function fileNameFormatter(url){

    let tempUrl = url
    tempUrl = tempUrl.substring(1)


    if (tempUrl == '/'){
        return urlLowerFormatter(tempUrl)
    } else if(tempUrl == 'casestudies'){
        return 'case studies'
    }

    return urlLowerFormatter(tempUrl)

}

