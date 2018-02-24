import { Haiku } from './../js/haiku.js';

$(document).ready(function() {
    $('#generate').click(function() {

        let haiku = new Haiku();

        $.ajax({
            url: 'http://www.randomtext.me/api/gibberish/p-1/100-105',
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function(response) {
                haiku.hispum = response.text_out;
                haiku.hipsum = response.text_out.replace(/<(?:.|\n)*?>/gm, '').split(' ');
                haiku = haiku.generate();

                $('#generated-line-1').text(haiku.line1)
                $('#generated-line-2').text(haiku.line2)
                $('#generated-line-3').text(haiku.line3)
            },
            error: function() {
                console.log('THERE WAS AN ERROR WITH AJAX REQUEST');
            }
        })
    })

    $('#haiku-checker-btn').click(function(event) {


        let line1 = $('#line-1').val();
        let line2 = $('#line-2').val();
        let line3 = $('#line-3').val();

        let haiku = new Haiku(line1, line2, line3);


        if (haiku.isValid()) {
            $('#outcome').text('Looks Good!');

        } else {
            $('#outcome').text('Uh oh...');
        }
    })
});