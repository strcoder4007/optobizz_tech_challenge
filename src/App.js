import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cnt: 0,
            foundFav: 0,
            showInputBox: false,
            contacts: [],
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

    showInputBox() {
        this.setState({
            showInputBox: true
        })        
    }

    addContact(name) {
        let junk = this.state.contacts;
        var cnt = this.state.cnt;
        this.setState({
            cnt: cnt+1,
            showInputBox: false
        })
        junk.push({
            name: name,
            favorite: false,
            id: cnt
        })
        this.setState({
            contacts: junk
        })
    }

    addFavorite(index) {
        let junk = this.state.contacts;
        for(let i = 0; i < junk.length; i++) {
            if(junk[i].id == index) {
                junk[i].favorite = true;
                let temp = this.state.foundFav;
                this.setState({
                    foundFav: temp+1
                })
            }
        }
        this.setState({
            contacts: junk
        });
    }

    delFavorite(index) {
        let junk = this.state.contacts;
        for(let i = 0; i < junk.length; i++) {
            if(junk[i].id == index) {
                junk[i].favorite = false;
                let temp = this.state.foundFav;
                this.setState({
                    foundFav: temp-1
                })
            }
        }
        this.setState({
            contacts: junk
        });
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            let newContact = document.getElementById("inputBox").value;
            this.addContact(newContact);
        }
      }

    render() {
        var showContacts = this.state.showContacts;
        var showInputBox = this.state.showInputBox;
        var contacts = this.state.contacts.length ? this.state.contacts.slice(0).reverse().map((contact, index) => <li className="contactsSection row">
            <div className="col">{contact.name}</div>
            {
                contact.favorite ? (<div className="col favBtn" title="remove from favorites"  onClick={this.delFavorite.bind(this, contact.id)}><img height="20px" width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOvSURBVGhD7ZlNSBRhGMeVoE/IIogM+oCiIui7CMK65KU6FJE3YcNV1w88LB2k8mSXoC5RhxKColNCYF4KAqtzINhVpISoRE2jOhnW79mexHl9Z+add9fcZP/wZ23m+f+eZ3Z33p2ZykoqqaSSFq9qamqW1NfXH29oaOjED/GzxsbGp7iLv+vQRi2NVUtLy4ZMJpMmdw/3KusBr528VkkvLS2cUqnUchpcosFn/CvCP6nrYcDdGp0j3ogd1DyRWiMbMDWfcJYDWqrR/ETj/QDf2ZqFWYYIe0fZ/8KsjzKsId6YfRr3E5AzwL6b8DiTu6aIgNi+jf3TZn2cyX3jYE4rJpkAHAbww4TGmcxUc3PzJsUExL7rtoyLZRb5dijKTbW1tasIDtuADn6smIDkuw5zxFKfxO/xSkXGi+KOWeGkrlJMQHw1LlhqE5s347Iio9XW1raMwKQJcDFN+hUzR+xPdJJHeEJmVGy4GEZOcBsg1nyHLyomIJheJ3mY4Z1SdLgoumMLx5ncaDabXaGYgNjnfZLbDO+WosNFUa8tHGdy1iVXxP7buDvC49jKtVlmVHS4KHpjC0eZzBSvmxWRSGSrySb62smMGg8XRS9t4Rhbl9w4tba2rqPfRwsv0mT6FBEuCrvMoINPaDyRyMkFp40X57uKCBdF54xQpHl3hlmtDkVZ0QGRy9h4LuY36axiwiVrNE2+2AA+hjWk6BmxfRfbE1/+qMedfkdEFOfzy266W7E56aVKv6XO1R2KihfFFTQbMwC+bldsTvz7hrHf2TITn8ZqRbmJUJ0NltRwqhUpB3ESe//Cy0yKSqRygj5LccBc0q8VmO9S+9dkX8tMwkos7sG3APA+8cnOnOj83WOrcfQEK9VWRfkJyHkDmsS5E52D8F5qxXILkBsmXwHzPUHbcT5LrXyqN3WM/CUPEgDK4xprszDLfTa5fJba52EPMbwFVJbkt0ajON+3bHOy9qrQ9oVVU1PTeuCDsxtGWJ5b+S61gxxIpbadH6XT6e00+WBpXhDDHpEe2m5+RbM9NPW6r4/xpLC1zb8RDY9JY2MQb8P7yqv1Ccy8i+ZHcCGulCfgHFXswogF4ABDjFqGczLZMXxQcQsrTs69DJP4KaJkJKuY4hB3gvLfBc5P7aWWT3OnxotLDFfJkAPm0BYPSK3GilMMKVcAfcbgs/0qlUqt0fLilt73PzIPQrY5328XkcoZ/gqWy5RpDuKqbPuz6z+U3EsU7H6ipJJKKmmRqKzsNwNOWLQ0z8XoAAAAAElFTkSuQmCC" />
            </div>) 
            : 
            (<div className="col favBtn" title="add to favorites" onClick={this.addFavorite.bind(this, contact.id)}>
                <img height="20px" width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMRSURBVGhD7ZlNaBNBGIZT/0WxFxVP/qGeBG/qQYSeFEVv0Us0Jtn81gjpRbSHnCyCvSi9ePKgRxGUIvQg1IPiqaWiiChILUjFKhQkVNHqM/rJbqaTdvM/wX3hZTYz3/fO++3sZpPZUIAAAQL8HwiHw6tSqdRK+Vg3IpHIOjlsHjC9HNOHk8nkIO047UfaX4ocz8KnHA+k0+l9krIo8vn8asdxTpF3m7zX8IdozcFJOALP07dVUuoHgifhSzWRT45i8qCkl0GtIloFYqa1HCOJ/Ul7C9ZeEGdtA0IPvMJ+KQauFYvFFSIXYrV20z+mx/oheSVOzjmR8g8m3Y7AC12wWmJgOBqNrkFvP58/6+PVEr1B7HX9dbkESOgm4bkuUgcfoffF0F8T0bokVhcHwff0ZJtIIeqyPSp2zeASOKYnWso3sOJXfxeDE55g29krvsvBkh0wBFtL/I6J9XIwOKAH2854PL5N7LugQvV0NibYSjxHxb4LOidNwTYTz/1i3wUD3/RA20khN8S+Czq/m4JtJp6HxL4LOmdMwTYTz1fEvgsGxvVA20khabHvgoE7emAH8JDYd0F1WUOgtcRvqVAorBX7LrLZ7E5Tgq2kkBGxvhAEPNETbCWFnBHbC8Gv37OmJNtIETPGy+of1F9Tgt6aki3jRbFcGQSd1pKsIif6ve+tIxIe6gIW8YTYXBq5XG4LCVOaQNvJalwXi/6hdj5InDMJtoN4eaz2xcRedUAgpgu2iVOxWGyT2KoNiPTBeY9oS6lubsdx9oid+oBgL2x5MRTxjiJ2iI3GgHsmgXDL/rMw1yvaxm1ie4F4D/ykT9poMscwbbdM2xyopWaSZu1/zVPEVfUaQ6ZrLtTvHCYcUhNrRurhNJrHZYrWgtU5wuQfDKaq5f1MJrNZZNsDTGyEdz2mquFXTkZSpOwApmKszqxmtCKJfZZIJHZJul2QL4JR3bRGtX922fs2y0pgcBln+wIsaQUoTvA88vXC1Bpw8+6lGPVQ+1MExzfVazgZ7izwd2A9Rahtpoh0BQjQWQiFfgOp0Ikm6WGrGQAAAABJRU5ErkJggg==" />
                </div>)
        }
    </li>) : (<li>no contacts</li>);
var favorites = this.state.foundFav ? this.state.contacts.slice(0).reverse().map((contact, index) => contact.favorite ? (<li className="favoritesSection row">
            <div className="col">{contact.name}</div>
            <div className="col favBtn" title="remove from favorites"  onClick={this.delFavorite.bind(this, contact.id)}>
                <img height="20px" width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOvSURBVGhD7ZlNSBRhGMeVoE/IIogM+oCiIui7CMK65KU6FJE3YcNV1w88LB2k8mSXoC5RhxKColNCYF4KAqtzINhVpISoRE2jOhnW79mexHl9Z+add9fcZP/wZ23m+f+eZ3Z33p2ZykoqqaSSFq9qamqW1NfXH29oaOjED/GzxsbGp7iLv+vQRi2NVUtLy4ZMJpMmdw/3KusBr528VkkvLS2cUqnUchpcosFn/CvCP6nrYcDdGp0j3ogd1DyRWiMbMDWfcJYDWqrR/ETj/QDf2ZqFWYYIe0fZ/8KsjzKsId6YfRr3E5AzwL6b8DiTu6aIgNi+jf3TZn2cyX3jYE4rJpkAHAbww4TGmcxUc3PzJsUExL7rtoyLZRb5dijKTbW1tasIDtuADn6smIDkuw5zxFKfxO/xSkXGi+KOWeGkrlJMQHw1LlhqE5s347Iio9XW1raMwKQJcDFN+hUzR+xPdJJHeEJmVGy4GEZOcBsg1nyHLyomIJheJ3mY4Z1SdLgoumMLx5ncaDabXaGYgNjnfZLbDO+WosNFUa8tHGdy1iVXxP7buDvC49jKtVlmVHS4KHpjC0eZzBSvmxWRSGSrySb62smMGg8XRS9t4Rhbl9w4tba2rqPfRwsv0mT6FBEuCrvMoINPaDyRyMkFp40X57uKCBdF54xQpHl3hlmtDkVZ0QGRy9h4LuY36axiwiVrNE2+2AA+hjWk6BmxfRfbE1/+qMedfkdEFOfzy266W7E56aVKv6XO1R2KihfFFTQbMwC+bldsTvz7hrHf2TITn8ZqRbmJUJ0NltRwqhUpB3ESe//Cy0yKSqRygj5LccBc0q8VmO9S+9dkX8tMwkos7sG3APA+8cnOnOj83WOrcfQEK9VWRfkJyHkDmsS5E52D8F5qxXILkBsmXwHzPUHbcT5LrXyqN3WM/CUPEgDK4xprszDLfTa5fJba52EPMbwFVJbkt0ajON+3bHOy9qrQ9oVVU1PTeuCDsxtGWJ5b+S61gxxIpbadH6XT6e00+WBpXhDDHpEe2m5+RbM9NPW6r4/xpLC1zb8RDY9JY2MQb8P7yqv1Ccy8i+ZHcCGulCfgHFXswogF4ABDjFqGczLZMXxQcQsrTs69DJP4KaJkJKuY4hB3gvLfBc5P7aWWT3OnxotLDFfJkAPm0BYPSK3GilMMKVcAfcbgs/0qlUqt0fLilt73PzIPQrY5328XkcoZ/gqWy5RpDuKqbPuz6z+U3EsU7H6ipJJKKmmRqKzsNwNOWLQ0z8XoAAAAAElFTkSuQmCC" />
            </div>
        </li>)
        :
        (<div></div>)
    )
    :
    (<li>no favorites</li>);
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
                    {
                        showInputBox ? (<div className="row entries"><input placeholder="enter name..." type="text" className="inputBox" id="inputBox" onKeyPress={this.handleKeyPress} /></div>) : (<div></div>)
                    }
                    <div className="row entries">{showContacts ? (<ol className="v">{contacts}</ol>) : (<ol className="v">{favorites}</ol>)}</div>
                </div>
                <img
                onClick={this.showInputBox.bind(this)}
                    className="floatingBtn"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAODSURBVGhD7ZnLSxVRHMeN3hL0hNrkLshWYbXrsamoFkUgmJukhQYF2T9Qm4KK3BpK2KYHUZuiB7VpaKOo917lIhHSi0qDnlCkghdvnzP8pOF47nXunHkhfuHD0Tnn9/t9fzN35s7MrZrXXFUmk6np7+9vgk7+dhhHGX9DEQr8/5PxNTyAi319fXsZqyU8WXV3d6/BTCsmGVzDlTJG7O1sNnugWCwukLTxCQPr4ApM73FraGgQ6mNpSBWhaDMFv+lGQsThCNVKyfDV29u7lgYeGwpHwTjNtEjp8ETizTTxQSsWB12O4ywSG3Ziz2wn4XetQGywAx8NDQ0tETvBlMvltpDoq6lAzNxDC8VWZVLnBAk+agkTgx3aJtb8S12dYjyxfYGfKb5ED4tFfyKwWU+UBtTHXH0Ji83yko9UYie3DzrEanmxUH1jmxKkhQIXoU1i1yx12Dh8fwzBaaNLLJtFE2cMQbb8gEltmy3jAwMDq8T2TNFI1hAUGPKpW/lqxkZ9zpaStzBM1uiLbaGBvOTeqc+FwFPXuC6KNhkWWxFxI+oRYrFr3iuKqic7U0BgIm5E5a9zzXvFxpemxTbE0Eija94rNn42LbYhhkbOuea9YiLwYysJRyBj4K7Kzd3CVsMcoZkc44Q3VyUQO/NG0rTQDyRTb0cCvw3hMnpCz+kXal+TNP/FRNAvrUnMNMA2HfU8o3LzYLTCNM/d7A7M3DTk9AWx7a55r9j4y7TYBnJGfY5ccs17xcZXpsU2RN0ItLrmvWLjQ22RNTEckUOuea+YuKAvtCWGI1LjmveKovsMC62IuJG3rnFdPIssp/BfQ0BgIm6k9JMik3e0xVbQyAQch1umeRu4dO8R2zNFwf2moBTyruzLbnkNNGgITBunxHJp0Ui9ITBNfHIcZ5nYLS05Ki8MCVIB58YxsTq7uA+qJWhMT5I07ODnYtG/CDppSpYU+Bnt6elZL/YqE8HXTUkTYKzs5XY2qVf5JAn9HqxCChW/vDZpeHh4Kcnua8njYhyOihV7qSPDx6wNprRCUfIFdomFcEUjRyDyX7Co8Yzn/A1SNhrl8/nVFOuAgrd4GNDACJf+BikVj9SrfQrfgMBvQaYhx3vG076+saMSBlayF1sYn2DI908SrH0DncTuLnsDmITUb+KYqwP19v0841VlFtr5/zKc5VJ6EDZKyLzmqKqq/gHbLuzmOd95ygAAAABJRU5ErkJggg=="/>
            </div>
        );
    }
}

export default App;
