import { Typography } from '@material-ui/core'
import React from 'react'

export default function Footer() {
    const disclaimer = "Documents & document information gathered by this abstractor contains information taken directly from the source material. " + 
    "Document information has not been reviewed & is only as accurate as the source material from which it is based. " +
    "The purpose of this abstractor is to accelerate time to market & it's products are meant to be used as a guide rather than a source of truth."

    return (
        <footer>
            <Typography className="disclaimer" variant="caption">
                {disclaimer}
            </Typography>
        </footer>
    )
}
