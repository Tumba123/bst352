function taskDone(checkbox) {
    if (checkbox.checked) {
      checkbox.parentNode.style.backgroundColor = "#c3e6cb";
    } else {
      checkbox.parentNode.style.backgroundColor = "";
    }
  }
  function tickColumn(columnIndex) {
    // Get the checkbox in the column select row for the given column
    var selectCheckbox = document.querySelector('tbody tr:last-child td:nth-child(' + columnIndex.toString() + ') input[type="checkbox"]');
    
    // Get all checkboxes in the given column
    var checkboxes = document.querySelectorAll('tbody tr:not(:last-child) td:nth-child(' + columnIndex.toString() + ') input[type="checkbox"]');
    
    // Set the "checked" property of the checkboxes to match the state of the column select checkbox
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = selectCheckbox.checked;
      if (selectCheckbox.checked) {
        checkboxes[i].parentNode.style.backgroundColor = "#c3e6cb";
      } else {
        checkboxes[i].parentNode.style.backgroundColor = "";
      }
    }
  }
        // JavaScript code to get and display week number
        Date.prototype.getWeek = function() {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
          };
          window.onload = function() {
              var today = new Date();
              var weekNumber = today.getWeek();
              document.getElementById("week-number").innerHTML = " " + weekNumber;
          };

function taskDone(checkbox) {
    if (checkbox.checked) {
      checkbox.parentNode.style.backgroundColor = "#c3e6cb";
    } else {
      checkbox.parentNode.style.backgroundColor = "";
    }
  }
  function tickColumn(columnIndex) {
    // Get the checkbox in the column select row for the given column
    var selectCheckbox = document.querySelector('tbody tr:last-child td:nth-child(' + columnIndex.toString() + ') input[type="checkbox"]');
    
    // Get all checkboxes in the given column
    var checkboxes = document.querySelectorAll('tbody tr:not(:last-child) td:nth-child(' + columnIndex.toString() + ') input[type="checkbox"]');
    
    // Set the "checked" property of the checkboxes to match the state of the column select checkbox
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = selectCheckbox.checked;
      if (selectCheckbox.checked) {
        checkboxes[i].parentNode.style.backgroundColor = "#c3e6cb";
      } else {
        checkboxes[i].parentNode.style.backgroundColor = "";
      }
    }
  }
        // JavaScript code to get and display week number
        Date.prototype.getWeek = function() {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
          };
          window.onload = function() {
              var today = new Date();
              var weekNumber = today.getWeek();
              document.getElementById("week-number").innerHTML = " " + weekNumber;
          };

// Save function --->>
function getCheckboxStates() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const checkboxStates = {};

  checkboxes.forEach(function (checkbox) {
    checkboxStates[checkbox.id] = checkbox.checked;
  });

  return checkboxStates;
}

function save() {
  const checkboxStates = getCheckboxStates();
  localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

function load() {
  const storedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates'));

  if (storedCheckboxStates !== null) {
    for (const id in storedCheckboxStates) {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = storedCheckboxStates[id];
      }
    }
  }
}

function wipe() {
  location.reload();
  localStorage.clear();
}

load();
