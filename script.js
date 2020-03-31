// Filter alleen de FILMS uit db (series verwijderen)
const moviesOnly = db.Movies.filter(function (el) {
    return (el.Type === 'movie')
})
// console.log(moviesOnly); // werkt

// ----------| RADIO BUTTONS TBV FILTER |----------
const radioButtons = radio.button.filter(function (el) {
    return (el.type === 'radio')
})
// console.log(radioButtons); // werkt

// REFERENCE UL OUTPUTLIST:
const radioList = document.getElementById('radios')
// console.log(radioList); // werkt

const addRadiosTodom = radioButtons.forEach(function (n) {
    const input = document.createElement('input')
    input.id = n.id
    input.name = 'navradio'
    input.value = ''
    input.type = 'radio'
    const label = document.createElement('label')
    label.className = 'radio label'
    label.innerHTML = n.label
    // push to DOM
    radioList.appendChild(input)
    radioList.appendChild(label)
})

// FILTER functie om films te zoeken:
const filteredTitles = function (searchFor) {
    switch (searchFor) {
        case 'Avengers':
        case 'X-Men':
        case 'Princess':
        case 'Batman':
            return moviesOnly.filter(function (el) {
                if (el.Title.includes(searchFor)) {
                    return el.Title
                }
            })
            break;
        default:
            // geen naam in de titel, dus de nieuwste films
            return moviesOnly.filter(function (el) {
                return el.Year >= '2014'
            })

    } // ! switch brace
} // ! function searchFor


// REFERENCE UL OUTPUTLIST:
const movieList = document.getElementById('outputList') // reference naar de UL
// console.log(movieList)

// Lijst met films leegmaken:
const emptyList = function () {
    movieList.querySelectorAll('li').forEach(n => n.remove())
}

// Films toevoegen aan DOM in ul>li
const addMoviesTodom = function (selectedCollection) {
    selectedCollection.forEach(function (n) {
        // EERST zorgen dat de lijst weer LEEG is -> gebeurt in radiobuttons onchange
        // Dan lijst vullen met geselecteerde filter
        // li
        const li = document.createElement('li')
        // img
        const img = document.createElement('img')
        img.src = n.Poster
        // a, href, target
        const a = document.createElement('a')
        a.href = 'https://imdb.com/title/' + n.imdbID
        a.target = '_blank'
        // combine
        a.appendChild(img)
        li.appendChild(a)
        // push to DOM
        movieList.appendChild(li)
    })
}

// Set var (geen const want waarde veranderd) om daarmee straks alles weergeven in *initiele* weergave, en selecties na radioselect
var collection = db.Movies

// voor de initiele weergave, kan pas hier ivm funcie declaratie hierboven
addMoviesTodom(collection)

// Functie om geklikte radiobutton te checken, en waarde doorgeven aan addMoviesToDom
const checkButton = function (filter) {
    // console.log(filter); // klopt: knopnaam
    switch (filter) {
        case 'avengers':
            var collection = filteredTitles('Avengers')
            addMoviesTodom(collection)
            break;
        case 'xmen':
            var collection = filteredTitles('X-Men')
            addMoviesTodom(collection)
            break;
        case 'princess':
            var collection = filteredTitles('Princess')
            addMoviesTodom(collection)
            break;
        case 'batman':
            var collection = filteredTitles('Batman')
            addMoviesTodom(collection)
            break;
        case 'newest':
            var collection = filteredTitles('Newest')
            addMoviesTodom(collection)
            break;
        default:
            var collection = filteredTitles('Newest')
            addMoviesTodom(collection)
            break;
    }
}

const radios = document.getElementsByClassName('radionav') // reference to radiobuttons
//console.log(radios); // klopt

// FILTER: radios in de nav
// cycle door buttons, en add eventlistner aan ELKE knop
Array.from(radios).forEach(function (btn) {
    btn.addEventListener('change', function (e) {
        var filter = e.target.id
        emptyList() // ul>li leegmaken voordat nieuwe waarden erin worden gezet
        checkButton(filter)
    })
})