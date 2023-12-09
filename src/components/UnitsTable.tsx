import * as React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@mui/material";
import DateControl from "../utils/DateControl";

interface unitsProps {
    number: number;
    date: string;
}

const UnitsTable = () => {
    const userUnits = [
        {
            number: 29,
            date: "09/12/2023"
        },
        {
            number: 46,
            date: "08/11/2023"
        }
    ]

    return (
        <React.Fragment>
            <Typography variant="h6" className="mt-8 mb-2">
                Your Units
            </Typography>
            <Grid container justifyContent="center" className="border-[1px] border-dashed border-gray-300">
                <Grid item xs={4} className="p-2 border-0 border-r-[1px] border-dashed border-gray-300">
                    <Typography className="text-[14px] text-center">Unit Number</Typography>
                </Grid>
                <Grid item xs={4} className="p-2 border-0 border-r-[1px] border-dashed border-gray-300">
                    <Typography className="text-[14px] text-center">Renewal Date</Typography>
                </Grid>
                <Grid item xs={4} className="p-2">
                    <Typography className="text-[14px] text-center">End Date</Typography>
                </Grid>
            </Grid>

            {userUnits.length > 0 ? (
                userUnits.map((unit, i) => {
                    return (
                        <Grid container justifyContent="center" key={i} className="border-[1px] border-dashed border-gray-300 items-center">
                            <Grid item xs={4} className="p-2 border-0 border-r-[1px] border-dashed border-gray-300">
                                <Typography className="text-[14px] text-center">{unit.number}</Typography>
                            </Grid>
                            <Grid item xs={4} className="p-2 border-0 border-r-[1px] border-dashed border-gray-300">
                                <Typography className="text-[14px] text-center">{unit.date}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                {/* <Checkbox color="warning" /> */}
                                <DateControl />
                            </Grid>
                        </Grid>
                    )
                })
            ) : (
                <span>
                    No units
                </span>
            )}

            <Box className="flex flex-row mt-4 mb-4 gap-2 justify-end">
                <Button
                    variant="contained"
                    color="warning"
                    size="small"
                >
                    Save
                </Button>
                <Button
                    variant="outlined"
                    color="warning"
                    size="small"
                >
                    Cancel
                </Button>
            </Box>
        </React.Fragment>
    )
}
export default UnitsTable;