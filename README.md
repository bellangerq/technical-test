# Technical test

Node JS technical test with Stripe & Octobat APIs.

## Install

Clone this project

```
git clone git@github.com:bellangerq/technical-test.git
```

Install Node dependencies:

```
npm install
```

Create a `.env` file and store your Stripe keys (with [dotenv](https://github.com/motdotla/dotenv)):

```
PUBLISHABLE_KEY=pk_test_******
SECRET_KEY=sk_test_******
```

Launch local server and visit `localhost:3000`:

```
node app.js
```

## Roadmap

1. **STRIPE**
  - [x] Create Stripe token
  - [x] Create Stripe charge
  - [x] Associate token to charge
  - [x] Show Stripe charge token if success (`.then`)
  - [x] Show status if error (`.catch`)
  - [x] Create form view
  - [x] Pass query parameters to Stripe token
  - [x] Redirect page on success
  - [x] Show error if any
2. **FRONT**
  - [x] Design form
  - [x] Front form validations
  - [x] Design redirect page
3. **OCTOBAT**
  - [x] Add country in Stripe charge
  - [ ] Add country selection in view
  - [ ] Set chosen country to Octobat customer
  - [ ] Apply tax rate depending on customer country
