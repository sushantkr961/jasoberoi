import { TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'


type propsType = {
    className?: string,
    title: string
    error: boolean,
    errorMessage: string,
    [key: string]: any
}


const InputMui = React.forwardRef(({ className, title, type, error, errorMessage, ...props }: propsType, ref: any) => {
    return (
      
      
        <TextField
            variant='outlined'
            size="small"
            fullWidth
            label={title}
            error={error}
            ref={ref}
            
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '6px', // Change the border radius of the TextField
                    '&.Mui-focused fieldset': {
                        borderColor: '#4246C9', // color when focused
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#8C8C8C', // Label color
                    background: "transparent",
                    '&.Mui-focused': {
                        color: '#4246C9', // color when focused
                    }
                }
            }}

            helperText={
                <motion.span
                    style={{
                        color: error ? 'red' : 'green',
                        transition: "opacity 0.3s ease-in-out",
                        fontWeight: "bold",
                        padding: "0",
                        margin: "0"
                    }}
                >
                    {errorMessage}
                </motion.span>
            }
            {...props}
        />
    )
})


export default InputMui