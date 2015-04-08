var anagram = function(input_word, input_list) {

    var input_array = input_list.split(", ");
    var output_array = [];
    var input_word_lc = input_word.toLowerCase();
    var input_word_array = input_word_lc.split('');
    var input_word_alpha_array = input_word_array.sort();
    var input_word_alpha = input_word_alpha_array.join("");

    input_array.forEach(function(element) {
        var element_lc = element.toLowerCase();
        var element_array = element_lc.split('');
        var element_alpha_array = element_array.sort();
        var element_alpha = element_alpha_array.join("");
        if (input_word_alpha === element_alpha) {
                output_array.push(element);
        }
    });

    var output_list = output_array.join(", ");

    if (!output_list) {
        return "no matches";
    }
    else {
        return output_list;
    }


};

$(document).ready( function() {
    $("form#anagrams").submit(function(event) {

        var user_word = $("input#input_word").val();
        var user_list = $("input#input_list").val();
        var result = anagram(user_word, user_list);

        $(".matches").text(result);
        $(".input_anagram").text(user_word);

        console.log(user_list);
        if(user_list){
            if(user_list.length > 1) {
                $(".is_tense").text("are");
                $(".plural").text("s");
            }
            else {
                $(".is_tense").text("is");
            }
            $("#result").show();
        }
        event.preventDefault();
    });
});
