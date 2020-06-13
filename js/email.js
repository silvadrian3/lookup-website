$("#btn_send").click(function(){

            var name = $("#_name").val();
            var email = $("#_email").val();
			var phone = $("#_phone").val();
            var message = $("#_message").val();

			if(name!=""){
				if(email!=""){
					if(phone!=""){
						if(message!=""){
							$.ajax({
								url: "email/email.php",
								type: "POST",
								data: {
									name: name,
									email: email,
									phone: phone,
									message: message
								},
								cache: false,
								success: function() {
									
									$('#success').html("<div class='alert alert-success'>");
									$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
										.append("</button>");
									$('#success > .alert-success')
										.append("<strong>Your message has been sent. </strong>");
									$('#success > .alert-success')
										.append('</div>');

									$('#contactForm').trigger("reset");
								},
								error: function() {
									
									$('#success').html("<div class='alert alert-danger'>");
									$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
										.append("</button>");
									$('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later.");
									$('#success > .alert-danger').append('</div>');
									
									$('#contactForm').trigger("reset");
								},
							})
					   
					   
						setTimeout(function() {
							$('#success').html("");
						},3000);
						
						
						
						
						} else {
							alert("Message is required");
							$("#_message").focus();
							return false;
						}
					} else {
						alert("Contact Number is required");
						$("#_phone").focus();
						return false;
					}
				} else {
					alert("Email Address is required");
					$("#_email").focus();
					return false;
				}
			} else {
				alert("Complete Name is required");
				$("#_name").focus();
				return false;
			}

            
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


$('#name').focus(function() {
    $('#success').html('');
});
