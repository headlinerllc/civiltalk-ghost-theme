// Toggle the menu open and close when on mobile
export default function splitPricingSubHeader() {
    const pricingSubHeaderContainer = document.querySelector(
        ".why-civiltalk-hero-subtitle-container"
    );

    const strings = pricingSubHeaderContainer.innerHTML.split(".");

    pricingSubHeaderContainer.innerHTML = "";

    for (let i = 0; i < strings.length; i++) {
        let newLine;

        if (i === 0) {
            newLine = document.createElement("h2");
            newLine.setAttribute("class", "why-civiltalk-hero-subtitle");
        } else {
            newLine = document.createElement("h3");
            newLine.setAttribute(
                "class",
                "why-civiltalk-hero-subtitle-disclaimer"
            );
        }

        newLine.innerHTML = strings[i];

        pricingSubHeaderContainer.appendChild(newLine);
    }
}
