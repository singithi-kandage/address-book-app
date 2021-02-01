import React, { Fragment } from "react";
import { connect } from "react-redux";

import Table from "../../Shared/Table/Table";

import CustomPagination from "../../Shared/Pagination/Pagination";
import { FetchPersons } from "./ReducerActions/FetchPersons";
import { SelectPerson } from "./ReducerActions/SelectPerson";
import { ChangePage } from "./ReducerActions/ChangePage";

const tableHeader = [
  { columnName: "User" },
  { columnName: "First Name" },
  { columnName: "Last Name" },
];

// export const PersonTable = () => {
//   const { page } = useSelector(state => ({
//     page: state.pagination.page,
//   }));
//   const { personList } = useSelector(state => ({
//     personList: state.personData.personList,
//   }));
//   const { hasError } = useSelector(state => ({
//     personList: state.personData.hasError,
//   }));

//   const dispatch = useDispatch();

//   useEffect(
//     () => {
//       dispatch(FetchPersons(page));
//     },
//     [page, dispatch]
//   );

//   const handleSelectPerson = person => {
//     dispatch(SelectPerson(person));
//   };

//   const handlePageChange = page => {
//     dispatch(ChangePage(page));
//   };

//   return (
//     <Fragment>
//       <Table
//         tableHeader={tableHeader}
//         tableBody={personList}
//         hasError={hasError}
//         displayedColumns={["imageUrl", "firstName", "lastName"]}
//         onSelectRow={handleSelectPerson}
//       />
//       <CustomPagination page={page} onPageChange={handlePageChange} />
//     </Fragment>
//   );
// };

class PersonTable extends React.Component {
  constructor(props) {
    super(props);
    this.page = props.page;
    this.personList = props.personList;
    this.hasError = props.hasError;
    this.onFetchPersons = props.onFetchPersons;
    this.onSelectRow = props.onSelectRow;
    this.onChangePage = props.onChangePage;

    this.handleSelectPerson = this.handleSelectPerson.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.onFetchPersons(this.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({ page: this.props.page });
      this.onFetchPersons(this.props.page);
    }
    if (this.props.personList !== prevProps.personList) {
      this.setState({ personList: this.props.personList });
    }
    if (this.props.hasError !== prevProps.hasError) {
      this.setState({ hasError: this.props.hasError });
    }
  }

  handleSelectPerson = (person) => {
    this.onSelectRow(person);
  };

  handlePageChange = (page) => {
    this.onChangePage(page);
  };

  render() {
    return (
      <Fragment>
        <Table
          tableHeader={tableHeader}
          tableBody={this.personList}
          hasError={this.hasError}
          displayedColumns={["imageUrl", "firstName", "lastName"]}
          onSelectRow={this.handleSelectPerson}
        />
        <CustomPagination
          page={this.page}
          onPageChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    page: state.pagination.page,
    personList: state.personData.personList,
    hasError: state.personData.hasError,
  }),
  {
    onFetchPersons: FetchPersons,
    onSelectRow: SelectPerson,
    onChangePage: ChangePage,
  }
)(PersonTable);
