class serialsApi {
  static getSerials() {
    const api = new Promise((resolve, reject) => fetch('http://localhost:8000/serials', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => reject(error)));

    return api;
  }

  static updateSerial(serial) {
    const api = new Promise((resolve, reject) => fetch(`http://localhost:8000/serials/${serial.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(serial)
    }).then(response => response.json()).then(data => resolve(data)).catch(error => reject(error)));

    return api;
  }

  static createSerial(serial) {
    const api = new Promise((resolve, reject) => fetch('http://localhost:8000/serials/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(serial)
    }).then(response => response.json()).then(data => resolve(data)).catch(error => reject(error)));

    return api;
  }

  static deleteSerial(serial) {
    const api = new Promise((resolve, reject) => fetch(`http://localhost:8000/serials/${serial.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then(data => resolve(data)).catch(error => reject(error)));

    return api;
  }
}

export default serialsApi;
