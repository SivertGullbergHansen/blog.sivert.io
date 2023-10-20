const exitAnimation = { opacity: 0, y: 10, transition: { duration: .1, ease: 'linear' } }
export const transition = { type: 'spring', stiffness: 200 }
export const staggerTransition = { staggerChildren: 0.05 } as const

export const ArticleCardVariant = {
    initial: { opacity: .0001, y: -33 },
    animate: { opacity: 1, y: 0, transition: transition },
    exit: exitAnimation,
} as const

export const ArticleContentVariant = {
    initial: { opacity: .0001, y: -50 },
    animate: { opacity: 1, y: 0, transition: transition },
    exit: exitAnimation,
} as const