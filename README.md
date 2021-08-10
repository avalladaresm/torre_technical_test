This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is the repository of my solution to the technical test towards a Software Developer Internship at Torre.co.

## Getting Started

First, clone this repo to your computer on the location of your preference.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Usage

The app is hosted at https://torretechnicaltest.vercel.app/ and is quite simple.

The main screen consists of two buttons, a Bios button and a Opportunities button.

The Bios button takes you to the /bios page, in which a user can be looked up, for example, alejandrovalladares. Once the Search button is pressed, the user's basic information will be displayed, such as the user's name, location, bio summary, job experience and interests. Note that if a user does not exist, an error result is displayed.

The Opportunities button takes you to the /opportunities page, in which a latest 20 opportunities are fetched. The opportunities are shown as cards in a 2-column layout. Only the name of the opportunity and remote availability is displayed. If a card is clicked, a modal with more details is displayed, details such as opportunity summary, remote availability, company name and logo, required skills, required skills and max date to apply.

Both pages have a back button the takes you back to the main page.

## Key points

- Note that some code has been extracted into separate components to follow an atomic design, and to avoid repeating myself.
- A data fetching library, SWR, was used to fetch the data from the endpoints provided. This library is useful to cache data and avoid repeating requests, for example, if an opportunity is selected and the modal pops up, it will make a request to get the opportunity summary and compensation. If the modal is closed and the an opportunity that was previously selected is selected again, the data will be shown immediately as it was cached already.
