import React from 'react'
import {motion} from 'framer-motion'
import { parentArticleTransition } from 'config/animations'

export default function StaggerWrapper({children, className}: {children: any, className?: string}) {
  return (
    <motion.div className={className} transition={parentArticleTransition} animate='animate' exit='exit' initial='initial'>
    {children}
      </motion.div>
  )
}
