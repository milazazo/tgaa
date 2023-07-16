// Create the character array
function characterArray() {

    // Get data.csv and turn it into something readable
    fetch('data.csv')
    .then(response => response.text())
    .then(characterCsv => {

    // Read data.csv and create the array "characterArray" which creates objects for each rows in the array with these listed properties
    const rows = characterCsv.split('\n');
    const characterArray = rows.map(row => {
    const values = row.split(',');
    return {
        id: values[0],
        character: values[1],
        chibi: values[2],
        alt: values[3],
        artist: values[4],
        twitter: values[5],
        tumblr: values[6],
        instagram: values[7],
        website: values[8],
        websitename: values[9],
        description: values[10]
    };
    });
    console.log(characterArray);

    // Get the modal slides and create as many slides as there are rows in data.csv
    let slides = document.getElementById('slide-parent');
      
    for (let i = 0; i < characterArray.length; i++) {
        let slideDiv = document.createElement('div');
        slideDiv.className = 'slides';
        slides.appendChild(slideDiv);
    }


    // CHARACTER ARTWORK

    const charaArt = document.querySelectorAll(".chara-item");
    const slideBox = document.querySelectorAll(".slides");
    charaArt.forEach((box, index) => {
        box.innerHTML = `<img src="art/` + characterArray[index].artist.toLowerCase() +`.webp" onclick="openModal();currentSlide(`+ [index+1] +`)">`;
      });

    // SLIDE BOXES

    slideBox.forEach((box, index) => { // For each instance of the class ".slides" (slideBox)
        let description = ""; // Check if there's a description
        if (characterArray[index].hasOwnProperty("description")) {
            description += characterArray[index].description; // If there is a description, display it
        } else {
            description += ``;
        }

        let title = ""; 
        let chibiart = "";
        let art = ""; 
        if (characterArray[index].chibi !== '') {
            if (characterArray[index].alt !== '') { // Chibi + alt art --> chibi in title, chibi art, alternate art
                title += characterArray[index].character + " and " + characterArray[index].chibi;
                art += `<div class="double-img"><img src="art/`+ characterArray[index].artist.toLowerCase() +`.webp" class="modal-img1"> <img src="art/`+ characterArray[index].artist.toLowerCase() +`-2.webp" class="modal-img2"><img src="art/`+ characterArray[index].artist.toLowerCase() +`-sm.webp" class="chibi-img" id="modal-chibi-`+ characterArray[index].artist.toLowerCase() +`"></div>`
            }
            else{ // Chibi + no alt art --> chibi in title, chibi art
                title += characterArray[index].character + " and " + characterArray[index].chibi;
                art += `<div class="solo-img"><img src="art/`+ characterArray[index].artist.toLowerCase() +`.webp" class="modal-img"><img src="art/`+ characterArray[index].artist.toLowerCase() +`-sm.webp" class="chibi-img" id="modal-chibi-`+ characterArray[index].artist.toLowerCase() +`"></div>`;
            }
        } else {
            if (characterArray[index].alt !== '') { // No chibi + alt art --> default title, alternate art
                title += characterArray[index].character;
                art += `<div class="double-img"><img src="art/`+ characterArray[index].artist.toLowerCase() +`.webp" class="modal-img1"> <img src="art/`+ characterArray[index].artist.toLowerCase() +`-2.webp" class="modal-img2"></div>`
            }
            else { // No chibi + no alt art --> default title, nothing else
                title += characterArray[index].character;
                art += `<div class="solo-img"><img src="art/`+ characterArray[index].artist.toLowerCase() +`.webp" class="modal-img"></div>`;
            }
        }

        let twitter = ""; // Check if there's a Twitter
        if (characterArray[index].twitter !== '') {
            twitter += `<a href="https://www.twitter.com/${characterArray[index].twitter}"><div class="soclink twitter">${characterArray[index].twitter}</div></a>`; // If there is a Twitter, display it
        } else {
            twitter += ``;
        }
    
        let tumblr = ""; // Check if there's a Tumblr
        if (characterArray[index].tumblr !== '') {
            tumblr += `<a href="https://${characterArray[index].tumblr}.tumblr.com/"><div class="soclink tumblr">${characterArray[index].tumblr}</div></a>`; // If there is a Tumblr, display it
        } else {
            tumblr += ``;
        }
    
        let instagram = ""; // Check if there's a Instagram
        if (characterArray[index].instagram !== '') {
            instagram += `<a href="https://www.instagram.com/${characterArray[index].instagram}"><div class="soclink instagram">${characterArray[index].instagram}</div></a>`; // If there is a Instagram, display it
        } else {
            instagram += ``;
        }
    
        let website = ""; // Check if there's a website
        if (characterArray[index].website !== '') {
            website += `<a href="${characterArray[index].website}"><div class="soclink website">${characterArray[index].websitename}</div></a>`; // If there is a website, display it
        } else {
            website += ``;
        }

        box.innerHTML = 
        art + `<div class="modal-textbox"><div class="modal-title"> <div class="chara-title">` + title + `</div> / `+ characterArray[index].artist + `</div><div class="comment">` + description + `</div></div><div class="soclink-box">` + twitter + tumblr + instagram + website + `</div>`;
      });

    for (let i = 1; i < 4; i++) {
        var randomCat = Math.floor(Math.random()*slideBox.length);
        console.log("kitty " + i + " can be found at: " + randomCat);
        const catBox = slideBox[randomCat];
        let randomCathtml = `<div class="secret-kitty" id="cat` + i + `" onclick="kittyFound(` + i + `)"><img src="art/cat`+ i +`.png"></div>`
        catBox.innerHTML += randomCathtml;
      }
    });

      return;
    }

    function artistListing() {

            // Get data.csv and turn it into something readable
    fetch('data.csv')
    .then(response => response.text())
    .then(characterCsv => {

    // Read data.csv and create the array "characterArray" which creates objects for each rows in the array with these listed properties
    const rows = characterCsv.split('\n');
    const characterArray = rows.map(row => {
    const values = row.split(',');
    return {
        id: values[0],
        character: values[1],
        chibi: values[2],
        alt: values[3],
        artist: values[4],
        twitter: values[5],
        tumblr: values[6],
        instagram: values[7],
        website: values[8],
        websitename: values[9],
        description: values[10]
    };
    });
    console.log(characterArray);

        // Get the artist list and create as many rows as there are rows in data.csv
        let artists = document.getElementById('artists-parent');
        
        for (let i = 0; i < characterArray.length; i++) {
            let artistsDiv = document.createElement('div');
            artistsDiv.className = 'artist';
            artists.appendChild(artistsDiv);
        }

        // ARTIST LIST
        const artistList = document.querySelectorAll(".artist");
        artistList.forEach((box, index) => {
          let twitter = ""; // Check if there's a Twitter
          if (characterArray[index].twitter !== '') {
              twitter += `<a href="https://www.twitter.com/${characterArray[index].twitter}"><div class="soclink twitter">${characterArray[index].twitter}</div></a>`; // If there is a Twitter, display it
          } else {
              twitter += ``;
          }  
      
          let tumblr = ""; // Check if there's a Tumblr
          if (characterArray[index].tumblr !== '') {
              tumblr += `<a href="https://${characterArray[index].tumblr}.tumblr.com/"><div class="soclink tumblr">${characterArray[index].tumblr}</div></a>`; // If there is a Tumblr, display it
          } else {
              tumblr += ``;
          }
      
          let instagram = ""; // Check if there's a Instagram
          if (characterArray[index].instagram !== '') {
              instagram += `<a href="https://www.instagram.com/${characterArray[index].instagram}"><div class="soclink instagram">${characterArray[index].instagram}</div></a>`; // If there is a Instagram, display it
          } else {
              instagram += ``;
          }
      
          let website = ""; // Check if there's a website
          if (characterArray[index].website !== '') {
              website += `<a href="${characterArray[index].website}"><div class="soclink website">${characterArray[index].websitename}</div></a>`; // If there is a website, display it
          } else {
              website += ``;
          }
          box.innerHTML = 
          characterArray[index].artist + ` (`+ characterArray[index].character + `)   <div class="soclink-box artist-list">`+ twitter + tumblr + instagram + website + `</div>`;
        });   

    });
        return;
    }
    
// Open the Modal
function openMenu() {
    document.getElementById("menupopup").style.display = "block";
  }
  
  // Close the Modal
  function closeMenu() {
    document.getElementById("menupopup").style.display = "none";
  }

  function openKitties() {
    document.getElementById("kittypopup").style.display = "block";
  }
  
  // Close the Modal
  function closeKitties() {
    document.getElementById("kittypopup").style.display = "none";
  }

var cats = 0;
var firstCatFound = 0; var secondCatFound = 0; var thirdCatFound = 0;
const congrats = document.getElementById('congrats');
const wagahai = document.getElementById('wagahai');

function kittyFound(n) {
    document.getElementById("cat-icon" + n).style.display = "inline-block";
    document.getElementById("modal-cat" + n).style.display = "inline-block";
    document.getElementById("cat" + n).style.display = "none";
    cats = cats + 1;
    console.log("number of cats found: " + cats);
    if (cats == 3){
        console.log("you found all the cats :D");
        congrats.innerHTML = "Congratulations, you found all of Wagahai's kittens!"
        wagahai.innerHTML = "<b>Wagahai says:</b> Meow meow meow! (Thanks for finding my kittens!)"
    }
}
