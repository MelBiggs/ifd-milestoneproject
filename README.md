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

[Here is a link to my UXD document](UXD/UXD.pdf)

### User Stories

* As an individual interested in popular music, I would want to be able to use this dashboard to see what the most popular artists and tracks were of 2018 and the individual audio features that is shared among these. I would like to be able to see how different songs I may know score in terms of energy, danceability, valence, key, mode and genre. 

* As a user who wishes to know what makes up a Top 100 song, such as a music technician, I would like to be able to see the breakdown of audio features, and how some of these interact. I want to see the similarities and differences of the features of the entire Top 100. Filtering down to one song, I want to be able to be able to see specifically want the make up of that song is. 

* As a musician or producer who wishes to release music that has a better chance of generating attention, I would like to be able to see what kind of formula popularly streamed music may have. Is the music generally in a major chord? What key do people seem to prefer? Should it be a dance song?

* As a user who may be of an older demographic, I want a website which is easily navigated so that I can move through the webpage with ease.

* As a user who may be of a young demographic, I want the information to be laid out in a way that is understandable in order to make the most of the data present. 

* As a user I would prefer the option to reset the chosen filters to avoid having to individually remove each of the filters myself. 

## Wireframes

[Here is a link to my wireframe](/UXD/Wireframe.pdf)


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

## Technologies Used

### Programming Languages 

[HTML](https://en.wikipedia.org/wiki/HTML)
HTML was used to control the layout and the structure of the dashboard.

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
Cascading Style Sheets are used to describe the appearance of a website and I used it to make my website look appealing to the user.

[Javascript]( https://www.javascript.com/)
Javascript was used to introduce the interactive elements to the project. 

### Frameworks 

[Bootstrap 4.0](https://getbootstrap.com/)
Bootstrap is a very useful CSS Framework. You can save time writing code by using the Bootstrap predefined design templates. It has a great grid system and is responsive to different screen resolutions.

### Libraries 

[Crossfilter]( http://square.github.io/crossfilter/)
Crossfilter is a library used to create dimensions and groups for the charts in my project. 

[DC.js and DC.css]( https://dc-js.github.io/dc.js/) 
DC.js is a javascript charting library with Crossfilter support, which allowed me to explore my dataset through its library of prebuilt chart types. 

[DC.js and DC.css]( https://d3js.org)
The D3.js library allowed me to edit the charts found in the DC.js library.

[Queue.js]( https://github.com/d3/d3-queue)
Queue.js enabled me to bind the dataset to the charts.

[JQuery](https://jquery.com/)
The project uses JQuery to simplify DOM manipulation.

[Bootswatch]( https://bootswatch.com/slate/)
The project uses the theme ‘Slate’ from Bootswatch to set its colour theme. 

[Cloud9](https://aws.amazon.com/cloud9/)
Cloud9 is the code editor I used to write the HTML and CSS.

[FontAwesome](https://fontawesome.com/)
Font Awesome is a great library of icons. I used this library for my link icons.

[Google Fonts](https://fonts.google.com/)
There is a great selection of fonts in the Google Fonts library, some of which I used in my project. 

## Testing
* As an individual interested in popular music, I believe they will reach their intended goal. They can navigate the page and find out the audio features of their choice of the top 70 artists along with how many songs they have in the Top 100. They can follow the links for more information and read the comment card to have the charts explained. I manually tested each of the links to the band's social media accounts and each of these opened on a separate tab (due to using 'target="_blank"') to the correct destination.

* As a musician or producer who wishes to release music that has a better chance of generating attention or a user who wishes to know what makes up a Top 100 song, they can also see the energy, danceability, valence and genre that are prevalent in the Top 100. They can see what artist is most popular. They’ll see that the majority of the songs have high energy and danceability, they are relatively positive-sounding and that Hip-Hop/Rap and Pop are the most popular genres.

* As a user of an older age, I want it to be as easily navigated as possible and attractive on a desktop or tablet. Younger users may more regularly use their phone and while the dashboard is best on a larger screen size, I believe my project allows the user to achieve their goals in an easy, straightforward and pleasant way. On different screen sizes and browsers, the project looks good.

There was a bug with the valence, energy and danceability correlation chart. It would not respond to efforts to make it responsive. Using `< .useViewBoxResizing(true)>` didn’t throw an error but the chart would not appear in its card. That issue was resolved by adding `< #energy_to_danceability_to_valence{ height: 70%; width: 50%; }>` to the style sheet. It is now responsive and shrinks with the screen. 

### Code Validation

#### CSS
I validated my CSS code using [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). This showed no errors.

#### HTML
I validated my CSS code using [W3C Markup Validation Service]( https://validator.w3.org/). This helped me to spot any small mistakes to the code and to clean it up. It warned me that my sections lack a heading but I have decided that it is appropriate to ignore this warning. 

#### JavaScript
The JavaScript code in my project was validated using  [JSHint]( https://jshint.com/). This was really useful in identifying any extra semicolons that I may have missed and for cleaning my code. 

### Jasmine
Xxxxxxxxxxxxxxxxxxxxx
Xxxxxxxxxxxxxxxxxxx
Xxxxxxxxxxxxxxxxxxxxxxx

### Responsiveness
I tested the responsiveness of the webpage on browsers such as Chrome, Microsoft Edge and Safari and on multiple mobile devices. The page worked per

### Peer Code Review
XXXXXXXXXXXXXXXXXXXXXXXXX

## Deployment

### Deployment onto GitHub
1. The git repository was initiated by inputting the command `<git init>` into the terminal 
2. I then used `<git add>` to add the files to the staging area before using the `<git commit -m "Description of work done">` command to commit the files.
3. I created a repository on GitHub and linked to it by using command `<git remote add origin https://github.com/MelBiggs/ifd-milestoneproject.git>`
4. I could then push my files into GitHub by using `<git push>`
5. To publish my site using GitHub Pages, I navigated to my GitHub Pages site's repository.
6. Under my repository name, I clicked Settings.
7. I scrolled down to the GitHub Pages section and used the Select source drop-down menu to select 'master' as my GitHub Pages publishing source.
8. Click save. 
To summarise, this site is hosted using GitHub pages, deployed directly from the master branch and the deployed site will update automatically upon new commits to the master branch. 
To run locally, you can clone this repository directly into the editor of your choice by pasting `<git clone https://github.com/MelBiggs/ifd-milestoneproject.git>` into your terminal. To cut ties with this GitHub repository, type `<git remote rm origin>` into the terminal.

## Credits

### Content
The dataset I used was downloaded from [Kaggle]( https://www.kaggle.com/janicejung/spotify-top-100-of-2018-with-genres).

### Media
The favicon I used was found on [favicon.io](https://favicon.io/emoji-favicons/)

### Acknowledgements
I received inspiration for the theme of this project from [Spotify]( https://www.spotify.com/ie/).  

I received tips on snippets of my code through [Stack Overflow](https://stackoverflow.com/), [CodePen]( https://codepen.io/) and [W3Schools](https://www.w3schools.com/).

I am very grateful to my mentor **Guido Cecilio** for his help and guidance throughout the project. I would also like to thank my mam and my friends for helping me test the responsiveness of the website. I would also like to thank the Code Institute Slack users for their helpful comments and suggestions on my project. 

[Link to Deployed Website](https://melbiggs.github.io/ifd-milestoneproject/)