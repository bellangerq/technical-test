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

Create an Octobat account and link it with your Stripe account.

Launch local server and visit `localhost:3000`:

```
npm start
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
  - [x] Display preview before payment
  - [x] Show amount with & without tax
  - [x] Show spinner on load
3. **OCTOBAT**
  - [x] Add country in Stripe charge
  - [x] Add country selection in view
  - [x] Set chosen country to Octobat customer
  - [x] Apply tax rate depending on customer country
  - [x] Fetch tax rate in preview
  - [x] Make POST https://apiv2.octobat.com/tax_evidence_requests request on page load with default country
  - [x] Make POST https://apiv2.octobat.com/tax_evidence_requests request on `select` changes with selected country
  - [x] Update tax rate thanks to tax_evidence object
4. **MISC**
  - [x] [Deploy to Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
  - [x] Get the [list of eligible countries](https://www.octobat.com/questions/zones-supported/)
  - [x] Input price is HT
