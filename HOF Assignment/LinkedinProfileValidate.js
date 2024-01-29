const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
const url = "https://www.linkedin.com/in/santosh-kumar-deo/";

if(regex.test(url)) {
    console.log("The input url is valid Linkedin Profile url.");
} else {
    console.log("The input url is not a valid Linkedin profile url.")
}