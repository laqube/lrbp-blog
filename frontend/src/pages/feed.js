// react imports
import React from 'react';

// components
import NestedGrid from '../components/nestedGrid';

// mui stuff
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function Feed(){
    return(
        <Container maxWidth="lg">
            <Grid container rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start">
                <Grid item xs={12}>
                    <h1>Sorting Menu</h1>
                </Grid>
                <Grid item xs={2}>
                    <h1>Ads</h1>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </Grid>
                <Grid item xs={10}>
                    <h1>Most recent blogs</h1>
                    <NestedGrid />
                </Grid>
            </Grid>
        </Container>



    )
}

export default Feed;