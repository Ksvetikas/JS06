"use strict";

// Korteliu kurimo klase

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

// Korteles elementu kurimas reiksmiu priskyrimas

        for (let i = 0; i < 12; i++) {

          let tag = "";
          let element = "";
          let className = "";
          let fatherElement = "";
          let imageSrc = "";
          let imageAlt = "";
          let text = "";

          switch (i){
            case 0:
                tag = "div";
                className = ("card" + this.cardNumber);
                fatherElement = cardsContainer;
              break;
            case 1:
                tag = "img";
                className = ("photo");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
                imageSrc = this.profileImage;
                imageAlt = this.profileName;
              break;
            case 2:
                tag = "h4";
                className = ("name");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
                text = this.profileName;
              break;
            case 3:
                tag = "div";
                className = ("address");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
                text = this.address;
              break;
            case 4:
                tag = "img";
                className = ("locationLogo");
                fatherElement = document.getElementsByClassName("address")[this.cardNumber - 1];
                imageSrc = "https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_location-256.png";
                imageAlt = "location";
              break;
            case 5:
                tag = "div";
                className = ("About");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
                text = this.about;
              break;
            case 6:
                tag = "div";
                className = ("ConnectText");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
                text = "Get connected";
              break;
            case 7:
                tag = "div";
                className = ("SocLogoBox");
                fatherElement = document.getElementsByClassName("card" + this.cardNumber)[0];
              break;
            case 8:
                tag = "img";
                className = ("socialMediaLogo");
                fatherElement = document.getElementsByClassName("SocLogoBox")[this.cardNumber - 1];
                imageSrc = "https://cdn4.iconfinder.com/data/icons/black-icon-social-media/256/099304-facebook-logo.png";
                imageAlt = "fbLogo";
              break;
            case 9:
                tag = "img";
                className = ("socialMediaLogo");
                fatherElement = document.getElementsByClassName("SocLogoBox")[this.cardNumber - 1];
                imageSrc = "https://cdn4.iconfinder.com/data/icons/miu-social/60/twitter-social-media-256.png";
                imageAlt = "twLogo";
              break;
            case 10:
                tag = "img";
                className = ("socialMediaLogo");
                fatherElement = document.getElementsByClassName("SocLogoBox")[this.cardNumber - 1];
                imageSrc = "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/google_search_online_social_media-256.png";
                imageAlt = "gLogo";
              break;
            default:
                tag = "img";
                className = ("socialMediaLogo");
                fatherElement = document.getElementsByClassName("SocLogoBox")[this.cardNumber - 1];
                imageSrc = "https://cdn0.iconfinder.com/data/icons/social-media-2119/154/instagram-256.png";
                imageAlt = "instLogo";
          }

// Korteles elementu spausdinimas

          element = document.createElement(tag);
          element.className = className;

          if (imageSrc !== "") {
            element.src = imageSrc;
            element.alt = imageAlt;
          }

          if (text !== "") {
            element.innerText = text;
          }

          fatherElement.appendChild(element);
        }
    }
}
// Korteliu kurimo klases pabaiga


// Profiliu informacija

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

// korteliu spausdinimas

for (let i = 0; i < cardNumber; i++) {
    const card = new ProfileCard (i + 1, profileImage[i], names[i], addresses[i], profileAbout[i]);
    card.printCard();
}
