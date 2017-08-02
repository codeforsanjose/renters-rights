# Renter's Rights
Renter's Rights is a Code for San José project to provide a web application that informs renters of their rights, beginning with residents in San José. Check out the [demo](https://renters-rights.herokuapp.com)

## Why
After conducting user research, renters expressed common issues - dealing with eviction or rising rent. It can be difficult to navigate policy jargon to understand renters rights and procedures to address issues with landlords.

## Tech
The web application will be built in Rails, React.js, React-on-Rails gem, and PostgreSQL.

## How to Run This

Set up the following dependencies

| Dependency      | Version       |
| --------------: |--------------:|
| Ruby            | 2.3.3         |
| Rails           | 5.0.4         |
| PostgreSQL      | 9.6.3         |
| Node            | 8.1.4         |

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
