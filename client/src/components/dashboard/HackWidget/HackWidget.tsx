import React, { useState } from "react";
import { Grid, WithStyles, createStyles, Theme, withStyles, Button} from '@material-ui/core';
import { StyleRules } from "@material-ui/core/styles";
import { Firebase } from "../../Auth/Firebase/Firebase";

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(0),
            margin: "0",
            textAlign: 'center',
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            width:350,
            backgroundColor: "f2f2f2"
        },
        grid: {
            padding: theme.spacing(0),
            textAlign: 'center',
            justifyContent: "center",
            justifyItems: "center",
            margin: "0",
            backgroundColor: "transparent",
            maxWidth:"100%",
            flexBasis:"100%"
        },
        gridItem: {
            padding: theme.spacing(0),
            justifyContent: "center",
            justifyItems: "center",
            margin: "0"
        },
        text: {
            marginBottom: "-10px"
        },
        noWrap: {
            whiteSpace: "nowrap",
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]: {
                marginRight: "1px"
            }
        },
        caption: {
            fontStyle: "italic"
        },
        mobile: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        }
    });

type Props = WithStyles<typeof styles>;

    const HackWidget: React.FC<Props> = (props: any) => {
        const {classes} = props;
        const [results, setResults] = useState("");

        // State
        const getCurrentSpot = (() => {
            const firebase = new Firebase();

            const getSpot = firebase.functions.httpsCallable('getSpot');
            getSpot().then((res:any) => {
                // Read result of the Cloud Function.
                console.log(` res: ${res.data}`);    
                setResults(res.data);
            }).catch((err: Error) => {
                console.error(`${err}`);
                setResults(err.message);
            });
                
        });

        const moveMySpot = ((move: string) => {
            const firebase = new Firebase();
            const request = {"move": move};        
        
            const moveSpot = firebase.functions.httpsCallable('moveSpot');
            moveSpot(request).then((res:any) => {
                // Read result of the Cloud Function.
                console.log(` res: ${res.data}`);  
                setResults(res.data);  
            }).catch((err: Error) => {
                console.error(`${err}`);
                setResults(err.message);
            });
        });

    return (
        <Grid container className={classes.root} justify="center">
            <Button 
                onClick={() => { getCurrentSpot() }}
                variant="contained"
                color="primary"
                className={classes.button}>
                Get
            </Button>
            <Button 
                onClick={() => { moveMySpot("F") }}
                variant="contained"
                color="primary"
                className={classes.button}>
                F
            </Button>
            <Button 
                onClick={() => { moveMySpot("B") }}
                variant="contained"
                color="primary"
                className={classes.button}>
                B
            </Button>
            <Button 
                onClick={() => { moveMySpot("L") }}
                variant="contained"
                color="primary"
                className={classes.button}>
                L
            </Button>
            <Button 
                onClick={() => { moveMySpot("R") }}
                variant="contained"
                color="primary"
                className={classes.button}>
                R
            </Button>

            <Grid className={classes.grid} container item xs={12} spacing={3}>
                {results}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(HackWidget) as React.ComponentType;