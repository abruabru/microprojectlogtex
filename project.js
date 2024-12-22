const authToken = "90934374|-31949228004238035|90957088";

function saveData() {
    const form = document.getElementById('studentForm');

    const jsonStr = {
        "rollNo": form['rollNo'].value,
        "fullName": form['fullName'].value,
        "class": form['class'].value,
        "birthDate": form['birthDate'].value,
        "address": form['address'].value,
        "enrollmentDate": form['enrollmentDate'].value
    };

    if (!validateFormData(jsonStr)) {
        alert("Please fill in all fields.");
        return;
    }

    const apiURL = 'http://api.login2explore.com:5577/api/iml';
    const requestBody = {
        token: authToken,
        cmd: "POST",
        dbName: "JSONPDB",
        jsonStr: jsonStr
    };

    fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Save response:", data);
            alert('Student data saved successfully!');
            resetForm();
        })
        .catch(error => {
            console.error('Error saving data:', error);
            alert('Failed to save data. Please check the console for more details.');
        });
}

function updateData() {
    const form = document.getElementById('studentForm');

    const jsonStr = {
        "rollNo": form['rollNo'].value,
        "fullName": form['fullName'].value,
        "class": form['class'].value,
        "birthDate": form['birthDate'].value,
        "address": form['address'].value,
        "enrollmentDate": form['enrollmentDate'].value
    };

    if (!validateFormData(jsonStr)) {
        alert("Please fill in all fields.");
        return;
    }

    const apiURL = 'http://api.login2explore.com:5577/api/iml';
    const requestBody = {
        token: authToken,
        cmd: "PUT",
        dbName: "JSONPDB",
        jsonStr: jsonStr
    };

    fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Update response:", data);
            alert('Student data updated successfully!');
            resetForm();
        })
        .catch(error => {
            console.error('Error updating data:', error);
            alert('Failed to update data. Please check the console for more details.');
        });
}

function validateFormData(data) {
    return data.rollNo && data.fullName && data.class && data.birthDate && data.address && data.enrollmentDate;
}

function resetForm() {
    document.getElementById('studentForm').reset();
    document.getElementById('saveBtn').disabled = false;
    document.getElementById('updateBtn').disabled = true;
}