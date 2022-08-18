const divRef = document.getElementById("flex_container");

fetch("https://randomuser.me/api/?results=30")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.results.length; i++) {
            const person = data.results[i];
            let sitterBox = document.createElement("div");
            sitterBox.className = "container";
            let coverPhoto = document.createElement("div");
            coverPhoto.className = "cover-photo";
            let profilePhoto = document.createElement("img");
            profilePhoto.src = person.picture.large;
            profilePhoto.className = "profile";
            let profileName = document.createElement("div");
            profileName.innerHTML = person.name.first + " " + person.name.last;
            profileName.className = "profile-name";
            let chatLink = document.createElement("a");
            chatLink.href = "chat.html";
            let msgBtn = document.createElement("button");
            msgBtn.innerHTML = "Message"
            msgBtn.className = "msg-btn";

            sitterBox.appendChild(coverPhoto);
            coverPhoto.appendChild(profilePhoto);
            sitterBox.appendChild(profileName);
            sitterBox.appendChild(chatLink);
            chatLink.appendChild(msgBtn);

            divRef.appendChild(sitterBox)
        }
    })