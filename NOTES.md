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
