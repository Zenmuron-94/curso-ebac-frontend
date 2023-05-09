$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeAfzr = $('#afazer').val();
        const novoAfzr = $('<li></li>');
        $(novoAfzr).text(nomeAfzr);
        $(novoAfzr).appendTo('ul');
        $('#afazer').val("");
        $(novoAfzr).click(function(){
            $(novoAfzr).toggleClass('risco')
        })
    })
    })