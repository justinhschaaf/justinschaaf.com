import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js/src/typed';

@Component({
  selector: 'jhs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
    let typed = new Typed(".banner_home_typed", {
      strings: [
        "Java ⬢ Ionic ⬢ Angular <br/> Welcome to justinschaaf.com"
        /*"What, you were expecting something after that?",
        "What else do you want me to put here‽",
        "Oh, also, did you know that this is called the Interrobang? -> ‽",
        "It's a very interesting symbol...",
        "<a href='https://en.wikipedia.org/wiki/Interrobang'>Here's the Wikipedia page for it</a>",
        "Well, while you're here, how was your day?",
        "Good, good, glad to hear! My day is alright...",
        "Hey, did you know that I find HTTP requests very annyoing in JavaScript?",
        "It's just that JS continues reading the program before it actually has the requested value.",
        "I perfer the way you can make HTTP requests in Java, as a BufferedInputStream.",
        "In Java, YOU ACTUALLY GET THE VALUE INSTANTLY. It's rocket science, I know...",
        "The way that I usually get around this problem in JavaScript is just making any function that involves HTTP requests return a promise.",
        "This method is still stupid, in my opinion, but it works, at least...",
        "Mind if I ask: why are you sitting around and reading this?^5000",
        "Yeah, it's fine... I often get distracted and end up reading stuff like this all the time.",
        "It's one way my brain likes to procrastinate.",
        "I have a ton of projects and ideas I could be working on, but my brain doesn't like stress at all...",
        "For example, a book on Python has been sitting on my desk for the past month.",
        "I could be reading that book and learning Python, but my brain perfers to write this comedic series of text instead.",
        "...^5000",
        "How much time have I spent writing these strings and setting up typed.js here?",
        "What is the true meaning of life, the universe, and everything?",
        "How much wood could a wood chuck really chuck if a wood chuck could chuck wood?",
        "If the Big Bang created the universe, then what created the Big Bang?",
        "If the Big Bang created the Big Bang, then what created the Big Bang?",
        "Why does Apple like stealing money from their customers by overpricing their products?",
        "Why would any person, in their right mind, buy <a href='https://www.samsung.com/global/galaxy/galaxy-fold/'>a phone for $1,980</a>?",
        "Why can no company understand I just want something that comfortably fits in my hand? I'm certain others want one too.",
        "What does Microsoft have against Thunderbolt 3?",
        "What does Apple have against USB-A?",
        "Why can't macOS, the first OS with windows, properly manage windows?",
        "When will we get slim Cherry MX Blue switches?",
        "Who approved the Magic Mouse's charging solution?",
        "Did you know that some people still use wired headphones?",
        "Did you know that you can give me money by pressing the \"Donate\" button in the header?",
        "When are we ever going to need to know how to analyze a fictional character in the real world if we aren't becoming a professional writer?",
        "Why does standardized testing exist? ^5000In short: it shouldn't...",
        "Why is it snowing... ^5000in Las Vegas... ^5000in February?",
        "Why is February spelled \"February\"?",
        "How does Siri never get anything I say right?",
        "Why do I have 53 items in this array very few people are going to see?",
        "Why haven't I committed this and gone to bed yet?",
        "Why am I still doing this at 10 PM?",
        "The next string will literally be a space.",
        " ",
        "I'm impressed that you sat through all those messages. Congratulations.",
        "If you read through the source code to see these instead of waiting the 10+ minutes it would have actually taken you to see all the messages, you know who you are...",
        "When I tested this, it took 10 minutes. It'll probably be 20 by the time I'm done.",
        "Back to the beginning now, bye!"*/
      ],
      typeSpeed: 50, // 100
      backSpeed: 50, // 100
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      loop: false
    });
  }

}
