document.addEventListener('DOMContentLoaded', () => {
    // Input fields
    const ticketsPerGame = document.getElementById('ticketsPerGame');
    const coinsPerGame = document.getElementById('coinsPerGame');
    const paidDollars = document.getElementById('paidDollars');
    const chips = document.getElementById('chips');
    const amazonCost = document.getElementById('amazonCost');
    const ticketsNeeded = document.getElementById('ticketsNeeded');

    // Output spans
    const costPerCoin = document.getElementById('costPerCoin');
    const costPer100Coins = document.getElementById('costPer100Coins');
    const costPerTicket = document.getElementById('costPerTicket');
    const costPer2000Tickets = document.getElementById('costPer2000Tickets');
    const dollarEquivalent = document.getElementById('dollarEquivalent');
    const dollarSaved = document.getElementById('dollarSaved');
    const percentSaved = document.getElementById('percentSaved');

    function calculate() {
        const coinsCost = (paidDollars.value / chips.value).toFixed(2);
        const ticketsCost = (coinsCost / ticketsPerGame.value * coinsPerGame.value).toFixed(4);
        const costOf2000 = (2000 * ticketsCost).toFixed(2);

        costPerCoin.textContent = coinsCost;
        costPer100Coins.textContent = (100 * coinsCost).toFixed(2);
        costPerTicket.textContent = ticketsCost;
        costPer2000Tickets.textContent = costOf2000;

        const prizeDollarEquivalent = (ticketsNeeded.value * ticketsCost).toFixed(2);
        dollarEquivalent.textContent = prizeDollarEquivalent;
        dollarSaved.textContent = (amazonCost.value - prizeDollarEquivalent).toFixed(2);
        percentSaved.textContent = ((1 - prizeDollarEquivalent / amazonCost.value) * 100).toFixed(2) + '%';
    }

    // Recalculate whenever inputs change
    ticketsPerGame.addEventListener('input', calculate);
    coinsPerGame.addEventListener('input', calculate);
    paidDollars.addEventListener('input', calculate);
    chips.addEventListener('input', calculate);
    amazonCost.addEventListener('input', calculate);
    ticketsNeeded.addEventListener('input', calculate);

    // Initial calculation
    calculate();
});
