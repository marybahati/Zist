// const data = [
//     {
//         "id": 1,
//         "metadata": {},
//         "created_at": "2020-04-01T17:12:59.184966Z",
//         "updated_at": "2020-04-01T17:12:59.185021Z",
//         "category": "grains, cereals",
//         "description": "grains, cereals"
//     },
//     {
//         "id": 2,
//         "metadata": {},
//         "created_at": "2020-07-02T11:51:38.669918Z",
//         "updated_at": "2020-07-02T11:51:38.669951Z",
//         "category": "fruits",
//         "description": "fruits"
//     },
//     {
//         "id": 3,
//         "metadata": {},
//         "created_at": "2020-07-09T15:27:59.367567Z",
//         "updated_at": "2020-07-09T15:27:59.367607Z",
//         "category": "greens",
//         "description": "greens"
//     },
//     {
//         "id": 4,
//         "metadata": {},
//         "created_at": "2020-07-09T15:28:13.776513Z",
//         "updated_at": "2020-07-09T15:28:13.776570Z",
//         "category": "snacks",
//         "description": "snacks"
//     }
// ]

// const result = data.map( x => ({ text:x.category, value: x.id}) )
// < Dropdown
// placeholder = 'Nature of Store/Stall'
// openOnFocus = { false}
// fluid
// selection
// options = { result }
// onChange = {(e, { value }) => setNatureOfBusiness({ natureOfBusiness: value })}
// clearable
// search
// style = {{ padding: '2rem !important' }}
// />

// endpoint for fetching categories
//http://zist.herokuapp.com/zist/categories/