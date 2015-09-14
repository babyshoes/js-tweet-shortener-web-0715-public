'use strict';

describe('tweetShortener', function() {

  it('replaces long words with their expected short form', function() {
    var tweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    var substituded_tweet = "Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!";
    expect(tweetShortener.wordSubstituter(tweet)).toEqual(substituded_tweet);
  });

  it('shortens tweets in bulk', function(){
    var tweet_one = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    var tweet_two = "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?";
    var tweet_three = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    var tweet_four = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag";
    var tweet_five = "I'm running out of example tweets for you guys, which is weird, because I'm a writer and this is just writing and I tweet all day. For real, you guys. For real.";

    var tweet_one_short = "Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!";
    var tweet_two_short = "OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?";
    var tweet_three_short = "GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!";
    var tweet_four_short = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag";
    var tweet_five_short = "I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. 4 real, u guys. 4 real.";

    var tweets = [tweet_one, tweet_two, tweet_three, tweet_four, tweet_five];
    var shortened_tweets = [tweet_one_short, tweet_two_short, tweet_three_short, tweet_four_short, tweet_five_short];
    expect(tweetShortener.bulkShortener(tweets)).toEqual(shortened_tweets);
  });

  it('shortens tweets longer than 140 characters only', function(){
    var over140 = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    var under140 = "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?";
    var over140Too = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    var under140Too = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag";
    expect(tweetShortener.selectiveShortener(over140).length).toBeLessThan(over140.length);
    expect(tweetShortener.selectiveShortener(under140).length).toEqual(under140.length);
    expect(tweetShortener.selectiveShortener(over140Too).length).toBeLessThan(over140Too.length);
    expect(tweetShortener.selectiveShortener(under140Too).length).toEqual(under140Too.length);
  });

  it("truncates tweets over 140 characters after shortening", function(){
    var longTweet = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    var shortenedTweet = tweetShortener.shortenedTruncator(longTweet);
    expect(shortenedTweet.length).toEqual(140);
    // checking if the string ends in '...'
    expect(shortenedTweet.indexOf('...', shortenedTweet.length - '...'.length)).not.toEqual(-1);
  });

  it("keeps shortened tweets at their original lengths", function(){
    var shortTweet = "I like short tweets and I cannot lie";
    expect(tweetShortener.shortenedTruncator(shortTweet).length).toEqual(shortTweet.length);
  });
});
