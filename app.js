
// Selectors 
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly");
const title = document.querySelectorAll(".title"); 
const current = document.querySelectorAll(".current");
const last = document.querySelectorAll(".last");


function generate(i) {
    return titles_dict[i].timeframes.daily.current;
}

function generate2(i) {
    return titles_dict[i].timeframes.daily.previous;
}

function generate3(i) {
    return titles_dict[i].timeframes.weekly.current;
}

function generate4(i) {
    return titles_dict[i].timeframes.weekly.previous;
}

function generate5(i) {
    return titles_dict[i].timeframes.monthly.current;
}

function generate6(i) {
    return titles_dict[i].timeframes.monthly.previous;
}

// Event Listeners 
daily.addEventListener('click', () => {
    current.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `${generate(0)}hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `${generate(1)}hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `${generate(2)}hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `${generate(3)}hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `${generate(4)}hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `${generate(5)}hrs`;
        }
    });
    last.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `Last day - ${generate2(0)} hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `Last day - ${generate2(1)} hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `Last day - ${generate2(2)} hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `Last day - ${generate2(3)} hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `Last day - ${generate2(4)} hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `Last day - ${generate2(5)} hrs`;
        };
    });

})



weekly.addEventListener('click', () => {
    current.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `${generate3(0)}hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `${generate3(1)}hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `${generate3(2)}hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `${generate3(3)}hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `${generate3(4)}hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `${generate3(5)}hrs`;
        }
    });
    last.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `Last week - ${generate4(0)} hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `Last week - ${generate4(1)} hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `Last week - ${generate4(2)} hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `Last week - ${generate4(3)} hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `Last week - ${generate4(4)} hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `Last week - ${generate4(5)} hrs`;
        };
    });

})


monthly.addEventListener('click', () => {
    current.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `${generate5(0)}hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `${generate5(1)}hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `${generate5(2)}hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `${generate5(3)}hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `${generate5(4)}hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `${generate5(5)}hrs`;
        }
    });
    last.forEach((item) => {
        if (item.parentElement.classList.contains("work")) {
            item.textContent = `Last month - ${generate6(0)} hrs`;
        } else if (item.parentElement.classList.contains("study")) {
            item.textContent = `Last month - ${generate6(1)} hrs`;
        } else if (item.parentElement.classList.contains("play")) {
            item.textContent = `Last month - ${generate6(2)} hrs`;
        } else if (item.parentElement.classList.contains("exercise")) {
            item.textContent = `Last month - ${generate6(3)} hrs`;
        } else if (item.parentElement.classList.contains("social")) {
            item.textContent = `Last month - ${generate6(4)} hrs`;
        } else if (item.parentElement.classList.contains("self-care")) {
            item.textContent = `Last month - ${generate6(5)} hrs`;
        };
    });

})



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

    let titles_dict = JSON.parse(titles);

