class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} ${res.statusText}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._getHeaders(),
    }).then((res) => {
      return this._handleRes(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
    }).then((res) => {
      return this._handleRes(res);
    });
  }
  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then((res) => {
      return this._handleRes(res);
    });
  }


  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: avatar
      })
    }).then((res) => {
      return this._handleRes(res);
    });
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then((res) => {
      return this._handleRes(res);
    });
  }


  setLikeStatus(cardId, checkElementLike) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes/`, {
      method: checkElementLike ? 'DELETE' : 'PUT',
      headers: this._getHeaders(),
    }).then((res) => {
      return this._handleRes(res);
    });
  }


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then((res) => {
      return this._handleRes(res);
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.backend.dumanev.mesto.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;