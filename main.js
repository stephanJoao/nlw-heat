const social_media = {
    github:    "stephanJoao",
    instagram: "stephan_joao",
    twitter:   "stephan_joao",
    facebook:  "joao.stephansilvamauricio",
    youtube:   "channel/UC7aIhk8wTspxXraUwhaTTkA"
}             

function change_social_media() {
    for(let li of social_media_links.children) {
        const social = li.getAttribute("class");
        // Works, but there is a cooler way of doing that
        //li.children[0].href = "https://www." + social + ".com/channel/UC7aIhk8wTspxXraUwhaTTkA";

        // THAT'S A IMPORTANT PIECE OF CODE!!!!
        li.children[0].href = `https://www.${social}.com/${social_media[social]}`;  
    }
}

change_social_media();

function get_github_infos() {
    const url = `https://api.github.com/users/${social_media.github}`;

    // Arrow function
    /*
        function name(argument) { }

        ==

        argument => { }
    */
    // response = response received from fetch and promise
    fetch(url)
    // converts the response to .json
    .then(response => response.json())
    .then(data => {
        user_name.textContent = data.name;
        user_url.href = data.html_url;
        // used span in html to have two children and not erase imagem
        // can be: user_login.textContent = data.login; 
        user_url.children[1].textContent = data.login;
        user_bio.textContent = data.bio;
        user_avatar.src = data.avatar_url;
    });
    

}

get_github_infos();