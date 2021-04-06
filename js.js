"use strict";

class ProfileCard {

    constructor(cardNumber, profileImage, profileName, address, about){
        this.cardNumber = cardNumber;
        this.profileImage = profileImage;
        this.profileName = profileName;
        this.address = address;
        this.about = about;
    }

    printCard () {

        const cardsContainer = document.getElementsByClassName("cardsContainer")[0];

        const card = document.createElement("div");
        card.classList.add('card' + this.cardNumber);
        cardsContainer.appendChild(card);

            const profileImage = document.createElement('img');
            profileImage.className = "photo";
            profileImage.src = this.profileImage;
            profileImage.alt = this.profileName;
            card.appendChild(profileImage);

            const name = document.createElement('h4');
            name.classList.add('name');
            name.innerText = this.profileName;
            card.appendChild(name);


            const div1 = document.createElement('div');
            div1.classList.add('address');

                    const locationLogo = document.createElement('img');
                    locationLogo.className = "locationLogo";
                    locationLogo.src = "https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_location-256.png";
                    locationLogo.alt = "location";
                    div1.appendChild(locationLogo);

            div1.innerText = this.address;
            card.appendChild(div1);

            const div2 = document.createElement('div');
            div2.className = "About";
            div2.innerText = this.about;
            card.appendChild(div2);

            const div3 = document.createElement('div');
            div3.className = "ConnectText";
            div3.innerText = "Get connected";
            card.appendChild(div3);


            const div4 = document.createElement('div');
            div4.className = "SocLogoBox";


                    const socLogo1 = document.createElement('img');
                    socLogo1.className = "socialMediaLogo";
                    socLogo1.src = "https://cdn4.iconfinder.com/data/icons/black-icon-social-media/256/099304-facebook-logo.png";
                    socLogo1.alt = "fbLogo";
                    div4.appendChild(socLogo1);

                    const socLogo2 = document.createElement('img');
                    socLogo2.className = "socialMediaLogo";
                    socLogo2.src = "https://cdn4.iconfinder.com/data/icons/miu-social/60/twitter-social-media-256.png";
                    socLogo2.alt = "twLogo";
                    div4.appendChild(socLogo2);

                    const socLogo3 = document.createElement('img');
                    socLogo3.className = "socialMediaLogo";
                    socLogo3.src = "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/google_search_online_social_media-256.png";
                    socLogo3.alt = "gLogo";
                    div4.appendChild(socLogo3);

                    const socLogo4 = document.createElement('img');
                    socLogo4.className = "socialMediaLogo";
                    socLogo4.src = "https://cdn0.iconfinder.com/data/icons/social-media-2119/154/instagram-256.png";
                    socLogo4.alt = "instLogo";
                    div4.appendChild(socLogo4);

            card.appendChild(div4);
    }
}

const profileImage = [];
profileImage[0] = "profile-images/51.jpg";
profileImage[1] = "profile-images/16.jpg";
profileImage[2] = "profile-images/17.jpg";
profileImage[3] = "profile-images/46.jpg";
profileImage[4] = "profile-images/34.jpg";
profileImage[5] = "profile-images/55.jpg";
profileImage[6] = "profile-images/21.jpg";
profileImage[7] = "profile-images/23.jpg";

const names = [];
names[0] = "Robert Langdon";
names[1] = "Deanna I Martin";
names[2] = "Sammy M Stoll";
names[3] = "James C Young";
names[4] = "Claudette G Hann";
names[5] = "Bruce K Collins";
names[6] = "Amber C Pantoja";
names[7] = "Adriana E Hubert";

const addresses = [];
addresses[0] = " 15 Eagle Way. AL10 8RD";
addresses[1] = " Worthington, Ohio(OH), 43085";
addresses[2] = " Wellsville, New York(NY), 14895";
addresses[3] = " 2597 Meadowbrook Mall Road";
addresses[4] = " Philadelphia, Pennsylvania(PA), 19108";
addresses[5] = " Westhampton Beach, New York(NY), 11978";
addresses[6] = " Nashville, Tennessee(TN), 37209";
addresses[7] = " Burlington, North Carolina(NC), 27215";

const profileAbout = [];
profileAbout[0] = "Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.";
profileAbout[1] = "Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.";
profileAbout[2] = "Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.";
profileAbout[3] = "Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.";
profileAbout[4] = "Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.";
profileAbout[5] = "Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.";
profileAbout[6] = "Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.";
profileAbout[7] = "Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.";

const cardNumber = 8;

// Puslapio turinio spausdinimas

const body = document.getElementsByTagName('body')[0];

const title = document.createElement('h1');
title.innerText = "Find. Connect. Enjoy.";
body.appendChild(title);

const pText = document.createElement('p');
pText.innerText = "new way to meet people";
body.appendChild(pText);

const container = document.createElement('div');
container.className = "cardsContainer";
body.appendChild(container);


for (let i = 0; i < cardNumber; i++) {
    const card = new ProfileCard (i + 1, profileImage[i], names[i], addresses[i], profileAbout[i]);
    card.printCard();
}
