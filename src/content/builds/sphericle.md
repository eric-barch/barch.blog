---
author: Eric Barch
pubDatetime: 2024-04-29T15:54:00Z
modDatetime: 2024-04-29T15:54:00Z
title: Sphericle
slug: sphericle
featured: false
draft: false
description: Build custom geography quizzes to study any place in the world.
---

I built an app that lets users create custom geography quizzes on Google Maps.

## The Problem

I like to study geography. I like memorization in general because it's a lazy form of learning. You don't need to be a genius to memorize a lot of facts -- you just need time and commitment. Geography is a particularly satisfying form of memorization because it helps me better understand the world. When I read about some faraway place in the news, my comprehension is dramatically improved when I can place it on a map.

For the past several years, I've used [Seterra](https://seterra.com/) to study geography. For the most part, it's exactly what I need. It outlines a location, I type in an answer, and it tells me whether I'm correct. It has a tight feedback loop and forces me to study information in the same format I'll need to recall it: see a feature, supply its name.

While Seterra's quiz format is perfect, its selection is not. To be fair, it has an [extensive list of quizzes](https://www.geoguessr.com/quiz/seterra) that includes all the basics: countries of the world, states of the United States, etc. But the more maps I learn, the more I want a wider selection. Wouldn't it be cool to memorize the wine regions of France, or to study some city abroad in granular detail before visiting on vacation? Unfortunately, if you want to learn about a place that Seterra hasn't developed a quiz for, you're out of luck.

## The Solution

I could build a clone of Seterra that includes all the quizzes I think it's missing, but that would be a pretty narrow solution. Different people are curious about different places, and my clone would fall short for others like Seterra falls short for me. What if, rather than building an app with _more_ quizzes, I built an app with _none_? Instead, I could build a platform that lets users build their own quizzes. They could search for geographic features à la Google Maps and put them together in whatever order they please. They would never want for content because they could generate the missing content on their own.

## Learning the Web

When I first had this idea, I was enrolled at the [Recurse Center](https://recurse.com) with a plan to spend my batch learning full stack development. I joined Recurse with a basic understanding of programming, patched together from computer science night classes at NYU and lessons learned on personal projects. I knew how to write and run basic programs, but I still didn't feel like I knew how to make A Real Thing. I wanted to build something more sophisticated than command line tic tac toe, but I wasn't sure where to start.

Fortunately, Recurse is an awesome place to learn quickly. Through conversations with other Recursers, I got up to speed on how modern frontends are built. For web apps, a page's structure is defined in HTML. Each element (like a heading or list item) corresponds to a node in the Document Object Model (the "DOM"), and those nodes are organized in a hierarchical tree. CSS defines the way nodes actually appear on the screen, and JavaScript powers dynamic interactivity to alter the page without needing to refresh.

I found the JavaScript paradigm particularly counterintuitive. Selecting DOM nodes by id or CSS selector, manipulating them, appending other elements or replacing them altogether -- it all felt pretty hacky and error-prone. I had assumed that interactivity would be more native to the underlying architecture of the web. I thought it would be more (wait for it) _react_-ive.

I didn't, and still don't, know nearly enough to criticize a concept as enormous and general as "the way all modern web apps work", but my gut feeling wasn't completely unfounded. The way JavaScript has to go in and surgically manipulate an otherwise static DOM inherently leads developers to write imperative code, a programming style where you instruct the machine what to do step-by-step. Most people, myself included, find it easier to think about UI in declarative terms, where you describe what a page or element should look in a certain state. It's the difference between saying "when dark mode is turned on, find this element in the DOM and change its background color to black" and "when dark mode is on, this element's background color should be black". It's the difference between simply having to describe the desired end state versus having to detail how to get there.

The JavaScript-manipulates-DOM paradigm tends to lead developers to write imperative code as opposed to declarative. Essentially, imperative code is a set of instructions the machine should execute to accomplish the task at hand -- when dark mode is activated, find this element in the DOM and change its CSS class to "dark". Declarative code concerns itself more with the desired outcome, often abstracting away the actual implementation -- if dark mode is active, this element's background should be black. Most developers, myself included, find it easier to think about UI declaratively. This is, in part, why I was finding interactivity to be so mind-numbingly cumbersome. Whenever I wanted to change something, I had to spend considerable mental energy thinking about how I needed to go in and surgically change individual elements of the DOM. I wanted to be able to just say "if x condition is true, make y element look like this".

Enter JavaScript frameworks. They abstract away the imperative JavaScript that runs directly in the browser. Most modern, sufficiently complex applications choose to use a JavaScript framework to enforce a certain way of building apps that will hopefully result in more readable, maintainable applications.

Asking around at the Recurse Center, it seemed like React was the most common frontend framework to use for websites that needed anything more than basic interactivity. It's probably not a great idea to choose tools primarily based on their popularity, but until you understand all of your options well enough to assess their tradeoffs, I think it's more important just to get started. Popularity is not a completely useless metric, either, but it is a proxy. At least I knew that a popular framework was "good enough" for industry, it would be enough for my toy geography app. My main goal for the project wasn't even to make something scalable or commercially viable -- it was to learn how to build something from the ground up.

React wasn't enough by itself, though. I also needed a full stack framework to handle routing and interacting with the backend. itself recommended using Next.js as the JavaScript framework to build a React app. I am interested in all JavaScript frameworks, and was honestly hoping to learn Svelte

## Reaction Time

## Staying Focused

## State Structure and Engineering Mistakes

## Vetting Dependencies

## Takeaways
