import { series } from './data.js';

const seriesTableBody = document.getElementById('series-table-body');

series.forEach(serie => {
    const row = `<tr>
        <th scope="row">${serie.id}</th>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    </tr>`;
    seriesTableBody.innerHTML += row;
});
