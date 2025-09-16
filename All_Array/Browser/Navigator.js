00.let browser = navigator.appCodeName;

00.let version = navigator.appVersion;


let platform = navigator.platform;



1. navigator.language (User's Preferred Language)
js
Copy
Edit
console.log(navigator.language); 
✅ Example Output:

txt
Copy
Edit
"en-US"
Use case: Detect user's language and show content accordingly.

2. navigator.credentials (Credential Management API)
js
Copy
Edit
navigator.credentials.get({ password: true }).then(cred => {
    console.log(cred);
}).catch(error => console.log(error));
✅ Expected Output:

txt
Copy
Edit
null // (Or credential object if available)
Use case: Auto-login users with stored credentials.

3. navigator.serviceWorker (Registering a Service Worker)
js
Copy
Edit
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
        console.log('Service Worker registered', reg);
    }).catch(err => console.log('SW Registration failed', err));
}
✅ Expected Output:

txt
Copy
Edit
Service Worker registered ServiceWorkerRegistration {...}
Use case: Enable offline caching, push notifications, and background sync.

4. navigator.doNotTrack (Privacy Preference)
js
Copy
Edit
console.log(navigator.doNotTrack);
✅ Example Output:

txt
Copy
Edit
"1" // If enabled
"0" // If disabled
null // If browser does not support it
Use case: Respect users who opt out of tracking.

5. navigator.geolocation (Get User Location)
js
Copy
Edit
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
}, error => {
    console.log("Error:", error.message);
});
✅ Example Output:

txt
Copy
Edit
37.7749 -122.4194  // (Example coordinates for San Francisco)
Use case: Get user’s location for maps, weather, or delivery tracking.

6. navigator.hardwareConcurrency (Check CPU Cores)
js
Copy
Edit
console.log(navigator.hardwareConcurrency);
✅ Example Output:

txt
Copy
Edit
8  // (Number of logical CPU cores)
Use case: Optimize performance-heavy tasks (e.g., Web Workers).

7. navigator.mediaDevices (Access Camera/Microphone)
js
Copy
Edit
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        console.log("Access granted:", stream);
    })
    .catch(err => console.log("Access denied:", err));
✅ Example Output:

txt
Copy
Edit
Access granted: MediaStream {...}
Use case: Capture video/audio for calls, streaming, or recording.

8. navigator.canShare (Web Share API)
js
Copy
Edit
if (navigator.canShare) {
    console.log("Web Share API supported");
}
✅ Example Output:

txt
Copy
Edit
Web Share API supported
Use case: Share text/images/files via native sharing dialog.

9. navigator.maxTouchPoints (Detect Touchscreen)
js
Copy
Edit
console.log(navigator.maxTouchPoints);
✅ Example Output:

txt
Copy
Edit
5  // (Supports up to 5 simultaneous touch points)
Use case: Adjust UI for touch devices.

10. navigator.permissions (Check Permission Status)
js
Copy
Edit
navigator.permissions.query({ name: 'geolocation' }).then(result => {
    console.log(result.state);
});
✅ Example Output:

txt
Copy
Edit
"granted" // or "denied" or "prompt"
Use case: Handle user permissions for location, notifications, etc.

11. navigator.languages (Preferred Languages List)
js
Copy
Edit
console.log(navigator.languages);
✅ Example Output:

txt
Copy
Edit
["en-US", "fr", "es"]
Use case: Display localized content.

12. navigator.locks (Web Locks API)
js
Copy
Edit
navigator.locks.request("resource-lock", lock => {
    console.log("Lock acquired!");
});
✅ Expected Output:

txt
Copy
Edit
Lock acquired!
Use case: Prevent race conditions in async operations.

13. navigator.pdfViewerEnabled (Detect PDF Viewer)
js
Copy
Edit
console.log(navigator.pdfViewerEnabled);
✅ Example Output:

txt
Copy
Edit
true  // (If built-in PDF viewer is enabled)
Use case: Decide whether to open a PDF in-browser or download it.

14. navigator.requestMIDIAccess (MIDI API for Music Devices)
js
Copy
Edit
navigator.requestMIDIAccess().then(access => {
    console.log("MIDI access granted:", access);
}).catch(error => console.log("MIDI access denied:", error));
✅ Example Output:

txt
Copy
Edit
MIDI access granted: MIDIAccess {...}
Use case: Enable interaction with musical keyboards and controllers.

15. navigator.storage (Check Storage Info)
js
Copy
Edit
navigator.storage.estimate().then(estimate => {
    console.log("Storage Usage:", estimate.usage);
    console.log("Storage Quota:", estimate.quota);
});
✅ Example Output:

txt
Copy
Edit
Storage Usage: 5242880
Storage Quota: 1073741824
Use case: Manage local storage and quota.

16. navigator.userActivation (Detect User Interaction)
js
Copy
Edit
console.log(navigator.userActivation.isActive);
✅ Example Output:

txt
Copy
Edit
true  // (If user interacted with page)
Use case: Determine if an action requires user interaction (e.g., autoplay restrictions).




Property	Purpose
navigator.language	Detect user's language
navigator.credentials	Auto-login with stored credentials
navigator.serviceWorker	Enable offline caching, push notifications
navigator.doNotTrack	Respect user's tracking preference
navigator.geolocation	Get user's location
navigator.hardwareConcurrency	Check CPU cores
navigator.mediaDevices	Access camera/microphone
navigator.canShare	Share data via native sharing
navigator.maxTouchPoints	Detect touch capabilities
navigator.permissions	Manage browser permissions
navigator.languages	Get list of preferred languages
navigator.locks	Prevent concurrent operations
navigator.pdfViewerEnabled	Check if PDF viewer is enabled
navigator.requestMIDIAccess	Interact with MIDI devices
navigator.storage	Check storage availability
navigator.userActivation	Detect if user interacted