<!doctype html>
<%@ Language=VBScript %>


<%

'get username
If Session("Username") = "" then
arrSomething = split(Request.ServerVariables("LOGON_USER"),"\")
Session("Username") = Lcase(arrSomething(ubound(arrSomething)))
End If
user=Session("Username")

'Dimension variables
Dim adoCon         'Holds the Database Connection Object
Dim rs   			'Holds the recordset for the records in the database
Dim strSQL          'Holds the SQL query to query the database 

'Set variables from querystring

cat = request.querystring("cat")
desc = request.querystring("desc")

'Create an ADO connection object
Set adoCon = Server.CreateObject("ADODB.Connection")
 
'Set an active connection to the Connection object using DSN connection
adoCon.Open "DSN=csfl" 
 
'Create an ADO recordset object
Set rs = Server.CreateObject("ADODB.Recordset")

'Access does not support a cursor engine so a client cursor must be used
rs.CursorLocation = adUseClient

rs.Open "SELECT * FROM Log", adoCon, adOpenStatic, adLockOptimistic
		
' when you invoke the method AddNew it adds a new record to the end of
' your current recordset and places your cursor on that record.

rs.AddNew

rs("int_Date") = now()
rs("int_ID") = 1
rs("User") = user
rs("Category") = cat
rs("Description") = desc

rs.Update

' when you invoke the method Update, it updates the database with the
' values of the new record that we just created.  To retrieve the
' value of the Autonumber field we need to update the ADO recordset that
' we currently have.

' When you do a Requery on your recordset, you lose your cursor.  So
' we need to store the location before we do the Requery, then reset
' it after the Requery.

'before the requery, the Autonumber field shows as 0
'Response.Write "<br>ID before Requery = " & rs("RequestID")

bookmark = rs.absolutePosition  ' First, store the location of you cursor
rs.Requery                      ' Next, update your recordset with the data from the database

'after the requery, the absolutePosition is the first record of the recordset
'Response.Write "<br>ID before setting absolutePosition = " & rs("RequestID")

rs.absolutePosition = bookmark  ' Finally, change your cursor back

'now we have the Autonumber value
'Response.Write "<P>Added ID = " & rs("RequestID")
newID = rs("ID")

'close the connection
rs.Close
adoCon.Close

'Reset server objects
Set rs = Nothing
Set adoCon = Nothing

'start again from scratch
Response.Redirect "csfl.html"

%>

<body>

</body>
</html>
