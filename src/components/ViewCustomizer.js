import '../styles/ViewCustomizer.css'

const ViewCustomizer = ({ resultsLength, order, orderHandler, changeView }) => {
  return (
    <div className='customizer'>
      <p className='results-length'>{resultsLength} results found</p>
      <div className='view-custom'>
        <form>
          <select
            name='orders'
            id='orders-menu'
            value={order}
            onChange={orderHandler}
          >
            <option value='featured'>Featured</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </form>
        <div className='grid-list-icons'>
          <span
            className='material-icons-outlined grid-icon'
            onClick={() => changeView('grid')}
          >
            grid_view
          </span>
          <span
            className='material-icons-outlined'
            onClick={() => changeView('list')}
          >
            list
          </span>
        </div>
      </div>
    </div>
  )
}

export default ViewCustomizer
