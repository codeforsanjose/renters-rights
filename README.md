# Renter's Rights Guide
Renter's Rights Guide is a Code for San José open source web application to help renters in San José understand the laws and programs in place to protect them. View the [demo](https://renters-rights.herokuapp.com)

## Why Renter's Rights
We learned from conducting user research and stakeholder interviews that renters deal with common issues - how to navigate the eviction process, increased rent, and find affordable housing. It can be difficult to navigate policy jargon to understand renters rights and procedures to address issues with landlords. We hope to build an application that will empower renters to understand their rights and resources. 

## Tech
The web application will be built in Rails, React.js, React-on-Rails gem, and PostgreSQL.

## How to Run This

Set up the following dependencies

| Dependency      | Version       |
| --------------: |--------------:|
| Ruby            | 2.3.3         |
| Rails           | 5.0.4         |
| PostgreSQL      | 9.6.3         |
| Node            | 8.4.0         |

After you install the dependencies, to start the frontend:

1. Git clone this repo
1. ```gem install bundler```
1. ```bundle install```
1. ```bundle exec rails db:setup```
1. ```gem install foreman```
1. ```foreman start -f Procfile.dev```
1. Navigate to ```localhost:3000``` to see the index

## How to Create Postgres User
```
create role postgres login createdb;
```

## How You Can Contribute
Join the #rails_team channel on the Code for San José [Slack](https://slackin-c4sj.herokuapp.com/).

## Made with <3 by Code for San José

* [Yan-Yin Choy](https://github.com/ychoy), Developer
* [Matthew King](https://github.com/mking), Developer
* [Julie Kim](https://github.com/jliekim), UX Researcher & Designer
* [Sanaz Jamloo](https://github.com/sanazjamloo), UX Researcher
* [Emily Ramos](https://github.com/EngineerEmily), UX Researcher
