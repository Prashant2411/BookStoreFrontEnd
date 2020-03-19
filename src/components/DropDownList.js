import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getSortAttribute } from '../Configuration/BookConfig';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background:"white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 175,
    marginLeft: "68%",
    background:"white"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit ,
    height:'30px'
  },
});

class NativeSelects extends React.Component {
  state = {
    sort: '',
    name: 'hai',
    labelWidth: 0,
    sortBy: []
  };

  componentWillMount() {

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
      <FormControl variant="outlined" className={classes.formControl}>
         <InputLabel id="SortByRelevance">Sort By Relevance</InputLabel>
        <Select
          labelId="SortByRelevance"
          value={this.state.age}
          onChange={this.handleChange('sort')}
          name="sort"
          className={classes.selectEmpty}
          label="Sort By Relevance"
        >
          {
            this.state.sortBy.map(values => {
              return <option value={values}>{values}</option>
            })
          }
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(NativeSelects);
