async function fetchUniversities() {
    const country = document.getElementById('countryInput').value.trim();
    if (!country) {
        alert('Please enter a country name');
        return;
    }

    try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
        const universities = await response.json();
        displayUniversities(universities);
    } catch (error) {
        console.error('Error fetching universities:', error);
        alert('Failed to fetch universities. Please try again later.');
    }
}

function displayUniversities(universities) {
    const universityList = document.getElementById('universityList');
    universityList.innerHTML = '';

    if (universities.length === 0) {
        universityList.innerHTML = '<p>No universities found for this country.</p>';
        return;
    }

    universities.forEach(university => {
        const universityItem = document.createElement('div');
        universityItem.className = 'university-item';
        
        universityItem.innerHTML = `
            <h2>${university.name}</h2>
            <p><strong>Province:</strong> ${university['state-province'] || 'N/A'}</p>
            <p><strong>Country:</strong> ${university.country}</p>
            <p><a href="${university.web_pages[0]}" target="_blank">Visit website</a></p>
        `;
        
        universityList.appendChild(universityItem);
    });
}
