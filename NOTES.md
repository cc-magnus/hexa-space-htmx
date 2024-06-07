# Notes:

## Hypotheses:

1. Easy switch of Technology (nextJS -> HTMX). Which means we do not have to make any changes in the hexagon
2. It feels like an Backend Server if we switch to HTMX
3. HTMX: less hexagonal dislocation

## Observations:

* The wiring isn't located in the Page Component -> Handler
* Switching FE Frameworks
    * check before hand test library support => (custom renderer)
* NextJS is strongly coupled with React therefore we have to make changes in UI-Adapter

## Current Challenge

* client side JS without breaking the Hexagon?
    * AlpineJS magic (yes it is really called magic https://alpinejs.dev/advanced/extending#custom-magics) for client JS
    * currently bundleing our domain function and intialization function Alpine magic in ts file with parcel
    * Open Topic
        * Is that our wiring because we need magic alpine wrappers?
        * how to unit test AlpineJS components => do E2E test

