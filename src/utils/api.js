class Api {
    constructor({ baseUrl }) {
        this._url = baseUrl;
    }

    // retrieve the profile info saved in the server
    getProfile(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // gather cards from server
    getCardList(token) {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // change likes
    changeLikeCardStatus(cardId, likeStatus, token) {
        if (likeStatus) {
            return fetch(`${this._url}/cards/likes/${cardId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    return this._checkResponse(res)
                });
        }
        else {
            return fetch(`${this._url}/cards/likes/${cardId}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    return this._checkResponse(res)
                });
        }
    }

    // delete card from server
    deleteCard(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // update profile info on server based on user changes
    changeProfile(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // add card to server
    addCard(data, token) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then((res) => {
            return this._checkResponse(res)
        });
    }

    changeAvatar(link, token) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: link
            })
        })
        .then((res) => {
            return this._checkResponse(res)
        });
    }

    // Check if response is valid
    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }
}

const api = new Api({
    baseUrl: "https://www.boydaround.students.nomoreparties.site",
    // auth: "aa7e78f0-aba7-4938-a0ab-42cab952d914"
})

export default api;