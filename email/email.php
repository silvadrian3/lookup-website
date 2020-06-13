<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
	return false;
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
	$ip = $_SERVER['HTTP_CLIENT_IP'];
} else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
		$ip = $_SERVER['REMOTE_ADDR'];
		}

$browser_details =  $_SERVER['HTTP_USER_AGENT'];

$to = 'info@q11technologies.com';
$email_subject = "Q11 GPS Assist | Contact Us";
$email_body = "
<html>
			<body style='font-family:calibri, arial; color:#000000'>
<p style='font-size:14px'>Hi Team,</p>
<p style='font-size:14px'><b>".$name."</b> submitted an inquiry regarding our product through <i>Contact Us</i> Form from our website. Please see below details:</p><br/><br/>
			<table cellpadding='0' cellspacing='0' style='width:100%; border-left:solid 1px #ccc; border-right:solid 1px #ccc; border-bottom:solid 1px #ccc; padding:0; font-family:calibri, arial;'>
				
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Complete Name:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>".$name."</td>
				</tr>
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Email Address:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px; color:#FF0000'>".$email."</td>
				</tr>
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Contact Number:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>".$phone."</td>
				</tr>
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>Message/Inquiry:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>".nl2br($message)."</td>
				</tr>
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>IP Address:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>".$ip."</td>
				</tr>
				<tr>
					<td style='border-top:solid 1px #ccc; width:20%; padding:3px 0px 3px 7px' valign='top'><b>User Agent:</b></td>
					<td style='border-top:solid 1px #ccc; width:80%; padding:3px 0px 3px 7px'>".$browser_details."</td>
				</tr>
			</table>
			<br/><br/><p style='font-size:14px;'>Regards, <br/> Q11 GPS Assist - Admin </p>
			</body>
		</html>";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@q11technologies.com" . "\r\n";
$headers .= "CC: ariel.silvajr@q11technologies.com" . "\r\n";
$headers .= "CC: jameson.candava@q11technologies.com" . "\r\n";
$headers .= "CC: adrian.silva@q11technologies.com" . "\r\n";
$headers .= "BCC: silvadrian3@gmail.com" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
if(mail($to,$email_subject,$email_body,$headers)){
	return true;
}

?>