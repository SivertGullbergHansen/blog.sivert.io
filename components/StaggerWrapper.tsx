import React from 'react'
import {motion} from 'framer-motion'

export default function StaggerWrapper({children, className, transition}: {children: any, className?: string, transition: any}) {
  return (
    <motion.div className={className} transition={transition} animate='animate' exit='exit' initial='initial'>
    {children}
      </motion.div>
  )
}
