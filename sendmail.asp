<%@LANGUAGE="VBScript"%>
<%
sendfrom = "noreply@evolutions.co.uk"
sendto = "leanne@evolutions.co.uk"
subject = "Feedback from your website"
header = "Below are the details as entered by the user"

crlf = "<BR>"

BodyText = "<!DOCTYPE HTML PUBLIC '-//IETF//DTD HTML//EN'>" & NL
BodyText = BodyText & "<html>"
BodyText = BodyText & "<head>"
BodyText = BodyText & "<meta http-equiv=Content-Type"
BodyText = BodyText & " content='text/html; charset=iso-8859-1'>"
BodyText = BodyText & "<title>Website order</title>"
BodyText = BodyText & "<STYLE id=LINK_STYLE_SHEET> " & _
			"body {  font-family: Verdana, Arial; font-size: 10pt; font-style: normal; line-height: normal; font-weight: normal} td { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; line-height: 12px; color: #333333}" & _
												"</STYLE></head>"
BodyText = BodyText & "<body>"
BodyText = BodyText & header & crlf & crlf
for i = 1 to Request.Form.Count
	FormField = Request.Form.Key(i)
	if left(FormField,6) = "title_" then
		FieldName = split(FormField,"title_")
		BodyText = BodyText & Request.Form(FormField) & " :-" & crlf & Request.Form(FieldName(1)) & crlf & crlf
	end if
next

BodyText = BodyText & crlf
BodyText = BodyText & "</body></html>" & chr(10)

Set objMail = Server.CreateObject("CDO.Message")
objMail.HTMLBody = BodyText
objMail.Subject = subject
objMail.From = sendfrom
objMail.To =sendto
objMail.Send
Set objMail = Nothing

MailSent = "yes"
%>
<html>
<head>
<title>Sendmail</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF" text="#000000">
<p>Leanne is testing...</p>
<p>&nbsp;</p>
<p>testing testing one two three...</p>
</body>
</html>
