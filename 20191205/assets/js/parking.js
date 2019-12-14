function navValidation(){
 
    if($( "#content" ).hasClass( "OpenNav" )){
      $('#content').addClass('closeNav')
      $('#content').removeClass('OpenNav')      
      $('#sidebar-wrapper').addClass('opa-0');
    } else{
      $('#content').addClass('OpenNav');
      $('#content').removeClass('closeNav')
      $('#sidebar-wrapper').removeClass('opa-0');
    }
    
}


$(document).ready(function() {
    
    $('#example').DataTable({
      
      dom: 'tlp',
      responsive: true,
	});
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
	var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
   
} );



