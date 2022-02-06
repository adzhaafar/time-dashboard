// Selectors 
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly");
const title = document.querySelectorAll(".title"); 
const current = document.querySelectorAll(".current");
const last = document.querySelectorAll(".last");



// Event Listeners 
daily.addEventListener('click', () => {
  helper('c', 'd', 'day');
  helper('l', 'd', 'day');
});

weekly.addEventListener('click', () => {
  helper('c', 'w', 'week');
  helper('l', 'w', 'week');
});

monthly.addEventListener('click', () => {
  helper('c', 'm', 'month');
  helper('l', 'm', 'month');
});
    


// Functions


// helper function
function helper(c_or_l, d_w_m, word) {
  if (c_or_l === "c") {      
    current.forEach((item) => {
      if (item.parentElement.classList.contains("work")) {
        item.textContent = `${generate(0, c_or_l, d_w_m)}hrs`;
      } else if (item.parentElement.classList.contains("study")) {
        item.textContent = `${generate(1, c_or_l, d_w_m)}hrs`;
      } else if (item.parentElement.classList.contains("play")) {
        item.textContent = `${generate(2, c_or_l, d_w_m)}hrs`;
      } else if (item.parentElement.classList.contains("exercise")) {
        item.textContent = `${generate(3, c_or_l, d_w_m)}hrs`;
      } else if (item.parentElement.classList.contains("social")) {
        item.textContent = `${generate(4, c_or_l, d_w_m)}hrs`;
      } else if (item.parentElement.classList.contains("self-care")) {
        item.textContent = `${generate(5, c_or_l, d_w_m)}hrs`
      }
    });
  } 
  
  else {
    last.forEach((item) => {
      if (item.parentElement.classList.contains("work")) {
        item.textContent = `Last ${word} - ${generate(0, c_or_l, d_w_m)} hrs`;
      } else if (item.parentElement.classList.contains("study")) {
        item.textContent = `Last ${word} - ${generate(1, c_or_l, d_w_m)} hrs`;
      } else if (item.parentElement.classList.contains("play")) {
        item.textContent = `Last ${word} - ${generate(2, c_or_l, d_w_m)} hrs`;
      } else if (item.parentElement.classList.contains("exercise")) {
        item.textContent = `Last ${word} - ${generate(3, c_or_l, d_w_m)} hrs`;
      } else if (item.parentElement.classList.contains("social")) {
        item.textContent = `Last ${word} - ${generate(4, c_or_l, d_w_m)} hrs`;
      } else if (item.parentElement.classList.contains("self-care")) {
        item.textContent = `Last ${word} - ${generate(5, c_or_l, d_w_m)} hrs`;
      };
    });
  }
}  

// Generate function
function generate(i, c_or_l, d_w_m) {
  if (c_or_l === "c" && d_w_m === "d") {
    return titles_dict[i].timeframes.daily.current
  } else if (c_or_l === "l" && d_w_m === "d") {
    return titles_dict[i].timeframes.daily.previous;
  } else if (c_or_l === "c" && d_w_m === "w") {
    return titles_dict[i].timeframes.weekly.current;
  } else if (c_or_l === "l" && d_w_m === "w") {
    return titles_dict[i].timeframes.weekly.previous;
  } else if (c_or_l === "c" && d_w_m === "m") {
    return titles_dict[i].timeframes.monthly.current;
  } else {
    return titles_dict[i].timeframes.monthly.previous;
  }
}


    // Json data
    let titles = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },

    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]`
// turn json data string into object
    let titles_dict = JSON.parse(titles);


