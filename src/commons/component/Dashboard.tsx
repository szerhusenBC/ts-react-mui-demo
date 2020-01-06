import React from "react";
import {Grid} from "@material-ui/core";
import ShowEnvironmentParams from "../../environment/component/ShowEnvironmentParams";
import Links from "../../linkparams/component/Links";

const Dashboard: React.FC = () => {

  return (
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      justify={"center"}
    >
      <Grid item>
        <ShowEnvironmentParams/>
      </Grid>
      <Grid item>
        <Links/>
      </Grid>
    </Grid>
  );
};

export default Dashboard;