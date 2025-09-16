🔹 Location Object Properties (Examples)
1️⃣ location.hash – Gets/Sets the Anchor Part (#) of a URL
js
Copy
Edit
console.log(location.hash); // "#section1"
location.hash = "#newSection"; // Changes the hash
✅ Example URL:

bash
Copy
Edit
https://example.com/page.html#section1
✅ Updated URL (after setting hash):

bash
Copy
Edit
https://example.com/page.html#newSection
Use case: Navigating to a section on the page.

2️⃣ location.host – Gets/Sets the Hostname & Port
js
Copy
Edit
console.log(location.host); // "example.com:8080"
✅ Example URL:

bash
Copy
Edit
https://example.com:8080/page.html
Use case: Checking the domain and port.

3️⃣ location.hostname – Gets/Sets Only the Hostname
js
Copy
Edit
console.log(location.hostname); // "example.com"
✅ Example URL:

arduino
Copy
Edit
https://example.com/page.html
Use case: Fetching the domain name.

4️⃣ location.href – Gets/Sets the Full URL
js
Copy
Edit
console.log(location.href); // "https://example.com:8080/page.html?user=123#section1"
location.href = "https://google.com"; // Redirects to Google
✅ Use case: Redirecting to another webpage.

5️⃣ location.origin – Gets the Protocol + Hostname + Port
js
Copy
Edit
console.log(location.origin); // "https://example.com:8080"
✅ Example URL:

bash
Copy
Edit
https://example.com:8080/page.html
Use case: Checking the base URL of a website.

6️⃣ location.pathname – Gets/Sets the Path of the URL
js
Copy
Edit
console.log(location.pathname); // "/page.html"
✅ Example URL:

arduino
Copy
Edit
https://example.com/page.html
Use case: Checking which page is loaded.

7️⃣ location.port – Gets/Sets the Port Number
js
Copy
Edit
console.log(location.port); // "8080"
✅ Example URL:

bash
Copy
Edit
https://example.com:8080/page.html
Use case: Identifying the server port.

8️⃣ location.protocol – Gets/Sets the Protocol
js
Copy
Edit
console.log(location.protocol); // "https:"
✅ Example URL:

arduino
Copy
Edit
https://example.com
Use case: Checking if the page is using HTTP or HTTPS.

9️⃣ location.search – Gets/Sets the Query String (?param=value)
js
Copy
Edit
console.log(location.search); // "?user=123&role=admin"
✅ Example URL:

pgsql
Copy
Edit
https://example.com/page.html?user=123&role=admin
Use case: Reading query parameters.

🔹 Location Object Methods (Examples)
🔄 location.assign() – Load a New Document
js
Copy
Edit
location.assign("https://google.com");
✅ Effect: Loads Google in the current tab.

🔄 location.reload() – Reloads the Current Page
js
Copy
Edit
location.reload(); // Reloads the page
location.reload(true); // Forces a hard refresh
✅ Use case: Refreshing the page after an update.

🔄 location.replace() – Replace Current Document
js
Copy
Edit
location.replace("https://google.com");
✅ Effect: Replaces the current page with Google.
🔸 Difference from assign(): replace() does not add an entry to the history, so the user cannot go back.

Property / Method	Description	Example Output
hash	Gets/Sets the anchor (#) part	#section1
host	Gets/Sets hostname & port	"example.com:8080"
hostname	Gets/Sets hostname only	"example.com"
href	Gets/Sets the full URL	"https://example.com/page"
origin	Gets protocol + hostname + port	"https://example.com"
pathname	Gets/Sets the path of the URL	"/page.html"
port	Gets/Sets the port number	"8080"
protocol	Gets/Sets the protocol	"https:"
search	Gets/Sets the query string	"?user=123"
assign()	Loads a new page	"https://google.com"
reload()	Reloads the current page	"Page reloads"
replace()	Replaces the current page	"Redirects to Google"