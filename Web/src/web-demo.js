"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callUpdatedCustomer = exports.callNewCustomer = exports.main = void 0;
// Importing the necessary modules from the onslip api
var onslip_360_web_api_1 = require("@onslip/onslip-360-web-api");
// Creating an array of Tag objects, representing different tags
var tags = [
    { id: 11, name: 'VIP' }, // Tag with id 11 and name 'VIP'
    { id: 12, name: 'Hög Lojalitet' }, // Tag with id 12 and name 'Hög Lojalitet'
];
// Creating a mapping from tag id to tag name
var tagMappings = {
    11: 'VIP', // Mapping tag id 11 to 'VIP'
    12: 'Hög Lojalitet', // Mapping tag id 12 to 'Hög Lojalitet'
};
// Creating a mapping from user id to user name
var userMappings = {
    1: 'Oliver Ekström' // Mapping user id 1 to 'Oliver Ekström'
};
// Function to get the user name based on user ID from userMappings, defaulting to 'Unknown User' if not found
var getUserName = function (userId) { return userMappings[userId] || 'Unknown User'; };
// Mapping of country codes to country names
var countryMappings = {
    // Mapping each country code to its corresponding name (Code: Name)
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua and Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BQ': 'Bonaire, Sint Eustatius and Saba',
    'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'CV': 'Cabo Verde',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'KY': 'Cayman Islands',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CD': 'Congo, Democratic Republic of the',
    'CG': 'Congo, Republic of the',
    'CK': 'Cook Islands',
    'CR': 'Costa Rica',
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CW': 'Curaçao',
    'CY': 'Cyprus',
    'CZ': 'Czechia',
    'CI': 'Côte d\'Ivoire',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'SZ': 'Eswatini',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (Malvinas)',
    'FO': 'Faroe Islands',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island and McDonald Islands',
    'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KP': 'Korea, Democratic People\'s Republic of',
    'KR': 'Korea, Republic of',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia, Federated States of',
    'MD': 'Moldova, Republic of',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'MP': 'Northern Mariana Islands',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestine, State of',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'MK': 'Republic of North Macedonia',
    'RO': 'Romania',
    'RU': 'Russian Federation',
    'RW': 'Rwanda',
    'RE': 'Réunion',
    'BL': 'Saint Barthélemy',
    'SH': 'Saint Helena, Ascension and Tristan da Cunha',
    'KN': 'Saint Kitts and Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin (French part)',
    'PM': 'Saint Pierre and Miquelon',
    'VC': 'Saint Vincent and the Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome and Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SX': 'Sint Maarten (Dutch part)',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands',
    'SS': 'South Sudan',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SJ': 'Svalbard and Jan Mayen',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania, United Republic of',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad and Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks and Caicos Islands',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom of Great Britain and Northern Ireland',
    'US': 'United States of America',
    'UM': 'United States Minor Outlying Islands',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela (Bolivarian Republic of)',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands (British)',
    'VI': 'Virgin Islands (U.S.)',
    'WF': 'Wallis and Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe',
    'AX': 'Åland Islands',
};
// Creating a reverse version off countryMappings (Name: Code)
var countryMappingsReverse = Object.fromEntries(Object.entries(countryMappings).map(function (_a) {
    var code = _a[0], name = _a[1];
    return [name, code];
}));
// Function to get the country code based on country name or abbreviation
function getCountryCode(country) {
    // If the input is a 2-letter abbreviation in uppercase letters
    if (country.length === 2 && /^[A-Z]+$/.test(country)) {
        return country; // Return the abbreviation directly
    }
    // Otherwise, format the country name and search for its corresponding abbreviation in the reverse mapping
    var formattedCountryName = country.trim().toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    return countryMappingsReverse[formattedCountryName]; // Return the abbreviation if found, otherwise undefined
}
// Function to populate the filter dropdown menu with tags
function populateFilterDropdown() {
    var filterMenu = document.getElementById('filterMenuId');
    if (!filterMenu) {
        console.error("Filter menu element not found"); // Log an error if the filter menu element is not found
        return;
    }
    // Loop through each tag and create a corresponding dropdown item
    tags.forEach(function (tag) {
        var tagElement = document.createElement('a'); // Create a new <a> element
        tagElement.style.display = 'block'; // Set display style to block
        tagElement.textContent = tag.name; // Set the text content to the tag name
        tagElement.dataset.tagId = tag.id.toString(); // Set the tag id as a data attribute
        tagElement.dataset.clickCount = '0'; // Set the initial click count to 0
        tagElement.addEventListener('click', handleFilterButtonClick); // Add event listener for click events
        filterMenu.appendChild(tagElement); // Append the tag element to the filter menu
    });
}
// Event handler for tag filter button click events
function handleFilterButtonClick(event) {
    var target = event.target; // Get the target element of the click event
    if (!(target instanceof HTMLElement))
        return; // Ensure the target is an HTMLElement
    var tagId = parseInt(target.dataset.tagId || ''); // Get the tag id from the data attribute
    var clickCount = parseInt(target.dataset.clickCount || '0'); // Get the current click count
    clickCount = (clickCount + 1) % 3; // Increment the click count modulo 3
    target.dataset.clickCount = clickCount.toString(); // Update the click count in the data attribute
    // Define styles for different filter states
    var stateStyles = [
        { color: 'black', included: false, excluded: false },
        { color: 'green', included: true, excluded: false },
        { color: 'red', included: false, excluded: true }
    ];
    var state = stateStyles[clickCount]; // Get the style for the current click count
    target.style.color = state.color; // Apply the color style to the target element
    // Update includedTags and excludedTags based on the filter state
    if (state.included) {
        includedTags.add(tagId); // Add the tag id to the included tags set
        excludedTags.delete(tagId); // Remove the tag id from the excluded tags set
    }
    else if (state.excluded) {
        includedTags.delete(tagId); // Remove the tag id from the included tags set
        excludedTags.add(tagId); // Add the tag id to the excluded tags set
    }
    else {
        includedTags.delete(tagId); // Remove the tag id from both included and excluded tags sets
        excludedTags.delete(tagId);
    }
    applyFilters(); // Apply the filters based on the updated includedTags and excludedTags sets
}
// Function to apply filters based on includedTags, excludedTags, and search term
function applyFilters() {
    var _a;
    var customerCards = document.querySelectorAll('.customer-card'); // Select all customer cards
    var searchTerm = (_a = document.getElementById('searchInput')) === null || _a === void 0 ? void 0 : _a.value.trim().toLowerCase(); // Get search term from input field
    customerCards.forEach(function (card) {
        var _a;
        // Extract labels from data attribute and convert to array of numbers
        var customerLabels = (card.dataset.labels || '').split(',').map(Number);
        // Extract card info text and convert to lowercase, default to empty string if card info element not found
        var cardInfoElement = card.querySelector('.card-info');
        var cardInfo = cardInfoElement ? ((_a = cardInfoElement.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '' : '';
        // Determine if card should be shown based on included and excluded tags, and search term
        var showCard = includedTags.size === 0 || customerLabels.some(function (label) { return includedTags.has(label); });
        if (showCard && excludedTags.size > 0) {
            showCard = !customerLabels.some(function (label) { return excludedTags.has(label); });
        }
        if (searchTerm && !card.classList.contains('has-vouchers') && !cardInfo.includes(searchTerm)) {
            showCard = false;
        }
        // Set display style and dataset attribute based on whether card should be shown
        card.style.display = showCard ? 'block' : 'none';
        card.dataset.filtered = showCard ? 'showing' : 'hidden';
    });
    // Sort customer cards if search term is empty
    if (!searchTerm) {
        sortCustomerCards();
    }
}
// Function to sort customer cards by customer number
function sortCustomerCards() {
    var container = document.getElementById('customers-container');
    if (container) {
        // Select all customer cards, sort them based on customer number, and append them back to the container
        var sortedCards = Array.from(container.querySelectorAll('.customer-card')).sort(function (a, b) {
            var _a, _b;
            var customerNumberA = parseInt(((_a = a.querySelector('p[data-customer-number]')) === null || _a === void 0 ? void 0 : _a.textContent) || '0');
            var customerNumberB = parseInt(((_b = b.querySelector('p[data-customer-number]')) === null || _b === void 0 ? void 0 : _b.textContent) || '0');
            return customerNumberA - customerNumberB;
        });
        container.innerHTML = '';
        sortedCards.forEach(function (card) { return container.appendChild(card); });
    }
}
// Function to handle filtering cards
function filterCards() {
    applyFilters();
}
// Function to show the dropdown button
function showButton() {
    var button = document.getElementById('buttonId');
    if (button) {
        button.style.visibility = 'visible';
        button.style.border = '1px solid #ccc';
    }
    else {
        console.error("Button element not found");
    }
}
// Function to hide the dropdown button
function hideButton() {
    var button = document.getElementById('buttonId');
    var dropdownMenu = document.getElementById('dropdownMenuId');
    if (button && dropdownMenu) {
        button.style.visibility = 'hidden';
        button.style.border = 'none';
        dropdownMenu.classList.remove('show');
    }
    else {
        console.error("Button or dropdown menu element not found");
    }
}
// Function to show a card
function showCard(card) {
    card.style.visibility = 'visible';
    card.style.pointerEvents = 'auto';
}
// Function to hide a card
function hideCard(card) {
    card.style.visibility = 'hidden';
    card.style.pointerEvents = 'none';
}
// Function to show search input field
function showSearchInput() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.style.visibility = 'visible';
    }
}
// Function to hide search input field
function hideSearchInput() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.style.visibility = 'hidden';
    }
}
// Function to show flags on all cards
function showFlags() {
    var allCards = document.querySelectorAll('.customer-card');
    allCards.forEach(function (card) {
        var flagImg = card.querySelector('.flag');
        if (flagImg) {
            flagImg.style.visibility = 'visible';
        }
    });
}
// Function to hide flags on all cards
function hideFlags() {
    var allCards = document.querySelectorAll('.customer-card');
    allCards.forEach(function (card) {
        var flagImg = card.querySelector('.flag');
        if (flagImg) {
            flagImg.style.visibility = 'hidden';
        }
    });
}
// Function to show the filtering button
function showFilterButton() {
    var filterButton = document.getElementById('filterbuttonId');
    if (filterButton) {
        filterButton.style.visibility = 'visible';
        filterButton.style.border = '1px solid #ccc';
    }
    else {
        console.error("Filter button element not found");
    }
}
// Function to hide the filtering button
function hideFilterButton() {
    var filterButton = document.getElementById('filterbuttonId');
    var filterMenu = document.getElementById('filterMenuId');
    if (filterButton && filterMenu) {
        filterButton.style.visibility = 'hidden';
        filterButton.style.border = 'none';
        filterMenu.classList.remove('show');
    }
    else {
        console.error("Filter button or menu element not found");
    }
}
// Function to show the create card button
function showCreateCardButton() {
    var createCardButton = document.getElementById('createCardButtonId');
    if (createCardButton) {
        createCardButton.style.visibility = 'visible';
        createCardButton.style.border = '1px solid #ccc';
    }
    else {
        console.error("Button element not found");
    }
}
// Function to hide the create card button
function hideCreateCardButton() {
    var createCardButton = document.getElementById('createCardButtonId');
    if (createCardButton) {
        createCardButton.style.visibility = 'hidden';
        createCardButton.style.border = 'none';
        createCardButton.classList.remove('show');
    }
    else {
        console.error("Button or dropdown menu element not found");
    }
}
// Initialize sets for included and excluded tags
var includedTags = new Set();
var excludedTags = new Set();
// Variable to track whether labels field has been edited
var labelsFieldEdited = false;
// Event listener to run code when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox for enabling flags visibility
    var enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
    if (enableFlagsCheckbox) {
        // Add event listener to toggle flags visibility when checkbox state changes
        enableFlagsCheckbox.addEventListener('change', toggleFlagsVisibility);
        // Toggle flags visibility initially
        toggleFlagsVisibility();
    }
    // Get the checkbox for disabling card colors
    var disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox');
    if (disableCardColorsCheckbox) {
        // Add event listener to toggle card colors when checkbox state changes
        disableCardColorsCheckbox.addEventListener('change', toggleCardColors);
        // Toggle card colors initially
        toggleCardColors();
    }
});
// Main function responsible for initializing and managing customer cards
function main(container_1, updatedEmail_1, callCustomerButton_1, customerId_1, updatedName_1, updatedContactName_1, updatedPhone_1, updatedOrg_1, updatedCountry_1, updatedCity_1, updatedStreet_1, updatedZip_1, updatedCustomerNumber_1, updatedSubscription_1, updatedType_1, updatedLabels_1) {
    return __awaiter(this, arguments, void 0, function (container, updatedEmail, callCustomerButton, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback // Default callback function if not provided
    ) {
        // Function to add click event listener to elements
        function addClickListener(elementId, callback) {
            var element = document.getElementById(elementId);
            if (element) {
                element.addEventListener('click', callback);
            }
            else {
                console.error("".concat(elementId, " element not found."));
            }
        }
        // Function to toggle dropdown visibility
        function toggleDropdown(buttonId, menuId) {
            var button = document.getElementById(buttonId);
            var menu = document.getElementById(menuId);
            if (button && menu) {
                var isMenuShown = menu.classList.toggle('show');
                button.style.border = isMenuShown ? '2px solid black' : '1px solid #ccc';
            }
        }
        // Function to create a new customer card
        function createCard() {
            return __awaiter(this, void 0, void 0, function () {
                var skipAnimationsCheckbox, skipAnimations, newCard, cardContentWrapper_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Create card button clicked'); // Console log message telling that the create card button has been clicked
                            skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox');
                            skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
                            newCard = createCardTemplate(customers, api, updatedEmail, callCustomerButton, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, fetchAndUpdateCustomers);
                            if (!customersContainer) return [3 /*break*/, 3];
                            customersContainer.appendChild(newCard);
                            newCard.style.overflow = 'hidden'; // Hide scrollbar until fully extended
                            if (!!skipAnimations) return [3 /*break*/, 2];
                            return [4 /*yield*/, animateCard(newCard)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            cardContentWrapper_1 = newCard.querySelector('.hidden-text');
                            if (cardContentWrapper_1) {
                                cardContentWrapper_1.classList.add('hidden-text');
                                expandCard(newCard, customersContainer, {}, {}, 0, '', '', '', '', '', '', '', '', '', false, {}, [], function () {
                                    newCard.style.overflow = 'auto'; // show scrollbar
                                    cardContentWrapper_1.classList.remove('hidden-text');
                                    console.log('Finished expansion');
                                });
                            }
                            else {
                                console.error("CardContentWrapper element not found within newCard");
                            }
                            addSaveButtonListener(newCard);
                            return [3 /*break*/, 4];
                        case 3:
                            console.error("Customers container element not found");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        // Function to animate card flipping
        function animateCard(card) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                        case 1:
                            _a.sent();
                            card.classList.add('flip');
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                        case 2:
                            _a.sent();
                            card.classList.add('more');
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                        case 3:
                            _a.sent();
                            card.classList.remove('flip');
                            card.classList.remove('more');
                            return [2 /*return*/];
                    }
                });
            });
        }
        // Function to add save button listener to a card
        function addSaveButtonListener(card) {
            var saveButton = card.querySelector('.save-button');
            if (saveButton) {
                saveButton.addEventListener('click', function () {
                    console.log('Save button clicked');
                });
            }
        }
        // Function to fetch and update customers from the API
        function fetchAndUpdateCustomers() {
            return __awaiter(this, void 0, void 0, function () {
                var customers_2, _i, customers_1, customer, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 9, , 10]);
                            return [4 /*yield*/, api.listCustomers()];
                        case 1:
                            customers_2 = (_a.sent()).sort(function (a, b) { return parseInt(a['customer-number'] || '0') - parseInt(b['customer-number'] || '0'); });
                            if (!customersContainer) return [3 /*break*/, 8];
                            // Hide customers container, clear its content, and recreate cards for each customer
                            customersContainer.style.display = 'none';
                            customersContainer.innerHTML = '';
                            _i = 0, customers_1 = customers_2;
                            _a.label = 2;
                        case 2:
                            if (!(_i < customers_1.length)) return [3 /*break*/, 6];
                            customer = customers_1[_i];
                            if (!!customerCardExists(customer, customersContainer)) return [3 /*break*/, 4];
                            createCustomerCard(customer, customersContainer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, fetchAndUpdateCustomers, callback);
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            console.log("Card already created for customer:", customer);
                            _a.label = 5;
                        case 5:
                            _i++;
                            return [3 /*break*/, 2];
                        case 6: 
                        // Wait for a short time and then apply filters, display customers container, and call callback
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 70); })];
                        case 7:
                            // Wait for a short time and then apply filters, display customers container, and call callback
                            _a.sent();
                            applyFilters();
                            customersContainer.style.display = 'grid';
                            _a.label = 8;
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            err_1 = _a.sent();
                            console.error("Error fetching and updating customers:", err_1);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        }
        var api, customersContainer, customers, searchInput;
        if (callback === void 0) { callback = function () { }; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new onslip_360_web_api_1.API('https://api.onslip360.com/v1/', 'oliver', 'key:oe+oliver@oliver', 'LXhEKnIuaHBsOEY6JVVbQVQvXSYwUzN1RT49U1BrLyo=');
                    onslip_360_web_api_1.API.initialize((0, onslip_360_web_api_1.webRequestHandler)({}));
                    customersContainer = document.getElementById('customers-container');
                    // Hide main container if provided
                    if (container && customersContainer) {
                        container.style.display = 'none';
                    }
                    return [4 /*yield*/, api.listCustomers()];
                case 1:
                    customers = (_a.sent()).sort(function (a, b) { return parseInt(a['customer-number'] || '0') - parseInt(b['customer-number'] || '0'); });
                    // Add click event listeners to buttons and dropdowns
                    addClickListener('buttonId', function () { return toggleDropdown('buttonId', 'dropdownMenuId'); });
                    addClickListener('filterbuttonId', function () { return toggleDropdown('filterbuttonId', 'filterMenuId'); });
                    addClickListener('createCardButtonId', createCard);
                    // Fetch and update customers on page load
                    return [4 /*yield*/, fetchAndUpdateCustomers()];
                case 2:
                    // Fetch and update customers on page load
                    _a.sent();
                    searchInput = document.getElementById('searchInput');
                    if (searchInput) {
                        searchInput.addEventListener('input', function () {
                            console.log('Input event triggered');
                            filterCards();
                        });
                    }
                    else {
                        console.error("Search input element not found");
                    }
                    // Populate filter dropdown menu
                    populateFilterDropdown();
                    // Add global click event listener to close dropdown menus when clicking outside
                    document.body.addEventListener('click', function (event) {
                        var dropdownMenu = document.getElementById('dropdownMenuId');
                        var filterMenu = document.getElementById('filterMenuId');
                        var button = document.getElementById('buttonId');
                        var filterButton = document.getElementById('filterbuttonId');
                        // Close dropdown menu if clicked outside
                        if (!event.target || !event.target.closest('.dropdown') && dropdownMenu && !dropdownMenu.contains(event.target) && button) {
                            dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.classList.remove('show');
                            button.style.border = '1px solid #ccc';
                        }
                        // Close filter menu if clicked outside
                        if (!event.target || !event.target.closest('.filterbtn') && filterMenu && !filterMenu.contains(event.target) && filterButton) {
                            filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('show');
                            filterButton.style.border = '1px solid #ccc';
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
// Function to create new card
function createCardTemplate(customer, // Customer data object
api, // API instance for making requests
updatedEmail, // Updated email address
_callCustomerButton, // Call customer button element (unused)
_customerId, // Customer ID (unused)
updatedName, // Updated customer name
updatedContactName, // Updated contact person name
updatedPhone, // Updated phone number
updatedOrg, // Updated organization number
updatedCountry, // Updated country
updatedCity, // Updated city
updatedStreet, // Updated street address
updatedZip, // Updated zip code
updatedCustomerNumber, // Updated customer number
updatedSubscription, // Updated subscription status
updatedType, // Updated customer type
updatedLabels, // Updated customer labels (tags)
fetchAndUpdateCustomers // Function to fetch and update customers
) {
    var _this = this;
    var _a, _b;
    // Get the country name from country code
    var countryName = customer.country && countryMappings[customer.country];
    // Create container for the customer card
    var cardContainer = document.createElement('div');
    cardContainer.classList.add('customer-card');
    // Create container for the back side of the card
    var cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    // Create container for customer information
    var cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    // Initialize customer subscription and type
    customer.subscription = "true";
    customer.type = "individual";
    // HTML template for customer information
    var customerInfoHTML = "\n        <!-- Hidden text section -->\n        <div class=\"hidden-text\">\n            <div class=\"customer-info\">\n                <!-- Left side customer information -->\n                <div class=\"left-info\">\n                    <!-- Editable customer fields -->\n                    <!-- Name -->\n                    <p>Name: <span contenteditable=\"true\" class=\"edit-text customer-name\">".concat(customer['name'], "</span></p>\n                    <!-- Contact Person -->\n                    <p>Contact Person: <span contenteditable=\"true\" class=\"edit-text customer-contact-name\">").concat(customer['reference-name'], "</span></p>\n                    <!-- Customer Number -->\n                    <p>Customer Number: <span contenteditable=\"true\" class=\"edit-text customer-number\">").concat(customer['customer-number'], "</span></p>\n                    <!-- Phone Number -->\n                    <p>Phone Number: <span contenteditable=\"true\" class=\"edit-text customer-phone\">").concat(customer['phone-number'], "</span></p>\n                    <!-- Email -->\n                    <p>Email: <span contenteditable=\"true\" class=\"edit-text customer-email\">").concat(customer.email, "</span></p>\n                    <!-- Organization Number -->\n                    <p>Organization Number: <span contenteditable=\"true\" class=\"edit-text customer-org\">").concat(customer['org-number'], "</span></p>\n                    <!-- Vouchers -->\n                    <p>Vouchers:</p>\n                </div>\n                <!-- Right side customer information -->\n                <div class=\"right-info\">\n                    <!-- Non-editable customer fields -->\n                    <!-- Created -->\n                    <p>Created: ").concat(customer['created'] ? formatDate(customer['created']) : 'N/A', "</p>\n                    <!-- Updated -->\n                    <p>Updated: ").concat(customer['updated'] ? formatDate(customer['updated']) : 'N/A', "</p>\n                    <!-- Updated By -->\n                    <p>Updated By: ").concat(getUserName(customer['updated-by']), "</p>\n                    <!-- Subscription -->\n                    <p>Subscription: <span class=\"edit-text customer-subscription\">").concat(customer.subscription, "</span></p>\n                    <!-- Type -->\n                    <p>Type: <span class=\"edit-text customer-type\">").concat(customer.type, "</span></p>\n                    <!-- Country -->\n                    <p>Country: <span contenteditable=\"true\" class=\"edit-text customer-country\">").concat(countryName || customer.country, "</span></p>\n                    <!-- City -->\n                    <p>City: <span contenteditable=\"true\" class=\"edit-text customer-city\">").concat(customer.city, "</span></p>\n                    <!-- Street Address -->\n                    <p>Street Address: <span contenteditable=\"true\" class=\"edit-text customer-street\">").concat(customer['street-address'], "</span></p>\n                    <!-- Zip Code -->\n                    <p>Zip Code: <span contenteditable=\"true\" class=\"edit-text customer-zip\">").concat(customer['zip-code'], "</span></p>\n                    <!-- Tags -->\n                    <p>Tags: <span contenteditable=\"true\" id=\"customerLabels\" class=\"edit-text customer-labels\">").concat(((_a = customer.labels) === null || _a === void 0 ? void 0 : _a.map(function (label) { return tagMappings[label]; }).join(', ')) || '', "</span></p>\n                </div>\n                <!-- Button to create customer -->\n                <button class=\"action-button\">Create Customer</button>\n            </div>\n        </div>\n    ");
    // Set customer information HTML
    cardContainer.innerHTML = customerInfoHTML;
    // Initialize updated labels
    updatedLabels = updatedLabels || [];
    // Function to setup event listeners for editable fields
    var setupFieldListener = function (selector, fieldUpdater) {
        var fieldElement = cardContainer.querySelector(selector);
        if (fieldElement) {
            fieldElement.addEventListener('input', function (event) {
                var value = event.target.textContent || '';
                fieldUpdater(value.trim());
            });
        }
    };
    // Setup event listeners for editable fields
    setupFieldListener('.customer-name', function (value) { updatedName = value; });
    setupFieldListener('.customer-contact-name', function (value) { updatedContactName = value; });
    setupFieldListener('.customer-number', function (value) { updatedCustomerNumber = value; });
    setupFieldListener('.customer-phone', function (value) { updatedPhone = value; });
    setupFieldListener('.customer-email', function (value) { updatedEmail = value; });
    setupFieldListener('.customer-org', function (value) { updatedOrg = value; });
    setupFieldListener('.customer-country', function (value) { updatedCountry = value; });
    setupFieldListener('.customer-city', function (value) { updatedCity = value; });
    setupFieldListener('.customer-street', function (value) { updatedStreet = value; });
    setupFieldListener('.customer-zip', function (value) { updatedZip = value; });
    // Event listener for subscription element
    var customerSubscriptionElement = cardContainer.querySelector('.edit-text.customer-subscription');
    if (customerSubscriptionElement) {
        customerSubscriptionElement.addEventListener('click', function () {
            updatedSubscription = !updatedSubscription;
            customerSubscriptionElement.textContent = updatedSubscription.toString();
        });
    }
    // Event listener for customer type element
    var customerTypeElement = cardContainer.querySelector('.edit-text.customer-type');
    if (customerTypeElement) {
        customerTypeElement.addEventListener('click', function () {
            updatedType = updatedType === 'individual' ? 'organization' : 'individual';
            customerTypeElement.textContent = updatedType;
        });
    }
    // Event listener for customer labels element
    var customerLabelsElement = cardContainer.querySelector('.edit-text.customer-labels');
    if (customerLabelsElement) {
        customerLabelsElement.addEventListener('blur', function (event) {
            var newCustomerLabels = event.target.textContent || '';
            var inputLabels = newCustomerLabels.split(',').map(function (label) { return label.trim(); });
            var tempUpdatedLabels = new Set();
            var invalidLabels = [];
            inputLabels.forEach(function (inputLabel) {
                if (inputLabel) {
                    var matchingTag = Object.entries(tagMappings).find(function (_a) {
                        var _id = _a[0], name = _a[1];
                        return name === inputLabel;
                    });
                    if (matchingTag) {
                        tempUpdatedLabels.add(parseInt(matchingTag[0]));
                    }
                    else {
                        var numericID = parseInt(inputLabel);
                        if (!isNaN(numericID)) {
                            tempUpdatedLabels.add(numericID);
                        }
                        else {
                            invalidLabels.push(inputLabel);
                        }
                    }
                }
            });
            if (invalidLabels.length > 0) {
                alert("Invalid label(s): ".concat(invalidLabels.join(', ')));
                return;
            }
            updatedLabels = Array.from(tempUpdatedLabels);
            console.log(updatedLabels);
        });
    }
    // Event listener for action button (Create Customer)
    var actionButton = cardContainer.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var isCountryValid, countryCode, isCityValid, isOrgValid, isZipValid, isNameValid, isContactNameValid, isEmailValid, isPhoneValid, isCustomerNumberValid, isLabelsValid, customerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Button clicked');
                        // Validation checks for input fields
                        // Check if name is provided
                        if (!updatedName) {
                            alert('Name is required');
                            return [2 /*return*/];
                        }
                        // Check if customer number is provided
                        if (!updatedCustomerNumber) {
                            alert('Customer Number is required');
                            return [2 /*return*/];
                        }
                        // Check if country is provided
                        if (!updatedCountry) {
                            alert('Customer country is required');
                            return [2 /*return*/];
                        }
                        isCountryValid = isValidCountry(updatedCountry || customer.country || '');
                        if (!isCountryValid) {
                            alert('Invalid country name. Example of correctly written country name: United States');
                            return [2 /*return*/];
                        }
                        countryCode = getCountryCode(updatedCountry || customer.country || '');
                        if (!countryCode) {
                            alert("Country code not found for ".concat(updatedCountry));
                            return [2 /*return*/];
                        }
                        isCityValid = isValidCity(updatedCity || customer.city || '');
                        if (!isCityValid) {
                            alert('Only letters allowed in the city field');
                            return [2 /*return*/];
                        }
                        isOrgValid = isValidOrg(updatedOrg || customer['org-number'] || '');
                        if (!isOrgValid) {
                            alert('Only numbers are allowed in the organization number field');
                            return [2 /*return*/];
                        }
                        isZipValid = isValidZipCode(updatedZip || customer['zip-code'] || '');
                        if (!isZipValid) {
                            alert('Only numbers are allowed in the zip code field, example zip code: ## ### or #####');
                            return [2 /*return*/];
                        }
                        isNameValid = isValidName(updatedName || customer.name || '');
                        if (!isNameValid) {
                            alert('Only letters are allowed in the name field');
                            return [2 /*return*/];
                        }
                        isContactNameValid = isValidContactName(updatedContactName || customer['reference-name'] || '');
                        if (!isContactNameValid) {
                            alert('Only letters are allowed in the contact person field');
                            return [2 /*return*/];
                        }
                        isEmailValid = isValidEmail(updatedEmail || customer.email || '');
                        if (!isEmailValid) {
                            alert('Invalid email format, example email: example@email.com');
                            return [2 /*return*/];
                        }
                        isPhoneValid = isValidPhoneNumber(updatedPhone || customer['phone-number'] || '');
                        if (!isPhoneValid) {
                            alert('Invalid phone number, example off acceptable phone number (if international:+##) ### ### ####');
                            return [2 /*return*/];
                        }
                        isCustomerNumberValid = isValidCustomerNumber(updatedCustomerNumber || customer['customer-number'] || '');
                        if (!isCustomerNumberValid) {
                            alert('Only numbers are allowed in the customer number field');
                            return [2 /*return*/];
                        }
                        isLabelsValid = isValidLabels(updatedLabels);
                        if (!isLabelsValid) {
                            alert('Invalid label found. Please enter a valid tag name or number. example: VIP/11 or Hög Lojalitet/12');
                            return [2 /*return*/];
                        }
                        console.log('Updated Labels:', updatedLabels); // console log to output a message with the value off the updated labels
                        // Call function to create new customer
                        return [4 /*yield*/, callNewCustomer(api, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, countryCode, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedLabels, updatedType)];
                    case 1:
                        // Call function to create new customer
                        _a.sent();
                        cardContainer.style.overflow = 'hidden'; // hide scrollbar until fully shrunken
                        customerInfo = cardContainer.querySelector('.customer-info');
                        if (customerInfo) {
                            customerInfo.classList.add('hidden');
                        }
                        return [4 /*yield*/, reverseExpandCard(cardContainer, function () {
                                var customerInfo = cardContainer.querySelector('.customer-info');
                                if (customerInfo) {
                                }
                            }, fetchAndUpdateCustomers)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ;
    // Create abort button
    var abortButton = document.createElement('button');
    abortButton.textContent = 'Abort';
    abortButton.classList.add('abort-button');
    // Event listener for abort button
    abortButton.addEventListener('click', function () {
        cardContainer.style.overflow = 'hidden'; // Hide scrollbar until fully shrunken
        var customerInfo = cardContainer.querySelector('.customer-info');
        if (customerInfo) {
            customerInfo.classList.add('hidden');
        }
        reverseExpandCard(cardContainer, function () { }, fetchAndUpdateCustomers);
    });
    (_b = cardContainer.querySelector('.customer-info')) === null || _b === void 0 ? void 0 : _b.appendChild(abortButton);
    cardContainer.style.overflow = 'auto'; // show scrollbar after fully shrunken
    // Return the constructed card container
    return cardContainer;
}
// Function for creating a new customer
function callNewCustomer(api, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedLabels, updatedType) {
    return __awaiter(this, void 0, void 0, function () {
        var newCustomerData, createdCustomer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // Check if API object is initialized
                    if (!api) {
                        throw new Error('API object is not initialized');
                    }
                    newCustomerData = {
                        name: updatedName,
                        email: updatedEmail,
                        'reference-name': updatedContactName,
                        'phone-number': updatedPhone,
                        'org-number': updatedOrg,
                        country: updatedCountry,
                        city: updatedCity,
                        'street-address': updatedStreet,
                        'zip-code': updatedZip,
                        'customer-number': updatedCustomerNumber,
                        subscription: updatedSubscription,
                        labels: updatedLabels
                    };
                    // Add type if provided
                    if (typeof updatedType !== 'undefined') {
                        newCustomerData.type = updatedType;
                    }
                    return [4 /*yield*/, api.addCustomer(newCustomerData)];
                case 1:
                    createdCustomer = _a.sent();
                    console.log('New customer added:', createdCustomer); //Console log which puts a message which says that a new customer has been created
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error adding new customer:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.callNewCustomer = callNewCustomer;
// Function that Creates a customer card and appends it to a container element
function createCustomerCard(customer_1, container_1, api_1, customerId_1, updatedName_1, updatedContactName_1, updatedPhone_1, updatedOrg_1, updatedCountry_1, updatedCity_1, updatedStreet_1, updatedZip_1, updatedCustomerNumber_1, updatedSubscription_1, updatedType_1, updatedLabels_1, fetchAndUpdateCustomers_1) {
    return __awaiter(this, arguments, void 0, function (customer, container, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, fetchAndUpdateCustomers, callback) {
        var countryName, hasVIPTag, hasHighLoyaltyTag, backgroundColor, rankText, customerCard, disableCardColorsCheckbox, flagImg, enableFlagsCheckbox, cardBack, cardInfo, voucherInfoContainer, vouchers, vouchersList, _i, vouchers_1, voucher, voucherItem, voucherType, formattedCustomer;
        var _this = this;
        var _a, _b, _c;
        if (callback === void 0) { callback = function () { }; }
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    countryName = customer.country && countryMappings[customer.country];
                    hasVIPTag = (_a = customer.labels) === null || _a === void 0 ? void 0 : _a.includes(11);
                    hasHighLoyaltyTag = (_b = customer.labels) === null || _b === void 0 ? void 0 : _b.includes(12);
                    backgroundColor = 'whitesmoke';
                    rankText = '';
                    // Adjust background color and rank text based on tags
                    if (hasVIPTag && hasHighLoyaltyTag) {
                        backgroundColor = '#7FFFD4';
                        rankText = 'VIP+';
                    }
                    else if (hasVIPTag) {
                        backgroundColor = '#B0E0E6';
                        rankText = 'VIP';
                    }
                    else if (hasHighLoyaltyTag) {
                        backgroundColor = '#FF6B6B';
                        rankText = 'Loyal';
                    }
                    console.log('Creating card for customer:', customer); //Console log which puts a message which says "Creating card for customer" + the customer parameters
                    customerCard = document.createElement('div');
                    customerCard.classList.add('customer-card');
                    customerCard.setAttribute('data-original-color', backgroundColor);
                    customerCard.id = "customer-card-".concat(customer.id);
                    disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox');
                    customerCard.style.backgroundColor = disableCardColorsCheckbox && disableCardColorsCheckbox.checked ? 'whitesmoke' : backgroundColor;
                    flagImg = document.createElement('img');
                    flagImg.classList.add('flag');
                    flagImg.src = "/Web/src/Images/Country flags/".concat(customer.country.toLowerCase(), ".png");
                    flagImg.alt = "".concat(countryMappings[customer.country.toUpperCase()] || customer.country);
                    enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
                    flagImg.style.visibility = enableFlagsCheckbox && enableFlagsCheckbox.checked ? 'visible' : 'hidden';
                    // Add event listener to toggle flag visibility
                    if (enableFlagsCheckbox) {
                        enableFlagsCheckbox.addEventListener('change', function () {
                            flagImg.style.visibility = enableFlagsCheckbox.checked ? 'visible' : 'hidden';
                        });
                    }
                    // Append the flag image to the customer card
                    customerCard.appendChild(flagImg);
                    // Set data attributes for labels and filtered status
                    customerCard.dataset.labels = customer.labels ? customer.labels.join(',') : '';
                    customerCard.dataset.filtered = 'showing';
                    // Add click event listener to the customer card
                    customerCard.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                        var callCustomerButton, skipAnimationsCheckbox, skipAnimations;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('Card clicked');
                                    callCustomerButton = customerCard.querySelector('.call-button');
                                    if (callCustomerButton && callCustomerButton.style.display === 'block') {
                                        return [2 /*return*/];
                                    }
                                    if (!customerCard.classList.contains('expanded')) return [3 /*break*/, 2];
                                    return [4 /*yield*/, reverseExpandCard(customerCard, function () { }, fetchAndUpdateCustomers)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                                case 2:
                                    skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox');
                                    skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
                                    if (!skipAnimations) return [3 /*break*/, 4];
                                    return [4 /*yield*/, expandCard(customerCard, container, customer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback)];
                                case 3:
                                    _a.sent();
                                    return [3 /*break*/, 7];
                                case 4: return [4 /*yield*/, flipCard(customerCard, container)];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, expandCard(customerCard, container, customer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback)];
                                case 6:
                                    _a.sent();
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); });
                    // Indicate that the click listener has been added
                    customerCard.dataset.clickListenerAdded = 'true';
                    cardBack = document.createElement('div');
                    cardBack.classList.add('card-back');
                    cardInfo = document.createElement('div');
                    cardInfo.classList.add('card-info');
                    voucherInfoContainer = document.createElement('div');
                    voucherInfoContainer.classList.add('voucher-info');
                    voucherInfoContainer.style.display = 'none';
                    // Append the voucher info container to the card info section
                    cardInfo.appendChild(voucherInfoContainer);
                    return [4 /*yield*/, api.listVouchers("customer:".concat(customer.id))];
                case 1:
                    vouchers = _d.sent();
                    if (vouchers.length > 0) {
                        vouchersList = document.createElement('ul');
                        for (_i = 0, vouchers_1 = vouchers; _i < vouchers_1.length; _i++) {
                            voucher = vouchers_1[_i];
                            customerCard.classList.add('has-vouchers');
                            voucherItem = document.createElement('li');
                            voucherType = voucher.type === 'payment' ? 'giftcard' : voucher.type;
                            voucherItem.innerHTML = "Voucher Type: ".concat(voucherType, ", Voucher ID: ").concat(voucher.id, ", Balance: ").concat((_c = voucher.payment) === null || _c === void 0 ? void 0 : _c.balance, ", Expiry Date: ").concat(voucher.expires ? new Date(voucher.expires).toDateString() : 'Unknown');
                            vouchersList.appendChild(voucherItem);
                        }
                        voucherInfoContainer.appendChild(vouchersList);
                        voucherInfoContainer.style.display = 'none';
                    }
                    formattedCustomer = "\n        <p><span class=\"customer-namebold\">".concat(customer.name, "</span></p>\n        <p>Customer Number: <span class=\"customer-numberbold\">").concat(customer['customer-number'], "</span></p>\n        <p>Country: ").concat(countryName || customer.country, "</p>\n        <p>Created: ").concat(customer['created'] ? formatDate(customer['created']) : 'N/A', "</p>\n        <p><span class=\"customer-rank\">").concat(rankText, "</span></p>\n    ");
                    // Append the formatted customer details to the card info section
                    cardInfo.innerHTML += formattedCustomer;
                    // Append the card info section to the card back
                    cardBack.appendChild(cardInfo);
                    // Append the card back to the customer card
                    customerCard.appendChild(cardBack);
                    // Append the customer card to the container
                    container.appendChild(customerCard);
                    // Store the original content of the card info section in a data attribute
                    customerCard.dataset.originalContent = cardInfo.innerHTML;
                    return [2 /*return*/];
            }
        });
    });
}
// Function that updates a customer's information and handles form validation and API requests
function callUpdatedCustomer(api_1, customerId_1, updatedName_1, updatedEmail_1, updatedContactName_1, updatedPhone_1, updatedOrg_1, updatedCountry_1, updatedCity_1, updatedStreet_1, updatedZip_1, callCustomerButton_1, callDeleteButton_1, updatedCustomerNumber_1, updatedSubscription_1, updatedType_1) {
    return __awaiter(this, arguments, void 0, function (api, customerId, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, callCustomerButton, callDeleteButton, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels) {
        var customer, isCountryValid, countryCode, isCityValid, isOrgValid, isZipValid, isNameValid, isContactNameValid, isEmailValid, isPhoneValid, isCustomerNumberValid, isLabelsValid, finalLabels, updatedCustomer, error_2;
        if (updatedLabels === void 0) { updatedLabels = []; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // Check if the API object is initialized
                    if (!api) {
                        throw new Error('API object is not initialized');
                    }
                    return [4 /*yield*/, api.getCustomer(customerId)];
                case 1:
                    customer = _a.sent();
                    // If labels have not been edited, use the existing labels
                    if (!labelsFieldEdited) {
                        updatedLabels = customer.labels || [];
                    }
                    isCountryValid = isValidCountry(updatedCountry || customer.country || '');
                    if (!isCountryValid) {
                        alert('Invalid country name. Example of correctly written country name: United States');
                        return [2 /*return*/];
                    }
                    countryCode = getCountryCode(updatedCountry || customer.country || '');
                    if (!countryCode) {
                        alert("Country code not found for ".concat(updatedCountry));
                        return [2 /*return*/];
                    }
                    isCityValid = isValidCity(updatedCity || customer.city || '');
                    if (!isCityValid) {
                        alert('Only letters allowed in the city field');
                        return [2 /*return*/];
                    }
                    isOrgValid = isValidOrg(updatedOrg || customer['org-number'] || '');
                    if (!isOrgValid) {
                        alert('Only numbers are allowed in the organization number field');
                        return [2 /*return*/];
                    }
                    isZipValid = isValidZipCode(updatedZip || customer['zip-code'] || '');
                    if (!isZipValid) {
                        alert('Only numbers are allowed in the zip code field, example zip code: ## ### or #####');
                        return [2 /*return*/];
                    }
                    isNameValid = isValidName(updatedName || customer.name || '');
                    if (!isNameValid) {
                        alert('Only letters are allowed in the name field');
                        return [2 /*return*/];
                    }
                    isContactNameValid = isValidContactName(updatedContactName || customer['reference-name'] || '');
                    if (!isContactNameValid) {
                        alert('Only letters are allowed in the contact person field');
                        return [2 /*return*/];
                    }
                    isEmailValid = isValidEmail(updatedEmail || customer.email || '');
                    if (!isEmailValid) {
                        alert('Invalid email format, example email: example@email.com');
                        return [2 /*return*/];
                    }
                    isPhoneValid = isValidPhoneNumber(updatedPhone || customer['phone-number'] || '');
                    if (!isPhoneValid) {
                        alert('Invalid phone number, example off acceptable phone number (if international:+##) ### ### ####');
                        return [2 /*return*/];
                    }
                    isCustomerNumberValid = isValidCustomerNumber(updatedCustomerNumber || customer['customer-number'] || '');
                    if (!isCustomerNumberValid) {
                        alert('Only numbers are allowed in the customer number field');
                        return [2 /*return*/];
                    }
                    isLabelsValid = isValidLabels(updatedLabels);
                    if (!isLabelsValid) {
                        alert('Invalid label found. Please enter a valid tag name or number. example: VIP/11 or Hög Lojalitet/12');
                        return [2 /*return*/];
                    }
                    finalLabels = labelsFieldEdited ? updatedLabels : (customer.labels || []);
                    return [4 /*yield*/, api.updateCustomer(customerId, {
                            "name": updatedName || customer.name,
                            "email": updatedEmail || customer.email,
                            "reference-name": updatedContactName || customer['reference-name'],
                            "phone-number": updatedPhone || customer['phone-number'],
                            "org-number": updatedOrg || customer['org-number'],
                            "country": countryCode,
                            "city": updatedCity || customer.city,
                            "street-address": updatedStreet || customer['street-address'],
                            "zip-code": updatedZip || customer['zip-code'],
                            "customer-number": updatedCustomerNumber || customer['customer-number'],
                            "subscription": updatedSubscription,
                            "labels": finalLabels,
                            "type": updatedType
                        })];
                case 2:
                    updatedCustomer = _a.sent();
                    // Log the API request payload for debugging purposes
                    console.log('API Request Payload:', {
                        "name": updatedName || customer.name,
                        "email": updatedEmail || customer.email,
                        "reference-name": updatedContactName || customer['reference-name'],
                        "phone-number": updatedPhone || customer['phone-number'],
                        "org-number": updatedOrg || customer['org-number'],
                        "country": countryCode,
                        "city": updatedCity || customer.city,
                        "street-address": updatedStreet || customer['street-address'],
                        "zip-code": updatedZip || customer['zip-code'],
                        "customer-number": updatedCustomerNumber || customer['customer-number'],
                        "subscription": updatedSubscription,
                        "labels": finalLabels,
                        "type": updatedType
                    });
                    // Disable the customer info fields and hide action buttons
                    disableCustomerInfoFields();
                    enableTextEditing(false);
                    callCustomerButton.style.display = 'none';
                    callDeleteButton.style.display = 'none';
                    // Log the updated customer object for debugging purposes
                    console.log(updatedCustomer);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    // Handle any errors that occur during the process
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.callUpdatedCustomer = callUpdatedCustomer;
// Function that checks if the text in the organization number field is valid 
function isValidOrg(value) {
    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}
// Function that checks if the text in the zip code field is valid 
function isValidZipCode(value) {
    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}
// Function that checks if the text in the customer number field is valid 
function isValidCustomerNumber(value) {
    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}
// Function that checks if the text in the customer number field is valid 
function isValidName(value) {
    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}
// Function that checks if the text in the contact name field is valid 
function isValidContactName(value) {
    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}
// Function that checks if the text in the city field is valid 
function isValidCity(value) {
    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}
// Function that checks if the text in the email field is valid 
function isValidEmail(value) {
    // Regular expression for validating an email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Return true if the value is undefined, "undefined", matches the email regex pattern, or is an empty string
    return value === undefined || value === "undefined" || emailRegex.test(value) || value === '';
}
// Function that checks if the text in the labels field is valid
function isValidLabels(labels) {
    var _loop_1 = function (label) {
        // Check if the label does not exist in tagMappings and does not exist in the tags array
        if (!tagMappings[label] && !tags.some(function (tag) { return tag.id === label; })) {
            return { value: false };
        }
    };
    // Iterate over each label in the provided labels array
    for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
        var label = labels_1[_i];
        var state_1 = _loop_1(label);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // Return true if all labels are valid
    return true;
}
// Function that checks if the text in the phone number field is valid
function isValidPhoneNumber(value) {
    // Regular expression for validating a phone number
    var phoneNumberRegex = /^\+?[0-9\s-]+$/;
    // Return true if the value is undefined, "undefined", matches the phone number regex pattern, or is an empty string
    return value === undefined || value === "undefined" || phoneNumberRegex.test(value) || value === '';
}
// Function that checks if the text in the country field is valid
function isValidCountry(country) {
    // Check if the country is a two-letter code and consists of only uppercase letters
    if (country.length === 2 && /^[A-Z]+$/.test(country)) {
        // Retrieve the full country name from countryMappings
        var fullName = countryMappings[country];
        // Return true if the full country name is defined and not null
        return fullName !== undefined && fullName !== null;
    }
    // Format the country name: trim spaces, convert to lowercase, and capitalize the first letter of each word
    var formattedCountryName = country.trim().toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    // Check if the formatted country name exists in countryMappingsReverse
    return countryMappingsReverse.hasOwnProperty(formattedCountryName);
}
// Function that checks if a customer card already exists in the container
function customerCardExists(customer, container) {
    // Get all elements with the class 'customer-card' within the container
    var customerCards = Array.from(container.querySelectorAll('.customer-card'));
    // Iterate over each customer card
    for (var _i = 0, customerCards_1 = customerCards; _i < customerCards_1.length; _i++) {
        var card = customerCards_1[_i];
        // Find the element within the card that has the data attribute 'data-customer-number'
        var cardCustomerNumber = card.querySelector('p[data-customer-number]');
        // Check if the text content of the element matches the customer's number
        if (cardCustomerNumber && cardCustomerNumber.textContent === customer['customer-number']) {
            // Return true if a match is found
            return true;
        }
    }
    // Return false if no matching card is found
    return false;
}
// Function that that sets the 'contentEditable' attribute to 'false' for each field ( making it so you cant edit the information in the fields)
function disableCustomerInfoFields() {
    // List of field IDs to be disabled
    var fields = ['customerName', 'customerEmail', 'contactName', 'customerPhone', 'organizationNumber', 'customerCountry', 'customerCity', 'customerStreet', 'customerZip', 'customerNumber', 'customerSubscription', 'customerLabels'];
    // Iterate over each field ID
    fields.forEach(function (fieldId) {
        // Get the HTML element by ID
        var field = document.getElementById(fieldId);
        // Set the 'contentEditable' attribute to 'false' if the field exists
        if (field) {
            field.contentEditable = 'false';
        }
    });
}
// Function that formats a date string into 'dd/mm/yyyy' format
function formatDate(dateString) {
    // Create a Date object from the date string
    var date = new Date(dateString);
    // Get the day, month, and year from the date object
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    // Return the formatted date string
    return "".concat(day, "/").concat(month, "/").concat(year);
}
// Function that enables or disables text editing for elements with the class 'edit-text'
function enableTextEditing(enable) {
    // Get all elements with the class 'edit-text'
    var elementsToEdit = document.querySelectorAll('.edit-text');
    // Iterate over each element and set the 'contentEditable' attribute
    elementsToEdit.forEach(function (element) {
        element.contentEditable = enable ? 'true' : 'false';
    });
}
// Function that  toggles the visibility of flags based on the state of the 'enableFlagsCheckbox' checkbox
function toggleFlagsVisibility() {
    // Get the checkbox element for enabling/disabling flags visibility
    var enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
    // Get all elements with the class 'flag'
    var flags = document.querySelectorAll('.flag');
    // Check if the checkbox element exists
    if (enableFlagsCheckbox) {
        // Determine the visibility based on the checkbox state
        var visibility_1 = enableFlagsCheckbox.checked ? 'visible' : 'hidden';
        // Iterate over each flag element and set its visibility
        flags.forEach(function (flag) {
            flag.style.visibility = visibility_1;
        });
    }
}
// Function that toggles the background colors of customer cards based on the state of the 'disableCardColorsCheckbox' checkbox
function toggleCardColors() {
    // Get the checkbox element for disabling/enabling card colors
    var disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox');
    // Get all elements with the class 'customer-card'
    var customerCards = document.querySelectorAll('.customer-card');
    // Check if the checkbox element exists
    if (disableCardColorsCheckbox) {
        // Iterate over each customer card element
        customerCards.forEach(function (card) {
            var cardElement = card;
            // If the checkbox is unchecked, set the background color to the original color stored in 'data-original-color' otherwise, set the background color to 'whitesmoke'
            if (!disableCardColorsCheckbox.checked) {
                cardElement.style.backgroundColor = cardElement.getAttribute('data-original-color') || 'whitesmoke';
            }
            else {
                cardElement.style.backgroundColor = 'whitesmoke';
            }
        });
    }
}
// Function that flips a customer card element, performs some actions during the flip, and then resolves the promise it also hides flags if the 'enableFlagsCheckbox' is checked and clears the card's back content
function flipCard(customerCard, container) {
    return __awaiter(this, void 0, void 0, function () {
        var enableFlagsCheckbox, enableFlags;
        var _this = this;
        return __generator(this, function (_a) {
            enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
            enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;
            // Return a promise to handle asynchronous operations
            return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var scrollYBeforeFlip, cardBack, cardInfo, allCards;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                scrollYBeforeFlip = window.scrollY;
                                // Wait for 250 milliseconds before starting the flip animation
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                            case 1:
                                // Wait for 250 milliseconds before starting the flip animation
                                _a.sent();
                                // Add the 'flip' class to the customer card to start the flip animation
                                customerCard.classList.add('flip');
                                // Wait for 250 milliseconds for the flip animation to complete
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                            case 2:
                                // Wait for 250 milliseconds for the flip animation to complete
                                _a.sent();
                                cardBack = customerCard.querySelector('.card-back');
                                if (cardBack) {
                                    cardInfo = cardBack.querySelector('.card-info');
                                    if (cardInfo) {
                                        cardInfo.innerHTML = '';
                                    }
                                }
                                allCards = container.querySelectorAll('.customer-card');
                                if (enableFlags) {
                                    allCards.forEach(function (card) {
                                        var flagImg = card.querySelector('.flag');
                                        if (flagImg) {
                                            flagImg.style.visibility = 'hidden';
                                        }
                                    });
                                }
                                // Add the 'more' class to the customer card to perform additional flip animation
                                customerCard.classList.add('more');
                                // Wait for 250 milliseconds to let the 'more' class take effect
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                            case 3:
                                // Wait for 250 milliseconds to let the 'more' class take effect
                                _a.sent();
                                // Restore the scroll position to its value before the flip
                                window.scrollTo(0, scrollYBeforeFlip);
                                // Set the customer card display style to 'grid'
                                customerCard.style.display = 'grid';
                                // Remove the 'flip' and 'more' classes from the customer card
                                customerCard.classList.remove('flip');
                                customerCard.classList.remove('more');
                                // Resolve the promise indicating that the flip animation and actions are complete
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
// FUnction that checks and updates the customer labels based on the input provided in the customer labels element,  Parses the input labels, matches them with tag mappings, and updates the 'updatedLabels' array aswell it also displays an alert for any invalid labels
function checkCustomerLabels(updatedLabels) {
    // Get the customer labels element by its ID
    var customerLabelsElement = document.getElementById('customerLabels');
    // If the customer labels element doesn't exist, return false
    if (!customerLabelsElement)
        return false;
    // Get the text content of the customer labels element
    var newCustomerLabels = customerLabelsElement.textContent || '';
    // Split the text content into an array of input labels and trim whitespace
    var inputLabels = newCustomerLabels.split(',').map(function (label) { return label.trim(); });
    // Create a set to store temporary updated labels
    var tempUpdatedLabels = new Set();
    // Create an array to store invalid labels
    var invalidLabels = [];
    var _loop_2 = function (inputLabel) {
        // If the input label is empty, continue to the next iteration
        if (!inputLabel)
            return "continue";
        // Check if the input label matches any tag mappings
        var matchingTag = Object.entries(tagMappings).find(function (_a) {
            var _id = _a[0], name = _a[1];
            return name === inputLabel;
        });
        // If a matching tag is found, add its ID to the temporary updated labels set
        if (matchingTag) {
            tempUpdatedLabels.add(parseInt(matchingTag[0]));
        }
        else {
            // If the input label is not found in tag mappings, try to parse it as a numeric ID
            var numericID = parseInt(inputLabel);
            // If the input label is a valid number, add it to the temporary updated labels set
            if (!isNaN(numericID)) {
                tempUpdatedLabels.add(numericID);
            }
            else {
                // Otherwise, add the invalid label to the invalid labels array
                invalidLabels.push(inputLabel);
            }
        }
    };
    // Iterate over each input label
    for (var _i = 0, inputLabels_1 = inputLabels; _i < inputLabels_1.length; _i++) {
        var inputLabel = inputLabels_1[_i];
        _loop_2(inputLabel);
    }
    // If there are any invalid labels, display an alert and return false
    if (invalidLabels.length > 0) {
        alert("Invalid label(s): ".concat(invalidLabels.join(', ')) + "example: VIP/11, Hög Lojalitet/12");
        return false;
    }
    // Clear the updatedLabels array and push the values from the temporary updated labels set
    updatedLabels.length = 0;
    updatedLabels.push.apply(updatedLabels, Array.from(tempUpdatedLabels));
    console.log(updatedLabels); // Log a message of the updated labels array to the console
    // Return true indicating successful label update
    return true;
}
// Function that expands a customer card with additional information and styling changes and aslo it performs various actions such as hiding other cards, buttons, and inputs
function expandCard(customerCard_1, container_1, customer_1, api_1, customerId_1, updatedName_1, updatedContactName_1, updatedPhone_1, updatedOrg_1, updatedCountry_1, updatedCity_1, updatedStreet_1, updatedZip_1, updatedCustomerNumber_1, updatedSubscription_1, updatedType_1, updatedLabels_1) {
    return __awaiter(this, arguments, void 0, function (customerCard, container, customer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback) {
        var skipAnimationsCheckbox, enableFlagsCheckbox, skipAnimations, enableFlags, countryName, updatedBy, pageHeight, newPageHeight, rectBeforeFlip, scrollX_1, scrollY_1, clientRect, containerTop, containerLeft, topOffset, leftOffset, width, height, top_1, left, allCards, searchInput, callCustomerButtonContainer, callEditButtonContainer, callDeleteButtonContainer_1, cardBack, cardInfo, formattedCustomer, _a, _b, customerNameElement_1, customerEmailElement_1, customerContactElement, customerPhoneElement_1, customerOrgElement_1, customerCountryElement_1, customerCityElement_1, customerStreetElement_1, customerZipElement_1, customerNumberElement_1, customerSubscriptionElement_1, customerTypeElement_1, customerLabelsElement, customerNameElement, customerEmailElement_2, contactNameElement, customerPhoneElement, customerOrgElement, customerCountryElement, customerCityElement, customerStreetElement, customerZipElement, customerNumberElement, customerSubscriptionElement, customerTypeElement, customerlabelsElement, callCustomerButton_1, deleteButton_1, callEditButton, editButtonClicked_1, buttonContainer, editButtonContainer, DeleteButtonContainer, pageHeight, newPageHeight, rectBeforeFlip, scrollX_2, scrollY_2, clientRect, containerTop, containerLeft, topOffset, leftOffset, width, height, top_2, left, allCards, searchInput;
        var _this = this;
        var _c;
        if (callback === void 0) { callback = function () { }; }
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox');
                    enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
                    skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
                    enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;
                    countryName = customer.country && countryMappings[customer.country];
                    updatedBy = getUserName(customer['updated-by']);
                    if (!skipAnimations) return [3 /*break*/, 4];
                    // If the customer ID is defined, update the customerId variable
                    if (customer['id'] !== undefined) {
                        customerId = customer['id'];
                    }
                    // Add 'expanded' class to the customer card to indicate expansion
                    customerCard.classList.add('expanded');
                    pageHeight = document.documentElement.scrollHeight;
                    newPageHeight = pageHeight + 0;
                    document.documentElement.style.height = "".concat(newPageHeight, "px");
                    rectBeforeFlip = customerCard.getBoundingClientRect();
                    customerCard.dataset.rectBeforeFlip = "".concat(rectBeforeFlip.top + window.scrollY, ",").concat(rectBeforeFlip.left + window.scrollX, ",").concat(rectBeforeFlip.width, ",").concat(rectBeforeFlip.height);
                    // Set initial styles to prepare for animation
                    customerCard.style.position = 'static';
                    customerCard.style.top = "".concat(rectBeforeFlip.top + window.scrollY, "px");
                    customerCard.style.left = "".concat(rectBeforeFlip.left + window.scrollX, "px");
                    customerCard.style.width = "".concat(rectBeforeFlip.width, "px");
                    customerCard.style.height = "".concat(rectBeforeFlip.height, "px");
                    // Wait for the next animation frame to start the flip animation
                    return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                case 1:
                    // Wait for the next animation frame to start the flip animation
                    _d.sent();
                    // Add 'disable-hover' class to prevent hover effects during animation
                    customerCard.classList.add('disable-hover');
                    // Set card position to absolute for animation
                    customerCard.style.position = 'absolute';
                    scrollX_1 = window.scrollX;
                    scrollY_1 = window.scrollY;
                    clientRect = container.getBoundingClientRect();
                    containerTop = clientRect.top + scrollY_1;
                    containerLeft = clientRect.left + scrollX_1;
                    topOffset = containerTop - scrollY_1;
                    leftOffset = containerLeft - scrollX_1;
                    width = window.innerWidth - 40;
                    height = window.innerHeight - 40;
                    top_1 = 20 - topOffset;
                    left = 20 - leftOffset;
                    // Apply calculated styles for expanded card
                    customerCard.style.width = "".concat(width - 16, "px");
                    customerCard.style.height = "".concat(height, "px");
                    customerCard.style.top = "".concat(top_1 + 97, "px");
                    customerCard.style.left = "".concat(left + 7, "px");
                    allCards = container.querySelectorAll('.customer-card');
                    allCards.forEach(function (value) {
                        var card = value;
                        if (card !== customerCard) {
                            hideCard(card);
                        }
                    });
                    searchInput = document.getElementById('searchInput');
                    if (searchInput) {
                        hideSearchInput();
                    }
                    if (enableFlags) {
                        hideFlags();
                    }
                    hideButton();
                    hideFilterButton();
                    hideCreateCardButton();
                    // Remove 'disable-hover' class to re-enable hover effects
                    customerCard.classList.remove('disable-hover');
                    callCustomerButtonContainer = document.createElement('div');
                    callCustomerButtonContainer.id = 'callCustomerButtonContainer';
                    callEditButtonContainer = document.createElement('div');
                    callEditButtonContainer.id = 'callEditButtonContainer';
                    callDeleteButtonContainer_1 = document.createElement('div');
                    callDeleteButtonContainer_1.id = 'callDeleteButtonContainer';
                    cardBack = customerCard.querySelector('.card-back');
                    if (!cardBack) return [3 /*break*/, 3];
                    cardInfo = cardBack.querySelector('.card-info');
                    if (!cardInfo) return [3 /*break*/, 3];
                    // Append call button containers to the card back
                    cardBack.appendChild(callCustomerButtonContainer);
                    cardBack.appendChild(callEditButtonContainer);
                    cardBack.appendChild(callDeleteButtonContainer_1);
                    // Clear the existing content of the card info element
                    cardInfo.innerHTML = '';
                    _b = (_a = "\n                    <div class=\"customer-info\">\n                        <div cla0ss=\"left-info\">\n                        <!-- Editable fields for customer information -->\n                        <p>Name: <span contenteditable=\"true\" id=\"customerName\" class=\"edit-text\">".concat(customer.name, "</span></p>\n                        <p>Contact Person: <span contenteditable=\"true\" id=\"contactName\" class=\"edit-text\">").concat(customer['reference-name'], "</span></p>\n                            <p>Customer Number: <span contenteditable=\"true\" id=\"customerNumber\" class=\"edit-text\">").concat(customer['customer-number'], "</span></p>\n                            <p class=\"customer-id\">Customer ID: ").concat(customer['id'], "</p>\n                            <p>Phone Number: <span contenteditable=\"true\" id=\"customerPhone\" class=\"edit-text\">").concat(customer['phone-number'], "</span></p>\n                            <p>Email: <span contenteditable=\"true\" id=\"customerEmail\" class=\"edit-text\">").concat(customer.email, "</span></p>\n                            <p>Organization Number: <span contenteditable=\"true\" id=\"organizationNumber\" class=\"edit-text\">").concat(customer['org-number'], "</span></p>\n                            <p>Vouchers:</p>\n                            ")).concat;
                    return [4 /*yield*/, getVouchersHTML(customer, api)];
                case 2:
                    formattedCustomer = _b.apply(_a, [_d.sent(), "\n                        </div>\n                        <div class=\"right-info\">\n                        <!-- Display customer information -->\n                            <p>Created: "]).concat(customer['created'] ? formatDate(customer['created']) : 'N/A', "</p>\n                            <p>Updated: ").concat(customer['updated'] ? formatDate(customer['updated']) : 'N/A', "</p>\n                            <p>Updated By: ").concat(updatedBy, "</p>\n                            <p>Subscription: <span id=\"customerSubscription\" class=\"edit-text\">").concat(customer.subscription, "</span></p>\n                            <p>Type: <span id=\"customerType\" \"class=\"edit-text\">").concat(customer.type, "</span></p>\n                            <p>Country: <span contenteditable=\"true\" id=\"customerCountry\" class=\"edit-text\">").concat(countryName || customer.country, "</span></p>\n                            <p>City: <span contenteditable=\"true\" id=\"customerCity\" class=\"edit-text\">").concat(customer.city, "</span></p>\n                            <p>Street Address: <span contenteditable=\"true\" id=\"customerStreet\" class=\"edit-text\">").concat(customer['street-address'], "</span></p>\n                            <p>Zip Code: <span contenteditable=\"true\" id=\"customerZip\" class=\"edit-text\"> ").concat(customer['zip-code'], "</span></p>\n                            <p>Tags: <span contenteditable=\"true\" id=\"customerLabels\" class=\"edit-text\">").concat(((_c = customer.labels) === null || _c === void 0 ? void 0 : _c.map(function (label) { return tagMappings[label]; }).join(', ')) || '', "</span></p>\n                        </div>\n                    </div>\n                ");
                    // Append the formatted customer information HTML to the card info element
                    cardInfo.innerHTML += formattedCustomer;
                    // Set default value for updatedLabels if it's not already set
                    updatedLabels = updatedLabels || [];
                    customerNameElement_1 = cardInfo.querySelector('#customerName');
                    if (customerNameElement_1) {
                        customerNameElement_1.addEventListener('input', function (event) {
                            var newName = event.target.textContent || '';
                            customer.name = newName.trim();
                            updatedName = newName.trim();
                        });
                    }
                    customerEmailElement_1 = cardInfo.querySelector('#customerEmail');
                    if (customerEmailElement_1) {
                        customerEmailElement_1.addEventListener('input', function (event) {
                            var newEmail = event.target.textContent || '';
                            customer.email = newEmail.trim();
                        });
                    }
                    customerContactElement = cardInfo.querySelector('#contactName');
                    if (customerContactElement) {
                        customerContactElement.addEventListener('input', function (event) {
                            var newContact = event.target.textContent || '';
                            customer['reference-name'] = newContact.trim();
                            updatedContactName = newContact.trim();
                        });
                    }
                    customerPhoneElement_1 = cardInfo.querySelector('#customerPhone');
                    if (customerPhoneElement_1) {
                        customerPhoneElement_1.addEventListener('input', function (event) {
                            var newPhone = event.target.textContent || '';
                            customer['phone-number'] = newPhone.trim();
                            updatedPhone = newPhone.trim();
                        });
                    }
                    customerOrgElement_1 = cardInfo.querySelector('#organizationNumber');
                    if (customerOrgElement_1) {
                        customerOrgElement_1.addEventListener('input', function (event) {
                            var newOrg = event.target.textContent || '';
                            customer['org-number'] = newOrg.trim();
                            updatedOrg = newOrg.trim();
                        });
                    }
                    customerCountryElement_1 = cardInfo.querySelector('#customerCountry');
                    if (customerCountryElement_1) {
                        customerCountryElement_1.addEventListener('input', function (event) {
                            var newCountry = event.target.textContent || '';
                            customer.country = newCountry.trim();
                            updatedCountry = newCountry.trim();
                        });
                    }
                    customerCityElement_1 = cardInfo.querySelector('#customerCity');
                    if (customerCityElement_1) {
                        customerCityElement_1.addEventListener('input', function (event) {
                            var newCity = event.target.textContent || '';
                            customer.city = newCity.trim();
                            updatedCity = newCity.trim();
                        });
                    }
                    customerStreetElement_1 = cardInfo.querySelector('#customerStreet');
                    if (customerStreetElement_1) {
                        customerStreetElement_1.addEventListener('input', function (event) {
                            var newStreet = event.target.textContent || '';
                            customer['street-address'] = newStreet.trim();
                            updatedStreet = newStreet.trim();
                        });
                    }
                    customerZipElement_1 = cardInfo.querySelector('#customerZip');
                    if (customerZipElement_1) {
                        customerZipElement_1.addEventListener('input', function (event) {
                            var newZip = event.target.textContent || '';
                            customer['zip-code'] = newZip.trim();
                            updatedZip = newZip.trim();
                        });
                    }
                    customerNumberElement_1 = cardInfo.querySelector('#customerNumber');
                    if (customerNumberElement_1) {
                        customerNumberElement_1.addEventListener('input', function (event) {
                            var newCustomerNumber = event.target.textContent || '';
                            customer['customer-number'] = newCustomerNumber.trim();
                            updatedCustomerNumber = newCustomerNumber.trim();
                        });
                    }
                    customerSubscriptionElement_1 = document.getElementById('customerSubscription');
                    if (customerSubscriptionElement_1) {
                        customerSubscriptionElement_1.addEventListener('click', function () {
                            if (editButtonClicked_1) {
                                updatedSubscription = !updatedSubscription;
                                customerSubscriptionElement_1.textContent = updatedSubscription.toString();
                            }
                        });
                    }
                    customerTypeElement_1 = document.getElementById('customerType');
                    if (customerTypeElement_1) {
                        customerTypeElement_1.addEventListener('click', function () {
                            if (editButtonClicked_1) {
                                updatedType = updatedType === 'individual' ? 'organization' : 'individual';
                                customerTypeElement_1.textContent = updatedType;
                            }
                        });
                    }
                    customerLabelsElement = cardInfo.querySelector('#customerLabels');
                    if (customerLabelsElement) {
                        customerLabelsElement.addEventListener('blur', function (event) {
                            // When the element loses focus, update the customer's labels
                            labelsFieldEdited = true;
                            var newCustomerLabels = event.target.textContent || '';
                            var inputLabels = newCustomerLabels.split(',').map(function (label) { return label.trim(); });
                            var tempUpdatedLabels = new Set();
                            var invalidLabels = [];
                            // Process the input labels, checking if they match existing tags or are valid numbers
                            inputLabels.forEach(function (inputLabel) {
                                if (inputLabel) {
                                    var matchingTag = Object.entries(tagMappings).find(function (_a) {
                                        var _id = _a[0], name = _a[1];
                                        return name === inputLabel;
                                    });
                                    if (matchingTag) {
                                        tempUpdatedLabels.add(parseInt(matchingTag[0]));
                                    }
                                    else {
                                        var numericID = parseInt(inputLabel);
                                        if (!isNaN(numericID)) {
                                            tempUpdatedLabels.add(numericID);
                                        }
                                        else {
                                            invalidLabels.push(inputLabel);
                                        }
                                    }
                                }
                            });
                            // Handle invalid labels
                            if (invalidLabels.length > 0) {
                                alert("Invalid label(s): ".concat(invalidLabels.join(', ')) + "example: VIP/11, Hög Lojalitet/12");
                                return;
                            }
                            // Update the updatedLabels array with the validated labels
                            updatedLabels = Array.from(tempUpdatedLabels);
                            console.log(updatedLabels); // Console log outputs message with the updatedlabels value
                        });
                    }
                    _d.label = 3;
                case 3:
                    customerNameElement = document.getElementById('customerName');
                    if (customerNameElement) {
                        customerNameElement.contentEditable = 'false';
                    }
                    customerEmailElement_2 = document.getElementById('customerEmail');
                    if (customerEmailElement_2) {
                        customerEmailElement_2.contentEditable = 'false';
                    }
                    contactNameElement = document.getElementById('contactName');
                    if (contactNameElement) {
                        contactNameElement.contentEditable = 'false';
                    }
                    customerPhoneElement = document.getElementById('customerPhone');
                    if (customerPhoneElement) {
                        customerPhoneElement.contentEditable = 'false';
                    }
                    customerOrgElement = document.getElementById('organizationNumber');
                    if (customerOrgElement) {
                        customerOrgElement.contentEditable = 'false';
                    }
                    customerCountryElement = document.getElementById('customerCountry');
                    if (customerCountryElement) {
                        customerCountryElement.contentEditable = 'false';
                    }
                    customerCityElement = document.getElementById('customerCity');
                    if (customerCityElement) {
                        customerCityElement.contentEditable = 'false';
                    }
                    customerStreetElement = document.getElementById('customerStreet');
                    if (customerStreetElement) {
                        customerStreetElement.contentEditable = 'false';
                    }
                    customerZipElement = document.getElementById('customerZip');
                    if (customerZipElement) {
                        customerZipElement.contentEditable = 'false';
                    }
                    customerNumberElement = document.getElementById('customerNumber');
                    if (customerNumberElement) {
                        customerNumberElement.contentEditable = 'false';
                    }
                    customerSubscriptionElement = document.getElementById('customerSubscription');
                    if (customerSubscriptionElement) {
                        customerSubscriptionElement.contentEditable = 'false';
                    }
                    customerTypeElement = document.getElementById('customerType');
                    if (customerTypeElement) {
                        customerTypeElement.contentEditable = 'false';
                    }
                    customerlabelsElement = document.getElementById('customerLabels');
                    if (customerlabelsElement) {
                        customerlabelsElement.contentEditable = 'false';
                    }
                    callCustomerButton_1 = document.createElement('button');
                    callCustomerButton_1.textContent = 'Save';
                    callCustomerButton_1.classList.add('call-button');
                    // Initially hides the button
                    callCustomerButton_1.style.display = 'none';
                    callCustomerButton_1.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var updatedEmail;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // Prevents event bubbling
                                    event.stopPropagation();
                                    updatedEmail = customerEmailElement_2.textContent || '';
                                    return [4 /*yield*/, callUpdatedCustomer(api, customerId, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, callCustomerButton_1, deleteButton_1, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    deleteButton_1 = document.createElement('button');
                    deleteButton_1.textContent = 'Delete';
                    deleteButton_1.id = 'deleteButton';
                    deleteButton_1.classList.add('delete-button');
                    // Initially hides the button
                    deleteButton_1.style.display = 'none';
                    deleteButton_1.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!confirm('Are you sure you want to delete this customer?')) return [3 /*break*/, 4];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    // Attempt to remove the customer via API call
                                    return [4 /*yield*/, api.removeCustomer(customerId)];
                                case 2:
                                    // Attempt to remove the customer via API call
                                    _a.sent();
                                    alert('Customer deleted successfully'); // Aler that the customer has been deleted
                                    // Remove the customer card from the UI
                                    customerCard.remove();
                                    // Show various UI elements that were hidden during editing
                                    showSearchInput();
                                    if (enableFlags) {
                                        showFlags();
                                    }
                                    showButton();
                                    showFilterButton();
                                    showCreateCardButton();
                                    // Execute the callback function if provided
                                    if (typeof callback === 'function') {
                                        callback();
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_3 = _a.sent();
                                    return [3 /*break*/, 4];
                                case 4:
                                    // Append the "Delete" button to its container
                                    callDeleteButtonContainer_1.appendChild(deleteButton_1);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    callEditButton = document.createElement('button');
                    callEditButton.textContent = 'Edit';
                    callEditButton.classList.add('edit-button');
                    editButtonClicked_1 = false;
                    // Add an event listener to the "Edit" button
                    callEditButton.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var customerLabelsValid, customerNameElement, customerEmailElement, contactNameElement, customerPhoneElement, customerOrgElement, customerCountryElement, customerCityElement, customerStreetElement, customerZipElement, customerNumberElement, customerSubscriptionElement, customerTypeElement, customerlabelsElement;
                        return __generator(this, function (_a) {
                            // Set flag to true indicating the edit button is clicked
                            editButtonClicked_1 = true;
                            // Prevent event bubbling
                            event.stopPropagation();
                            // Show the "Save" and "Delete" buttons
                            callCustomerButton_1.style.display = 'block';
                            deleteButton_1.style.display = 'block';
                            // Enable text editing for various elements
                            enableTextEditing(true);
                            customerLabelsValid = checkCustomerLabels(updatedLabels);
                            if (!customerLabelsValid) {
                                // Exit early if customer labels are not valid
                                return [2 /*return*/];
                            }
                            customerNameElement = document.getElementById('customerName');
                            if (customerNameElement) {
                                customerNameElement.contentEditable = 'true';
                            }
                            customerEmailElement = document.getElementById('customerEmail');
                            if (customerEmailElement) {
                                customerEmailElement.contentEditable = 'true';
                            }
                            contactNameElement = document.getElementById('contactName');
                            if (contactNameElement) {
                                contactNameElement.contentEditable = 'true';
                            }
                            customerPhoneElement = document.getElementById('customerPhone');
                            if (customerPhoneElement) {
                                customerPhoneElement.contentEditable = 'true';
                            }
                            customerOrgElement = document.getElementById('organizationNumber');
                            if (customerOrgElement) {
                                customerOrgElement.contentEditable = 'true';
                            }
                            customerCountryElement = document.getElementById('customerCountry');
                            if (customerCountryElement) {
                                customerCountryElement.contentEditable = 'true';
                            }
                            customerCityElement = document.getElementById('customerCity');
                            if (customerCityElement) {
                                customerCityElement.contentEditable = 'true';
                            }
                            customerStreetElement = document.getElementById('customerStreet');
                            if (customerStreetElement) {
                                customerStreetElement.contentEditable = 'true';
                            }
                            customerZipElement = document.getElementById('customerZip');
                            if (customerZipElement) {
                                customerZipElement.contentEditable = 'true';
                            }
                            customerNumberElement = document.getElementById('customerNumber');
                            if (customerNumberElement) {
                                customerNumberElement.contentEditable = 'true';
                            }
                            customerSubscriptionElement = document.getElementById('customerSubscription');
                            if (customerSubscriptionElement) {
                                customerSubscriptionElement.contentEditable = 'false';
                            }
                            customerTypeElement = document.getElementById('customerType');
                            if (customerTypeElement) {
                                customerTypeElement.contentEditable = 'false';
                            }
                            customerlabelsElement = document.getElementById('customerLabels');
                            if (customerlabelsElement) {
                                customerlabelsElement.contentEditable = 'true';
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    buttonContainer = document.getElementById('callCustomerButtonContainer');
                    if (buttonContainer) {
                        buttonContainer.appendChild(callCustomerButton_1);
                    }
                    editButtonContainer = document.getElementById('callEditButtonContainer');
                    if (editButtonContainer) {
                        editButtonContainer.appendChild(callEditButton);
                    }
                    DeleteButtonContainer = document.getElementById('callDeleteButtonContainer');
                    if (DeleteButtonContainer) {
                        DeleteButtonContainer.appendChild(deleteButton_1);
                    }
                    // Set the customer card to be displayed and remove hover effect
                    customerCard.style.display = 'block';
                    customerCard.classList.add('no-hover');
                    // Execute the callback function if it exists
                    if (typeof callback === 'function') {
                        callback();
                    }
                    return [3 /*break*/, 7];
                case 4:
                    // If customer ID exists, assign it to the customerId variable
                    if (customer['id'] !== undefined) {
                        customerId = customer['id'];
                    }
                    // Add 'expanded' class to the customer card
                    customerCard.classList.add('expanded');
                    // Delay execution for 500 milliseconds
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                case 5:
                    // Delay execution for 500 milliseconds
                    _d.sent();
                    pageHeight = document.documentElement.scrollHeight;
                    newPageHeight = pageHeight + 0;
                    // Set the new page height
                    document.documentElement.style.height = "".concat(newPageHeight, "px");
                    rectBeforeFlip = customerCard.getBoundingClientRect();
                    // Store the position and dimensions as a dataset attribute
                    customerCard.dataset.rectBeforeFlip = "".concat(rectBeforeFlip.top + window.scrollY, ",").concat(rectBeforeFlip.left + window.scrollX, ",").concat(rectBeforeFlip.width, ",").concat(rectBeforeFlip.height);
                    // Reset the styles of the customer card for animation
                    customerCard.style.position = 'static';
                    customerCard.style.top = "".concat(rectBeforeFlip.top + window.scrollY, "px");
                    customerCard.style.left = "".concat(rectBeforeFlip.left + window.scrollX, "px");
                    customerCard.style.width = "".concat(rectBeforeFlip.width, "px");
                    customerCard.style.height = "".concat(rectBeforeFlip.height, "px");
                    // Await the next frame update
                    return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                case 6:
                    // Await the next frame update
                    _d.sent();
                    // Add class to disable hover effects on the customer card
                    customerCard.classList.add('disable-hover');
                    // Set transition properties for smooth animation
                    customerCard.style.transition = 'width 2s ease, height 2s ease, top 2s ease, left 2s ease';
                    // Set the position of the customer card to absolute
                    customerCard.style.position = 'absolute';
                    scrollX_2 = window.scrollX;
                    scrollY_2 = window.scrollY;
                    clientRect = container.getBoundingClientRect();
                    containerTop = clientRect.top + scrollY_2;
                    containerLeft = clientRect.left + scrollX_2;
                    topOffset = containerTop - scrollY_2;
                    leftOffset = containerLeft - scrollX_2;
                    width = window.innerWidth - 40;
                    height = window.innerHeight - 40;
                    top_2 = 20 - topOffset;
                    left = 20 - leftOffset;
                    // Set new styles for the card
                    customerCard.style.width = "".concat(width - 16, "px");
                    customerCard.style.height = "".concat(height, "px");
                    customerCard.style.top = "".concat(top_2 + 97, "px");
                    customerCard.style.left = "".concat(left + 7, "px");
                    allCards = container.querySelectorAll('.customer-card');
                    allCards.forEach(function (value) {
                        var card = value;
                        if (card !== customerCard) {
                            hideCard(card);
                        }
                    });
                    searchInput = document.getElementById('searchInput');
                    if (searchInput) {
                        hideSearchInput();
                    }
                    if (enableFlags) {
                        hideFlags();
                    }
                    hideButton();
                    hideFilterButton();
                    hideCreateCardButton();
                    // After a timeout, execute the following code
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var callCustomerButtonContainer, callEditButtonContainer, callDeleteButtonContainer, cardBack, cardInfo, formattedCustomer, _a, _b, customerNameElement_2, customerEmailElement_3, customerContactElement, customerPhoneElement_2, customerOrgElement_2, customerCountryElement_2, customerCityElement_2, customerStreetElement_2, customerZipElement_2, customerNumberElement_2, customerSubscriptionElement_2, customerTypeElement_2, customerLabelsElement, callCustomerButton_2, deleteButton_2, callEditButton, editButtonClicked_2, buttonContainer, editButtonContainer, DeleteButtonContainer, customerNameElement, customerEmailElement, contactNameElement, customerPhoneElement, customerOrgElement, customerCountryElement, customerCityElement, customerStreetElement, customerZipElement, customerNumberElement, customerSubscriptionElement, customerTypeElement, customerlabelsElement;
                        var _this = this;
                        var _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    // Remove the 'disable-hover' class from the customer card
                                    customerCard.classList.remove('disable-hover');
                                    callCustomerButtonContainer = document.createElement('div');
                                    callCustomerButtonContainer.id = 'callCustomerButtonContainer';
                                    callEditButtonContainer = document.createElement('div');
                                    callEditButtonContainer.id = 'callEditButtonContainer';
                                    callDeleteButtonContainer = document.createElement('div');
                                    callDeleteButtonContainer.id = 'callDeleteButtonContainer';
                                    cardBack = customerCard.querySelector('.card-back');
                                    if (!cardBack) return [3 /*break*/, 3];
                                    // Set IDs for button containers
                                    callCustomerButtonContainer.id = 'callCustomerButtonContainer';
                                    callEditButtonContainer.id = 'callEditButtonContainer';
                                    callDeleteButtonContainer.id = 'callDeleteButtonContainer';
                                    cardInfo = cardBack.querySelector('.card-info');
                                    if (!cardInfo) return [3 /*break*/, 2];
                                    // Append button containers to the card back
                                    cardBack.appendChild(callCustomerButtonContainer);
                                    cardBack.appendChild(callEditButtonContainer);
                                    cardBack.appendChild(callDeleteButtonContainer);
                                    // Clear the HTML content of the card info
                                    cardInfo.innerHTML = '';
                                    _b = (_a = "\n                    <div class=\"customer-info\">\n                    <div class=\"left-info\">\n                    <p>Name: <span contenteditable=\"true\" id=\"customerName\" class=\"edit-text\">".concat(customer.name, "</span></p>\n                    <p>Contact Person: <span contenteditable=\"true\" id=\"contactName\" class=\"edit-text\">").concat(customer['reference-name'], "</span></p>\n                    <p>Customer Number: <span contenteditable=\"true\" id=\"customerNumber\" class=\"edit-text\">").concat(customer['customer-number'], "</span></p>\n                    <p class=\"customer-id\">Customer ID: ").concat(customer['id'], "</p>\n                        <p>Phone Number: <span contenteditable=\"true\" id=\"customerPhone\" class=\"edit-text\">").concat(customer['phone-number'], "</span></p>\n                        <p>Email: <span contenteditable=\"true\" id=\"customerEmail\" class=\"edit-text\">").concat(customer.email, "</span></p>\n                        <p>Organization Number: <span contenteditable=\"true\" id=\"organizationNumber\" class=\"edit-text\">").concat(customer['org-number'], "</span></p>\n                        <p>Vouchers:</p>\n                        ")).concat;
                                    return [4 /*yield*/, getVouchersHTML(customer, api)];
                                case 1:
                                    formattedCustomer = _b.apply(_a, [_d.sent(), "\n                    </div>\n                    <div class=\"right-info\">\n                        <p>Created: "]).concat(customer['created'] ? formatDate(customer['created']) : 'N/A', "</p>\n                        <p>Updated: ").concat(customer['updated'] ? formatDate(customer['updated']) : 'N/A', "</p>\n                        <p>Updated By: ").concat(updatedBy, "</p>\n                        <p>Subscription: <span id=\"customerSubscription\" class=\"edit-text\">").concat(customer.subscription, "</span></p>\n                        <p>Type: <span id=\"customerType\" \"class=\"edit-text\">").concat(customer.type, "</span></p>\n                        <p>Country: <span contenteditable=\"true\" id=\"customerCountry\" class=\"edit-text\">").concat(countryName || customer.country, "</span></p>\n                        <p>City: <span contenteditable=\"true\" id=\"customerCity\" class=\"edit-text\">").concat(customer.city, "</span></p>\n                        <p>Street Address: <span contenteditable=\"true\" id=\"customerStreet\" class=\"edit-text\">").concat(customer['street-address'], "</span></p>\n                        <p>Zip Code: <span contenteditable=\"true\" id=\"customerZip\" class=\"edit-text\"> ").concat(customer['zip-code'], "</span></p>\n                        <p>Tags: <span contenteditable=\"true\" id=\"customerLabels\" class=\"edit-text\">").concat(((_c = customer.labels) === null || _c === void 0 ? void 0 : _c.map(function (label) { return tagMappings[label]; }).join(', ')) || '', "</span></p>\n                        </div>\n                </div>\n                ");
                                    // Append formatted customer information to the card info
                                    cardInfo.innerHTML += formattedCustomer;
                                    // Initialize updatedLabels if it's not already initialized
                                    updatedLabels = updatedLabels || [];
                                    customerNameElement_2 = cardInfo.querySelector('#customerName');
                                    if (customerNameElement_2) {
                                        customerNameElement_2.addEventListener('input', function (event) {
                                            // Update customer name
                                            var newName = event.target.textContent || '';
                                            customer.name = newName.trim();
                                            updatedName = newName.trim();
                                        });
                                    }
                                    customerEmailElement_3 = cardInfo.querySelector('#customerEmail');
                                    if (customerEmailElement_3) {
                                        customerEmailElement_3.addEventListener('input', function (event) {
                                            // Update customer email
                                            var newEmail = event.target.textContent || '';
                                            customer.email = newEmail.trim();
                                        });
                                    }
                                    customerContactElement = cardInfo.querySelector('#contactName');
                                    if (customerContactElement) {
                                        customerContactElement.addEventListener('input', function (event) {
                                            // Update customer contact person name
                                            var newContact = event.target.textContent || '';
                                            customer['reference-name'] = newContact.trim();
                                            updatedContactName = newContact.trim();
                                        });
                                        customerPhoneElement_2 = cardInfo.querySelector('#customerPhone');
                                        if (customerPhoneElement_2) {
                                            customerPhoneElement_2.addEventListener('input', function (event) {
                                                // Update customer phone number
                                                var newPhone = event.target.textContent || '';
                                                customer['phone-number'] = newPhone.trim();
                                                updatedPhone = newPhone.trim();
                                            });
                                        }
                                        customerOrgElement_2 = cardInfo.querySelector('#organizationNumber');
                                        if (customerOrgElement_2) {
                                            customerOrgElement_2.addEventListener('input', function (event) {
                                                // Update customer organization number
                                                var newOrg = event.target.textContent || '';
                                                customer['org-number'] = newOrg.trim();
                                                updatedOrg = newOrg.trim();
                                            });
                                        }
                                        customerCountryElement_2 = cardInfo.querySelector('#customerCountry');
                                        if (customerCountryElement_2) {
                                            customerCountryElement_2.addEventListener('input', function (event) {
                                                // Update customer country
                                                var newCountry = event.target.textContent || '';
                                                customer.country = newCountry.trim();
                                                updatedCountry = newCountry.trim();
                                            });
                                        }
                                        customerCityElement_2 = cardInfo.querySelector('#customerCity');
                                        if (customerCityElement_2) {
                                            customerCityElement_2.addEventListener('input', function (event) {
                                                // Update customer city
                                                var newCity = event.target.textContent || '';
                                                customer.city = newCity.trim();
                                                updatedCity = newCity.trim();
                                            });
                                        }
                                        customerStreetElement_2 = cardInfo.querySelector('#customerStreet');
                                        if (customerStreetElement_2) {
                                            customerStreetElement_2.addEventListener('input', function (event) {
                                                // Update customer street address
                                                var newStreet = event.target.textContent || '';
                                                customer['street-address'] = newStreet.trim();
                                                updatedStreet = newStreet.trim();
                                            });
                                        }
                                        customerZipElement_2 = cardInfo.querySelector('#customerZip');
                                        if (customerZipElement_2) {
                                            customerZipElement_2.addEventListener('input', function (event) {
                                                // Update customer zip code
                                                var newZip = event.target.textContent || '';
                                                customer['zip-code'] = newZip.trim();
                                                updatedZip = newZip.trim();
                                            });
                                        }
                                        customerNumberElement_2 = cardInfo.querySelector('#customerNumber');
                                        if (customerNumberElement_2) {
                                            customerNumberElement_2.addEventListener('input', function (event) {
                                                // Update customer number
                                                var newCustomerNumber = event.target.textContent || '';
                                                customer['customer-number'] = newCustomerNumber.trim();
                                                updatedCustomerNumber = newCustomerNumber.trim();
                                            });
                                        }
                                        customerSubscriptionElement_2 = document.getElementById('customerSubscription');
                                        if (customerSubscriptionElement_2) {
                                            customerSubscriptionElement_2.addEventListener('click', function () {
                                                // Update customer subscription
                                                if (editButtonClicked_2) {
                                                    updatedSubscription = !updatedSubscription;
                                                    customerSubscriptionElement_2.textContent = updatedSubscription.toString();
                                                }
                                            });
                                        }
                                        customerTypeElement_2 = document.getElementById('customerType');
                                        if (customerTypeElement_2) {
                                            customerTypeElement_2.addEventListener('click', function () {
                                                // Update customer type
                                                if (editButtonClicked_2) {
                                                    updatedType = updatedType === 'individual' ? 'organization' : 'individual';
                                                    customerTypeElement_2.textContent = updatedType;
                                                }
                                            });
                                        }
                                        customerLabelsElement = cardInfo.querySelector('#customerLabels');
                                        if (customerLabelsElement) {
                                            // Add a blur event listener to handle when the element loses focus
                                            customerLabelsElement.addEventListener('blur', function (event) {
                                                // Set a flag indicating that the labels field has been edited
                                                labelsFieldEdited = true;
                                                // Get the new customer labels text content and split it into an array of labels
                                                var newCustomerLabels = event.target.textContent || '';
                                                var inputLabels = newCustomerLabels.split(',').map(function (label) { return label.trim(); });
                                                // Initialize sets to store updated labels and invalid labels
                                                var tempUpdatedLabels = new Set();
                                                var invalidLabels = [];
                                                // Iterate over each input label
                                                inputLabels.forEach(function (inputLabel) {
                                                    if (inputLabel) {
                                                        // Check if the input label matches any tag in the tag mappings
                                                        var matchingTag = Object.entries(tagMappings).find(function (_a) {
                                                            var _id = _a[0], name = _a[1];
                                                            return name === inputLabel;
                                                        });
                                                        if (matchingTag) {
                                                            // If a matching tag is found, add its ID to the updated labels set
                                                            tempUpdatedLabels.add(parseInt(matchingTag[0]));
                                                        }
                                                        else {
                                                            // If no matching tag is found, attempt to parse the label as a numeric ID
                                                            var numericID = parseInt(inputLabel);
                                                            if (!isNaN(numericID)) {
                                                                // If the label is a valid numeric ID, add it to the updated labels set
                                                                tempUpdatedLabels.add(numericID);
                                                            }
                                                            else {
                                                                // If the label is not a valid numeric ID, add it to the list of invalid labels
                                                                invalidLabels.push(inputLabel);
                                                            }
                                                        }
                                                    }
                                                });
                                                // If there are any invalid labels, display an alert with the invalid labels and return
                                                if (invalidLabels.length > 0) {
                                                    alert("Invalid label(s): ".concat(invalidLabels.join(', ')) + "example: VIP/11, Hög Lojalitet/12");
                                                    return;
                                                }
                                                // Convert the updated labels set to an array and assign it to the global variable updatedLabels
                                                updatedLabels = Array.from(tempUpdatedLabels);
                                                console.log(updatedLabels); // Output a console log message with the updated labels value
                                            });
                                        }
                                    }
                                    callCustomerButton_2 = document.createElement('button');
                                    callCustomerButton_2.textContent = 'Save';
                                    callCustomerButton_2.classList.add('call-button');
                                    // Initially hide the button
                                    callCustomerButton_2.style.display = 'none';
                                    callCustomerButton_2.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                                        var updatedEmail;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    // Prevent event bubbling
                                                    event.stopPropagation();
                                                    updatedEmail = customerEmailElement_3.textContent || '';
                                                    // Call the function to update the customer information
                                                    return [4 /*yield*/, callUpdatedCustomer(api, customerId, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, callCustomerButton_2, deleteButton_2, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels)];
                                                case 1:
                                                    // Call the function to update the customer information
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    deleteButton_2 = document.createElement('button');
                                    deleteButton_2.textContent = 'Delete';
                                    deleteButton_2.id = 'deleteButton';
                                    deleteButton_2.classList.add('delete-button');
                                    // Initially hide the button
                                    deleteButton_2.style.display = 'none';
                                    deleteButton_2.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                                        var allCards_1, error_4;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!confirm('Are you sure you want to delete this customer?')) return [3 /*break*/, 4];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    // Attempt to remove the customer via the API
                                                    return [4 /*yield*/, api.removeCustomer(customerId)];
                                                case 2:
                                                    // Attempt to remove the customer via the API
                                                    _a.sent();
                                                    alert('Customer deleted successfully'); // Alert to display a success message
                                                    // Remove the customer card from the DOM
                                                    customerCard.remove();
                                                    allCards_1 = document.querySelectorAll('.customer-card');
                                                    allCards_1.forEach(function (value) {
                                                        var card = value;
                                                        showCard(card);
                                                        // Show the search input field
                                                        var searchInput = document.getElementById('searchInput');
                                                        if (searchInput) {
                                                            searchInput.style.visibility = 'visible';
                                                        }
                                                        // Show flags if enabled
                                                        if (enableFlags) {
                                                            allCards_1.forEach(function (card) {
                                                                var flagImg = card.querySelector('.flag');
                                                                if (flagImg) {
                                                                    flagImg.style.visibility = 'visible';
                                                                }
                                                            });
                                                        }
                                                        // Show buttons
                                                        showButton();
                                                        showFilterButton();
                                                        showCreateCardButton();
                                                    });
                                                    // Execute the callback function if it's a function
                                                    if (typeof callback === 'function') {
                                                        callback();
                                                    }
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    error_4 = _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 4:
                                                    // Append the delete button to its container after execution
                                                    callDeleteButtonContainer.appendChild(deleteButton_2);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    callEditButton = document.createElement('button');
                                    callEditButton.textContent = 'Edit';
                                    callEditButton.classList.add('edit-button');
                                    editButtonClicked_2 = false;
                                    callEditButton.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                                        var customerLabelsValid, customerNameElement, customerEmailElement, contactNameElement, customerPhoneElement, customerOrgElement, customerCountryElement, customerCityElement, customerStreetElement, customerZipElement, customerNumberElement, customerSubscriptionElement, customerTypeElement, customerlabelsElement;
                                        return __generator(this, function (_a) {
                                            // Set edit button clicked state to true
                                            editButtonClicked_2 = true;
                                            // Prevent event bubbling
                                            event.stopPropagation();
                                            // Display the 'Save' button
                                            callCustomerButton_2.style.display = 'block';
                                            // Display the 'Delete' button
                                            deleteButton_2.style.display = 'block';
                                            // Enable text editing
                                            enableTextEditing(true);
                                            customerLabelsValid = checkCustomerLabels(updatedLabels);
                                            if (!customerLabelsValid) {
                                                // Exit early if customer labels are not valid
                                                return [2 /*return*/];
                                            }
                                            customerNameElement = document.getElementById('customerName');
                                            if (customerNameElement) {
                                                customerNameElement.contentEditable = 'true';
                                            }
                                            customerEmailElement = document.getElementById('customerEmail');
                                            if (customerEmailElement) {
                                                customerEmailElement.contentEditable = 'true';
                                            }
                                            contactNameElement = document.getElementById('contactName');
                                            if (contactNameElement) {
                                                contactNameElement.contentEditable = 'true';
                                            }
                                            customerPhoneElement = document.getElementById('customerPhone');
                                            if (customerPhoneElement) {
                                                customerPhoneElement.contentEditable = 'true';
                                            }
                                            customerOrgElement = document.getElementById('organizationNumber');
                                            if (customerOrgElement) {
                                                customerOrgElement.contentEditable = 'true';
                                            }
                                            customerCountryElement = document.getElementById('customerCountry');
                                            if (customerCountryElement) {
                                                customerCountryElement.contentEditable = 'true';
                                            }
                                            customerCityElement = document.getElementById('customerCity');
                                            if (customerCityElement) {
                                                customerCityElement.contentEditable = 'true';
                                            }
                                            customerStreetElement = document.getElementById('customerStreet');
                                            if (customerStreetElement) {
                                                customerStreetElement.contentEditable = 'true';
                                            }
                                            customerZipElement = document.getElementById('customerZip');
                                            if (customerZipElement) {
                                                customerZipElement.contentEditable = 'true';
                                            }
                                            customerNumberElement = document.getElementById('customerNumber');
                                            if (customerNumberElement) {
                                                customerNumberElement.contentEditable = 'true';
                                            }
                                            customerSubscriptionElement = document.getElementById('customerSubscription');
                                            if (customerSubscriptionElement) {
                                                customerSubscriptionElement.contentEditable = 'false';
                                            }
                                            customerTypeElement = document.getElementById('customerType');
                                            if (customerTypeElement) {
                                                customerTypeElement.contentEditable = 'false';
                                            }
                                            customerlabelsElement = document.getElementById('customerLabels');
                                            if (customerlabelsElement) {
                                                customerlabelsElement.contentEditable = 'true';
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    buttonContainer = document.getElementById('callCustomerButtonContainer');
                                    if (buttonContainer) {
                                        buttonContainer.appendChild(callCustomerButton_2);
                                    }
                                    editButtonContainer = document.getElementById('callEditButtonContainer');
                                    if (editButtonContainer) {
                                        editButtonContainer.appendChild(callEditButton);
                                    }
                                    DeleteButtonContainer = document.getElementById('callDeleteButtonContainer');
                                    if (DeleteButtonContainer) {
                                        DeleteButtonContainer.appendChild(deleteButton_2);
                                    }
                                    _d.label = 2;
                                case 2:
                                    customerNameElement = document.getElementById('customerName');
                                    if (customerNameElement) {
                                        customerNameElement.contentEditable = 'false';
                                    }
                                    customerEmailElement = document.getElementById('customerEmail');
                                    if (customerEmailElement) {
                                        customerEmailElement.contentEditable = 'false';
                                    }
                                    contactNameElement = document.getElementById('contactName');
                                    if (contactNameElement) {
                                        contactNameElement.contentEditable = 'false';
                                    }
                                    customerPhoneElement = document.getElementById('customerPhone');
                                    if (customerPhoneElement) {
                                        customerPhoneElement.contentEditable = 'false';
                                    }
                                    customerOrgElement = document.getElementById('organizationNumber');
                                    if (customerOrgElement) {
                                        customerOrgElement.contentEditable = 'false';
                                    }
                                    customerCountryElement = document.getElementById('customerCountry');
                                    if (customerCountryElement) {
                                        customerCountryElement.contentEditable = 'false';
                                    }
                                    customerCityElement = document.getElementById('customerCity');
                                    if (customerCityElement) {
                                        customerCityElement.contentEditable = 'false';
                                    }
                                    customerStreetElement = document.getElementById('customerStreet');
                                    if (customerStreetElement) {
                                        customerStreetElement.contentEditable = 'false';
                                    }
                                    customerZipElement = document.getElementById('customerZip');
                                    if (customerZipElement) {
                                        customerZipElement.contentEditable = 'false';
                                    }
                                    customerNumberElement = document.getElementById('customerNumber');
                                    if (customerNumberElement) {
                                        customerNumberElement.contentEditable = 'false';
                                    }
                                    customerSubscriptionElement = document.getElementById('customerSubscription');
                                    if (customerSubscriptionElement) {
                                        customerSubscriptionElement.contentEditable = 'false';
                                    }
                                    customerTypeElement = document.getElementById('customerType');
                                    if (customerTypeElement) {
                                        customerTypeElement.contentEditable = 'false';
                                    }
                                    customerlabelsElement = document.getElementById('customerLabels');
                                    if (customerlabelsElement) {
                                        customerlabelsElement.contentEditable = 'false';
                                    }
                                    _d.label = 3;
                                case 3:
                                    // Display the customer card and add a 'no-hover' class to it
                                    customerCard.style.display = 'block';
                                    customerCard.classList.add('no-hover');
                                    // Execute callback function if it exists
                                    if (typeof callback === 'function') {
                                        callback();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 2000);
                    _d.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Function that reverses the expansion of a customer card with optional animations
function reverseExpandCard(customerCard_1) {
    return __awaiter(this, arguments, void 0, function (customerCard, callback, fetchAndUpdateCustomers) {
        var skipAnimationsCheckbox, enableFlagsCheckbox, skipAnimations, enableFlags, callCustomerButtonContainer, callEditButtonContainer, callDeleteButtonContainer, rectBeforeFlip, cardTopBeforeFlip, cardLeftBeforeFlip, cardWidthBeforeFlip, cardHeightBeforeFlip, cardInfo, originalContent, cardBack, cardInfo_1, rectBeforeFlip, cardTopBeforeFlip, cardLeftBeforeFlip, cardWidthBeforeFlip, cardHeightBeforeFlip, cardInfo, callCustomerButtonContainer, callEditButtonContainer, originalContent_1;
        var _this = this;
        var _a, _b;
        if (callback === void 0) { callback = function () { }; }
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox');
                    enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox');
                    skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
                    enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;
                    if (!skipAnimations) return [3 /*break*/, 1];
                    // Add a class to disable hover effects
                    document.body.classList.add('disable-hover');
                    callCustomerButtonContainer = customerCard.querySelector('#callCustomerButtonContainer');
                    if (callCustomerButtonContainer) {
                        callCustomerButtonContainer.remove();
                    }
                    callEditButtonContainer = customerCard.querySelector('#callEditButtonContainer');
                    if (callEditButtonContainer) {
                        callEditButtonContainer.remove();
                    }
                    callDeleteButtonContainer = customerCard.querySelector('#callDeleteButtonContainer');
                    if (callDeleteButtonContainer) {
                        callDeleteButtonContainer.remove();
                    }
                    // Add classes and styles for reverse animation
                    customerCard.classList.add('reverse-expand-animation');
                    rectBeforeFlip = (_a = customerCard.dataset.rectBeforeFlip) === null || _a === void 0 ? void 0 : _a.split(',').map(Number);
                    if (!rectBeforeFlip || rectBeforeFlip.length !== 4) {
                        console.error("Error: Unable to get rectBeforeFlip data");
                        return [2 /*return*/];
                    }
                    cardTopBeforeFlip = rectBeforeFlip[0], cardLeftBeforeFlip = rectBeforeFlip[1], cardWidthBeforeFlip = rectBeforeFlip[2], cardHeightBeforeFlip = rectBeforeFlip[3];
                    customerCard.style.width = "".concat(cardWidthBeforeFlip, "px");
                    customerCard.style.height = "".concat(cardHeightBeforeFlip, "px");
                    customerCard.style.top = "".concat(cardTopBeforeFlip, "px");
                    customerCard.style.left = "".concat(cardLeftBeforeFlip, "px");
                    cardInfo = customerCard.querySelector('.card-info');
                    if (cardInfo) {
                        cardInfo.innerHTML = '';
                    }
                    originalContent = customerCard.dataset.originalContent;
                    customerCard.classList.remove('expanded');
                    customerCard.classList.add('backflip');
                    customerCard.classList.add('backmore');
                    customerCard.classList.remove('backflip');
                    customerCard.classList.remove('backmore');
                    cardBack = customerCard.querySelector('.card-back');
                    if (cardBack) {
                        cardInfo_1 = cardBack.querySelector('.card-info');
                        if (cardInfo_1 && originalContent) {
                            cardInfo_1.innerHTML = originalContent;
                        }
                    }
                    // Remove animation classes and styles, enable hover, and execute callback
                    customerCard.classList.remove('reverse-expand-animation');
                    document.body.classList.remove('disable-hover');
                    customerCard.classList.add('shrunk-completed');
                    customerCard.style.position = 'static';
                    window.scrollTo();
                    customerCard.classList.remove('shrunk-completed');
                    showSearchInput();
                    if (enableFlags) {
                        showFlags();
                    }
                    showButton();
                    showFilterButton();
                    showCreateCardButton();
                    fetchAndUpdateCustomers();
                    customerCard.addEventListener('mouseenter', function () {
                        customerCard.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                    });
                    customerCard.addEventListener('mouseleave', function () {
                        customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    });
                    customerCard.addEventListener('click', function () {
                        customerCard.style.transition = '';
                        customerCard.style.transform = '';
                        customerCard.style.boxShadow = '';
                        customerCard.addEventListener('mouseenter', function () {
                            customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        });
                        customerCard.classList.add('disable-hover');
                    });
                    customerCard.classList.remove('disable-hover');
                    customerCard.classList.remove('no-hover');
                    if (typeof callback === 'function') {
                        callback();
                    }
                    return [3 /*break*/, 4];
                case 1:
                    // Add a class to disable hover effects and wait for animations
                    document.body.classList.add('disable-hover');
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                case 3:
                    _c.sent();
                    // Add classes and styles for reverse animation
                    customerCard.classList.add('reverse-expand-animation');
                    rectBeforeFlip = (_b = customerCard.dataset.rectBeforeFlip) === null || _b === void 0 ? void 0 : _b.split(',').map(Number);
                    if (!rectBeforeFlip || rectBeforeFlip.length !== 4) {
                        console.error("Error: Unable to get rectBeforeFlip data");
                        return [2 /*return*/];
                    }
                    cardTopBeforeFlip = rectBeforeFlip[0], cardLeftBeforeFlip = rectBeforeFlip[1], cardWidthBeforeFlip = rectBeforeFlip[2], cardHeightBeforeFlip = rectBeforeFlip[3];
                    customerCard.style.transition = 'width 2s ease, height 2s ease, top 2s ease, left 2s ease';
                    customerCard.style.width = "".concat(cardWidthBeforeFlip, "px");
                    customerCard.style.height = "".concat(cardHeightBeforeFlip, "px");
                    customerCard.style.top = "".concat(cardTopBeforeFlip, "px");
                    customerCard.style.left = "".concat(cardLeftBeforeFlip, "px");
                    cardInfo = customerCard.querySelector('.card-info');
                    if (cardInfo) {
                        cardInfo.innerHTML = '';
                    }
                    callCustomerButtonContainer = customerCard.querySelector('#callCustomerButtonContainer');
                    if (callCustomerButtonContainer) {
                        callCustomerButtonContainer.remove();
                    }
                    callEditButtonContainer = customerCard.querySelector('#callEditButtonContainer');
                    if (callEditButtonContainer) {
                        callEditButtonContainer.remove();
                    }
                    originalContent_1 = customerCard.dataset.originalContent;
                    customerCard.classList.remove('expanded');
                    // Perform reverse animation steps with delays
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var cardBack, cardInfo_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                                case 1:
                                    _a.sent();
                                    customerCard.classList.add('backflip');
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                                case 2:
                                    _a.sent();
                                    customerCard.classList.add('backmore');
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                                case 3:
                                    _a.sent();
                                    customerCard.classList.remove('backflip');
                                    customerCard.classList.remove('backmore');
                                    cardBack = customerCard.querySelector('.card-back');
                                    if (cardBack) {
                                        cardInfo_2 = cardBack.querySelector('.card-info');
                                        if (cardInfo_2 && originalContent_1) {
                                            cardInfo_2.innerHTML = originalContent_1;
                                        }
                                    }
                                    // Remove animation classes and styles, enable hover, and execute callback
                                    customerCard.classList.remove('reverse-expand-animation');
                                    document.body.classList.remove('disable-hover');
                                    // Apply any necessary styles after the animation
                                    applyStylesAfterAnimation();
                                    // Add a completion class to indicate that the shrinking animation has finished
                                    customerCard.classList.add('shrunk-completed');
                                    // Set the position of the customer card to static and scroll the window to the top
                                    customerCard.style.position = 'static';
                                    window.scrollTo();
                                    // Remove the completion class after the animation
                                    customerCard.classList.remove('shrunk-completed');
                                    // Show various UI elements such as search input, flags, buttons, and filter options
                                    showSearchInput();
                                    if (enableFlags) {
                                        showFlags();
                                    }
                                    showButton();
                                    showFilterButton();
                                    showCreateCardButton();
                                    // Fetch and update customer data from onslip api
                                    fetchAndUpdateCustomers();
                                    // Execute the callback function if provided.
                                    callback();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 2000);
                    // Event listener to add box shadow on mouse enter for visual effect
                    customerCard.addEventListener('mouseenter', function () {
                        customerCard.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                    });
                    // Event listener to remove box shadow on mouse leave
                    customerCard.addEventListener('mouseleave', function () {
                        customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    });
                    // Event listener to handle click events on the customer card
                    customerCard.addEventListener('click', function () {
                        // Reset styles and transition for click animation
                        customerCard.style.transition = '';
                        customerCard.style.transform = '';
                        customerCard.style.boxShadow = '';
                        // Add event listener to revert box shadow on mouse enter after click animation
                        customerCard.addEventListener('mouseenter', function () {
                            customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        });
                        // Add class to disable hover effects after click
                        customerCard.classList.add('disable-hover');
                    });
                    // Remove classes to re-enable hover effects
                    customerCard.classList.remove('disable-hover');
                    customerCard.classList.remove('no-hover');
                    _c.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
// Function to apply styles after completion of animation
function applyStylesAfterAnimation() {
    // Select all elements with the class 'customer-card.shrunk-completed'
    var customerCards = document.querySelectorAll('.customer-card.shrunk-completed');
    // Iterate over each selected element
    customerCards.forEach(function (value) {
        // Cast the element to HTMLElement
        var card = value;
        // Reset transform property to translateY(0px)
        card.style.transform = 'translateY(0px)';
        // Reset transition property to ensure immediate transition
        card.style.transition = 'transform 0s ease';
    });
}
// Async function to generate HTML for vouchers associated with a customer
function getVouchersHTML(customer, api) {
    return __awaiter(this, void 0, void 0, function () {
        var vouchers, html, _i, vouchers_2, voucher, voucherType;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, api.listVouchers("customer:".concat(customer.id))];
                case 1:
                    vouchers = _b.sent();
                    html = '';
                    // If vouchers exist
                    if (vouchers.length > 0) {
                        // Start unordered list
                        html += '<ul>';
                        // Iterate over vouchers
                        for (_i = 0, vouchers_2 = vouchers; _i < vouchers_2.length; _i++) {
                            voucher = vouchers_2[_i];
                            voucherType = voucher.type === 'payment' ? 'giftcard' : voucher.type;
                            // Construct list item with voucher details
                            html += "<li style=\"font-size: 25px;\">Voucher Type: ".concat(voucherType, ", Voucher ID: ").concat(voucher.id, ", Balance: ").concat((_a = voucher.payment) === null || _a === void 0 ? void 0 : _a.balance, ", Expiry Date: ").concat(voucher.expires ? new Date(voucher.expires).toDateString() : 'Unknown', "</li>");
                        }
                        // End unordered list
                        html += '</ul>';
                    }
                    else {
                        // If no vouchers, add an empty paragraph
                        html += '<p></p>';
                    }
                    // Return the generated HTML
                    return [2 /*return*/, html];
            }
        });
    });
}
