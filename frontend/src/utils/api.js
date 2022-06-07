class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
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
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
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
      headers: this._headers,
    })
      .then(this._checkResponse)
  }


  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    'content-type': 'application/json',
    'authorization': '2e5af95a-25b4-4742-9ead-1326c8073602'
  }
})

export default api;