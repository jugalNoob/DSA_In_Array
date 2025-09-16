🔹 Screen Object Properties (Examples)
1️⃣ screen.availHeight – Available Screen Height
(Excludes taskbars, docked toolbars, etc.)

js
Copy
Edit 
console.log(screen.availHeight);
✅ Example Output:

cpp
Copy
Edit
900 // If the screen is 1080px but has a taskbar of 180px
🔹 Use case:

To determine the available height for fullscreen applications.

2️⃣ screen.availWidth – Available Screen Width
(Excludes vertical UI elements like sidebars)

js
Copy
Edit
console.log(screen.availWidth);
✅ Example Output:

cpp
Copy
Edit
1920 // On a 1920x1080 screen
🔹 Use case:

Helps in responsive UI without interfering with OS UI elements.

3️⃣ screen.colorDepth – Color Depth (in bits per pixel)
(Specifies the number of bits used to represent colors)

js
Copy
Edit
console.log(screen.colorDepth);
✅ Example Output:

cpp
Copy
Edit
24 // Common values: 8, 16, 24, 32
🔹 Use case:

Checking if a device supports high-quality images.

4️⃣ screen.height – Total Screen Height
(Includes taskbars and UI elements)

js
Copy
Edit
console.log(screen.height);
✅ Example Output:

cpp
Copy
Edit
1080 // Full screen height
🔹 Use case:

Helps in screen size detection.

5️⃣ screen.pixelDepth – Bits per Pixel (Color Resolution)
js
Copy
Edit
console.log(screen.pixelDepth);
✅ Example Output:

pgsql
Copy
Edit
24 // Similar to `colorDepth`
🔹 Use case:

Determines image rendering quality.

6️⃣ screen.width – Total Screen Width
js
Copy
Edit
console.log(screen.width);
✅ Example Output:

cpp
Copy
Edit
1920 // Full screen width
🔹 Use case:

Helps in detecting device resolution.

🎯 Summary Table
Property	Description	Example Output
availHeight	Available screen height (excluding UI elements)	900
availWidth	Available screen width (excluding UI elements)	1920
colorDepth	Bits per pixel for color representation	24
height	Total screen height	1080
pixelDepth	Color resolution in bits per pixel	24
width	Total screen width	1920





📌 Real-World Example: Adjust UI Based on Screen Size
html
Copy
Edit
<p id="screenInfo"></p>

<script>
document.getElementById("screenInfo").innerHTML = 
    `Screen Width: ${screen.width}px <br>
    Screen Height: ${screen.height}px <br>
    Available Width: ${screen.availWidth}px <br>
    Available Height: ${screen.availHeight}px <br>
    Color Depth: ${screen.colorDepth} bits <br>
    Pixel Depth: ${screen.pixelDepth} bits`;
</script>