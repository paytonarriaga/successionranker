// List of characters with image paths
let characters = {
  'Caroline': 'Caroline.png',
  'Colin': 'Colin.png',
  'Comfry': 'Comfry.png',
  'Connor': 'Connor.png',
  'Cyd': 'Cyd.png',
  'Dawrin': 'Dawrin.png',
  'Ebba': 'Ebba.png',
  'Ewan': 'Ewan.png',
  'Frank': 'Frank.png',
  'Gerri': 'Gerri.png',
  'Gil': 'Gil.png',
  'Greg': 'Greg.png',
  'Hugo': 'Hugo.png',
  'Iverson': 'Iverson.png',
  'Jamie': 'Jamie.png',
  'Jeryd': 'Jeryd.png',
  'Jess': 'Jess.png',
  'Karl': 'Karl.png',
  'Karolina': 'Karolina.png',
  'Kerry': 'Kerry.png',
  'Kendall': 'Kendall.png',
  'Lawrence': 'Lawrence.png',
  'Logan': 'Logan.png',
  'Lukas': 'Lukas.png',
  'Marcia': 'Marcia.png',
  'Nan': 'Nan.png',
  'Naomi': 'Naomi.png',
  'Nate': 'Nate.png',
  'Oskar': 'Oskar.png',
  'Rava': 'Rava.png',
  'Rhea': 'Rhea.png',
  'Roman': 'Roman.png',
  'Sandy': 'Sandy.png',
  'Siobhan': 'Siobhan.png',
  'Sophie': 'Sophie.png',
  'Stewy': 'Stewy.png',
  'Tabitha': 'Tabitha.png',
  'Tom': 'Tom.png',
  'Willa': 'Willa.png'
};

// Placeholder for user's selected characters
let selectedCharacters = new Array(15).fill(null);

window.onload = function () {
  let selectionArea = document.getElementById('selectionArea');
  let displayArea = document.getElementById('displayArea');

  // Create dropdowns for character selection
  for (let i = 0; i < 15; i++) {
    let select = document.createElement('select');
    select.id = `char${i}`;
    select.innerHTML = `<option disabled selected value>Select character ${i + 1}</option>`;
    for (let char in characters) {
      select.innerHTML += `<option value="${char}">${char}</option>`;
    }
    select.addEventListener('change', () => {
      let selectedCharacter = select.value;
      if (selectedCharacters.includes(selectedCharacter)) {
        // Character already selected in another slot, reset the selection
        select.value = '';
        selectedCharacter = null;
      } else {
        // Disable the selected character option in other dropdowns
        disableCharacterOption(selectedCharacter);
      }
      selectedCharacters[i] = selectedCharacter;
      updateDisplay();
    });
    selectionArea.appendChild(select);
  }

  // Function to disable the selected character option in other dropdowns
  function disableCharacterOption(character) {
    let selects = document.getElementsByTagName('select');
    for (let i = 0; i < selects.length; i++) {
      let options = selects[i].getElementsByTagName('option');
      for (let j = 0; j < options.length; j++) {
        if (options[j].value === character) {
          options[j].disabled = true;
        }
      }
    }
  }

  // Function to update the display area
  function updateDisplay() {
    displayArea.innerHTML = '';
    selectedCharacters.forEach((char, i) => {
      let charDiv = document.createElement('div');
      charDiv.classList.add('char-div');
      if (char) {
        charDiv.innerHTML = `
          <img src="${characters[char]}" alt="${char}">
          <div class="char-name">${i + 1}. ${char}</div>
        `;
      } else {
        charDiv.innerHTML = `
          <div style="width: 100px; height: 100px; border: 1px solid #ccc;"></div>
          <div class="char-name">${i + 1}</div>
        `;
      }
      displayArea.appendChild(charDiv);
    });
  }

  // Initial display update
  updateDisplay();
};
