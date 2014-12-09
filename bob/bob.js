//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {

  var isShouting = function(input) {
    return input.toUpperCase(input) === input && input.toLowerCase(input) !== input;
  }

  var isQuestion = function (input) {
    return input.slice(-1) === "?";
  }

  var silentTreatment = function (input) {
    return input.trim(input) === "";
  }

  this.hey = function(input) {
    if (isShouting(input)) {
      return 'Woah, chill out!';
    } else if (isQuestion(input)) {
      return "Sure.";
    } else if (silentTreatment(input)) {
      return 'Fine. Be that way!';
    } else {
      return "Whatever.";
    }
  }
};

module.exports = Bob;
