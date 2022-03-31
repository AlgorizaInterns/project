import '../styles/SearchBar.css'

const SearchBar = ({ searchTerm, searchHandler }) => {
  return (
    <form className='search-bar' onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        name='search'
        id='search-input'
        placeholder='Search Product'
        value={searchTerm}
        onChange={searchHandler}
      />
      <span className='material-icons-outlined search-icon'>search</span>
    </form>
  )
}

export default SearchBar
