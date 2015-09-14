'use strict';
var longWords = ["hello", "to", "two", "too", "for", "four", "be", "you", "at", "and"];
var shortWords = ["hi", "2", "2", "2", "4", "4", "b", "u", "@", "&"];
var tweetShortener = {
  wordSubstituter: function(tweet){
    var shortenedTweet = tweet;
    longWords.forEach(function(word){
      var regexWord = new RegExp("\\b" + word + "\\b", 'gi');
      if (tweet.indexOf(word) > -1) {
        shortenedTweet = shortenedTweet.replace(regexWord, shortWords[longWords.indexOf(word)]);
      }
    })
    return shortenedTweet;
  },
  bulkShortener: function(tweets){
    var newTweets = [];
    tweets.forEach(function(tweet){
      tweet = tweetShortener.wordSubstituter(tweet);
      newTweets.push(tweet);
    });
    return newTweets;
  },
  selectiveShortener: function(tweet){
    if(tweet.length>140){
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if(tweet.length>140){
      return tweetShortener.wordSubstituter(tweet).substring(0, 137) + '...';
    } else {
      return tweet;
    }
  },
};
