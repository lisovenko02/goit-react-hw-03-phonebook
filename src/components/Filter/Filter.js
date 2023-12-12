import { FilterDiv } from "./Filter.styled"

export const Filter = ({filter, onChangeFilter}) => {
    return (
        <FilterDiv>
      <input
        type="text"
        value={filter}
        onChange={evt => onChangeFilter(evt.currentTarget.value)}
        placeholder="filter"
      />
    </FilterDiv>
    )
}