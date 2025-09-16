🛠 Real-World Example: Custom Navigation Buttons
html
Copy
Edit
<button onclick="history.back()">🔙 Go Back</button>
<button onclick="history.forward()">🔜 Go Forward</button>
<button onclick="history.go(-2)">⬅️ Go Back 2 Pages</button>
<button onclick="history.go(1)">➡️ Go Forward 1 Page</button>
<p>History length: <span id="historyLength"></span></p>

<script>
document.getElementById("historyLength").textContent = history.length;
</script>
✅ What This Does:

Displays the history length.

Provides buttons to navigate back/forward.