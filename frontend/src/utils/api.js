class Api {
  constructor({ options }) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._getHeaders(),
    })
      .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    })
      .then(this._checkResponse)
  }

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._checkResponse)
  }

  editAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkResponse)
  }

  setLikeStatus(cardId, checkElementLike) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: checkElementLike ? 'DELETE' : 'PUT',
      headers: this._getHeaders(),
    })
      .then(this._checkResponse)
  }


  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    })
      .then(this._checkResponse)
  }
}

const api = new Api({
  url: 'api.backend.dumanev.mesto.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api;