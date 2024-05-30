// Importing the necessary modules from the onslip api
import { API, webRequestHandler } from '@onslip/onslip-360-web-api';

// Defining the interface for a Customer object
interface Customer {
    name: string; // Customer name
    type?: string; // Type off customer (individual/organization)
    'street-address'?: string; // Customer street address
    'zip-code'?: string; // Customer zip code
    city?: string; // Customer city
    country?: string; // Customer country
    'reference-name'?: string; // Customer contact person name
    email?: string; // Customer email
    'phone-number'?: string; // Customer phone number
    'org-number'?: string; // Customer organization number
    comment?: string; // Comments on Customer
    'customer-number'?: string; // Customer number
    subscription?: boolean; // Customer is subscriped (true/false)
    'client-references'?: string[]; // ? maybe the refernces to different stores under the same corperation/customer ? (not being used)
    id?: number; // Customer ID
    'updated-by'?: number; // Customers information last updated by
    'updated-from'?: number; // ? location from where the customers information was last updated ? (not being used)
    labels?: number[]; // Customer labels 
    created?: string; // Who created the customer
    updated?: string; // WHo last updated the customers information
}

// Defining the Tag interface to represent a tag object with an id and name
interface Tag {
    id: number;  // Unique identifier for the tag
    name: string;  // Name of the tag
}

// Creating an array of Tag objects, representing different tags
const tags: Tag[] = [
    { id: 11, name: 'VIP' },  // Tag with id 11 and name 'VIP'
    { id: 12, name: 'Hög Lojalitet' },  // Tag with id 12 and name 'Hög Lojalitet'
];

// Creating a mapping from tag id to tag name
const tagMappings: { [key: number]: string } = {
    11: 'VIP',  // Mapping tag id 11 to 'VIP'
    12: 'Hög Lojalitet',  // Mapping tag id 12 to 'Hög Lojalitet'
};

// Creating a mapping from user id to user name
const userMappings: { [key: number]: string } = {
    1: 'Oliver Ekström' // Mapping user id 1 to 'Oliver Ekström'
};

// Function to get the user name based on user ID from userMappings, defaulting to 'Unknown User' if not found
const getUserName = (userId: number): string => userMappings[userId] || 'Unknown User';

// Mapping of country codes to country names
const countryMappings: { [key: string]: string } = {
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
const countryMappingsReverse: { [key: string]: string } = Object.fromEntries(
    Object.entries(countryMappings).map(([code, name]) => [name, code])
);

// Function to get the country code based on country name or abbreviation
function getCountryCode(country: string): string | undefined {
        // If the input is a 2-letter abbreviation in uppercase letters
    if (country.length === 2 && /^[A-Z]+$/.test(country)) {
        return country; // Return the abbreviation directly
    }
    // Otherwise, format the country name and search for its corresponding abbreviation in the reverse mapping
    const formattedCountryName = country.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    return countryMappingsReverse[formattedCountryName]; // Return the abbreviation if found, otherwise undefined
}

// Function to populate the filter dropdown menu with tags
function populateFilterDropdown() {
    const filterMenu = document.getElementById('filterMenuId');
    if (!filterMenu) {
        console.error("Filter menu element not found"); // Log an error if the filter menu element is not found
        return;
    }

    // Loop through each tag and create a corresponding dropdown item
    tags.forEach(tag => {
       const tagElement = document.createElement('a'); // Create a new <a> element
        tagElement.style.display = 'block'; // Set display style to block
        tagElement.textContent = tag.name; // Set the text content to the tag name
        tagElement.dataset.tagId = tag.id.toString(); // Set the tag id as a data attribute
        tagElement.dataset.clickCount = '0'; // Set the initial click count to 0
        tagElement.addEventListener('click', handleFilterButtonClick); // Add event listener for click events
        filterMenu.appendChild(tagElement); // Append the tag element to the filter menu
    });
}

// Event handler for tag filter button click events
function handleFilterButtonClick(event: MouseEvent) {
    const target = event.target as HTMLElement; // Get the target element of the click event
    if (!(target instanceof HTMLElement)) return; // Ensure the target is an HTMLElement

    const tagId = parseInt(target.dataset.tagId || ''); // Get the tag id from the data attribute
    let clickCount = parseInt(target.dataset.clickCount || '0'); // Get the current click count

    clickCount = (clickCount + 1) % 3; // Increment the click count modulo 3
    target.dataset.clickCount = clickCount.toString(); // Update the click count in the data attribute

    // Define styles for different filter states
    const stateStyles = [
        { color: 'black', included: false, excluded: false },
        { color: 'green', included: true, excluded: false },
        { color: 'red', included: false, excluded: true }
    ];

    const state = stateStyles[clickCount]; // Get the style for the current click count
    target.style.color = state.color; // Apply the color style to the target element

    // Update includedTags and excludedTags based on the filter state
    if (state.included) {
        includedTags.add(tagId); // Add the tag id to the included tags set
        excludedTags.delete(tagId); // Remove the tag id from the excluded tags set
    } else if (state.excluded) {
        includedTags.delete(tagId); // Remove the tag id from the included tags set
        excludedTags.add(tagId); // Add the tag id to the excluded tags set
    } else {
        includedTags.delete(tagId); // Remove the tag id from both included and excluded tags sets
        excludedTags.delete(tagId);
    }

    applyFilters(); // Apply the filters based on the updated includedTags and excludedTags sets
}

// Function to apply filters based on includedTags, excludedTags, and search term
function applyFilters() {
    const customerCards = document.querySelectorAll('.customer-card') as NodeListOf<HTMLElement>; // Select all customer cards
    const searchTerm = (document.getElementById('searchInput') as HTMLInputElement)?.value.trim().toLowerCase(); // Get search term from input field

    customerCards.forEach(card => {
        // Extract labels from data attribute and convert to array of numbers
        const customerLabels = (card.dataset.labels || '').split(',').map(Number);
        // Extract card info text and convert to lowercase, default to empty string if card info element not found
        const cardInfoElement = card.querySelector('.card-info');
        const cardInfo = cardInfoElement ? cardInfoElement.textContent?.toLowerCase() || '' : '';
        
        // Determine if card should be shown based on included and excluded tags, and search term
        let showCard = includedTags.size === 0 || customerLabels.some(label => includedTags.has(label));

        if (showCard && excludedTags.size > 0) {
            showCard = !customerLabels.some(label => excludedTags.has(label));
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
    const container = document.getElementById('customers-container');
    if (container) {
        // Select all customer cards, sort them based on customer number, and append them back to the container
        const sortedCards = Array.from(container.querySelectorAll('.customer-card')).sort((a, b) => {
            const customerNumberA = parseInt(a.querySelector('p[data-customer-number]')?.textContent || '0');
            const customerNumberB = parseInt(b.querySelector('p[data-customer-number]')?.textContent || '0');
            return customerNumberA - customerNumberB;
        });
        container.innerHTML = '';
        sortedCards.forEach(card => container.appendChild(card));
    }
}

// Function to handle filtering cards
function filterCards() {
    applyFilters();
}

// Function to show the dropdown button
function showButton() {
    const button = document.getElementById('buttonId');
    if (button) {
        button.style.visibility = 'visible';
        button.style.border = '1px solid #ccc';
    } else {
        console.error("Button element not found");
    }
}

// Function to hide the dropdown button
function hideButton() {
    const button = document.getElementById('buttonId');
    const dropdownMenu = document.getElementById('dropdownMenuId');

    if (button && dropdownMenu) {
        button.style.visibility = 'hidden';
        button.style.border = 'none';
        dropdownMenu.classList.remove('show');
    } else {
        console.error("Button or dropdown menu element not found");
    }
}

// Function to show a card
function showCard(card: HTMLElement) {
    card.style.visibility = 'visible';
    card.style.pointerEvents = 'auto';
}

// Function to hide a card
function hideCard(card: HTMLElement) {
    card.style.visibility = 'hidden';
    card.style.pointerEvents = 'none';
}

// Function to show search input field
function showSearchInput() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
        searchInput.style.visibility = 'visible';
    }
}

// Function to hide search input field
function hideSearchInput() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
        searchInput.style.visibility = 'hidden';
    }
}

// Function to show flags on all cards
function showFlags() {
    const allCards = document.querySelectorAll('.customer-card');
    allCards.forEach(card => {
        const flagImg = card.querySelector('.flag') as HTMLImageElement;
        if (flagImg) {
            flagImg.style.visibility = 'visible';
        }
    });
}

// Function to hide flags on all cards
function hideFlags() {
    const allCards = document.querySelectorAll('.customer-card');
    allCards.forEach(card => {
        const flagImg = card.querySelector('.flag') as HTMLImageElement;
        if (flagImg) {
            flagImg.style.visibility = 'hidden';
        }
    });
}

// Function to show the filtering button
function showFilterButton() {
    const filterButton = document.getElementById('filterbuttonId');

    if (filterButton) {
        filterButton.style.visibility = 'visible';
        filterButton.style.border = '1px solid #ccc';
    } else {
        console.error("Filter button element not found");
    }
}

// Function to hide the filtering button
function hideFilterButton() {
    const filterButton = document.getElementById('filterbuttonId');
    const filterMenu = document.getElementById('filterMenuId');

    if (filterButton && filterMenu) {
        filterButton.style.visibility = 'hidden';
        filterButton.style.border = 'none';
        filterMenu.classList.remove('show');
    } else {
        console.error("Filter button or menu element not found");
    }
}

// Function to show the create card button
function showCreateCardButton() {
    const createCardButton = document.getElementById('createCardButtonId');
    if (createCardButton) {
        createCardButton.style.visibility = 'visible';
        createCardButton.style.border = '1px solid #ccc';
    } else {
        console.error("Button element not found");
    }
}

// Function to hide the create card button
function hideCreateCardButton() {
    const createCardButton = document.getElementById('createCardButtonId');

    if (createCardButton) {
        createCardButton.style.visibility = 'hidden';
        createCardButton.style.border = 'none';
        createCardButton.classList.remove('show');
    } else {
        console.error("Button or dropdown menu element not found");
    }
}

// Initialize sets for included and excluded tags
let includedTags: Set<number> = new Set();
let excludedTags: Set<number> = new Set();

// Variable to track whether labels field has been edited
let labelsFieldEdited = false;

// Define a custom type for the type of customer (individual or organization)
type Type = 'individual' | 'organization';

// Event listener to run code when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the checkbox for enabling flags visibility
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;
    if (enableFlagsCheckbox) {
        // Add event listener to toggle flags visibility when checkbox state changes
        enableFlagsCheckbox.addEventListener('change', toggleFlagsVisibility);
        // Toggle flags visibility initially
        toggleFlagsVisibility();
    }

    // Get the checkbox for disabling card colors
    const disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox') as HTMLInputElement;
    if (disableCardColorsCheckbox) {
        // Add event listener to toggle card colors when checkbox state changes
        disableCardColorsCheckbox.addEventListener('change', toggleCardColors);
        // Toggle card colors initially
        toggleCardColors();
    }
});

// Main function responsible for initializing and managing customer cards
export async function main(
    container: HTMLElement,
    updatedEmail: string,
    callCustomerButton: HTMLElement,
    customerId: number,
    updatedName: string,
    updatedContactName: string,
    updatedPhone: string,
    updatedOrg: string,
    updatedCountry: string,
    updatedCity: string,
    updatedStreet: string,
    updatedZip: string,
    updatedCustomerNumber: string,
    updatedSubscription: boolean,
    updatedType: Type,
    updatedLabels: number[],
    callback: () => void = () => {} // Default callback function if not provided
) {
    // Initialize API instance with credentials
    const api = new API('https://api.onslip360.com/v1/', 'oliver', 'key:oe+oliver@oliver', 'LXhEKnIuaHBsOEY6JVVbQVQvXSYwUzN1RT49U1BrLyo=');
    API.initialize(webRequestHandler({}));

    // Get reference to customers container element
    const customersContainer = document.getElementById('customers-container');

    // Hide main container if provided
    if (container && customersContainer) {
        container.style.display = 'none';
    }

    // Fetch all customers from the API and sort them by customer number
    const customers = (await api.listCustomers()).sort((a, b) => parseInt(a['customer-number'] || '0') - parseInt(b['customer-number'] || '0'));

    // Function to add click event listener to elements
    function addClickListener(elementId: string, callback: () => void) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', callback);
        } else {
            console.error(`${elementId} element not found.`);
        }
    }

    // Add click event listeners to buttons and dropdowns
    addClickListener('buttonId', () => toggleDropdown('buttonId', 'dropdownMenuId'));
    addClickListener('filterbuttonId', () => toggleDropdown('filterbuttonId', 'filterMenuId'));
    addClickListener('createCardButtonId', createCard);

    // Function to toggle dropdown visibility
    function toggleDropdown(buttonId: string, menuId: string) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);
        if (button && menu) {
            const isMenuShown = menu.classList.toggle('show');
            button.style.border = isMenuShown ? '2px solid black' : '1px solid #ccc';
        }
    }

    // Function to create a new customer card
    async function createCard() {
        console.log('Create card button clicked'); // Console log message telling that the create card button has been clicked
                
        // Retrieve skip animations checkbox and its value
        const skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox') as HTMLInputElement;
        const skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;

        // Create a new card template and append it to the customers container
        const newCard = createCardTemplate(customers, api, updatedEmail, callCustomerButton, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, fetchAndUpdateCustomers);
        if (customersContainer) {
            customersContainer.appendChild(newCard);
            newCard.style.overflow = 'hidden'; // Hide scrollbar until fully extended
            // Animate card if skip animations is not enabled        
            if (!skipAnimations) {
                await animateCard(newCard);
            }

            // Expand card and add save button listener
            const cardContentWrapper = newCard.querySelector('.hidden-text');
            if (cardContentWrapper) {
                cardContentWrapper.classList.add('hidden-text');
                expandCard(newCard, customersContainer, {} as Customer, {} as API, 0, '', '', '', '', '', '', '', '', '', false, {} as Type, [], () => {
                    newCard.style.overflow = 'auto'; // show scrollbar
                    cardContentWrapper.classList.remove('hidden-text');
                    console.log('Finished expansion');
                });
            } else {
                console.error("CardContentWrapper element not found within newCard");
            }
            addSaveButtonListener(newCard);
        } else {
            console.error("Customers container element not found");
        }
    }

    // Function to animate card flipping
    async function animateCard(card: HTMLElement) {
        await new Promise(resolve => setTimeout(resolve, 250));
        card.classList.add('flip');
        await new Promise(resolve => setTimeout(resolve, 250));
        card.classList.add('more');
        await new Promise(resolve => setTimeout(resolve, 250));
        card.classList.remove('flip');
        card.classList.remove('more');
    }

    // Function to add save button listener to a card
    function addSaveButtonListener(card: HTMLElement) {
        const saveButton = card.querySelector('.save-button');
        if (saveButton) {
            saveButton.addEventListener('click', () => {
                console.log('Save button clicked');
            });
        }
    }

    // Function to fetch and update customers from the API
    async function fetchAndUpdateCustomers() {
        try {

            // Fetch customers from the API and sort them by customer number
            const customers = (await api.listCustomers()).sort((a, b) => parseInt(a['customer-number'] || '0') - parseInt(b['customer-number'] || '0'));
            if (customersContainer) {

                // Hide customers container, clear its content, and recreate cards for each customer
                customersContainer.style.display = 'none';
                customersContainer.innerHTML = '';
                for (const customer of customers) {
                    if (!customerCardExists(customer, customersContainer)) {
                        createCustomerCard(customer, customersContainer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, fetchAndUpdateCustomers, callback);
                        await new Promise(resolve => setTimeout(resolve, 10));
                    } else {
                        console.log("Card already created for customer:", customer);
                    }
                }

                // Wait for a short time and then apply filters, display customers container, and call callback
                await new Promise(resolve => setTimeout(resolve, 70));
                applyFilters();
                customersContainer.style.display = 'grid';
            }
        } catch (err) {
            console.error("Error fetching and updating customers:", err);
        }
    }

    // Fetch and update customers on page load
    await fetchAndUpdateCustomers();

    // Add event listener to search input for filtering cards
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            console.log('Input event triggered');
            filterCards();
        });
    } else {
        console.error("Search input element not found");
    }

    // Populate filter dropdown menu
    populateFilterDropdown();

    // Add global click event listener to close dropdown menus when clicking outside
    document.body.addEventListener('click', (event) => {
        const dropdownMenu = document.getElementById('dropdownMenuId');
        const filterMenu = document.getElementById('filterMenuId');
        const button = document.getElementById('buttonId');
        const filterButton = document.getElementById('filterbuttonId');
        
        // Close dropdown menu if clicked outside
        if (!event.target || !(event.target as Element).closest('.dropdown') && dropdownMenu && !dropdownMenu.contains(event.target as Node) && button) {
            dropdownMenu?.classList.remove('show');
            button!.style.border = '1px solid #ccc';
        }
        
        // Close filter menu if clicked outside
        if (!event.target || !(event.target as Element).closest('.filterbtn') && filterMenu && !filterMenu.contains(event.target as Node) && filterButton) {
            filterMenu?.classList.remove('show');
            filterButton!.style.border = '1px solid #ccc';
        }
    });
}

// Function to create new card
function createCardTemplate(
    customer: any, // Customer data object
    api: API, // API instance for making requests
    updatedEmail: string, // Updated email address
    _callCustomerButton: HTMLElement, // Call customer button element (unused)
    _customerId: number, // Customer ID (unused)
    updatedName: string, // Updated customer name
    updatedContactName: string, // Updated contact person name
    updatedPhone: string, // Updated phone number
    updatedOrg: string, // Updated organization number
    updatedCountry: string, // Updated country
    updatedCity: string, // Updated city
    updatedStreet: string, // Updated street address
    updatedZip: string, // Updated zip code
    updatedCustomerNumber: string, // Updated customer number
    updatedSubscription: boolean, // Updated subscription status
    updatedType: string, // Updated customer type
    updatedLabels: number[], // Updated customer labels (tags)
    fetchAndUpdateCustomers: () => Promise<void> // Function to fetch and update customers
): HTMLDivElement {
    // Get the country name from country code
    const countryName = customer.country && countryMappings[customer.country];
    
    // Create container for the customer card
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('customer-card');

    // Create container for the back side of the card
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    
    // Create container for customer information
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    
    // Initialize customer subscription and type
    customer.subscription = "true";
    customer.type = "individual";
    
    // HTML template for customer information
    const customerInfoHTML = `
        <!-- Hidden text section -->
        <div class="hidden-text">
            <div class="customer-info">
                <!-- Left side customer information -->
                <div class="left-info">
                    <!-- Editable customer fields -->
                    <!-- Name -->
                    <p>Name: <span contenteditable="true" class="edit-text customer-name">${customer['name']}</span></p>
                    <!-- Contact Person -->
                    <p>Contact Person: <span contenteditable="true" class="edit-text customer-contact-name">${customer['reference-name']}</span></p>
                    <!-- Customer Number -->
                    <p>Customer Number: <span contenteditable="true" class="edit-text customer-number">${customer['customer-number']}</span></p>
                    <!-- Phone Number -->
                    <p>Phone Number: <span contenteditable="true" class="edit-text customer-phone">${customer['phone-number']}</span></p>
                    <!-- Email -->
                    <p>Email: <span contenteditable="true" class="edit-text customer-email">${customer.email}</span></p>
                    <!-- Organization Number -->
                    <p>Organization Number: <span contenteditable="true" class="edit-text customer-org">${customer['org-number']}</span></p>
                    <!-- Vouchers -->
                    <p>Vouchers:</p>
                </div>
                <!-- Right side customer information -->
                <div class="right-info">
                    <!-- Non-editable customer fields -->
                    <!-- Created -->
                    <p>Created: ${customer['created'] ? formatDate(customer['created']) : 'N/A'}</p>
                    <!-- Updated -->
                    <p>Updated: ${customer['updated'] ? formatDate(customer['updated']) : 'N/A'}</p>
                    <!-- Updated By -->
                    <p>Updated By: ${getUserName(customer['updated-by'])}</p>
                    <!-- Subscription -->
                    <p>Subscription: <span class="edit-text customer-subscription">${customer.subscription}</span></p>
                    <!-- Type -->
                    <p>Type: <span class="edit-text customer-type">${customer.type}</span></p>
                    <!-- Country -->
                    <p>Country: <span contenteditable="true" class="edit-text customer-country">${countryName || customer.country}</span></p>
                    <!-- City -->
                    <p>City: <span contenteditable="true" class="edit-text customer-city">${customer.city}</span></p>
                    <!-- Street Address -->
                    <p>Street Address: <span contenteditable="true" class="edit-text customer-street">${customer['street-address']}</span></p>
                    <!-- Zip Code -->
                    <p>Zip Code: <span contenteditable="true" class="edit-text customer-zip">${customer['zip-code']}</span></p>
                    <!-- Tags -->
                    <p>Tags: <span contenteditable="true" id="customerLabels" class="edit-text customer-labels">${customer.labels?.map((label: number) => tagMappings[label]).join(', ') || ''}</span></p>
                </div>
                <!-- Button to create customer -->
                <button class="action-button">Create Customer</button>
            </div>
        </div>
    `;

    // Set customer information HTML
    cardContainer.innerHTML = customerInfoHTML;
    
    // Initialize updated labels
    updatedLabels = updatedLabels || [];

    // Function to setup event listeners for editable fields
    const setupFieldListener = (selector: string, fieldUpdater: (value: string) => void) => {
        const fieldElement = cardContainer.querySelector(selector);
        if (fieldElement) {
            fieldElement.addEventListener('input', (event) => {
                const value = (event.target as HTMLElement).textContent || '';
                fieldUpdater(value.trim());
            });
        }
    };

    // Setup event listeners for editable fields
    setupFieldListener('.customer-name', (value) => { updatedName = value; });
    setupFieldListener('.customer-contact-name', (value) => { updatedContactName = value; });
    setupFieldListener('.customer-number', (value) => { updatedCustomerNumber = value; });
    setupFieldListener('.customer-phone', (value) => { updatedPhone = value; });
    setupFieldListener('.customer-email', (value) => { updatedEmail = value; });
    setupFieldListener('.customer-org', (value) => { updatedOrg = value; });
    setupFieldListener('.customer-country', (value) => { updatedCountry = value; });
    setupFieldListener('.customer-city', (value) => { updatedCity = value; });
    setupFieldListener('.customer-street', (value) => { updatedStreet = value; });
    setupFieldListener('.customer-zip', (value) => { updatedZip = value; });

    // Event listener for subscription element
    const customerSubscriptionElement = cardContainer.querySelector('.edit-text.customer-subscription') as HTMLSpanElement;
    if (customerSubscriptionElement) {
        customerSubscriptionElement.addEventListener('click', () => {
            updatedSubscription = !updatedSubscription;
            customerSubscriptionElement.textContent = updatedSubscription.toString();
        });
    }

    // Event listener for customer type element
    const customerTypeElement = cardContainer.querySelector('.edit-text.customer-type') as HTMLSpanElement;
    if (customerTypeElement) {
        customerTypeElement.addEventListener('click', () => {
            updatedType = updatedType === 'individual' ? 'organization' : 'individual';
            customerTypeElement.textContent = updatedType;
        });
    }

    // Event listener for customer labels element
    const customerLabelsElement = cardContainer.querySelector('.edit-text.customer-labels') as HTMLSpanElement;
    if (customerLabelsElement) {
        customerLabelsElement.addEventListener('blur', (event) => {
            const newCustomerLabels = (event.target as HTMLElement).textContent || '';
            const inputLabels = newCustomerLabels.split(',').map(label => label.trim());
            const tempUpdatedLabels: Set<number> = new Set();
            const invalidLabels: string[] = [];

            inputLabels.forEach(inputLabel => {
                if (inputLabel) {
                    const matchingTag = Object.entries(tagMappings).find(([_id, name]) => name === inputLabel);
                    if (matchingTag) {
                        tempUpdatedLabels.add(parseInt(matchingTag[0]));
                    } else {
                        const numericID = parseInt(inputLabel);
                        if (!isNaN(numericID)) {
                            tempUpdatedLabels.add(numericID);
                        } else {
                            invalidLabels.push(inputLabel);
                        }
                    }
                }
            });

            if (invalidLabels.length > 0) {
                alert(`Invalid label(s): ${invalidLabels.join(', ')}`);
                return;
            }

            updatedLabels = Array.from(tempUpdatedLabels) as number[];

            console.log(updatedLabels);
        });

    }

    // Event listener for action button (Create Customer)
    const actionButton = cardContainer.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', async () => {
            console.log('Button clicked');

            // Validation checks for input fields

            // Check if name is provided
            if (!updatedName) {
                alert('Name is required');
                return;
            }

            // Check if customer number is provided
            if (!updatedCustomerNumber) {
                alert('Customer Number is required');
                return;
            }

            // Check if country is provided
            if (!updatedCountry) {
                alert('Customer country is required');
                return;
            }

            // Validate country name
            const isCountryValid = isValidCountry(updatedCountry || customer.country || '');
            if (!isCountryValid) {
                alert('Invalid country name. Example of correctly written country name: United States');
                return;
            }

            // Get country code
            const countryCode = getCountryCode(updatedCountry || customer.country || '');
            if (!countryCode) {
                alert(`Country code not found for ${updatedCountry}`);
                return;
            }

            // Validate city
            const isCityValid = isValidCity(updatedCity || customer.city || '');
            if (!isCityValid) {
                alert('Only letters allowed in the city field');
                return;
            }

            // Validate organization number
            const isOrgValid = isValidOrg(updatedOrg || customer['org-number'] || '');
            if (!isOrgValid) {
                alert('Only numbers are allowed in the organization number field');
                return;
            }

            // Validate zip code
            const isZipValid = isValidZipCode(updatedZip || customer['zip-code'] || '');
            if (!isZipValid) {
                alert('Only numbers are allowed in the zip code field, example zip code: ## ### or #####');
                return;
            }

            // Validate name
            const isNameValid = isValidName(updatedName || customer.name || '');
            if (!isNameValid) {
                alert('Only letters are allowed in the name field');
                return;
            }

            // Validate contact person name
            const isContactNameValid = isValidContactName(updatedContactName || customer['reference-name'] || '');
            if (!isContactNameValid) {
                alert('Only letters are allowed in the contact person field');
                return;
            }

            // Validate email
            const isEmailValid = isValidEmail(updatedEmail || customer.email || '');
            if (!isEmailValid) {
                alert('Invalid email format, example email: example@email.com');
                return;
            }

            // Validate phone number
            const isPhoneValid = isValidPhoneNumber(updatedPhone || customer['phone-number'] || '');
            if (!isPhoneValid) {
                alert('Invalid phone number, example off acceptable phone number (if international:+##) ### ### ####');
                return;
            }

            // Validate customer number
            const isCustomerNumberValid = isValidCustomerNumber(updatedCustomerNumber || customer['customer-number'] || '');
            if (!isCustomerNumberValid) {
                alert('Only numbers are allowed in the customer number field');
                return;
            }

            // Validate labels
            const isLabelsValid = isValidLabels(updatedLabels);
            if (!isLabelsValid) {
                alert('Invalid label found. Please enter a valid tag name or number. example: VIP/11 or Hög Lojalitet/12');
                return;
            }
            console.log('Updated Labels:', updatedLabels); // console log to output a message with the value off the updated labels

            // Call function to create new customer
            await callNewCustomer(
                api,
                updatedName,
                updatedEmail,
                updatedContactName,
                updatedPhone,
                updatedOrg,
                countryCode,
                updatedCity,
                updatedStreet,
                updatedZip,
                updatedCustomerNumber,
                updatedSubscription,
                updatedLabels,
                updatedType
            );

            cardContainer.style.overflow = 'hidden'; // hide scrollbar until fully shrunken
            // Hide customer info and expand card
            const customerInfo = cardContainer.querySelector('.customer-info');
            if (customerInfo) {
                customerInfo.classList.add('hidden');
            }
            await reverseExpandCard(cardContainer, () => {
                const customerInfo = cardContainer.querySelector('.customer-info');
                if (customerInfo) {
                }
            }, fetchAndUpdateCustomers);
        });
    };

    // Create abort button
    const abortButton = document.createElement('button');
    abortButton.textContent = 'Abort';
    abortButton.classList.add('abort-button');

    // Event listener for abort button
    abortButton.addEventListener('click', () => {
        cardContainer.style.overflow = 'hidden'; // Hide scrollbar until fully shrunken
        const customerInfo = cardContainer.querySelector('.customer-info');
        if (customerInfo) {
            customerInfo.classList.add('hidden');
        }
        reverseExpandCard(cardContainer, () => { }, fetchAndUpdateCustomers);
    });
    cardContainer.querySelector('.customer-info')?.appendChild(abortButton);
    cardContainer.style.overflow = 'auto'; // show scrollbar after fully shrunken

    // Return the constructed card container
    return cardContainer;
}

// Function for creating a new customer
export async function callNewCustomer(api: API, updatedName: string, updatedEmail: string, updatedContactName: string, updatedPhone: string, updatedOrg: string, updatedCountry: string, updatedCity: string, updatedStreet: string, updatedZip: string, updatedCustomerNumber: string, updatedSubscription: boolean, updatedLabels: number[], updatedType: string) {
    try {
        // Check if API object is initialized
        if (!api) {
            throw new Error('API object is not initialized');
        }

        // Construct data for the new customer
        const newCustomerData: any = {
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

        // Add the customer using the API
        const createdCustomer = await api.addCustomer(newCustomerData);

        console.log('New customer added:', createdCustomer); //Console log which puts a message which says that a new customer has been created

    } catch (error: any) {
        console.error('Error adding new customer:', error);
    }
}

// Function that Creates a customer card and appends it to a container element
async function createCustomerCard(customer: Customer, container: HTMLElement, api: API, customerId: number, updatedName: string, updatedContactName: string, updatedPhone: string, updatedOrg: string, updatedCountry: string, updatedCity: string, updatedStreet: string, updatedZip: string, updatedCustomerNumber: string, updatedSubscription: boolean, updatedType: Type, updatedLabels: number[], fetchAndUpdateCustomers: () => Promise<void>, callback: () => void = () => { }) {
    
    // Get the country name from the mappings if it exists
    const countryName = customer.country && countryMappings[customer.country];
    
    // Check for specific tags in the customer's labels
    const hasVIPTag = customer.labels?.includes(11);
    const hasHighLoyaltyTag = customer.labels?.includes(12);

    // Set default background color and rank text
    let backgroundColor = 'whitesmoke';
    let rankText = '';

    // Adjust background color and rank text based on tags
    if (hasVIPTag && hasHighLoyaltyTag) {
        backgroundColor = '#7FFFD4';
        rankText = 'VIP+';
    } else if (hasVIPTag) {
        backgroundColor = '#B0E0E6';
        rankText = 'VIP';
    } else if (hasHighLoyaltyTag) {
        backgroundColor = '#FF6B6B';
        rankText = 'Loyal';
    }

    console.log('Creating card for customer:', customer); //Console log which puts a message which says "Creating card for customer" + the customer parameters

    // Create the customer card element
    const customerCard = document.createElement('div');
    customerCard.classList.add('customer-card');
    customerCard.setAttribute('data-original-color', backgroundColor);
    customerCard.id = `customer-card-${customer.id}`;

    // Set card background color based on a checkbox state
    const disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox') as HTMLInputElement;
    customerCard.style.backgroundColor = disableCardColorsCheckbox && disableCardColorsCheckbox.checked ? 'whitesmoke' : backgroundColor;

    // Create and configure the flag image element
    const flagImg = document.createElement('img');
    flagImg.classList.add('flag');
    flagImg.src = `/Web/src/Images/Country flags/${customer.country!.toLowerCase()}.png`;
    flagImg.alt = `${countryMappings[customer.country!.toUpperCase()] || customer.country}`;

    // Set flag visibility based on a checkbox state
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;
    flagImg.style.visibility = enableFlagsCheckbox && enableFlagsCheckbox.checked ? 'visible' : 'hidden';

    // Add event listener to toggle flag visibility
    if (enableFlagsCheckbox) {
        enableFlagsCheckbox.addEventListener('change', () => {
            flagImg.style.visibility = enableFlagsCheckbox.checked ? 'visible' : 'hidden';
        });
    }
    
    // Append the flag image to the customer card
    customerCard.appendChild(flagImg);

    // Set data attributes for labels and filtered status
    customerCard.dataset.labels = customer.labels ? customer.labels.join(',') : '';
    customerCard.dataset.filtered = 'showing';

    // Add click event listener to the customer card
    customerCard.addEventListener('click', async () => {
        console.log('Card clicked');
        const callCustomerButton = customerCard.querySelector('.call-button') as HTMLElement;
        if (callCustomerButton && callCustomerButton.style.display === 'block') {
            return;
        }
        if (customerCard.classList.contains('expanded')) {
            await reverseExpandCard(customerCard, () => { }, fetchAndUpdateCustomers);
            return;
        }
        const skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox') as HTMLInputElement;
        const skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
        if (skipAnimations) {
            await expandCard(customerCard, container, customer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback);
        } else {
            await flipCard(customerCard, container);
            await expandCard(customerCard, container, customer, api, customerId, updatedName, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels, callback);
        }
    });

    // Indicate that the click listener has been added
    customerCard.dataset.clickListenerAdded = 'true';

    // Create the back side of the card and its info section
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    // Create the voucher info container and set its initial display state
    const voucherInfoContainer = document.createElement('div');
    voucherInfoContainer.classList.add('voucher-info');
    voucherInfoContainer.style.display = 'none';

    // Append the voucher info container to the card info section
    cardInfo.appendChild(voucherInfoContainer);

    // Fetch and display vouchers if available
    const vouchers = await api.listVouchers(`customer:${customer.id}`);
    if (vouchers.length > 0) {
        const vouchersList = document.createElement('ul');
        for (const voucher of vouchers) {
            customerCard.classList.add('has-vouchers');
            const voucherItem = document.createElement('li');
            const voucherType = voucher.type === 'payment' ? 'giftcard' : voucher.type;
            voucherItem.innerHTML = `Voucher Type: ${voucherType}, Voucher ID: ${voucher.id}, Balance: ${voucher.payment?.balance}, Expiry Date: ${voucher.expires ? new Date(voucher.expires).toDateString() : 'Unknown'}`;
            vouchersList.appendChild(voucherItem);
        }
        voucherInfoContainer.appendChild(vouchersList);
        voucherInfoContainer.style.display = 'none';
    }

    // Format customer details into HTML
    const formattedCustomer = `
        <p><span class="customer-namebold">${customer.name}</span></p>
        <p>Customer Number: <span class="customer-numberbold">${customer['customer-number']}</span></p>
        <p>Country: ${countryName || customer.country}</p>
        <p>Created: ${customer['created'] ? formatDate(customer['created']) : 'N/A'}</p>
        <p><span class="customer-rank">${rankText}</span></p>
    `;

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
}

// Function that updates a customer's information and handles form validation and API requests
export async function callUpdatedCustomer(
    api: API,
    customerId: number,
    updatedName: string,
    updatedEmail: string,
    updatedContactName: string,
    updatedPhone: string,
    updatedOrg: string,
    updatedCountry: string,
    updatedCity: string,
    updatedStreet: string,
    updatedZip: string,
    callCustomerButton: HTMLElement,
    callDeleteButton: HTMLElement,
    updatedCustomerNumber: string,
    updatedSubscription: boolean,
    updatedType: Type,
    updatedLabels: number[] = []
) {
    try {
        
        // Check if the API object is initialized
        if (!api) {
            throw new Error('API object is not initialized');
        }

        // Fetch the existing customer data
        const customer = await api.getCustomer(customerId);
       
        // If labels have not been edited, use the existing labels
        if (!labelsFieldEdited) {
            updatedLabels = customer.labels || [];
        }

        // Validate the updated country
        const isCountryValid = isValidCountry(updatedCountry || customer.country || '');
        if (!isCountryValid) {
            alert('Invalid country name. Example of correctly written country name: United States');
            return;
        }

        // Get the country code from the country name
        const countryCode = getCountryCode(updatedCountry || customer.country || '');
        if (!countryCode) {
            alert(`Country code not found for ${updatedCountry}`);
            return;
        }
        
        // Validate the updated city
        const isCityValid = isValidCity(updatedCity || customer.city || '');
        if (!isCityValid) {
            alert('Only letters allowed in the city field');
            return;
        }

        // Validate the updated organization number
        const isOrgValid = isValidOrg(updatedOrg || customer['org-number'] || '');
        if (!isOrgValid) {
            alert('Only numbers are allowed in the organization number field');
            return;
        }

        // Validate the updated zip code
        const isZipValid = isValidZipCode(updatedZip || customer['zip-code'] || '');
        if (!isZipValid) {
            alert('Only numbers are allowed in the zip code field, example zip code: ## ### or #####');
            return;
        }

        // Validate the updated name
        const isNameValid = isValidName(updatedName || customer.name || '');
        if (!isNameValid) {
            alert('Only letters are allowed in the name field');
            return;
        }

        // Validate the updated contact name
        const isContactNameValid = isValidContactName(updatedContactName || customer['reference-name'] || '');
        if (!isContactNameValid) {
            alert('Only letters are allowed in the contact person field');
            return;
        }

        // Validate the updated email
        const isEmailValid = isValidEmail(updatedEmail || customer.email || '');
        if (!isEmailValid) {
            alert('Invalid email format, example email: example@email.com');
            return;
        }

        // Validate the updated phone number
        const isPhoneValid = isValidPhoneNumber(updatedPhone || customer['phone-number'] || '');
        if (!isPhoneValid) {
            alert('Invalid phone number, example off acceptable phone number (if international:+##) ### ### ####');
            return;
        }

        // Validate the updated customer number
        const isCustomerNumberValid = isValidCustomerNumber(updatedCustomerNumber || customer['customer-number'] || '');
        if (!isCustomerNumberValid) {
            alert('Only numbers are allowed in the customer number field');
            return;
        }

        // Validate the updated labels
        const isLabelsValid = isValidLabels(updatedLabels);
        if (!isLabelsValid) {
            alert('Invalid label found. Please enter a valid tag name or number. example: VIP/11 or Hög Lojalitet/12');
            return;
        }

        // Determine the final labels to use
        const finalLabels = labelsFieldEdited ? updatedLabels : (customer.labels || []);

        // Update the customer data using the API
        const updatedCustomer = await api.updateCustomer(customerId, {
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
    } catch (error: any) {
        
        // Handle any errors that occur during the process
        console.error(error);
    }
}

// Function that checks if the text in the organization number field is valid 
function isValidOrg(value: string): boolean {
    
    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}

// Function that checks if the text in the zip code field is valid 
function isValidZipCode(value: string): boolean {

    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}

// Function that checks if the text in the customer number field is valid 
function isValidCustomerNumber(value: string): boolean {

    // Return true if there is only numbers, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^\d+$/.test(value) || value === '';
}

// Function that checks if the text in the customer number field is valid 
function isValidName(value: string): boolean {

    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}

// Function that checks if the text in the contact name field is valid 
function isValidContactName(value: string): boolean {

    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}

// Function that checks if the text in the city field is valid 
function isValidCity(value: string): boolean {

    // Return true if there is only letters, "undefined" or if the field is blank
    return value === undefined || value === "undefined" || /^[A-Za-zåäöÅÄÖ\s]+$/.test(value) || value === '';
}

// Function that checks if the text in the email field is valid 
function isValidEmail(value: string): boolean {
        
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Return true if the value is undefined, "undefined", matches the email regex pattern, or is an empty string
    return value === undefined || value === "undefined" || emailRegex.test(value) || value === '';
}

// Function that checks if the text in the labels field is valid
function isValidLabels(labels: number[]): boolean {

    // Iterate over each label in the provided labels array
    for (const label of labels) {
        
        // Check if the label does not exist in tagMappings and does not exist in the tags array
        if (!tagMappings[label] && !tags.some(tag => tag.id === label)) {

            // Return false if any label is invalid
            return false;
        }
    }
    
    // Return true if all labels are valid
    return true;
}

// Function that checks if the text in the phone number field is valid
function isValidPhoneNumber(value: string): boolean {

    // Regular expression for validating a phone number
    const phoneNumberRegex = /^\+?[0-9\s-]+$/;

    // Return true if the value is undefined, "undefined", matches the phone number regex pattern, or is an empty string
    return value === undefined || value === "undefined" || phoneNumberRegex.test(value) || value === '';
}

// Function that checks if the text in the country field is valid
function isValidCountry(country: string): boolean {

    // Check if the country is a two-letter code and consists of only uppercase letters
    if (country.length === 2 && /^[A-Z]+$/.test(country)) {

        // Retrieve the full country name from countryMappings
        const fullName = countryMappings[country];

        // Return true if the full country name is defined and not null
        return fullName !== undefined && fullName !== null;
    }

    // Format the country name: trim spaces, convert to lowercase, and capitalize the first letter of each word
    const formattedCountryName = country.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

    // Check if the formatted country name exists in countryMappingsReverse
    return countryMappingsReverse.hasOwnProperty(formattedCountryName);
}

// Function that checks if a customer card already exists in the container
function customerCardExists(customer: Customer, container: HTMLElement): boolean {

    // Get all elements with the class 'customer-card' within the container
    const customerCards = Array.from(container.querySelectorAll('.customer-card'));

    // Iterate over each customer card
    for (const card of customerCards) {
        
        // Find the element within the card that has the data attribute 'data-customer-number'
        const cardCustomerNumber = card.querySelector('p[data-customer-number]');

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
    const fields = ['customerName', 'customerEmail', 'contactName', 'customerPhone', 'organizationNumber', 'customerCountry', 'customerCity', 'customerStreet', 'customerZip', 'customerNumber', 'customerSubscription', 'customerLabels'];
    
    // Iterate over each field ID
    fields.forEach(fieldId => {

        // Get the HTML element by ID
        const field = document.getElementById(fieldId) as HTMLSpanElement;

        // Set the 'contentEditable' attribute to 'false' if the field exists
        if (field) {
            field.contentEditable = 'false';
        }
    });
}

// Function that formats a date string into 'dd/mm/yyyy' format
function formatDate(dateString: string): string {

    // Create a Date object from the date string
    const date = new Date(dateString);

    // Get the day, month, and year from the date object
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();


    // Return the formatted date string
    return `${day}/${month}/${year}`;
}

// Function that enables or disables text editing for elements with the class 'edit-text'
function enableTextEditing(enable: boolean) {

    // Get all elements with the class 'edit-text'
    const elementsToEdit = document.querySelectorAll('.edit-text');

    // Iterate over each element and set the 'contentEditable' attribute
    elementsToEdit.forEach((element) => {
        (element as HTMLElement).contentEditable = enable ? 'true' : 'false';
    });
}

// Function that  toggles the visibility of flags based on the state of the 'enableFlagsCheckbox' checkbox
function toggleFlagsVisibility() {

    // Get the checkbox element for enabling/disabling flags visibility
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;
    
    // Get all elements with the class 'flag'
    const flags = document.querySelectorAll('.flag');

    // Check if the checkbox element exists
    if (enableFlagsCheckbox) {

        // Determine the visibility based on the checkbox state
        const visibility = enableFlagsCheckbox.checked ? 'visible' : 'hidden';

        // Iterate over each flag element and set its visibility
        flags.forEach(flag => {
            (flag as HTMLElement).style.visibility = visibility;
        });
    }
}

// Function that toggles the background colors of customer cards based on the state of the 'disableCardColorsCheckbox' checkbox
function toggleCardColors() {

    // Get the checkbox element for disabling/enabling card colors
    const disableCardColorsCheckbox = document.getElementById('disableCardColorsCheckbox') as HTMLInputElement;

    // Get all elements with the class 'customer-card'
    const customerCards = document.querySelectorAll('.customer-card');

    // Check if the checkbox element exists
    if (disableCardColorsCheckbox) {

        // Iterate over each customer card element
        customerCards.forEach(card => {
            const cardElement = card as HTMLElement;
            
            // If the checkbox is unchecked, set the background color to the original color stored in 'data-original-color' otherwise, set the background color to 'whitesmoke'
            if (!disableCardColorsCheckbox.checked) {
                cardElement.style.backgroundColor = cardElement.getAttribute('data-original-color') || 'whitesmoke';
            } else {
                cardElement.style.backgroundColor = 'whitesmoke';
            }
        });
    }
}

// Function that flips a customer card element, performs some actions during the flip, and then resolves the promise it also hides flags if the 'enableFlagsCheckbox' is checked and clears the card's back content
async function flipCard(customerCard: HTMLElement, container: HTMLElement) {

    // Get the checkbox element for enabling/disabling flags visibility
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;

    // Determine the flag visibility state based on the checkbox
    const enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;

    // Return a promise to handle asynchronous operations
    return new Promise<void>(async (resolve) => {

        // Save the current scroll position
        const scrollYBeforeFlip = window.scrollY;

        // Wait for 250 milliseconds before starting the flip animation
        await new Promise(resolve => setTimeout(resolve, 250));

        // Add the 'flip' class to the customer card to start the flip animation
        customerCard.classList.add('flip');

        // Wait for 250 milliseconds for the flip animation to complete
        await new Promise(resolve => setTimeout(resolve, 250));

        // Clear the content of the card's back if it exists
        const cardBack = customerCard.querySelector('.card-back');
        if (cardBack) {
            const cardInfo = cardBack.querySelector('.card-info');
            if (cardInfo) {
                cardInfo.innerHTML = '';
            }
        }

        // Hide flags on all customer cards if the 'enableFlags' is true
        const allCards = container.querySelectorAll('.customer-card');
        if (enableFlags) {
            allCards.forEach(card => {
                const flagImg = card.querySelector('.flag') as HTMLImageElement;
                if (flagImg) {
                    flagImg.style.visibility = 'hidden';
                }
            });
        }

        // Add the 'more' class to the customer card to perform additional flip animation
        customerCard.classList.add('more');

        // Wait for 250 milliseconds to let the 'more' class take effect
        await new Promise(resolve => setTimeout(resolve, 250));

        // Restore the scroll position to its value before the flip
        window.scrollTo(0, scrollYBeforeFlip);

        // Set the customer card display style to 'grid'
        customerCard.style.display = 'grid';

        // Remove the 'flip' and 'more' classes from the customer card
        customerCard.classList.remove('flip');
        customerCard.classList.remove('more');

        // Resolve the promise indicating that the flip animation and actions are complete
        resolve();
    });
}

// FUnction that checks and updates the customer labels based on the input provided in the customer labels element,  Parses the input labels, matches them with tag mappings, and updates the 'updatedLabels' array aswell it also displays an alert for any invalid labels
function checkCustomerLabels(updatedLabels: number[]): boolean {

    // Get the customer labels element by its ID
    const customerLabelsElement = document.getElementById('customerLabels') as HTMLSpanElement | null;
    
    // If the customer labels element doesn't exist, return false
    if (!customerLabelsElement) return false;

    // Get the text content of the customer labels element
    const newCustomerLabels = customerLabelsElement.textContent || '';

    // Split the text content into an array of input labels and trim whitespace
    const inputLabels = newCustomerLabels.split(',').map(label => label.trim());

    // Create a set to store temporary updated labels
    const tempUpdatedLabels: Set<number> = new Set();

    // Create an array to store invalid labels
    const invalidLabels: string[] = [];

    // Iterate over each input label
    for (const inputLabel of inputLabels) {

        // If the input label is empty, continue to the next iteration
        if (!inputLabel) continue;
        
        // Check if the input label matches any tag mappings
        const matchingTag = Object.entries(tagMappings).find(([_id, name]) => name === inputLabel);

        // If a matching tag is found, add its ID to the temporary updated labels set
        if (matchingTag) {
            tempUpdatedLabels.add(parseInt(matchingTag[0]));
        } else {

            // If the input label is not found in tag mappings, try to parse it as a numeric ID
            const numericID = parseInt(inputLabel);

            // If the input label is a valid number, add it to the temporary updated labels set
            if (!isNaN(numericID)) {
                tempUpdatedLabels.add(numericID);
            } else {

                // Otherwise, add the invalid label to the invalid labels array
                invalidLabels.push(inputLabel);
            }
        }
    }

    // If there are any invalid labels, display an alert and return false
    if (invalidLabels.length > 0) {
        alert(`Invalid label(s): ${invalidLabels.join(', ')}` + "example: VIP/11, Hög Lojalitet/12");
        return false;
    }

    // Clear the updatedLabels array and push the values from the temporary updated labels set
    updatedLabels.length = 0; 
    updatedLabels.push(...Array.from(tempUpdatedLabels));

    console.log(updatedLabels); // Log a message of the updated labels array to the console

    // Return true indicating successful label update
    return true;
}

// Function that expands a customer card with additional information and styling changes and aslo it performs various actions such as hiding other cards, buttons, and inputs
async function expandCard(customerCard: HTMLElement, container: HTMLElement, customer: Customer, api: API, customerId: number, updatedName: string, updatedContactName: string, updatedPhone: string, updatedOrg: string, updatedCountry: string, updatedCity: string, updatedStreet: string, updatedZip: string, updatedCustomerNumber: string, updatedSubscription: boolean, updatedType: Type, updatedLabels: number[], callback: () => void = () => { }) {
    // Get checkboxes for enabling/disabling animations and flags visibility
    const skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox') as HTMLInputElement;
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;
        
    // Determine animation and flag visibility states based on checkbox values
    const skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
    const enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;

    // Get country name based on customer's country code
    const countryName = customer.country && countryMappings[customer.country];

    // Get the username of the user who last updated the customer's information
    const updatedBy = getUserName(customer['updated-by']!);

    // If skipAnimations is true, perform immediate card expansion without animations
    if (skipAnimations) {

        // If the customer ID is defined, update the customerId variable
        if (customer['id'] !== undefined) {
            customerId = customer['id'];
        }

        // Add 'expanded' class to the customer card to indicate expansion
        customerCard.classList.add('expanded');

        // Adjust page height to accommodate the expanded card
        const pageHeight = document.documentElement.scrollHeight;
        const newPageHeight = pageHeight + 0;
        document.documentElement.style.height = `${newPageHeight}px`;

        // Store the card's position and dimensions before flipping for animation purposes
        const rectBeforeFlip = customerCard.getBoundingClientRect();
        customerCard.dataset.rectBeforeFlip = `${rectBeforeFlip.top + window.scrollY},${rectBeforeFlip.left + window.scrollX},${rectBeforeFlip.width},${rectBeforeFlip.height}`;

        // Set initial styles to prepare for animation
        customerCard.style.position = 'static';
        customerCard.style.top = `${rectBeforeFlip.top + window.scrollY}px`;
        customerCard.style.left = `${rectBeforeFlip.left + window.scrollX}px`;
        customerCard.style.width = `${rectBeforeFlip.width}px`;
        customerCard.style.height = `${rectBeforeFlip.height}px`;

        // Wait for the next animation frame to start the flip animation
        await new Promise(resolve => requestAnimationFrame(resolve));

        // Add 'disable-hover' class to prevent hover effects during animation
        customerCard.classList.add('disable-hover');
    
        // Set card position to absolute for animation
        customerCard.style.position = 'absolute';

        // Calculate card position and size after flip animation
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const clientRect = container.getBoundingClientRect();
        const containerTop = clientRect.top + scrollY;
        const containerLeft = clientRect.left + scrollX;

        const topOffset = containerTop - scrollY;
        const leftOffset = containerLeft - scrollX;

        const width = window.innerWidth - 40;
        const height = window.innerHeight - 40;
        const top = 20 - topOffset;
        const left = 20 - leftOffset;

        // Apply calculated styles for expanded card
        customerCard.style.width = `${width - 16}px`;
        customerCard.style.height = `${height}px`;
        customerCard.style.top = `${top + 97}px`;
        customerCard.style.left = `${left + 7}px`;

        // Hide other cards, search input, flags, and buttons
        const allCards = container.querySelectorAll('.customer-card');
        allCards.forEach((value: Element) => {
            const card = value as HTMLElement;
            if (card !== customerCard) {
                hideCard(card);
            }
        });
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
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

        // Create container elements for call buttons
        const callCustomerButtonContainer = document.createElement('div');
        callCustomerButtonContainer.id = 'callCustomerButtonContainer';
        const callEditButtonContainer = document.createElement('div');
        callEditButtonContainer.id = 'callEditButtonContainer';
        const callDeleteButtonContainer = document.createElement('div');
        callDeleteButtonContainer.id = 'callDeleteButtonContainer';

        // Append call button containers to the card back
        const cardBack = customerCard.querySelector('.card-back');
        if (cardBack) {

            // Find the card info element within the card back
            const cardInfo = cardBack.querySelector('.card-info');
            if (cardInfo) {

                // Append call button containers to the card back
                cardBack.appendChild(callCustomerButtonContainer);
                cardBack.appendChild(callEditButtonContainer);
                cardBack.appendChild(callDeleteButtonContainer)

                // Clear the existing content of the card info element
                cardInfo.innerHTML = '';

                // Prepare formatted customer information HTML
                const formattedCustomer = `
                    <div class="customer-info">
                        <div cla0ss="left-info">
                        <!-- Editable fields for customer information -->
                        <p>Name: <span contenteditable="true" id="customerName" class="edit-text">${customer.name}</span></p>
                        <p>Contact Person: <span contenteditable="true" id="contactName" class="edit-text">${customer['reference-name']}</span></p>
                            <p>Customer Number: <span contenteditable="true" id="customerNumber" class="edit-text">${customer['customer-number']}</span></p>
                            <p class="customer-id">Customer ID: ${customer['id']}</p>
                            <p>Phone Number: <span contenteditable="true" id="customerPhone" class="edit-text">${customer['phone-number']}</span></p>
                            <p>Email: <span contenteditable="true" id="customerEmail" class="edit-text">${customer.email}</span></p>
                            <p>Organization Number: <span contenteditable="true" id="organizationNumber" class="edit-text">${customer['org-number']}</span></p>
                            <p>Vouchers:</p>
                            ${await getVouchersHTML(customer, api)}
                        </div>
                        <div class="right-info">
                        <!-- Display customer information -->
                            <p>Created: ${customer['created'] ? formatDate(customer['created']) : 'N/A'}</p>
                            <p>Updated: ${customer['updated'] ? formatDate(customer['updated']) : 'N/A'}</p>
                            <p>Updated By: ${updatedBy}</p>
                            <p>Subscription: <span id="customerSubscription" class="edit-text">${customer.subscription}</span></p>
                            <p>Type: <span id="customerType" "class="edit-text">${customer.type}</span></p>
                            <p>Country: <span contenteditable="true" id="customerCountry" class="edit-text">${countryName || customer.country}</span></p>
                            <p>City: <span contenteditable="true" id="customerCity" class="edit-text">${customer.city}</span></p>
                            <p>Street Address: <span contenteditable="true" id="customerStreet" class="edit-text">${customer['street-address']}</span></p>
                            <p>Zip Code: <span contenteditable="true" id="customerZip" class="edit-text"> ${customer['zip-code']}</span></p>
                            <p>Tags: <span contenteditable="true" id="customerLabels" class="edit-text">${customer.labels?.map(label => tagMappings[label]).join(', ') || ''}</span></p>
                        </div>
                    </div>
                `;
                
                // Append the formatted customer information HTML to the card info element
                cardInfo.innerHTML += formattedCustomer;

                // Set default value for updatedLabels if it's not already set
                updatedLabels = updatedLabels || [];

                // Event listeners for input elements and each listener updates corresponding properties of the customer object and updates related variables
                
                // Customer name
                const customerNameElement = cardInfo.querySelector('#customerName');
                if (customerNameElement) {
                    customerNameElement.addEventListener('input', (event) => {
                        const newName = (event.target as HTMLElement).textContent || '';
                        customer.name = newName.trim();
                        updatedName = newName.trim();
                    });
                }

                // Customer email
                const customerEmailElement = cardInfo.querySelector('#customerEmail');
                if (customerEmailElement) {
                    customerEmailElement.addEventListener('input', (event) => {
                        const newEmail = (event.target as HTMLElement).textContent || '';
                        customer.email = newEmail.trim();
                    });
                }

                // Customer contact person name
                const customerContactElement = cardInfo.querySelector('#contactName');
                if (customerContactElement) {
                    customerContactElement.addEventListener('input', (event) => {
                        const newContact = (event.target as HTMLElement).textContent || '';
                        customer['reference-name'] = newContact.trim();
                        updatedContactName = newContact.trim();
                    });
                }

                // Customer phone number
                const customerPhoneElement = cardInfo.querySelector('#customerPhone');
                if (customerPhoneElement) {
                    customerPhoneElement.addEventListener('input', (event) => {
                        const newPhone = (event.target as HTMLElement).textContent || '';
                        customer['phone-number'] = newPhone.trim();
                        updatedPhone = newPhone.trim();
                    });
                }

                // Customer organization number
                const customerOrgElement = cardInfo.querySelector('#organizationNumber');
                if (customerOrgElement) {
                    customerOrgElement.addEventListener('input', (event) => {
                        const newOrg = (event.target as HTMLElement).textContent || '';
                        customer['org-number'] = newOrg.trim();
                        updatedOrg = newOrg.trim();
                    });
                }

                // Customer country
                const customerCountryElement = cardInfo.querySelector('#customerCountry');
                if (customerCountryElement) {
                    customerCountryElement.addEventListener('input', (event) => {
                        const newCountry = (event.target as HTMLElement).textContent || '';
                        customer.country = newCountry.trim();
                        updatedCountry = newCountry.trim();
                    });
                }

                // Customer city
                const customerCityElement = cardInfo.querySelector('#customerCity');
                if (customerCityElement) {
                    customerCityElement.addEventListener('input', (event) => {
                        const newCity = (event.target as HTMLElement).textContent || '';
                        customer.city = newCity.trim();
                        updatedCity = newCity.trim();
                    });
                }

                // Customer street address
                const customerStreetElement = cardInfo.querySelector('#customerStreet');
                if (customerStreetElement) {
                    customerStreetElement.addEventListener('input', (event) => {
                        const newStreet = (event.target as HTMLElement).textContent || '';
                        customer['street-address'] = newStreet.trim();
                        updatedStreet = newStreet.trim();
                    });
                }

                // Customer zip code
                const customerZipElement = cardInfo.querySelector('#customerZip');
                if (customerZipElement) {
                    customerZipElement.addEventListener('input', (event) => {
                        const newZip = (event.target as HTMLElement).textContent || '';
                        customer['zip-code'] = newZip.trim();
                        updatedZip = newZip.trim();
                    });
                }

                // Customer number
                const customerNumberElement = cardInfo.querySelector('#customerNumber');
                if (customerNumberElement) {
                    customerNumberElement.addEventListener('input', (event) => {
                        const newCustomerNumber = (event.target as HTMLElement).textContent || '';
                        customer['customer-number'] = newCustomerNumber.trim();
                        updatedCustomerNumber = newCustomerNumber.trim();
                    });
                }

                // Customer subscription
                const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
                if (customerSubscriptionElement) {
                    customerSubscriptionElement.addEventListener('click', () => {
                        if (editButtonClicked) {
                            updatedSubscription = !updatedSubscription;
                            customerSubscriptionElement.textContent = updatedSubscription.toString();
                        }
                    });
                }

                // Customer type
                const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
                if (customerTypeElement) {
                    customerTypeElement.addEventListener('click', () => {
                        if (editButtonClicked) {
                            updatedType = updatedType === 'individual' ? 'organization' : 'individual';
                            customerTypeElement.textContent = updatedType;
                        }
                    });
                }

                // Customer labels
                const customerLabelsElement = cardInfo.querySelector('#customerLabels');
                if (customerLabelsElement) {
                    customerLabelsElement.addEventListener('blur', (event) => {

                        // When the element loses focus, update the customer's labels
                        labelsFieldEdited = true;
                        const newCustomerLabels = (event.target as HTMLElement).textContent || '';
                        const inputLabels = newCustomerLabels.split(',').map(label => label.trim());
                        const tempUpdatedLabels: Set<number> = new Set();
                        const invalidLabels: string[] = [];
                        

                        // Process the input labels, checking if they match existing tags or are valid numbers
                        inputLabels.forEach(inputLabel => {
                            if (inputLabel) {
                                const matchingTag = Object.entries(tagMappings).find(([_id, name]) => name === inputLabel);
                                if (matchingTag) {
                                    tempUpdatedLabels.add(parseInt(matchingTag[0]));
                                } else {
                                    const numericID = parseInt(inputLabel);
                                    if (!isNaN(numericID)) {
                                        tempUpdatedLabels.add(numericID);
                                    } else {
                                        invalidLabels.push(inputLabel);
                                    }
                                }
                            }
                        });
                
                        // Handle invalid labels
                        if (invalidLabels.length > 0) {
                            alert(`Invalid label(s): ${invalidLabels.join(', ')}` + "example: VIP/11, Hög Lojalitet/12");
                            return;
                        }
                
                        // Update the updatedLabels array with the validated labels
                        updatedLabels = Array.from(tempUpdatedLabels) as number[];
                
                        console.log(updatedLabels); // Console log outputs message with the updatedlabels value
                    });
                }
            }
        }      

        // Disable content editing for each element representing customer details

        // Customer name
        const customerNameElement = document.getElementById('customerName') as HTMLSpanElement;
        if (customerNameElement) {
            customerNameElement.contentEditable = 'false';
        }

        // Customer email
        const customerEmailElement = document.getElementById('customerEmail') as HTMLSpanElement;
        if (customerEmailElement) {
            customerEmailElement.contentEditable = 'false';
        }

        // Customer contact person name
        const contactNameElement = document.getElementById('contactName') as HTMLSpanElement;
        if (contactNameElement) {
            contactNameElement.contentEditable = 'false';
        }

        // Customer phone number
        const customerPhoneElement = document.getElementById('customerPhone') as HTMLSpanElement;
        if (customerPhoneElement) {
            customerPhoneElement.contentEditable = 'false';
        }

        // Customer organization number
        const customerOrgElement = document.getElementById('organizationNumber') as HTMLSpanElement;
        if (customerOrgElement) {
            customerOrgElement.contentEditable = 'false';
        }

        // Customer country
        const customerCountryElement = document.getElementById('customerCountry') as HTMLSpanElement;
        if (customerCountryElement) {
            customerCountryElement.contentEditable = 'false';
        }

        // Customer city
        const customerCityElement = document.getElementById('customerCity') as HTMLSpanElement;
        if (customerCityElement) {
            customerCityElement.contentEditable = 'false';
        }

        // Customer street address
        const customerStreetElement = document.getElementById('customerStreet') as HTMLSpanElement;
        if (customerStreetElement) {
            customerStreetElement.contentEditable = 'false';
        }

        // Customer zip code
        const customerZipElement = document.getElementById('customerZip') as HTMLSpanElement;
        if (customerZipElement) {
            customerZipElement.contentEditable = 'false';
        }

        // Customer number
        const customerNumberElement = document.getElementById('customerNumber') as HTMLSpanElement;
        if (customerNumberElement) {
            customerNumberElement.contentEditable = 'false';
        }

        // Customer subscription
        const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
        if (customerSubscriptionElement) {
            customerSubscriptionElement.contentEditable = 'false';
        }

        // Customer type
        const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
        if (customerTypeElement) {
            customerTypeElement.contentEditable = 'false';
        }

        // Customer labels
        const customerlabelsElement = document.getElementById('customerLabels') as HTMLSpanElement;
        if (customerlabelsElement) {
            customerlabelsElement.contentEditable = 'false';
        }

        // Create "Save" button
        const callCustomerButton = document.createElement('button');
        callCustomerButton.textContent = 'Save';
        callCustomerButton.classList.add('call-button');

        // Initially hides the button
        callCustomerButton.style.display = 'none';
        callCustomerButton.addEventListener('click', async (event) => {

            // Prevents event bubbling
            event.stopPropagation();

            // Extract updated customer information from editable elements and call the update function
            const updatedEmail = customerEmailElement.textContent || '';
            await callUpdatedCustomer(api, customerId, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, callCustomerButton, deleteButton, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels);
        });

        // Create "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'deleteButton';
        deleteButton.classList.add('delete-button');

        // Initially hides the button
        deleteButton.style.display = 'none';
        deleteButton.addEventListener('click', async () => {

            // Confirm deletion before proceeding
            if (confirm('Are you sure you want to delete this customer?')) {
                try {

                    // Attempt to remove the customer via API call
                    await api.removeCustomer(customerId);
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
                } catch (error) {

                // Handle any errors if removal fails
                }
            }
            
            // Append the "Delete" button to its container
            callDeleteButtonContainer.appendChild(deleteButton);
        });

        // Create an "Edit" button
        const callEditButton = document.createElement('button');
        callEditButton.textContent = 'Edit';
        callEditButton.classList.add('edit-button');

        // Flag to track whether the edit button is clicked
        let editButtonClicked = false;

        // Add an event listener to the "Edit" button
        callEditButton.addEventListener('click', async (event) => {

            // Set flag to true indicating the edit button is clicked
            editButtonClicked = true;

            // Prevent event bubbling
            event.stopPropagation();

            // Show the "Save" and "Delete" buttons
            callCustomerButton.style.display = 'block';
            deleteButton.style.display = 'block';

            // Enable text editing for various elements
            enableTextEditing(true);

            // Check if customer labels are valid before proceeding
            const customerLabelsValid = checkCustomerLabels(updatedLabels); 
            if (!customerLabelsValid) {

                // Exit early if customer labels are not valid
                return;
            }
            // Enable content editing for various customer information elements

            // Customer name
            const customerNameElement = document.getElementById('customerName') as HTMLSpanElement;
            if (customerNameElement) {
                customerNameElement.contentEditable = 'true';
            }

            // Customer email
            const customerEmailElement = document.getElementById('customerEmail') as HTMLSpanElement;
            if (customerEmailElement) {
                customerEmailElement.contentEditable = 'true';
            }

            // Customer contact person name
            const contactNameElement = document.getElementById('contactName') as HTMLSpanElement;
            if (contactNameElement) {
                contactNameElement.contentEditable = 'true';
            }

            // Customer phone number
            const customerPhoneElement = document.getElementById('customerPhone') as HTMLSpanElement;
            if (customerPhoneElement) {
                customerPhoneElement.contentEditable = 'true';
            }

            // Customer organization number
            const customerOrgElement = document.getElementById('organizationNumber') as HTMLSpanElement;
            if (customerOrgElement) {
                customerOrgElement.contentEditable = 'true';
            }

            // Customer country
            const customerCountryElement = document.getElementById('customerCountry') as HTMLSpanElement;
            if (customerCountryElement) {
                customerCountryElement.contentEditable = 'true';
            }

            // Customer city
            const customerCityElement = document.getElementById('customerCity') as HTMLSpanElement;
            if (customerCityElement) {
                customerCityElement.contentEditable = 'true';
            }

            // Customer street address
            const customerStreetElement = document.getElementById('customerStreet') as HTMLSpanElement;
            if (customerStreetElement) {
                customerStreetElement.contentEditable = 'true';
            }

            // Customer zip code
            const customerZipElement = document.getElementById('customerZip') as HTMLSpanElement;
            if (customerZipElement) {
                customerZipElement.contentEditable = 'true';
            }

            // Customer number
            const customerNumberElement = document.getElementById('customerNumber') as HTMLSpanElement;
            if (customerNumberElement) {
                customerNumberElement.contentEditable = 'true';
            }

            // Customer subscription
            const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
            if (customerSubscriptionElement) {
                customerSubscriptionElement.contentEditable = 'false';
            }

            // Customer type
            const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
            if (customerTypeElement) {
                customerTypeElement.contentEditable = 'false';
            }

            // Customer labels
            const customerlabelsElement = document.getElementById('customerLabels') as HTMLSpanElement;
            if (customerlabelsElement) {
                customerlabelsElement.contentEditable = 'true';
            }
        });

        // Get the container for the "Save" button and append the button to it
        const buttonContainer = document.getElementById('callCustomerButtonContainer');
        if (buttonContainer) {
            buttonContainer.appendChild(callCustomerButton);
        }

        // Get the container for the "Edit" button and append the button to it
        const editButtonContainer = document.getElementById('callEditButtonContainer');
        if (editButtonContainer) {
            editButtonContainer.appendChild(callEditButton);
        }

        // Get the container for the "Delete" button and append the button to it
        const DeleteButtonContainer = document.getElementById('callDeleteButtonContainer');
        if (DeleteButtonContainer) {
            DeleteButtonContainer.appendChild(deleteButton);
        }

        // Set the customer card to be displayed and remove hover effect
        customerCard.style.display = 'block';
        customerCard.classList.add('no-hover');

        // Execute the callback function if it exists
        if (typeof callback === 'function') {
            callback();
        }
    } else {
        
        // If customer ID exists, assign it to the customerId variable
        if (customer['id'] !== undefined) {
            customerId = customer['id'];
        } 
        
        // Add 'expanded' class to the customer card
        customerCard.classList.add('expanded');

        // Delay execution for 500 milliseconds
        await new Promise(resolve => setTimeout(resolve, 500));

        // Retrieve the total height of the document
        const pageHeight = document.documentElement.scrollHeight;

        // Calculate the new page height
        const newPageHeight = pageHeight + 0;

        // Set the new page height
        document.documentElement.style.height = `${newPageHeight}px`;

        // Get the position and dimensions of the customer card before transformation
        const rectBeforeFlip = customerCard.getBoundingClientRect();
            
        // Store the position and dimensions as a dataset attribute
        customerCard.dataset.rectBeforeFlip = `${rectBeforeFlip.top + window.scrollY},${rectBeforeFlip.left + window.scrollX},${rectBeforeFlip.width},${rectBeforeFlip.height}`;
        
        // Reset the styles of the customer card for animation
        customerCard.style.position = 'static';
        customerCard.style.top = `${rectBeforeFlip.top + window.scrollY}px`;
        customerCard.style.left = `${rectBeforeFlip.left + window.scrollX}px`;
        customerCard.style.width = `${rectBeforeFlip.width}px`;
        customerCard.style.height = `${rectBeforeFlip.height}px`;

        // Await the next frame update
        await new Promise(resolve => requestAnimationFrame(resolve));

        // Add class to disable hover effects on the customer card
        customerCard.classList.add('disable-hover');

        // Set transition properties for smooth animation
        customerCard.style.transition = 'width 2s ease, height 2s ease, top 2s ease, left 2s ease';

        // Set the position of the customer card to absolute
        customerCard.style.position = 'absolute';

        // Calculate offsets based on scroll positions
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const clientRect = container.getBoundingClientRect();
        const containerTop = clientRect.top + scrollY;
        const containerLeft = clientRect.left + scrollX;

        const topOffset = containerTop - scrollY;
        const leftOffset = containerLeft - scrollX;

        // Calculate new width, height, top, and left positions for the card
        const width = window.innerWidth - 40;
        const height = window.innerHeight - 40;
        const top = 20 - topOffset;
        const left = 20 - leftOffset;

        // Set new styles for the card
        customerCard.style.width = `${width - 16}px`;
        customerCard.style.height = `${height}px`;
        customerCard.style.top = `${top + 97}px`;
        customerCard.style.left = `${left + 7}px`;

        // Hide other cards and UI elements
        const allCards = container.querySelectorAll('.customer-card');
        allCards.forEach((value: Element) => {
            const card = value as HTMLElement;
            if (card !== customerCard) {
                hideCard(card);
            }
        });

        // Hide search input, flags, buttons, and create card button
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
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
        setTimeout(async () => {

            // Remove the 'disable-hover' class from the customer card
            customerCard.classList.remove('disable-hover');

            // Create containers for the call customer, edit, and delete buttons
            const callCustomerButtonContainer = document.createElement('div');
            callCustomerButtonContainer.id = 'callCustomerButtonContainer';
            const callEditButtonContainer = document.createElement('div');
            callEditButtonContainer.id = 'callEditButtonContainer';
            const callDeleteButtonContainer = document.createElement('div');
            callDeleteButtonContainer.id = 'callDeleteButtonContainer';

            // Find the card back element within the customer card
            const cardBack = customerCard.querySelector('.card-back');
            if (cardBack) {
                
                // Set IDs for button containers
                callCustomerButtonContainer.id = 'callCustomerButtonContainer';
                callEditButtonContainer.id = 'callEditButtonContainer';
                callDeleteButtonContainer.id = 'callDeleteButtonContainer';

                // Find the card info element within the card back
                const cardInfo = cardBack.querySelector('.card-info');
                if (cardInfo) {

                    // Append button containers to the card back
                    cardBack.appendChild(callCustomerButtonContainer);
                    cardBack.appendChild(callEditButtonContainer);
                    cardBack.appendChild(callDeleteButtonContainer);

                    // Clear the HTML content of the card info
                    cardInfo.innerHTML = '';

                    // Generate formatted customer information
                    const formattedCustomer = `
                    <div class="customer-info">
                    <div class="left-info">
                    <p>Name: <span contenteditable="true" id="customerName" class="edit-text">${customer.name}</span></p>
                    <p>Contact Person: <span contenteditable="true" id="contactName" class="edit-text">${customer['reference-name']}</span></p>
                    <p>Customer Number: <span contenteditable="true" id="customerNumber" class="edit-text">${customer['customer-number']}</span></p>
                    <p class="customer-id">Customer ID: ${customer['id']}</p>
                        <p>Phone Number: <span contenteditable="true" id="customerPhone" class="edit-text">${customer['phone-number']}</span></p>
                        <p>Email: <span contenteditable="true" id="customerEmail" class="edit-text">${customer.email}</span></p>
                        <p>Organization Number: <span contenteditable="true" id="organizationNumber" class="edit-text">${customer['org-number']}</span></p>
                        <p>Vouchers:</p>
                        ${await getVouchersHTML(customer, api)}
                    </div>
                    <div class="right-info">
                        <p>Created: ${customer['created'] ? formatDate(customer['created']) : 'N/A'}</p>
                        <p>Updated: ${customer['updated'] ? formatDate(customer['updated']) : 'N/A'}</p>
                        <p>Updated By: ${updatedBy}</p>
                        <p>Subscription: <span id="customerSubscription" class="edit-text">${customer.subscription}</span></p>
                        <p>Type: <span id="customerType" "class="edit-text">${customer.type}</span></p>
                        <p>Country: <span contenteditable="true" id="customerCountry" class="edit-text">${countryName || customer.country}</span></p>
                        <p>City: <span contenteditable="true" id="customerCity" class="edit-text">${customer.city}</span></p>
                        <p>Street Address: <span contenteditable="true" id="customerStreet" class="edit-text">${customer['street-address']}</span></p>
                        <p>Zip Code: <span contenteditable="true" id="customerZip" class="edit-text"> ${customer['zip-code']}</span></p>
                        <p>Tags: <span contenteditable="true" id="customerLabels" class="edit-text">${customer.labels?.map(label => tagMappings[label]).join(', ') || ''}</span></p>
                        </div>
                </div>
                `;
                    
                    // Append formatted customer information to the card info
                    cardInfo.innerHTML += formattedCustomer;

                    // Initialize updatedLabels if it's not already initialized
                    updatedLabels = updatedLabels || [];


                    // Find and handle the input events for various customer information elements

                    // Customer name
                    const customerNameElement = cardInfo.querySelector('#customerName');
                    if (customerNameElement) {
                        customerNameElement.addEventListener('input', (event) => {
                            
                            // Update customer name
                            const newName = (event.target as HTMLElement).textContent || '';
                            customer.name = newName.trim();
                            updatedName = newName.trim();
                        });
                    }

                    // Customer email
                    const customerEmailElement = cardInfo.querySelector('#customerEmail');
                    if (customerEmailElement) {
                        customerEmailElement.addEventListener('input', (event) => {
                            
                            // Update customer email
                            const newEmail = (event.target as HTMLElement).textContent || '';
                            customer.email = newEmail.trim();
                        });
                    }

                    // Customer contact person name
                    const customerContactElement = cardInfo.querySelector('#contactName');
                    if (customerContactElement) {
                        customerContactElement.addEventListener('input', (event) => {

                            // Update customer contact person name
                            const newContact = (event.target as HTMLElement).textContent || '';
                            customer['reference-name'] = newContact.trim();
                            updatedContactName = newContact.trim();
                        });

                        // Customer phone number
                        const customerPhoneElement = cardInfo.querySelector('#customerPhone');
                        if (customerPhoneElement) {
                            customerPhoneElement.addEventListener('input', (event) => {

                                // Update customer phone number
                                const newPhone = (event.target as HTMLElement).textContent || '';
                                customer['phone-number'] = newPhone.trim();
                                updatedPhone = newPhone.trim();
                            });
                        }

                        // Customer organization number
                        const customerOrgElement = cardInfo.querySelector('#organizationNumber');
                        if (customerOrgElement) {
                            customerOrgElement.addEventListener('input', (event) => {

                                 // Update customer organization number
                                const newOrg = (event.target as HTMLElement).textContent || '';
                                customer['org-number'] = newOrg.trim();
                                updatedOrg = newOrg.trim();
                            });
                        }

                        // Customer country
                        const customerCountryElement = cardInfo.querySelector('#customerCountry');
                        if (customerCountryElement) {
                            customerCountryElement.addEventListener('input', (event) => {

                                // Update customer country
                                const newCountry = (event.target as HTMLElement).textContent || '';
                                customer.country = newCountry.trim();
                                updatedCountry = newCountry.trim();
                            });
                        }

                        // Customer city
                        const customerCityElement = cardInfo.querySelector('#customerCity');
                        if (customerCityElement) {
                            customerCityElement.addEventListener('input', (event) => {

                                // Update customer city
                                const newCity = (event.target as HTMLElement).textContent || '';
                                customer.city = newCity.trim();
                                updatedCity = newCity.trim();
                            });
                        }

                        // Customer street address
                        const customerStreetElement = cardInfo.querySelector('#customerStreet');
                        if (customerStreetElement) {
                            customerStreetElement.addEventListener('input', (event) => {

                                // Update customer street address
                                const newStreet = (event.target as HTMLElement).textContent || '';
                                customer['street-address'] = newStreet.trim();
                                updatedStreet = newStreet.trim();
                            });
                        }

                        // Customer zip code
                        const customerZipElement = cardInfo.querySelector('#customerZip');
                        if (customerZipElement) {
                            customerZipElement.addEventListener('input', (event) => {

                                // Update customer zip code
                                const newZip = (event.target as HTMLElement).textContent || '';
                                customer['zip-code'] = newZip.trim();
                                updatedZip = newZip.trim();
                            });
                        }

                        // Customer number
                        const customerNumberElement = cardInfo.querySelector('#customerNumber');
                        if (customerNumberElement) {
                            customerNumberElement.addEventListener('input', (event) => {

                                // Update customer number
                                const newCustomerNumber = (event.target as HTMLElement).textContent || '';
                                customer['customer-number'] = newCustomerNumber.trim();
                                updatedCustomerNumber = newCustomerNumber.trim();
                            });
                        }

                        // Customer subscription
                        const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
                        if (customerSubscriptionElement) {
                            customerSubscriptionElement.addEventListener('click', () => {

                                // Update customer subscription
                                if (editButtonClicked) {
                                    updatedSubscription = !updatedSubscription;
                                    customerSubscriptionElement.textContent = updatedSubscription.toString();
                                }
                            });
                        }

                        // Customer type
                        const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
                        if (customerTypeElement) {
                            customerTypeElement.addEventListener('click', () => {

                                // Update customer type
                                if (editButtonClicked) {
                                    updatedType = updatedType === 'individual' ? 'organization' : 'individual';
                                    customerTypeElement.textContent = updatedType;
                                }
                            });
                        }

                        // Customer labels
                        const customerLabelsElement = cardInfo.querySelector('#customerLabels');
                        if (customerLabelsElement) {

                            // Add a blur event listener to handle when the element loses focus
                            customerLabelsElement.addEventListener('blur', (event) => {

                                // Set a flag indicating that the labels field has been edited
                                labelsFieldEdited = true;

                                // Get the new customer labels text content and split it into an array of labels
                                const newCustomerLabels = (event.target as HTMLElement).textContent || '';
                                const inputLabels = newCustomerLabels.split(',').map(label => label.trim());

                                // Initialize sets to store updated labels and invalid labels
                                const tempUpdatedLabels: Set<number> = new Set();
                                const invalidLabels: string[] = [];
                        
                                // Iterate over each input label
                                inputLabels.forEach(inputLabel => {
                                    if (inputLabel) {

                                        // Check if the input label matches any tag in the tag mappings
                                        const matchingTag = Object.entries(tagMappings).find(([_id, name]) => name === inputLabel);
                                        if (matchingTag) {

                                            // If a matching tag is found, add its ID to the updated labels set
                                            tempUpdatedLabels.add(parseInt(matchingTag[0]));
                                        } else {

                                            // If no matching tag is found, attempt to parse the label as a numeric ID
                                            const numericID = parseInt(inputLabel);
                                            if (!isNaN(numericID)) {

                                                // If the label is a valid numeric ID, add it to the updated labels set
                                                tempUpdatedLabels.add(numericID);
                                            } else {

                                                // If the label is not a valid numeric ID, add it to the list of invalid labels
                                                invalidLabels.push(inputLabel);
                                            }
                                        }
                                    }
                                });
                        
                                // If there are any invalid labels, display an alert with the invalid labels and return
                                if (invalidLabels.length > 0) {
                                    alert(`Invalid label(s): ${invalidLabels.join(', ')}` + "example: VIP/11, Hög Lojalitet/12");
                                    return;
                                }
                                
                                // Convert the updated labels set to an array and assign it to the global variable updatedLabels
                                updatedLabels = Array.from(tempUpdatedLabels) as number[];
                        
                                console.log(updatedLabels); // Output a console log message with the updated labels value
                            });
                        }
                    }

                    // Create a 'Save' button for updating customer information
                    const callCustomerButton = document.createElement('button');
                    callCustomerButton.textContent = 'Save';
                    callCustomerButton.classList.add('call-button');

                    // Initially hide the button
                    callCustomerButton.style.display = 'none';
                    callCustomerButton.addEventListener('click', async (event) => {

                        // Prevent event bubbling
                        event.stopPropagation();

                        // Get the updated email from the customer email element
                        const updatedEmail = customerEmailElement!.textContent || '';

                        // Call the function to update the customer information
                        await callUpdatedCustomer(api, customerId, updatedName, updatedEmail, updatedContactName, updatedPhone, updatedOrg, updatedCountry, updatedCity, updatedStreet, updatedZip, callCustomerButton, deleteButton, updatedCustomerNumber, updatedSubscription, updatedType, updatedLabels);
                    });

                    // Create a 'Delete' button for deleting the customer
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.id = 'deleteButton';
                    deleteButton.classList.add('delete-button');

                    // Initially hide the button
                    deleteButton.style.display = 'none';
                    deleteButton.addEventListener('click', async () => {

                        // Prompt the user to confirm before deleting the customer
                        if (confirm('Are you sure you want to delete this customer?')) {
                            try {

                                // Attempt to remove the customer via the API
                                await api.removeCustomer(customerId);
                                alert('Customer deleted successfully'); // Alert to display a success message

                                // Remove the customer card from the DOM
                                customerCard.remove();

                                // Show all other customer cards
                                const allCards = document.querySelectorAll('.customer-card');
                                allCards.forEach((value: Element) => {
                                    const card = value as HTMLElement;
                                    showCard(card);

                                    // Show the search input field
                                    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
                                    if (searchInput) {
                                        searchInput.style.visibility = 'visible';
                                    }
                                    
                                    // Show flags if enabled
                                    if (enableFlags) {
                                        allCards.forEach(card => {
                                            const flagImg = card.querySelector('.flag') as HTMLImageElement;
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
                            } catch (error) {

                            // Error handling if deleting the customer fails
                            }
                        }

                        // Append the delete button to its container after execution
                        callDeleteButtonContainer.appendChild(deleteButton);
                    });

                    // Create an 'Edit' button for editing customer information
                    const callEditButton = document.createElement('button');
                    callEditButton.textContent = 'Edit';
                    callEditButton.classList.add('edit-button');

                    // Initialize edit button click state
                    let editButtonClicked = false;
                    callEditButton.addEventListener('click', async (event) => {

                        // Set edit button clicked state to true
                        editButtonClicked = true;

                        // Prevent event bubbling
                        event.stopPropagation();

                        // Display the 'Save' button
                        callCustomerButton.style.display = 'block';

                        // Display the 'Delete' button
                        deleteButton.style.display = 'block';

                        // Enable text editing
                        enableTextEditing(true);

                        // Check if customer labels are valid
                        const customerLabelsValid = checkCustomerLabels(updatedLabels); 
                        if (!customerLabelsValid) {

                            // Exit early if customer labels are not valid
                            return;
                        }

                        // Get customer elements by ID and set content editable to true for editing

                        // Customer name
                        const customerNameElement = document.getElementById('customerName') as HTMLSpanElement;
                        if (customerNameElement) {
                            customerNameElement.contentEditable = 'true';
                        }

                        // Customer email
                        const customerEmailElement = document.getElementById('customerEmail') as HTMLSpanElement;
                        if (customerEmailElement) {
                            customerEmailElement.contentEditable = 'true';
                        }

                        // Customer contact person name
                        const contactNameElement = document.getElementById('contactName') as HTMLSpanElement;
                        if (contactNameElement) {
                            contactNameElement.contentEditable = 'true';
                        }

                        // Customer phone number
                        const customerPhoneElement = document.getElementById('customerPhone') as HTMLSpanElement;
                        if (customerPhoneElement) {
                            customerPhoneElement.contentEditable = 'true';
                        }

                        // Customer organization number
                        const customerOrgElement = document.getElementById('organizationNumber') as HTMLSpanElement;
                        if (customerOrgElement) {
                            customerOrgElement.contentEditable = 'true';
                        }

                        // Customer country
                        const customerCountryElement = document.getElementById('customerCountry') as HTMLSpanElement;
                        if (customerCountryElement) {
                            customerCountryElement.contentEditable = 'true';
                        }

                        // Customer city
                        const customerCityElement = document.getElementById('customerCity') as HTMLSpanElement;
                        if (customerCityElement) {
                            customerCityElement.contentEditable = 'true';
                        }

                        // Customer street address
                        const customerStreetElement = document.getElementById('customerStreet') as HTMLSpanElement;
                        if (customerStreetElement) {
                            customerStreetElement.contentEditable = 'true';
                        }

                        // Customer zip code
                        const customerZipElement = document.getElementById('customerZip') as HTMLSpanElement;
                        if (customerZipElement) {
                            customerZipElement.contentEditable = 'true';
                        }

                        // Customer number
                        const customerNumberElement = document.getElementById('customerNumber') as HTMLSpanElement;
                        if (customerNumberElement) {
                            customerNumberElement.contentEditable = 'true';
                        }

                        // Customer subscription
                        const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
                        if (customerSubscriptionElement) {
                            customerSubscriptionElement.contentEditable = 'false';
                        }

                        // Customer type
                        const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
                        if (customerTypeElement) {
                            customerTypeElement.contentEditable = 'false';
                        }

                        // Customer labels
                        const customerlabelsElement = document.getElementById('customerLabels') as HTMLSpanElement;
                        if (customerlabelsElement) {
                            customerlabelsElement.contentEditable = 'true';
                        }
                    });

                    // Check if the button container exists and append the 'Save' button to it
                    const buttonContainer = document.getElementById('callCustomerButtonContainer');
                    if (buttonContainer) {
                        buttonContainer.appendChild(callCustomerButton);
                    }

                    // Check if the edit button container exists and append the 'Edit' button to it
                    const editButtonContainer = document.getElementById('callEditButtonContainer');
                    if (editButtonContainer) {
                        editButtonContainer.appendChild(callEditButton);
                    }

                    // Check if the delete button container exists and append the 'Delete' button to it 
                    const DeleteButtonContainer = document.getElementById('callDeleteButtonContainer');
                    if (DeleteButtonContainer) {
                        DeleteButtonContainer.appendChild(deleteButton);
                    }
                }

                // Disable editing for customer information elements

                // Customer name
                const customerNameElement = document.getElementById('customerName') as HTMLSpanElement;
                if (customerNameElement) {
                    customerNameElement.contentEditable = 'false';
                }

                // Customer email
                const customerEmailElement = document.getElementById('customerEmail') as HTMLSpanElement;
                if (customerEmailElement) {
                    customerEmailElement.contentEditable = 'false';
                }

                // Customer contact person name
                const contactNameElement = document.getElementById('contactName') as HTMLSpanElement;
                if (contactNameElement) {
                    contactNameElement.contentEditable = 'false';
                }

                // Customer phone number
                const customerPhoneElement = document.getElementById('customerPhone') as HTMLSpanElement;
                if (customerPhoneElement) {
                    customerPhoneElement.contentEditable = 'false';
                }

                // Customer organization number
                const customerOrgElement = document.getElementById('organizationNumber') as HTMLSpanElement;
                if (customerOrgElement) {
                    customerOrgElement.contentEditable = 'false';
                }

                // Customer country
                const customerCountryElement = document.getElementById('customerCountry') as HTMLSpanElement;
                if (customerCountryElement) {
                    customerCountryElement.contentEditable = 'false';
                }

                // Customer city
                const customerCityElement = document.getElementById('customerCity') as HTMLSpanElement;
                if (customerCityElement) {
                    customerCityElement.contentEditable = 'false';
                }

                // Customer street address
                const customerStreetElement = document.getElementById('customerStreet') as HTMLSpanElement;
                if (customerStreetElement) {
                    customerStreetElement.contentEditable = 'false';
                }

                // Customer zip code
                const customerZipElement = document.getElementById('customerZip') as HTMLSpanElement;
                if (customerZipElement) {
                    customerZipElement.contentEditable = 'false';
                }

                // Customer number
                const customerNumberElement = document.getElementById('customerNumber') as HTMLSpanElement;
                if (customerNumberElement) {
                    customerNumberElement.contentEditable = 'false';
                }

                // Customer subscription
                const customerSubscriptionElement = document.getElementById('customerSubscription') as HTMLSpanElement;
                if (customerSubscriptionElement) {
                    customerSubscriptionElement.contentEditable = 'false';
                }

                // Customer type
                const customerTypeElement = document.getElementById('customerType') as HTMLSpanElement;
                if (customerTypeElement) {
                    customerTypeElement.contentEditable = 'false';
                }

                // Customer labels
                const customerlabelsElement = document.getElementById('customerLabels') as HTMLSpanElement;
                if (customerlabelsElement) {
                    customerlabelsElement.contentEditable = 'false';
                }
            }

            // Display the customer card and add a 'no-hover' class to it
            customerCard.style.display = 'block';
            customerCard.classList.add('no-hover');

            // Execute callback function if it exists
            if (typeof callback === 'function') {
                callback();
            }
        }, 2000);
    }
}

// Function that reverses the expansion of a customer card with optional animations
async function reverseExpandCard(customerCard: HTMLElement, callback: () => void = () => { }, fetchAndUpdateCustomers: () => Promise<void>) {
    
    // Retrieve checkboxes for skipping animations and enabling flags
    const skipAnimationsCheckbox = document.getElementById('skipAnimationsCheckbox') as HTMLInputElement;
    const enableFlagsCheckbox = document.getElementById('enableFlagsCheckbox') as HTMLInputElement;
    
    // Check if checkboxes exist and retrieve their checked state
    const skipAnimations = skipAnimationsCheckbox ? skipAnimationsCheckbox.checked : false;
    const enableFlags = enableFlagsCheckbox ? enableFlagsCheckbox.checked : false;  
    
    // if skip animation is true then skip animations when reversing the expansion of the expanded card, else play the animation when reversing the expansion of the expanded card
    if (skipAnimations) {

        // Add a class to disable hover effects
        document.body.classList.add('disable-hover');

        // Remove button containers from the customer card
        const callCustomerButtonContainer = customerCard.querySelector('#callCustomerButtonContainer');
        if (callCustomerButtonContainer) {
            callCustomerButtonContainer.remove();
        }
        const callEditButtonContainer = customerCard.querySelector('#callEditButtonContainer');
        if (callEditButtonContainer) {
            callEditButtonContainer.remove();
        }
        const callDeleteButtonContainer = customerCard.querySelector('#callDeleteButtonContainer');
        if (callDeleteButtonContainer) {
            callDeleteButtonContainer.remove();
        }

        // Add classes and styles for reverse animation
        customerCard.classList.add('reverse-expand-animation');

        const rectBeforeFlip = customerCard.dataset.rectBeforeFlip?.split(',').map(Number);
        if (!rectBeforeFlip || rectBeforeFlip.length !== 4) {
            console.error("Error: Unable to get rectBeforeFlip data");
            return;
        }
        const [cardTopBeforeFlip, cardLeftBeforeFlip, cardWidthBeforeFlip, cardHeightBeforeFlip] = rectBeforeFlip;


        customerCard.style.width = `${cardWidthBeforeFlip}px`;
        customerCard.style.height = `${cardHeightBeforeFlip}px`;
        customerCard.style.top = `${cardTopBeforeFlip}px`;
        customerCard.style.left = `${cardLeftBeforeFlip}px`;

        // Clear card info and restore original content
        const cardInfo = customerCard.querySelector('.card-info');
        if (cardInfo) {
            cardInfo.innerHTML = '';
        }
        const originalContent = customerCard.dataset.originalContent;
        customerCard.classList.remove('expanded');

        customerCard.classList.add('backflip');
        customerCard.classList.add('backmore');
        customerCard.classList.remove('backflip');
        customerCard.classList.remove('backmore');
        const cardBack = customerCard.querySelector('.card-back');
        if (cardBack) {
            const cardInfo = cardBack.querySelector('.card-info');
            if (cardInfo && originalContent) {
                cardInfo.innerHTML = originalContent;
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
        customerCard.addEventListener('mouseenter', () => {
            customerCard.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        customerCard.addEventListener('mouseleave', () => {
            customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });

        customerCard.addEventListener('click', () => {
            customerCard.style.transition = '';
            customerCard.style.transform = '';
            customerCard.style.boxShadow = '';
            customerCard.addEventListener('mouseenter', () => {
                customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
            customerCard.classList.add('disable-hover');
        });
        customerCard.classList.remove('disable-hover');
        customerCard.classList.remove('no-hover');
        if (typeof callback === 'function') {
            callback();
        }
    } else {

        // Add a class to disable hover effects and wait for animations
        document.body.classList.add('disable-hover');
        await new Promise(resolve => setTimeout(resolve, 100));
        await new Promise(resolve => setTimeout(resolve, 500));

        // Add classes and styles for reverse animation
        customerCard.classList.add('reverse-expand-animation');

        const rectBeforeFlip = customerCard.dataset.rectBeforeFlip?.split(',').map(Number);
        if (!rectBeforeFlip || rectBeforeFlip.length !== 4) {
            console.error("Error: Unable to get rectBeforeFlip data");
            return;
        }
        const [cardTopBeforeFlip, cardLeftBeforeFlip, cardWidthBeforeFlip, cardHeightBeforeFlip] = rectBeforeFlip;

        customerCard.style.transition = 'width 2s ease, height 2s ease, top 2s ease, left 2s ease';

        customerCard.style.width = `${cardWidthBeforeFlip}px`;
        customerCard.style.height = `${cardHeightBeforeFlip}px`;
        customerCard.style.top = `${cardTopBeforeFlip}px`;
        customerCard.style.left = `${cardLeftBeforeFlip}px`;

        // Clear card info and remove button containers
        const cardInfo = customerCard.querySelector('.card-info');
        if (cardInfo) {
            cardInfo.innerHTML = '';
        }
        const callCustomerButtonContainer = customerCard.querySelector('#callCustomerButtonContainer');
        if (callCustomerButtonContainer) {
            callCustomerButtonContainer.remove();
        }
        const callEditButtonContainer = customerCard.querySelector('#callEditButtonContainer');
        if (callEditButtonContainer) {
            callEditButtonContainer.remove();
        }
        const originalContent = customerCard.dataset.originalContent;
        customerCard.classList.remove('expanded');

        // Perform reverse animation steps with delays
        setTimeout(async () => {
            await new Promise(resolve => setTimeout(resolve, 250));
            customerCard.classList.add('backflip');
            await new Promise(resolve => setTimeout(resolve, 250));
            customerCard.classList.add('backmore');
            await new Promise(resolve => setTimeout(resolve, 250));
            customerCard.classList.remove('backflip');
            customerCard.classList.remove('backmore');
            const cardBack = customerCard.querySelector('.card-back');
            if (cardBack) {
                const cardInfo = cardBack.querySelector('.card-info');
                if (cardInfo && originalContent) {
                    cardInfo.innerHTML = originalContent;
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
        }, 2000);

        // Event listener to add box shadow on mouse enter for visual effect
        customerCard.addEventListener('mouseenter', () => {
            customerCard.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        // Event listener to remove box shadow on mouse leave
        customerCard.addEventListener('mouseleave', () => {
            customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        // Event listener to handle click events on the customer card
        customerCard.addEventListener('click', () => {

            // Reset styles and transition for click animation
            customerCard.style.transition = '';
            customerCard.style.transform = '';
            customerCard.style.boxShadow = '';

            // Add event listener to revert box shadow on mouse enter after click animation
            customerCard.addEventListener('mouseenter', () => {
                customerCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });

            // Add class to disable hover effects after click
            customerCard.classList.add('disable-hover');
        });

        // Remove classes to re-enable hover effects
        customerCard.classList.remove('disable-hover');
        customerCard.classList.remove('no-hover');
    }
};

// Function to apply styles after completion of animation
function applyStylesAfterAnimation() {

    // Select all elements with the class 'customer-card.shrunk-completed'
    const customerCards = document.querySelectorAll('.customer-card.shrunk-completed');

    // Iterate over each selected element
    customerCards.forEach((value: Element) => {

        // Cast the element to HTMLElement
        const card = value as HTMLElement;

        // Reset transform property to translateY(0px)
        card.style.transform = 'translateY(0px)';

        // Reset transition property to ensure immediate transition
        card.style.transition = 'transform 0s ease';
    });
}

// Async function to generate HTML for vouchers associated with a customer
async function getVouchersHTML(customer: any, api: any) {

    // Fetch vouchers associated with the provided customer ID
    const vouchers = await api.listVouchers(`customer:${customer.id}`);

    // Initialize HTML string
    let html = '';

    // If vouchers exist
    if (vouchers.length > 0) {

        // Start unordered list
        html += '<ul>';

        // Iterate over vouchers
        for (const voucher of vouchers) {

            // Determine voucher type, replacing 'payment' with 'giftcard'
            const voucherType = voucher.type === 'payment' ? 'giftcard' : voucher.type;

            // Construct list item with voucher details
            html += `<li style="font-size: 25px;">Voucher Type: ${voucherType}, Voucher ID: ${voucher.id}, Balance: ${voucher.payment?.balance}, Expiry Date: ${voucher.expires ? new Date(voucher.expires).toDateString() : 'Unknown'}</li>`;
        }

        // End unordered list
        html += '</ul>';
    } else {

        // If no vouchers, add an empty paragraph
        html += '<p></p>';
    }

    // Return the generated HTML
    return html
}