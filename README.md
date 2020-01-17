# Renter's Rights Guide
This [website]](https://rentersrightsguide.org)'s original UI is now archived. We now direct visitors to [City of San José Housing Department](http://sanjoseca.gov/rent) because they have improved the website UI. 

## Project History 
We started the Renter's Rights Guide in 2017 as a [Code for San José](http://codeforsanjose.com) open source web application to help renters in San José understand their rights and resources. 

We learned from conducting user research and stakeholder interviews that renters in Santa Clara County deal with issues such as how to navigate the eviction process, increased rent, and how to find affordable housing. It can be difficult to navigate policy jargon to understand renters rights and procedures to address issues.  

From 2018-2019 we maintained the website, keeping it up to date with any policy changes from the City of San José. 

In January 2020, we decided to archive the website because the city has improved their Housing department website UI.  

## Tech
This web application is built with  Rails, React.js, React-on-Rails gem, and PostgreSQL.

## How to Run This

First, set up the following dependencies:

| Dependency      | Version       |
| --------------: |--------------:|
| Ruby            | 2.4.2         |
| Rails           | 5.0.4         |
| PostgreSQL      | 9.6.3         |
| Node            | 8.4.0         |

After you install the dependencies:

1. Git clone this repo
1. ``cd``` into the repo directory 
1. ```gem install bundler```
1. ```bundle install```
1. ```psql```
1. Create Postgres User:  ```create role postgres login createdb;```
1. exit out of psql: ```\q```
1. ```bundle exec rails db:setup```
1. ```gem install foreman```
1. ```npm install```
1. ```cd client; npm install; cd ..```
1. ```foreman start -f Procfile.dev```
1. Navigate to ```http://0.0.0.0:5100/```

## How You Can Contribute
Look at our [projects page](https://codeforsanjose.com#projects) to find other projects to contribute to, discuss your ideas and join teams on our [Slack](https://codeforsanjose.slack.com). If you don't have an account, [sign up here](https://slackin-c4sj.herokuapp.com/). Join us at an upcoming [civic hack night or other event on Meetup](https://meetup.com/Code-for-San-Jose).

## Made with <3 by Code for San José