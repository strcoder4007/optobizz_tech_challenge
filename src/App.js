import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cnt: 0,
            contacts: [
                {
                    name: "fake_user#1",
                    favorite: false
                },
                {
                    name: "fake_user#2",
                    favorite: true
                },
                {
                    name: "fake_user#3",
                    favorite: false
                },
                {
                    name: "fake_user#4",
                    favorite: true
                }
            ],
            showContacts: true
        }
    }

    showFavoriteFunc() {
        this.setState({showContacts: true});
        document
            .getElementById('favoritesSection')
            .style
            .backgroundColor = "#222";
        document
            .getElementById('contactsSection')
            .style
            .backgroundColor = "#333";
    }

    showContactFunc() {
        this.setState({showContacts: false});
        document
            .getElementById('favoritesSection')
            .style
            .backgroundColor = "#333";
        document
            .getElementById('contactsSection')
            .style
            .backgroundColor = "#222";
    }

    addContact() {
        let junk = this.state.contacts;
        var cnt = this.state.cnt;
        this.setState({
            cnt: cnt+1
        })
        junk.push({
            name: "new_user#"+cnt,
            favorite: cnt%2 ? true : false
        })
        this.setState({
            contacts: junk
        })
    }

    render() {
        var showContacts = this.state.showContacts;
        var contacts = this.state.contacts.slice(0).reverse().map(contact => <li className="contactsSection">{contact.name}</li>);
        var favorites = this.state.contacts.slice(0).reverse().map(contact => { if(contact.favorite) return <li className="favoritesSection">{contact.name}</li>});
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Reactive Contacts</h1>
                </header>
                <div className="container">
                    <div className="row options">
                        <div
                            className="col contacts"
                            id="contactsSection"
                            onClick={this
                            .showFavoriteFunc
                            .bind(this)}>
                            <p className="optionsName">Contacts</p>
                        </div>
                        <div
                            className="col favorites"
                            id="favoritesSection"
                            onClick={this
                            .showContactFunc
                            .bind(this)}>
                            <p className="optionsName">Favorites</p>
                        </div>
                    </div>
                    <div className="row entries">{showContacts ? (<ol className="v">{contacts}</ol>) : (<ol className="v">{favorites}</ol>)}</div>
                </div>
                <img
                onClick={this.addContact.bind(this)}
                    className="floatingBtn"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAODSURBVGhD7ZnLSxVRHMeN3hL0hNrkLshWYbXrsamoFkUgmJukhQYF2T9Qm4KK3BpK2KYHUZuiB7VpaKOo917lIhHSi0qDnlCkghdvnzP8pOF47nXunHkhfuHD0Tnn9/t9fzN35s7MrZrXXFUmk6np7+9vgk7+dhhHGX9DEQr8/5PxNTyAi319fXsZqyU8WXV3d6/BTCsmGVzDlTJG7O1sNnugWCwukLTxCQPr4ApM73FraGgQ6mNpSBWhaDMFv+lGQsThCNVKyfDV29u7lgYeGwpHwTjNtEjp8ETizTTxQSsWB12O4ywSG3Ziz2wn4XetQGywAx8NDQ0tETvBlMvltpDoq6lAzNxDC8VWZVLnBAk+agkTgx3aJtb8S12dYjyxfYGfKb5ED4tFfyKwWU+UBtTHXH0Ji83yko9UYie3DzrEanmxUH1jmxKkhQIXoU1i1yx12Dh8fwzBaaNLLJtFE2cMQbb8gEltmy3jAwMDq8T2TNFI1hAUGPKpW/lqxkZ9zpaStzBM1uiLbaGBvOTeqc+FwFPXuC6KNhkWWxFxI+oRYrFr3iuKqic7U0BgIm5E5a9zzXvFxpemxTbE0Eija94rNn42LbYhhkbOuea9YiLwYysJRyBj4K7Kzd3CVsMcoZkc44Q3VyUQO/NG0rTQDyRTb0cCvw3hMnpCz+kXal+TNP/FRNAvrUnMNMA2HfU8o3LzYLTCNM/d7A7M3DTk9AWx7a55r9j4y7TYBnJGfY5ccs17xcZXpsU2RN0ItLrmvWLjQ22RNTEckUOuea+YuKAvtCWGI1LjmveKovsMC62IuJG3rnFdPIssp/BfQ0BgIm6k9JMik3e0xVbQyAQch1umeRu4dO8R2zNFwf2moBTyruzLbnkNNGgITBunxHJp0Ui9ITBNfHIcZ5nYLS05Ki8MCVIB58YxsTq7uA+qJWhMT5I07ODnYtG/CDppSpYU+Bnt6elZL/YqE8HXTUkTYKzs5XY2qVf5JAn9HqxCChW/vDZpeHh4Kcnua8njYhyOihV7qSPDx6wNprRCUfIFdomFcEUjRyDyX7Co8Yzn/A1SNhrl8/nVFOuAgrd4GNDACJf+BikVj9SrfQrfgMBvQaYhx3vG076+saMSBlayF1sYn2DI908SrH0DncTuLnsDmITUb+KYqwP19v0841VlFtr5/zKc5VJ6EDZKyLzmqKqq/gHbLuzmOd95ygAAAABJRU5ErkJggg=="/>
            </div>
        );
    }
}

export default App;
