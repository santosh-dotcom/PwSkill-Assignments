function validateURL(url) {
    const regex =
        /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/gim;

        if(regex.test(url)) {
            console.log("The input url matches the condition");
        } else {
            console.log("The input url doesn't match the condition");
        }
}

validateURL("http://www.example.com");
validateURL("https://example.com");
validateURL("ftp://example.com");
validateURL("http://example");
validateURL("https://12345.com");