# Magma [![Build Status](https://travis-ci.org/vilmosioo/magma.svg?branch=master)](https://travis-ci.org/vilmosioo/magma)

### A new way of building web apps by taking advantage of both server and client side templating.

## Working Demo

[http://magma-vilmosioo.rhcloud.com/](http://magma-vilmosioo.rhcloud.com/)

A web-app that allows you to browse books and authors.

## Context

Traditional websites are based on server-side rendering. 

[graph ]

A user makes a request, the server identifies the resources requested, builds the document and sends it back. 

More complex websites have multiple sources to generate the data. A modular architecture allows you to aggregate different components before sending the final document to the user.

[graph]

Client-side architecture works in a similar way, except the templating engine is the browser itself. 

[graph]

Client vs server templating is an on-going debate today. 

[table pro cons]

Magma suggests a hybrid approach, taking the advantages of both and disadvantages of neither.

## How it works

Magma is not a framework. You don't need any code from this repository. it does not require you to use a particular tech stack.

it is an architecture. It leverages the main content to the server for fast delivery, while everything else is rendered on the client. 

For example, say your index.html server a page containing 4 components: A, B, C, D.

[psedocode index a b]

The Magma architecture recommends you expose the components to their own endpoints.

[pseudocode index() a() b()]

Your website 

[graph magma]

TLDR Magma is an architecture that requires the main content to be delivered by the server on page load, and initialising a single page app as soon as JS is loaded.

## Getting started

[clone and install]
[grunt tasks]
[screenshot of js and no-js preview]

## What's done (demo)

 * Search books
 * Paginate search results
 * View individual book
 * View similar books
 * View author details

## What's next (demo)

 * Sign-in with Goodreads
 * View your collection
 * Enable grid and list view

## Contributing

## Attributions

Kindly hosted by [Openshift](https://www.openshift.com/).
Data provided by [Goodreads](https://www.goodreads.com/).