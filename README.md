# Renter's Rights Guide
Renter's Rights Guide is a Code for San José open source web application to help renters in San José understand the laws and programs in place to protect them. Check out the beta [demo](https://renters-rights.herokuapp.com)

## Why
We learned from conducting user research and stakeholder interviews that renters deal with common issues - how to navigate the eviction process, increased rent, and affordable housing. It can be difficult to navigate policy jargon to understand renters rights and procedures to address issues with landlords. We hope to build an application that will empower renters to understand their rights and resources. 

## Tech
The web application will be built in Rails, React.js, React-on-Rails gem, and PostgreSQL.

## How to Run This

Set up the following dependencies

| Dependency      | Version       |
| --------------: |--------------:|
| Ruby            | 2.3.3         |
| Rails           | 5.0.4         |
| PostgreSQL      | 9.6.3         |
| Node            | 8.2.1         |

After you install the dependencies, to start the frontend:

1. Git clone this repo
1. ```gem install bundler```
1. ```bundle install```
1. ```bundle exec rails db:setup```
1. ```yarn```
1. ```gem install foreman```
1. ```foreman start -f Procfile.dev```
1. Navigate to ```localhost:3000``` to see the index

## How You Can Contribute
Join the #rails_team channel on our [Slack](https://slackin-c4sj.herokuapp.com/) and message [Yan-Yin Choy](https://github.com/ychoy)

## Made with <3 by Code for San Jose

* [Matthew King](https://github.com/mking)
* [Yan-Yin Choy](https://github.com/ychoy)
* [Emily Ramos](https://github.com/EngineerEmily)
* [Julie Kim](https://github.com/jliekim)
* [Sanaz Jamloo](https://github.com/sanazjamloo)
