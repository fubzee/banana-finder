
# banana-finder


Deployed application link: https://fubzee.github.io/banana-finder/

Github Repo: https://github.com/fubzee/banana-finder

Supporting links: https://docs.google.com/presentation/d/1pUnNa89MIznuCAZJopIeIFIJDXKujv7h2k9snAtxGOo/edit#slide=id.p1

#


## Table of Contents

  

0. Developed by and Application Description.

1. User Story and Criteria.

2. Wire-frame/Chicken Scribble.

3. HTML.

4. CSS stylesheet planing.

5. javaScript.

6. File structure.

7. Future improvements.

  

# 0. Developed by and Application Description

## Project Description

Banana Finder intendeds to solve the annoying situation when you cant get a song out of your head but don't know the name to find it. It allows the user to identify the song and then adds value to the users experience by giving the more information about the artist and track.

We did hit a few paywalls with the application as we learnt more about the licensing behind lyrics and while we have the basic function works, if this application when live we would include lyric results and the ability to add found songs directly to the users spotify of itunes playlists.

Developed by:
Project Manager - Sharon

Project Team - Brenton, Lamek, Sasam, Lily

  

# 1. User Story.


> **AS A** music lover,

> **WHEN I** Cant remember a song, but can remember a lyric I enter it

> **SO THAT** I can search that lyric and find Artist, song (and in the future) "ripeness" then suggests similar songs and playlists.

  

| Task | Status |
|--|--|
| Application is hosted from github | Done |
| Uses a CSS Framework | Done |
| Uses Local Storage | |
| Uses good semantic HTML | |
| Uses at least two API's| Done |
| Is dynamic and responds to user input | Done |
|||



# 2. Wire-frame/Chicken Scribble.

## Basic Mobile Wire-frame
![wire-frame](./assets/images/inital_wireframe.png)

## Style Guide (Starting Point)
![chicken](./assets/images/chicken.png)

  
  

# 3. HTML.

1. Use box structure and bootstrap. (David gave us the all clear to use bootstrap)

2. Create easily readable code

3. Include notes - We created a style guide for how we wanted to write and each of the included javascript file will include a table of contents and notations within functions to help the graders/ anyone looking into our code.

  

# 4. CSS stylesheet planing.

  

1. Multiple style sheets (styleGuide.css, style.css and a reset.css)

2. We started with a mobile first approach to our work.

3. Add external font sheet (google fonts ect)



# 5. JavaScript.

1. Things to note, we had to convert our first API form XML to JSON before we were able to use any of the data in a meaningful way.

2. At the moment our search function runs both our API fetches. Ideally in a future iteration we would have the searches run in two functions and set the results in variables we can access in a global scope so we have the ability to feed these variables into future API's very easily.

3. While we added jquery in the HTML we had made the decision early on to do the first round of coding in vanilla and then look at simplifying it once we had a working MVP



# 6. File structure.

1. Prepared with folder structure to support multiple files of a kind

# 7. Future improvements.

1. Allow users to see upcoming artist vents and purchase tickets at a discounted price.
2. Social integration for users to share songs as reels or stories on popular social media sites.
3. Adding a live listen browser extension so that user can find details for music in tv or movies.
4. Display lyrics alongside search results.
