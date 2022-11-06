<!-- Add banner here -->
export NODE_OPTIONS=--openssl-legacy-provider
# Evaluate news with NLP App Project
This is the last project for the Udacity frontend web development nanodegree.

The goal of this project is to get practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

# Table of contents

- [Project Title](#evaluate-news-with-nlp-app-project)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

# Installation
[(Back to top)](#table-of-contents)

`cd` into your new folder and run:
- `npm install` 
in order to install all the required dependencies and packages.

# Usage
[(Back to top)](#table-of-contents)

A valid apikey for Meaning Cloud API must be provided in order to use this application. Create a copy of the .env.example file and rename it to .env. Update the variable `MEANING_API_KEY` with your apikey

*MeaningCloud API*: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. 

## Development mode
Run UI in http://localhost:8080/

- `npm run build-dev`

Run the Express server on port 8081

- `npm start`

## Production mode
Generate a `dist` folder for prod

- `npm run build-prod`

Run the Express server on port 8081

- `npm start`


## Deploying

A great step to take with your finished project would be to deploy it! [Heroku](https://www.heroku.com/) deployment has been made, check it out at --> 