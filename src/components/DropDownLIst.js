import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
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
    sortBy: [
      "Sort by Relevance",
      "Price: High to Low",
      "Price: Low to High",
      "Latest Arrival"
    ]
  };

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
              this.state.sortBy.map( values => {
                return <option value={values}>{values}</option>
              })
            }
          </NativeSelect>
        </FormControl>
    );
  }
}

export default withStyles(styles)(NativeSelects);
