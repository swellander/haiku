import { Haiku } from './../js/haiku.js';

$(document).ready(function() {
    $('#generate').click(function() {
        let haiku = new Haiku();

        $('#haiku').text(haiku.generate().getFullPoem())
    })
});