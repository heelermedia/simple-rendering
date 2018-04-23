var pricingTileModels = [{
        type: "pricingTile",
        cardHeader: "Free",
        cardTitle: "$0",
        cardListItems: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
        ],
        buttonText: "Sign up for free"
    },
    {
        type: "pricingTile",
        cardHeader: "Free",
        cardTitle: "$0",
        cardListItems: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
        ],
        buttonText: "Sign up for free"
    },
    {
        type: "pricingTile",
        cardHeader: "Free",
        cardTitle: "$0",
        cardListItems: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
        ],
        buttonText: "Sign up for free"
    },
    {
        type: "pricingTile",
        cardHeader: "Free",
        cardTitle: "$0",
        cardListItems: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
        ],
        buttonText: "Sign up for free"
    }
];


var config = {
    type: 'pricingTile',
    targetId: 'target',
    pricingTileModels: pricingTileModels
};

window.SR = (function () {

    var self = this;

    function renderElement(config) {
        var containerElement = document.getElementById(config.targetId || "#target");
        containerElement.innerHTML = '';
        self[config.type](containerElement, config.pricingTileModels);
    }

    function createElement(type, attributeName, attributeValue) {
        var element = document.createElement(type);
        element.setAttribute(attributeName, attributeValue);
        return element;
    }

    self.pricingTile = function (targetElement, pricingTiles) {

        {
            /* <div class="card mb-4">
                      <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Free</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="">$0 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>10 users included</li>
                          <li>2 GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                      </div>
                    </div> */
        }

        var ptLength = pricingTiles.length;
        for (var j = 0; j < ptLength; j++) {


            //get current card model
            var card = pricingTiles[j];

            //create the card container 
            var cardContainer = createElement('div', 'class', 'card mb-4');
            //create the card header div
            var cardHeaderDiv = createElement('div', 'class', 'card-header');
            //create card header h4
            var h4 = createElement('h4', 'class', 'my-0 font-weight-normal');
            h4.appendChild(document.createTextNode(card.cardHeader));
            //add h4 to card header
            cardHeaderDiv.appendChild(h4);

            //create card body
            var cardBody = createElement('div', 'class', 'card-body');
            //create card body h1
            var h1 = createElement('h1', 'class', 'card-title');
            h1.appendChild(document.createTextNode(card.cardTitle));
            var small = createElement('small', 'class', 'text-muted');
            small.appendChild(document.createTextNode('/ mo'));
            h1.appendChild(small);

            //create the card list
            var ul = createElement('ul', 'class', 'list-unstyled mt-3 mb-4');
            //get list items
            var listItems = card.cardListItems;
            for (var i = 0; i < listItems.length; i++) {
                var li = createElement('li', 'class', '');
                li.appendChild(document.createTextNode(listItems[i]));
                ul.appendChild(li);
            }
            //add body header
            cardBody.appendChild(h1);
            //add the body list
            cardBody.appendChild(ul);
            //create the button element
            var button = createElement('button', 'class', 'btn btn-lg btn-block btn-outline-primary');
            //make sure to set the type attribute on the button
            button.setAttribute('type', 'button');
            //create button elements text node
            var buttonText = document.createTextNode(card.buttonText);
            //add the text node
            button.appendChild(buttonText);
            //build of the rest of the card
            cardContainer.appendChild(cardHeaderDiv);
            cardContainer.appendChild(cardBody);
            cardContainer.appendChild(button);
            //add to target element
            targetElement.appendChild(cardContainer);
        }

    }

    return {
        renderElement: renderElement
    };

}).call({});