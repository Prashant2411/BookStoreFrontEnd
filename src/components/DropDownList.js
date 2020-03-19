import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { getSortAttribute } from '../Configuration/BookConfig';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 125,
    marginLeft: "76%",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    sort: '',
    name: 'hai',
    labelWidth: 0,
    sortBy: []
  };

  componentWillMount(){

    getSortAttribute().then(res => {
      this.setState({
        sortBy: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange('sort')}
          name="sort"
          className={classes.selectEmpty}
        >
          {
            this.state.sortBy.map(values => {
              return <option value={values}>{values}</option>
            })
          }
        </NativeSelect>
      </FormControl>
    );
  }
}

export default withStyles(styles)(NativeSelects);
