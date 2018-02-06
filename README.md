# Renter's Rights Guide
Renter's Rights Guide is a [Code for San José](http://codeforsanjose.com) open source web application to help renters in San José understand the laws and programs in place to protect them. View the [demo](https://rentersrightsguide.org)

## Why Renter's Rights Guide
We learned from conducting user research and stakeholder interviews that renters in Santa Clara County deal with issues such as how to navigate the eviction process, increased rent, and how to find affordable housing. It can be difficult to navigate policy jargon to understand renters rights and procedures to address issues. We hope to build an application that will empower renters in San José to understand their rights and resources. 

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
Join the #renters_rights channel on our [Slack](https://codeforsanjose.slack.com)

## Made with <3 by Code for San José

* [Yan-Yin Choy](https://github.com/ychoy), Developer
* [Matthew King](https://github.com/mking), Developer
* [Julie Kim](https://github.com/jliekim), UX Researcher & Designer
* [David Pindrys](https://github.com/dpindrys), UX Researcher & Designer
* [Sanaz Jamloo](https://github.com/sanazjamloo), UX Researcher
* [Emily Ramos](https://github.com/EngineerEmily), UX Researcher
* [Lorin Camargo](https://www.linkedin.com/in/lorincamargo), UX Researcher

Thanks to our advisors:
* [Michelle Thong](https://github.com/mthong), Code for San José Chapter Director 
* [Vivek Bansal](https://github.com/3vivekb), Code for San José Chapter Director
