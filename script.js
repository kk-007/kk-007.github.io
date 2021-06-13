var toggle = document.querySelector('input[name="toggle"]');
var socialImg = document.querySelector("#social_img");
var themeStyle = document.getElementById("theme-style");

const darkThemeFile = "default.css";
const lightThemeFile = "light.css";
const darkImgUrl =
    "https://github-readme-stats.vercel.app/api?username=kk-007&&show_icons=true&title_color=eeeeee&icon_color=fff&text_color=eeeeee&bg_color=164d56";
const lightImgUrl =
    "https://github-readme-stats.vercel.app/api?username=kk-007&&show_icons=true&title_color=000000&icon_color=000000&text_color=000000&bg_color=eaeaea";

const changeTheme = () => {
    themeStyle.href = toggle.checked ? darkThemeFile : lightThemeFile;
    socialImg.src = toggle.checked ? darkImgUrl : lightImgUrl;
};

const contactForm = document.forms["contact-form"];
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
        from: contactForm.from.value,
        title: contactForm.title.value,
        email: contactForm.email.value,
        body: contactForm.body.value,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(payload);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        "https://contact-us-msg-api.herokuapp.com/api/message",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => alert("Message sent successfully"))
        .catch((error) => console.log("error", error));
});
