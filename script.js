// script.js
document.addEventListener("DOMContentLoaded", function () {
    const jsonDataDiv = document.getElementById('paywall-table-body');

    // Function to fetch and populate the paywall table
    function fetchAndPopulateTable() {
        // Make a fetch request to your PHP script
        fetch('scripts/lnd-paywalls.php')
            .then((response) => response.json())
            .then((data) => {
                // Create table rows and populate them with data
                jsonDataDiv.innerHTML = ''; // Clear previous content
                data.forEach((paywall) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${paywall.id}</td>
                        <td>${paywall.wallet}</td>
                        <td>${paywall.url}</td>
                        <td>${paywall.memo}</td>
                        <td>${paywall.description}</td>
                        <td>${paywall.amount}</td>
                        <td>${new Date(paywall.time * 1000).toLocaleString()}</td>
                        <td>${paywall.remembers ? 'Yes' : 'No'}</td>
                    `;
                    jsonDataDiv.appendChild(row);
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    // Initial fetch and populate
    fetchAndPopulateTable();

    // Theme switch functionality (same as before)
    // ...

    // Add a button or event listener to trigger data refresh (if needed)
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', function () {
        fetchAndPopulateTable();
    });
});
