$(function() {
    $( ".draggable" ).draggable({containment: 'body'});
    $( ".droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
});
$( ".autocomplete" ).autocomplete({
    source: [ "ALL", "A1", "A2", "A3", "A4", "A5", "NONE" ]
});
function favisos1() {
    $("#actualizaciones
};
function favisos2() {
    $("#avisos2" ).click(function( event ) {
            
        });
};
function favisos3() {
    $("#avisos3" ).click(function( event ) {
            
        });
};
$($("#avisos1" ).click(function( event ) {
            favisos1();
        }),
  $("#avisos2" ).click(function( event ) {
            favisos1();
        }),
   $("#avisos3" ).click(function( event ) {
            favisos1();
        }));
$(function() {
   
   $("#sociosBar").resizable({ 
                        containment: '#socios', 
                        handles:'e, w', 
                        minWidth: 200, 
                        maxWidth:400,
                        start: function( event, ui ) {
                              
                        }   
});
});
$( "#datepicker" ).datepicker().show();

$(function() {
    $( "#tabs" ).tabs();
});
$(document).ready(function() {
                createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '400',
                    source:     'json/linea.json',
                    embed_id:   'my-timeline'
                });
            });