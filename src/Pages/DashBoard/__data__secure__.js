/* --------------
    BASIC
  ----------------
1. do not show the link to them who should not see it.
only show to the person/types who should see it
2. do not allow to visit the link by typing on url
3. use AdminRoute that will check whether the user is admin or not.
if not admin then redirect to any other pages.you could logOut user and send them to the logIn page as well.
--------------------
TO SEND DATA
----------------------
1. verify JWT token(send authorization token in the header to the server.)
if possible use axios to send jwt token by intercepting the request.
2. if it is an admin activity, make sure only admin user is posting data by using verifyAdmin.

*/