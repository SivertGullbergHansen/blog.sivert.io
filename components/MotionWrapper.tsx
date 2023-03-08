import React from 'react'
import { motion } from 'framer-motion'

export default function MotionWrapper({children, variants, ...props}) {
    return React.Children.map(children, child => {
        return <motion.div variants={variants} {...props}>{child}</motion.div>
})
}
