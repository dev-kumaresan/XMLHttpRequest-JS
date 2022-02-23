const apiURL = "js\sample.json";
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else {
        console.log("something wrong");
    }
}
xhr.open("GET", apiURL);
xhr.send();
