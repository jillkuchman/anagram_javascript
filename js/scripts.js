var anagram = function(input_word, input_list) {

    var input_array = input_list.split(", ");
    var output_array = [];
    var input_word_array = input_word.split('');
    var input_word_alpha_array = input_word_array.sort();
    var input_word_alpha = input_word_alpha_array.join("");

    input_array.forEach(function(element) {
        var element_array = element.split('');
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
