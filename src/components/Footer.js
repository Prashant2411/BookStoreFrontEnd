import React from "react";
import '../css/BookDetails.css'
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  return (
    <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
    <div className="footer">
      <p>Copyright &copy; 2020, Bookstore Private Ltd. All Rights Reserved</p>
    </div>
    </Grid>
  );
}