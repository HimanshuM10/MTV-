const apiUrl = 'http://localhost:8000';

function getAllMTV() {
  fetch(`${apiUrl}/getAllMTV`)
    .then(response => response.json())
    .then(data => {
      displayResult(data);
    })
    .catch(error => console.error('Error:', error));
}

function createMTV() {
    const postData = {
      title: document.getElementById('title').value,
      category: document.getElementById('category').value,
      image: document.getElementById('image').value,
      genre: document.getElementById('genre').value,
      status: document.getElementById('status').value
    };
  
    fetch(`${apiUrl}/createMTV`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
    //   .then(data => {
    //     displayResult(data);
    //   })
    alert("Sucessfully created");
      
  }

  function getMTVById() {
    const id = prompt('Enter MTV ID:');
    if (id) {
      fetch(`${apiUrl}/getMTV/${id}`)
        .then(response => response.json())
        .then(data => {
          const resultElement = document.getElementById('result');
          const mtvList = document.getElementById('mtvList');
          mtvList.innerHTML = ''; // Clear previous data
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <strong>ID:</strong> ${data.id}<br>
            <strong>Title:</strong> ${data.title}<br>
            <strong>Category:</strong> ${data.category}<br>
            <strong>Image:</strong> <img src="${item.image}" alt="MTV Image"><br>
            <strong>Genre:</strong> ${data.genre}<br>
            <strong>Status:</strong> ${data.status}
          `;
          //console.log(listItem);
          mtvList.appendChild(listItem);
        //   displayResult(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }
  

function editMTV() {
    const id = prompt('Enter MTV ID to edit:');
    if (id) {
      const updateData = {
        title: prompt('Enter updated title:'),
        category: prompt('Enter updated category:'),
        image: prompt('Enter updated image URL:'),
        genre: prompt('Enter updated genre:'),
        status: prompt('Enter updated status:')
      };
  
      fetch(`${apiUrl}/editMTV/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then(response => response.json())
        
        .catch(error => console.error('Error:', error));
    }
  }

function deleteMTV() {
  const id = prompt('Enter MTV ID to delete:');
  if (id) {
    fetch(`${apiUrl}/deleteMTV/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      
      alert("MTV deleted successfully");
  }
}

// ... (previous script.js code)

function displayResult(data) {
    const resultElement = document.getElementById('result');
    const mtvList = document.getElementById('mtvList');
    mtvList.innerHTML = ''; // Clear previous data
  
    if (Array.isArray(data)) {
      data.map(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>ID:</strong> ${item.id}<br>
          <strong>Title:</strong> ${item.title}<br>
          <strong>Category:</strong> ${item.category}<br>
          <strong>Image:</strong> <img src="${item.image}" alt="MTV Image"><br>
          <strong>Genre:</strong> ${item.genre}<br>
          <strong>Status:</strong> ${item.status}
        `;
        mtvList.appendChild(listItem);
      });
    } else {
      resultElement.innerHTML = JSON.stringify(data, null, 2);
    }
  }

  
