[Link to Deployed Website](https://melbiggs.github.io/ifd-milestoneproject/)

# Code Institute Milestone Project 
## Spotify’s Top 100 Tracks of 2018 Dashboard

The objective of this project is to create an interactive data dashboard to visualise the dataset I have chosen – the Top 100 Songs on Spotify in 2018. This dataset was published on [Kaggle]( https://www.kaggle.com/janicejung/spotify-top-100-of-2018-with-genres). The target audience are individuals who are interested in the features that exist in a popular song or musicians who want to know what it might take to make their songs more likely to be streamed. Ask yourself: what do these songs have in common and why do people like them? 

This project consists of a single-scrolling dashboard with sections that will show some totals and averages of the dataset, the affect the music has on a listener, the popularity of particular keys, modes and artists, and what the most popular genres were, along with some interesting facts about Spotify. 

The first section shows the user cards containing total songs and artists are in the dataset along with the average song length. There is an option to filter by artist, which when selected will present the dynamicity of the cards above and below. 

It leads on to the second section which contain line charts showing the rise of energy and danceability in most of the songs and then shows how valence is positively correlated with danceability and energy. 

After some comments, there are two interesting pie charts detailing the most common keys and mode used in the tracks. We learn that the most common key among top tracks is C♯,D♭; while D♯,E♭ is the least preferred in the Top Songs list. 

It is followed then by two charts, one row chart and the other a bar chart. The first details the Top 18 Artists of 2018 and the second shows what the Top Genres of 2018 were. Below here there is an option to reset all the data back to the original layout. 

To end the dashboard there are some static fact cards and a footer. The fact cards contain information about Spotify while the footer displays where the user can access the data used or to have a listen of some of these tracks themselves. 


## UX

The main goal in the design of this project was to build a website that visualised the dataset I have chosen in an easily navigable way. I wanted to make good use of the dataset and incorporate a minimalist and modern design which I aimed to do by breaking each of the data charts up onto separate tiles. 

As the dataset is regarding Spotify’s most popular tracks, I wanted to implement a colour palette which mirrors that of Spotify. This involved keeping the background colours dark with white fonts and green **(#1DB954)** splashes of colour. 

With this dashboard, the target audience consists of all age groups who have an interest in popular music, those who wish to know what the audio feature similarities are for these tracks and musicians who may wish to incorporate these features into their own music.

### User Stories

* As an individual interested in popular music, I would want to be able to use this dashboard to see what the most popular artists and tracks were of 2018 and the individual audio features that is shared among these. I would like to be able to see how different songs I may know score in terms of energy, danceability, valence, key, mode and genre. 

* As a user who wishes to know what makes up a Top 100 song, I would like to be able to see the breakdown of audio features, and how some of these interact. I want to see the similarities and differences of the features of the entire Top 100. Filtering down to one song, I want to be able to be able to see specifically want the make up of that song is. 

* As a musician or producer who wishes to release music that has a better chance of generating attention, I would like to be able to see what kind of formula popularly streamed music may have. Is the music generally in a major chord? What key do people seem to prefer? Should it be a dance song?

* As a user who may be of an older demographic, I want a website which is easily navigated so that I can move through the webpage with ease.

* As a user who may be of a young demographic, I want the information to be laid out in a way that is understandable in order to make the most of the data present. 

* As a user I would prefer the option to reset the chosen filters to avoid having to individually remove each of the filters myself. 

### Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

## Features
### Existing Features
My dashboard consists of the following features: 

* **Navbar**: The navbar contains the name of the project.

* **Dynamic Information Cards**: The three initial cards contain the total songs, total artists and average song length of the Top 100 tracks of 2018. These are dynamic and change depending on the selections made by the user. 

* **Artist filter**: This feature allows the user to filter the data according to a specific artist.

* **Line Charts**: Two line charts show the analysis of tracks by their energy and danceability.

* **Scatter plot**:  A scatter plot incorporates the energy and danceability features with valence to show how these all relate to each other. 

* **Comment card**: A comment card puts the data represented into words in case a user is not accustomed to reading data from a chart. 

* **Pie Charts**: Two pie charts show an analysis of the frequency of particular keys and modes used in the music. These can be clicked-on to recalculate the results.

* **Row Chart**: A row chart shows who the Top 18 Artists are in the dataset. This is dynamic and changes depending on the selections made by the user.

* **Bar Chart**: The top 6 genres of the year are displayed with a bar chart. Clicking on one of these affects the other charts. 

* **Reset Button**: This feature that enables users to reset all their selection.

* **Fact Cards with Links**: Three cards with interesting facts about Spotify are listed at the end of the page. The icons contain links to the sources of these facts. 

* **Footer**: A footer at the end contains a link to the dataset and a link to Spotify’s main page. 

* **Responsive**: This dashboard has been made responsive so it allows the user to access this page through their mobile, tablet or desktop and have a pleasant user experience each time.

### Features Left to Implement

In the future, I would like to add more features to this dashboard, such as:

Adding more datasets for other years, incorporating this data with the 2018 dataset and documenting how the data has changed. 
### Another feature idea
I would like to add in a Top Tracks of 2018 playlist from Spotify and embed it in the page. 

Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.
Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X

Bootswatch Slate template
Logo from https://logohub.io/
Favicon from https://favicon.io/emoji-favicons/headphone/