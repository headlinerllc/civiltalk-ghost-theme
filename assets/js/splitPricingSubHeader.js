// Toggle the menu open and close when on mobile
export default function splitPricingSubHeader() {
    const pricingSubHeaderContainer = document.querySelector(
        '.why-civiltalk-hero-subtitle-container'
    );

    const strings = pricingSubHeaderContainer.innerHTML.split('.');

    pricingSubHeaderContainer.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'why-civiltalk-hero-subtitle');
    h2.innerHTML = strings[0];

    pricingSubHeaderContainer.appendChild(h2);

    const ul = document.createElement('ul');

    for (let i = 1; i < strings.length; i++) {
        let li = document.createElement('li');

        li.setAttribute('class', 'why-civiltalk-hero-subtitle-disclaimer');

        li.innerHTML = strings[i];

        ul.appendChild(li);
    }

    pricingSubHeaderContainer.appendChild(ul);
}
