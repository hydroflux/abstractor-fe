import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to={"https://material-ui.com/"}>
                HydroFlux LLC
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
