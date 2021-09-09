import React from 'react';

const ItemsFilter: React.FC<{ onSelectedYear: (year: string) => void, selectedYear: string}> = (props) => {

    const selectedYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
           let chosenYear: string = event.target.value;
           props.onSelectedYear(chosenYear);
        }

    return (
        <div className='mb-3'>
            <label>Select year:</label>
            <select className="form-select form-select-lg mb-3"
                    aria-label="Year selection dropdown"
                    value={props.selectedYear}
                    onChange={selectedYearHandler}>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
            </select>
        </div>
    )
}

export default ItemsFilter;
