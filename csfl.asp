<!DOCTYPE html>
<html lang="en">

  <head>
		<meta charset="utf-8" />
		<meta name="robots" content="noindex" />
		<title>Customer Services Call Frequency Log</title>



	<script type="text/javascript">

	//arrays for things
var things = [];


	//thing constructor
function thing (dept, description, colour, catDesc) {
	this.dept = dept;
	this.description = description;
	this.colour = colour;
	this.catDesc = catDesc;
};


	<%
	
Dim adoCon       	'Holds the Database Connection Object
Dim rs   			'Holds the recordset for the records in the database
Dim strSQL          'Holds the SQL query to query the database 
Dim orderBy			'Holds how list should be ordered


'Set variables from querystring
typ = request.querystring("type")
scene = request.querystring("scene")
dept = request.querystring("dept")

%>
var type = "<% response.write(typ) %>";

if (type == "") {
	var typePrompt=prompt("You didn't use the right link to get here! Please enter 'tel' for telephone or 'f2f' for face-to-face.");
	if (typePrompt == "tel" || typePrompt == "f2f"){
		type = typePrompt;
	} else {
		alert("look, we'll just say you're using the telphone for now, shall we? Please contact the web team asap if this is not the case");
		type="tel"
	}
};

<%

' Create an ADO connection object
Set adoCon = Server.CreateObject("ADODB.Connection")
adoCon.Mode = 3 ' 3 = adModeReadWrite

' Set an active connection to the Connection object using DSN connection
adoCon.Open "DSN=csfl" 
 
'Create an ADO recordset object
Set rs = Server.CreateObject("ADODB.Recordset")


IF scene = 1 then
%>
var scene = 1;
<%
strSQL = "SELECT * FROM Interactions INNER JOIN Things ON Interactions.Cat_ID=Things.ID WHERE Cat_ID =" & dept
ELSE
%>
var scene = 0;
<%
strSQL = "SELECT * FROM Things"
END IF

' connect to the database and execute query
' response.write strSQL
rs.Open strSQL, adoCon 

' loop through the records and display the information
' using a Do While...Loop statement
Do while not rs.eof



IF scene = 1 then
'Set up variables for each record
ID = trim(rs("Cat_ID"))
Category = trim(rs("Description"))
Colour = trim(rs("Colour"))
CatDesc = trim(rs("Category"))

%>
thing<%= ID %> = new thing (<%= ID %>, "<%= Category %>", "<%= Colour %>", "<%= CatDesc %>");
things.push(thing<%= ID %>);

<%
ELSE
'Set up variables for each record
ID = trim(rs("ID"))
Category = trim(rs("Category"))
Colour = trim(rs("Colour"))

%>

thing<%= ID %> = new thing (<%= ID %>, "<%= Category %>", "<%= Colour %>", "");
things.push(thing<%= ID %>);

<%
END IF

' move to the next record
rs.MoveNext
' go get another record
loop

' close the connection
rs.Close 
adoCon.Close

' Reset server objects
Set rs = Nothing
Set adoCon = Nothing
		
	%>


	</script>
	</head>


	<body onLoad=(drawEverythingFromScratch(0,scene))>

		<script src="csfl.js"></script>
		<script src="csfl2.js"></script>


		<!--[if lt IE 9]>
		<pre>
			______  ___   _____  _____ ______   ___   _     ___  ___ _ 
			|  ___|/ _ \ /  __ \|  ___|| ___ \ / _ \ | |    |  \/  || |
			| |_  / /_\ \| /  \/| |__  | |_/ // /_\ \| |    | .  . || |
			|  _| |  _  || |    |  __| |  __/ |  _  || |    | |\/| || |
			| |   | | | || \__/\| |___ | |    | | | || |____| |  | ||_|
			\_|   \_| |_/ \____/\____/ \_|    \_| |_/\_____/\_|  |_/(_)
		</pre>
		<p>Oh dear, looks like you're using a browser that hates the internet.</p>
		<p>This awesome webpage will only work in a good browser - why not have <br/>a look at 
		<a href='http://www.findmebyip.com/litmus/'>this comparison site</a> to help you choose a better one, free of charge.</p>
	    <![endif]-->
	</body>
</html>
