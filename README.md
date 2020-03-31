# FilmZoeker
Wincacademy opdracht week 2


# **Intro 💬**

Je gaat een een filmzoeker maken! 

In dit project ga je een overzicht maken van verschillende films. 📽️ 
Over de database hoef je je (nog) geen zorgen te maken! Die hebben wij voor je gemaakt. 

Er zitten een aantal films in de database die de gebruiker moet kunnen filteren dmv een aantal filterbuttons. De film naar keuze kan de gebruiker dan vervolgens vinden op [IMDB](https://www.imdb.com/). Je gaat in deze opdracht kennismaken met een grote berg data en hoe je daarmee om kunt gaan. 

Het inleveren gaat gebeuren via GitHub. 

❗ Let op: Alle styling met CSS is **optioneel 🚀** 
Zorg dat je eerst de functionaliteit werkend en getest hebt, voordat je gaat stylen 👍.

# **Requirements  ✍️**

Aan deze eisen moet jouw project voldoen:

1. Als gebruiker wil ik een lijst kunnen zien van de beschikbare films **met de poster van de film.**
    - Check de data: elke film in de database heeft een link naar de juiste poster.
2. Als gebruiker wil ik bovenaan de pagina kunnen klikken op 5 verschillende filters in de vorm van [radio-buttons](https://www.w3schools.com/jsref/prop_radio_checked.asp). De filter functionaliteit wordt hieronder verder toegelicht.
3. Als gebruiker kan ik maar 1 filter tegelijk gebruiken. 
    - Als ik een ander filter aanklik gaat het andere filter dus weer uit. 
    (Hence de **radiobutton** (1 antwoord mogelijk), in tegenstelling tot een checkbox (meerdere antwoorden mogelijk).
4. Categorie 1: Als gebruiker wil ik kunnen filteren op de categorie **nieuwste films**: van de laatste jaren, dat betekent 2014 of nieuwer.  
5. Categorie 2: Als gebruiker wil ik kunnen filters op films met **"Avengers"** in de titel.  
6. Categorie 3: Als gebruiker wil ik kunnen filteren op films met **"X-Men"** in de titel.
7. Categorie 4: Als gebruiker wil ik kunnen filteren op films met **"Princess"** in de titel. 
8. Categorie 5: Als gebruiker wil ik kunnen filteren op films met **"Batman"** in de titel. 
    - Gebruik arraymethods voor je filters
    - Check of een gedeelte van een string in een andere string aanwezig is met de [.includes()](https://www.w3schools.com/jsref/jsref_includes.asp) method.
    - De laatste 4 filters lijken heel veel op elkaar. Heb je daar meerdere functies voor nodig? Kan het ook in 1?
9. Als gebruiker kan ik op de poster van de film klikken, waardoor ik naar de juiste IMDB pagina wordt gebracht. 
    - IMDB werkt met een `id` per film/serie in de URL. Deze ids vind je ook weer terug in onze filmdatabase. Zie bijvoorbeeld: [https://www.imdb.com/title/tt0944947/](https://www.imdb.com/title/tt0944947/) 
    Pas de URL van IMDB aan en plak het juiste ID erachter.

# Database

- **Database Movies**

# **Bonus Requirements  🚀**

1. Styling en design
2. Als gebruiker kan ik in een inputfield de titel van een film invullen, wanneer ik op enter druk worden de films gefilterd op de titel die ik heb ingevuld.
