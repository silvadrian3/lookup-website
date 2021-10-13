
var mailservice = "http://localhost/lookup/lookup-mailer";

$("#btn_send").click(function(){
	var business_name = $("#business_name").val(),
		name = $("#name").val(),
		email = $("#email").val(),
		message = $("#message").val(),
		key = '5fea10f9b07309ead88909855cfff695',
		body = '';

			if(business_name!=""){
				if(name!=""){
					if(email!=""){

						if(validEmail(email)){
							if(message!=""){
								body += "<html><body style='font-family:calibri, arial; color:#000000;'>";
								body += "<p style='font-size:14px'>Hi Team,</p>";
								body += "<p style='font-size:14px'><b>"+name+"</b> submitted an inquiry regarding our product through <i>Contact Us</i> Form from our website. Please see below details:</p><br/><br/>";
								body += "<table cellpadding='0' cellspacing='0' style='width:100%; border-left:solid 1px #ccc; border-right:solid 1px #ccc; border-bottom:solid 1px #ccc; padding:0; font-family:calibri, arial;'>";
								body += "<tr>";
								body += "<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Business Name:</b></td>";
								body += "<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>"+business_name+"</td>";
								body += "</tr>";
								body += "<tr>";
								body += "<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Email Address:</b></td>";
								body += "<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px; color:#FF0000'>"+email+"</td>";
								body += "</tr>";
								body += "<tr>";
								body += "<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Message/Inquiry:</b></td>";
								body += "<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>"+message+"</td>";
								body += "</tr>";
								body += "</table>";
								body += "<p>Sincerely,<br/>Lookup - Support Team</p>";
								body += "</body></html>";
			
									var params = {
										from: 'support@lookup.ph',
										fromname: 'Lookup',
										subject: 'Lookup Website - Inquiry',
										body: body,
										address: 'aqs.lookup@gmail.com'
									};
									
									// $.post(mailservice + "/?k=" + key, params, dataType:'json').success(function (response) {

									// 	if (response.result) {
									// 		setTimeout(function() {
									// 			$('#success').html("<div class='alert alert-success'>");
									// 			$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
									// 				.append("</button>");
									// 			$('#success > .alert-success')
									// 				.append("<strong>We have received your message and we will get back to you shortly. </strong>");
									// 			$('#success > .alert-success')
									// 				.append('</div>');
	
									// 			$('#contactForm').trigger("reset");
									// 		},1000);
	
									// 		setTimeout(function() {
									// 			$('#success').html("");
									// 		},3000);
									// 	} else {
									// 		setTimeout(function() {
									// 			$('#success').html("<div class='alert alert-danger'>");
									// 			$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
									// 				.append("</button>");
									// 			$('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later.");
									// 			$('#success > .alert-danger').append('</div>');
												
									// 			$('#contactForm').trigger("reset");
									// 		},1000);
	
									// 		setTimeout(function() {
									// 			$('#success').html("");
									// 		},3000);
									// 	}
									

									// });

								
								$.ajax({
									url: mailservice + "/?k=" + key,
									type: "POST",
									data: JSON.stringify(params),
									contentType: "application/json; charset=utf-8",
									dataType : "json",
									cache: false,
									success: function(e) {

										console.log(e);

										setTimeout(function() {
											$('#success').html("<div class='alert alert-success'>");
											$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
												.append("</button>");
											$('#success > .alert-success')
												.append("<strong>We have received your message and we will get back to you shortly. </strong>");
											$('#success > .alert-success')
												.append('</div>');

											$('#contactForm').trigger("reset");
										},1000);

										setTimeout(function() {
											$('#success').html("");
										},3000);
									},
									error: function(x) {

										console.log(x);
										setTimeout(function() {
											$('#success').html("<div class='alert alert-danger'>");
											$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
												.append("</button>");
											$('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later.");
											$('#success > .alert-danger').append('</div>');
											
											$('#contactForm').trigger("reset");
										},1000);

										setTimeout(function() {
											$('#success').html("");
										},4000);
									},
								})
								
						
						
							
							
							
							} else {
								alert("Message is required.");
								$("#message").focus();
								return false;
							}
						} else {
							alert("Please enter valid email.");
							$("#email").focus();
							return false;
						}
					} else {
						alert("Email Address is required.");
						$("#email").focus();
						return false;
					}
				} else {
					alert("Name is required.");
					$("#name").focus();
					return false;
				}
			} else {
				alert("Business Name is required.");
				$("#business_name").focus();
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


function validEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
  }